import { NextResponse } from "next/server";

interface ContactSubmission {
  name: string;
  email: string;
  subject?: string;
  message: string;
  _gotcha?: string; // Honeypot field
}

interface RateLimitTracker {
  count: number;
  resetAt: number;
}

const rateLimitMap = new Map<string, RateLimitTracker>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_SUBMISSIONS_PER_WINDOW = 5;

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

export async function POST(req: Request) {
  try {
    // 1. Rate Limiting Check
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() || "local-client";
    const now = Date.now();
    const clientRecord = rateLimitMap.get(ip) || { count: 0, resetAt: now + RATE_LIMIT_WINDOW_MS };

    if (now > clientRecord.resetAt) {
      clientRecord.count = 1;
      clientRecord.resetAt = now + RATE_LIMIT_WINDOW_MS;
    } else {
      clientRecord.count += 1;
    }
    rateLimitMap.set(ip, clientRecord);

    if (clientRecord.count > MAX_SUBMISSIONS_PER_WINDOW) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many contact submissions. Please wait 10 minutes or email directly."
        },
        { status: 429 }
      );
    }

    // 2. Parse Body
    const body: ContactSubmission = await req.json().catch(() => null);
    if (!body) {
      return NextResponse.json(
        { success: false, error: "Invalid JSON payload." },
        { status: 400 }
      );
    }

    // 3. Honeypot check (Spam bot protection)
    if (body._gotcha && body._gotcha.trim() !== "") {
      // Return simulated success to trick automated bots without forwarding
      return NextResponse.json({ success: true, message: "Inquiry received." }, { status: 200 });
    }

    // 4. Input Validations
    const name = (body.name || "").trim();
    const email = (body.email || "").trim().toLowerCase();
    const subject = (body.subject || "General Portfolio Inquiry").trim();
    const message = (body.message || "").trim();

    if (!name || name.length < 2 || name.length > 80) {
      return NextResponse.json(
        { success: false, error: "Name must be between 2 and 80 characters." },
        { status: 400 }
      );
    }

    if (!email || !EMAIL_REGEX.test(email) || email.length > 120) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address (e.g. name@domain.com)." },
        { status: 400 }
      );
    }

    if (!message || message.length < 10 || message.length > 3000) {
      return NextResponse.json(
        { success: false, error: "Message must be between 10 and 3,000 characters." },
        { status: 400 }
      );
    }

    // 5. Forward to Formspree
    const formspreeUrl =
      process.env.FORMSPREE_URL ||
      process.env.NEXT_PUBLIC_FORMSPREE_URL ||
      "https://formspree.io/f/xykraddp";

    if (formspreeUrl && !formspreeUrl.includes("your-id-here")) {
      const response = await fetch(formspreeUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
          submittedAt: new Date().toISOString()
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Formspree forward error:", response.status, errorText);
        return NextResponse.json(
          {
            success: false,
            error: "Form delivery service encountered an issue. Please email ishanchinthaka2002@gmail.com directly."
          },
          { status: 502 }
        );
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been sent successfully. Ishan will respond to your email shortly."
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API internal error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Internal server error. Please email ishanchinthaka2002@gmail.com directly."
      },
      { status: 500 }
    );
  }
}

