export const profile = {
  name: "Ishan Chinthaka",
  role: "Full-Stack Software Engineer",
  label: "ISHAN CHINTHAKA — FULL-STACK ENGINEER",
  headline: "I build modern websites and software applications that help businesses solve real-world problems and create better digital experiences.",
  subhead: "I build responsive websites, custom business web applications, and database-driven software. From real-time bus tracking to AI-powered study tools, I turn business requirements into clean, working software that solves real problems.",
  about: [
    "I am a Full-Stack Software Engineer with commercial experience delivering production web applications, REST APIs, and database-driven systems at Amazoft IT. My work focuses on building React and TypeScript interfaces, designing PostgreSQL databases, and delivering software through structured Agile sprints.",
    "Graduating with a BSc (Hons) 2:1 in Software Engineering from Cardiff Metropolitan University, I build software that solves real operational problems — including real-time public transit tracking, healthcare inventory management, and AI-powered document search. I am looking to join teams where I can build reliable, useful digital products."
  ],
  location: "Meetiyagoda, Ambalangoda, Sri Lanka (Open to Remote & Relocation)",
  email: "ishanchinthaka2002@gmail.com",
  github: "https://github.com/ish-22",
  linkedin: "https://www.linkedin.com/in/ishan-chinthaka-1a6b5a2b1",
  tiktok: "https://www.tiktok.com/@ish_22",
  facebook: "https://www.facebook.com/share/1HYwAWdnB7/",
  resume: "/Ishan%20Chinthaka.pdf",
  whatsapp: "+94765274750",
  whatsappFormatted: "+94 76 527 4750",
  phoneSecondary: "+94752464420",
  phoneSecondaryFormatted: "+94 75 246 4420",
  availability: "AVAILABLE FOR FULL-TIME ROLES & CONTRACT PROJECTS"
};

export const heroTechSignals = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Java",
  "Spring Boot",
  "PostgreSQL",
  "MySQL",
  "Docker",
  "AWS"
];

export const engineeringCapabilities = [
  {
    id: "01",
    title: "CUSTOM WEB APPLICATIONS",
    subtitle: "End-to-End Business Systems & Portals",
    description: "Building responsive, modern web applications tailored to your business workflows. From user authentication and role permissions to interactive dashboards and booking systems.",
    items: ["Next.js (App Router)", "React 19", "TypeScript", "Tailwind CSS", "Role-Based Access (RBAC)"],
    accent: "Lime"
  },
  {
    id: "02",
    title: "SECURE RESTFUL APIS & BACKENDS",
    subtitle: "Fast, Dependable Server Architecture",
    description: "Developing robust API services that connect your front-end apps to databases, external services, and payment processors securely with token authentication (JWT/OAuth).",
    items: ["Node.js & Express", "Java Spring Boot", "PHP / Laravel", "REST API Design", "JWT Authentication"],
    accent: "Lime"
  },
  {
    id: "03",
    title: "DATABASE DESIGN & OPTIMIZATION",
    subtitle: "Safe, Well-Structured Data Storage",
    description: "Designing organized relational database schemas in PostgreSQL and MySQL. Setting up proper indexing, foreign keys, and transactions so your data stays fast and safe as your business grows.",
    items: ["PostgreSQL", "MySQL", "SQL Indexing & Joins", "Redis In-Memory Caching", "Data Integrity"],
    accent: "Lime"
  },
  {
    id: "04",
    title: "PRACTICAL AI & CLOUD INTEGRATION",
    subtitle: "Smart Automations & Scalable Hosting",
    description: "Implementing helpful AI capabilities like smart PDF search (RAG), automated summaries, and content translation, backed by reliable AWS cloud hosting and Docker containers.",
    items: ["Amazon Bedrock AI", "Smart Document Search (RAG)", "AWS S3 & Cloud Hosting", "Docker Containers", "CI/CD Deployment"],
    accent: "Lime"
  }
];

export interface ProjectData {
  id: string;
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  projectType: "Commercial Project" | "Completed Personal Project" | "Prototype" | "Academic Capstone";
  year: string;
  role: string;
  myContribution: string;
  stack: string[];
  description: string;
  businessImpact?: string;
  image: string;
  repo?: string | { frontend?: string; backend?: string };
  link?: string;
  status: "COMPLETED" | "PROTOTYPE" | "DEVELOPMENT";
  overview: string;
  problem: string;
  users: string;
  goals: string[];
  research: string;
  userFlow: string;
  architectureNotes: string;
  challenges: string;
  solution: string;
  result: string;
}

export const selectedProjects: ProjectData[] = [
  {
    id: "track-my-bus",
    slug: "track-my-bus",
    number: "WORK / 001",
    title: "TRACK MY BUS",
    subtitle: "Smart Public Transport & Fleet Tracking Ecosystem",
    category: "Full-Stack Web App",
    projectType: "Completed Personal Project",
    year: "2025",
    role: "Full-Stack Developer & UI/UX Designer",
    myContribution: "Engineered the Next.js frontend with live Google Maps tracking, developed the Laravel REST API backend, and configured Redis in-memory caching to stream bus locations smoothly.",
    stack: ["Next.js", "TypeScript", "Laravel", "MySQL", "Redis", "Google Maps API", "Tailwind CSS"],
    description: "A real-time transit web application enabling daily commuters to track bus GPS locations live on interactive maps, reserve available seats, and generate digital QR tickets instantly.",
    businessImpact: "Allows passengers to track approaching buses in real time, view available seating before boarding, and purchase digital QR tickets without waiting in cash queues.",
    image: "/projects/smart_bus.png",
    repo: {
      frontend: "https://github.com/ish-22/smartbus_frontend",
      backend: "https://github.com/ish-22/smartbus_backend"
    },
    status: "COMPLETED",
    overview: "Track My Bus solves a major everyday problem for daily commuters: unpredictable bus arrivals and slow manual cash ticketing. By combining real-time GPS tracking on Google Maps with an interactive seat reservation system and instant QR ticket generation, the application gives passengers certainty and reduces boarding congestion.",
    problem: "Commuters frequently wait at bus stops with no visibility into when the next bus will arrive or whether it has empty seats. At the same time, manual cash collections slow down boarding times at every stop.",
    users: "Daily urban commuters, private bus operators, route dispatchers, and bus conductors with QR verification devices.",
    goals: [
      "Show live bus locations on interactive Google Maps with smooth marker movement.",
      "Provide an interactive seat selection layout with instant locking to prevent double-booking.",
      "Generate digital QR tickets that can be scanned for verification in under two seconds."
    ],
    research: "Spoke with local public transit commuters in Sri Lanka who consistently reported that knowing the exact bus location and seat availability would significantly reduce their daily travel stress.",
    userFlow: "Search Route → View Buses on Live GPS Map → Select Bus & Pick Seat → Confirm Payment → Receive Instant QR Ticket → Show Ticket on Boarding.",
    architectureNotes: "The Next.js client renders responsive map layers and seat grids. It communicates with a Laravel backend API, which uses Redis for high-frequency GPS coordinate caching and MySQL for transactional ticket records.",
    challenges: "Updating bus GPS coordinates continuously for dozens of active vehicles without making the user's map lag or overloading the backend database.",
    solution: "Used Redis in-memory storage to cache incoming GPS coordinates and throttled client map updates to smooth 3-second batches with interpolated movement.",
    result: "Built a fully functional real-time transit booking web application with verified frontend and backend GitHub repositories."
  },
  {
    id: "medisync-core",
    slug: "medisync-core",
    number: "WORK / 002",
    title: "MEDISYNC CORE",
    subtitle: "Healthcare Clinic & Pharmacy Management System with AI Assistance",
    category: "Healthcare System",
    projectType: "Completed Personal Project",
    year: "2025",
    role: "Full-Stack Developer & System Designer",
    myContribution: "Designed the relational database schemas for patient electronic health records (EHR) and pharmacy inventory, built the multi-role Next.js portal, and integrated Amazon Bedrock to assist staff with clinical note summaries.",
    stack: ["Next.js", "TypeScript", "Node.js", "MySQL", "Amazon Bedrock AI", "Tailwind CSS"],
    description: "A comprehensive clinic operations system combining electronic medical records, role-based staff access (doctors, pharmacists, admins), pharmacy stock tracking, and AI-assisted clinical summaries.",
    businessImpact: "Connects doctor prescriptions directly with real-time pharmacy stock, alerting staff before out-of-stock medications are prescribed and cutting prescription prep time.",
    image: "/projects/pharmacy_inventory.png",
    repo: "https://github.com/ish-22/Pharmacy_inventory_Management",
    status: "COMPLETED",
    overview: "MediSync Core streamlines daily clinic operations by connecting doctor consultations directly with pharmacy inventory. Instead of paper prescription handoffs and separate inventory spreadsheets, staff access a unified portal where prescriptions automatically check stock levels and trigger automated inventory deductions upon dispensing.",
    problem: "Hospitals and small clinics often run paper-based prescription workflows or disconnected inventory spreadsheets, leading to dispensing errors, stockouts during busy hours, and delayed patient consultations.",
    users: "Consulting doctors, clinic pharmacists, front-desk administrators, and inventory managers.",
    goals: [
      "Unify patient health history with live drug inventory availability.",
      "Provide AI-assisted clinical summarization to help doctors review past visits quickly.",
      "Provide different access levels for different users (doctors, pharmacists, admins) so staff only access authorized data."
    ],
    research: "Interviewed clinic staff to identify consultation bottlenecks. Doctors spent significant time re-reading disorganized historical notes, and pharmacists frequently had to call doctors to substitute out-of-stock medicines.",
    userFlow: "Doctor Login → Search Patient EHR → Enter Diagnosis & Prescription → AI Generates Summary & Checks Stock → Pharmacist Reviews & Dispenses → Inventory Automatically Deducts.",
    architectureNotes: "Built on a modular Node.js API with a well-organized MySQL database. Frontend uses Next.js with secure HTTP-only cookies and token authentication for doctors, pharmacists, and admins.",
    challenges: "Protecting patient privacy when sending clinical visit notes to AI models for summarization.",
    solution: "Removed private patient information before AI processing, ensuring names and identification numbers are never sent to external models.",
    result: "Engineered a working healthcare and pharmacy inventory system with role-based access, automated stock warnings, and AI-assisted summaries."
  },
  {
    id: "ai-study-assistant",
    slug: "ai-study-assistant",
    number: "WORK / 003",
    title: "AI STUDY ASSISTANT",
    subtitle: "AI-Powered Study Platform with Document Q&A",
    category: "AI Web Application",
    projectType: "Completed Personal Project",
    year: "2026",
    role: "Full-Stack Developer & AI Pipeline Creator",
    myContribution: "Architected the document processing system that splits uploaded PDFs into searchable text sections, integrated Amazon Bedrock for accurate Q&A grounded in the document content, and developed the Next.js study workspace with automated quiz generation.",
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Amazon Bedrock AI", "Tailwind CSS", "Zod"],
    description: "An AI-powered learning workspace where students upload lecture slides and textbooks to ask questions directly to their documents, generate interactive flashcards, and take self-assessment quizzes.",
    businessImpact: "Enables students and professionals to find accurate answers from long documents in seconds, with exact page references and without AI making up information.",
    image: "/projects/study_assistant.png",
    repo: {
      frontend: "https://github.com/ish-22/AI-Powered-Intelligent-Study-Assistant-System",
      backend: "https://github.com/ish-22/AI-Powered-Intelligent-Study-Assistant-System--api-v2"
    },
    status: "COMPLETED",
    overview: "AI Study Assistant solves the challenge of studying dense academic and technical documents. Instead of reading through hundreds of pages searching for a single concept, users upload PDFs and interact with a specialized AI assistant that quotes directly from their study material. The system also generates custom flashcards and multiple-choice quizzes to reinforce learning.",
    problem: "Students and researchers waste hours skimming through lengthy textbook chapters and slide decks, struggling to extract key concepts or verify whether they have mastered the material.",
    users: "University students, academic researchers, professional certification candidates, and educators.",
    goals: [
      "Process PDF uploads into searchable text chunks with page number tracking.",
      "Deliver fast, accurate answers grounded strictly in the uploaded document content.",
      "Generate structured practice quizzes with automated scoring and explanations."
    ],
    research: "Based on active recall and spaced repetition study methodologies, which show that self-testing immediately after reading significantly improves long-term conceptual retention.",
    userFlow: "Upload PDF → System Chunks & Indexes Document → Ask AI Questions with Direct Citations → Click 'Generate Flashcards' → Take Practice Quiz.",
    architectureNotes: "Next.js frontend connects to an Express.js backend. Document text is extracted, chunked with overlap, and queried via Amazon Bedrock using prompt constraints that require direct quotes from the context.",
    challenges: "Preventing the AI model from making up answers (hallucination) when the uploaded document does not contain the answer.",
    solution: "Used strict system prompt guards instructing the model to reply with 'Not found in provided document' if no direct evidence exists, paired with Zod schema validation on all structured outputs.",
    result: "Built and open-sourced both the Next.js frontend and Express backend repositories on GitHub, demonstrating practical Retrieval-Augmented Generation (RAG)."
  }
];

export const secondaryProjects: ProjectData[] = [
  {
    id: "fix-now",
    slug: "fix-now",
    number: "WORK / 004",
    title: "FIXNOW SERVICE MARKETPLACE",
    subtitle: "On-Demand Home Services & Technician Booking Portal",
    category: "Web Application",
    projectType: "Completed Personal Project",
    year: "2024",
    role: "Full-Stack Developer",
    myContribution: "Built the customer request portal, technician booking dispatch workflows, and administrative dashboard using PHP and MySQL.",
    stack: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
    description: "A service marketplace connecting homeowners with verified local technicians for plumbing, electrical, and appliance repairs, featuring transparent pricing and booking dispatch.",
    businessImpact: "Simplifies finding trusted repair technicians with upfront pricing, direct scheduling, and service reviews.",
    image: "/projects/fix_now.png",
    repo: "https://github.com/ish-22/FIXNOW-FINAL_PROJECT",
    status: "COMPLETED",
    overview: "FixNow is an on-demand technical services marketplace designed to connect homeowners with verified local repair specialists.",
    problem: "Finding reliable, vetted technicians for urgent household repairs is frustrating due to lack of transparent pricing and unreliable availability.",
    users: "Homeowners, independent repair technicians, customer support staff.",
    goals: ["Fast service request dispatching", "Transparent technician ratings", "Clear booking status tracking"],
    research: "Surveyed local service providers and homeowners to map out booking bottlenecks.",
    userFlow: "Browse Services → Choose Technician → Select Date/Time → Technician Confirms → Service Completed → Customer Rating.",
    architectureNotes: "Modular PHP application backed by structured relational MySQL tables.",
    challenges: "Synchronizing booking status between homeowner requests and technician acceptance in real time.",
    solution: "Built a reliable state machine in MySQL with status polling to update customer dashboards promptly.",
    result: "Engineered and open-sourced a full-featured service booking portal on GitHub."
  },
  {
    id: "ocean-view-resort",
    slug: "ocean-view-resort",
    number: "WORK / 005",
    title: "OCEAN VIEW RESORT",
    subtitle: "Hotel Room Reservation & Guest Inquiry Management System",
    category: "Full-Stack Web App",
    projectType: "Completed Personal Project",
    year: "2024",
    role: "Full-Stack Developer",
    myContribution: "Engineered the Java Spring Boot REST backend with atomic database transactions to prevent double-booking, and built the responsive React booking interface.",
    stack: ["Java", "Spring Boot", "React", "MySQL", "Tailwind CSS"],
    description: "A hospitality management web application featuring a guest room showcase, real-time date availability checks, and an admin reservation portal.",
    businessImpact: "Protects resort revenue by preventing two guests from booking the same room at the same time.",
    image: "/projects/ocean_view.png",
    repo: "https://github.com/ish-22/Ocean-View_resort",
    status: "COMPLETED",
    overview: "Ocean View Resort is a modern hotel reservation web application engineered with Java Spring Boot and React.",
    problem: "Manual phone reservations and outdated spreadsheets led to booking clashes during busy holiday periods.",
    users: "Resort guests, front-desk reservation agents, resort management.",
    goals: ["Preventing two guests from booking the same room at the same time", "Clean visual room photo gallery", "Admin reservation dashboard"],
    research: "Analyzed boutique hotel reservation workflows to streamline the guest checkout flow.",
    userFlow: "Select Check-in/Check-out Dates → View Available Rooms → Enter Guest Info → Instant Booking Confirmation → Admin Check-in.",
    architectureNotes: "Java Spring Boot REST API providing transactional endpoints to a React single-page frontend.",
    challenges: "Ensuring two guests trying to book the last available room at the exact same moment cannot both succeed.",
    solution: "Leveraged database transaction isolation levels in Spring Data JPA to guarantee atomic reservation commits.",
    result: "Delivered a reliable room booking portal with complete source code published on GitHub."
  },
  {
    id: "pahana-bookshop",
    slug: "pahana-bookshop",
    number: "WORK / 006",
    title: "PAHANA BOOKSHOP POS",
    subtitle: "Desktop Point of Sale & Inventory Billing Software",
    category: "Desktop Software",
    projectType: "Academic Capstone",
    year: "2024",
    role: "Software Developer",
    myContribution: "Developed the Java desktop user interface, barcode scanner integration, and automated inventory deduction logic connecting to MySQL via JDBC.",
    stack: ["Java", "Java Swing", "MySQL", "JDBC", "OOP Architecture"],
    description: "A desktop POS application built for book retail businesses, handling item catalog lookups, instant barcode invoice generation, and low-stock inventory alerts.",
    businessImpact: "Speeds up retail checkout queues with fast barcode scanning, automated receipt printing, and real-time inventory deductions.",
    image: "/projects/pahana_bookshop.png",
    repo: "https://github.com/ish-22/pahana_bookshop",
    status: "COMPLETED",
    overview: "Pahana Bookshop System is a reliable Java desktop application engineered for fast retail checkouts and accurate store inventory tracking.",
    problem: "Handwritten receipts during peak school-term book rushes caused long checkout lines and inventory stock discrepancies.",
    users: "Bookshop cashiers, store manager.",
    goals: ["Fast barcode scan receipt creation", "Automatic low-stock warning indicators", "Daily sales reporting"],
    research: "Observed retail cashier operations to design keyboard-accessible shortcuts for rapid item checkout.",
    userFlow: "Scan Book Barcode / ISBN → Add Quantities → Calculate Tax & Discounts → Print Receipt → Auto-Deduct Stock.",
    architectureNotes: "Java Swing desktop UI connecting through MySQL JDBC driver with prepared statements to prevent SQL injection.",
    challenges: "Handling network disruptions between the cash register and the central database.",
    solution: "Added robust try-catch transaction rollbacks and local connection retry queues.",
    result: "Successfully built and verified a desktop point-of-sale system, published with source code on GitHub."
  },
  {
    id: "fitzone-portal",
    slug: "fitzone",
    number: "WORK / 007",
    title: "FITZONE FITNESS PORTAL",
    subtitle: "Gym Membership & Trainer Scheduling System",
    category: "Web Application",
    projectType: "Completed Personal Project",
    year: "2024",
    role: "Full-Stack Developer",
    myContribution: "Developed the member subscription management features, trainer appointment booking calendar, and responsive Tailwind UI.",
    stack: ["React", "Node.js", "Express", "MySQL", "Tailwind CSS"],
    description: "A fitness club web portal featuring member account management, trainer slot scheduling, membership renewal reminders, and attendance logs.",
    businessImpact: "Replaced paper check-in sheets with self-service member renewals and online personal trainer bookings.",
    image: "/projects/fitzone.png",
    status: "COMPLETED",
    overview: "FitZone is a web portal designed to make gym membership administration seamless for both members and fitness club managers.",
    problem: "Manual front-desk paper logs caused check-in delays during peak workout hours and made membership renewals difficult to track.",
    users: "Gym members, personal fitness trainers, facility staff.",
    goals: ["Online membership renewal", "Trainer slot scheduling", "Digital attendance tracking"],
    research: "Studied fitness club operational peak hours to simplify the mobile booking experience for members on the go.",
    userFlow: "Member Login → View Trainer Availability → Book Session Slot → Receive Confirmation → Staff Scans Check-in.",
    architectureNotes: "Node.js Express REST API connected to relational MySQL tables.",
    challenges: "Preventing conflicting bookings when two members attempt to book the same trainer at the same hour.",
    solution: "Implemented unique composite database constraints and transaction locks on trainer scheduling tables.",
    result: "Delivered a clean, responsive gym management portal that streamlines member check-ins and trainer bookings."
  },
  {
    id: "luxe-vista",
    slug: "luxe-vista",
    number: "WORK / 008",
    title: "LUXE VISTA VILLA",
    subtitle: "Boutique Vacation Rental Showcase & Direct Reservation Portal",
    category: "Web Application",
    projectType: "Completed Personal Project",
    year: "2024",
    role: "Frontend & Full-Stack Developer",
    myContribution: "Built the responsive Next.js web application, interactive villa gallery, live availability calendar, and direct inquiry booking form.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "REST APIs"],
    description: "A visual showcase and direct booking web application for luxury boutique villas, featuring interactive availability calendars and guest concierge inquiry forms.",
    businessImpact: "Helps villa owners secure direct guest inquiries without relying exclusively on high-commission third-party booking platforms.",
    image: "/projects/luxe_vista.png",
    status: "COMPLETED",
    overview: "Luxe Vista is a showcase and booking engine engineered to give boutique luxury property owners a high-converting, independent web presence.",
    problem: "Third-party travel websites take high booking commissions and restrict direct communication between hosts and guests.",
    users: "Travelers seeking boutique accommodations, villa concierge managers, property hosts.",
    goals: ["Direct commission-free booking inquiries", "Fast-loading visual photo galleries", "Mobile-optimized booking flow"],
    research: "Analyzed luxury hospitality websites to balance high-resolution photography with fast mobile page load speeds.",
    userFlow: "Explore Villa Amenities → Check Calendar Availability → Select Dates → Submit Concierge Booking Request.",
    architectureNotes: "Built with Next.js App Router and optimized WebP image loading pipelines for fast mobile performance.",
    challenges: "Ensuring high-resolution photo galleries load instantly on mobile networks.",
    solution: "Configured Next.js responsive image sizing with lazy loading and modern image compression.",
    result: "Delivered a responsive villa reservation web application with smooth visual browsing."
  }
];

export const uxProcessSteps = [
  { step: "01", title: "RESEARCH", description: "Analyzing problem statements, studying user pain points, and discovering core friction." },
  { step: "02", title: "DEFINE", description: "Structuring target personas, key product goals, constraints, and success metrics." },
  { step: "03", title: "USER FLOW", description: "Mapping out logical navigational journeys, state transitions, and step sequences." },
  { step: "04", title: "WIREFRAME", description: "Constructing low-fidelity layout grids to test information architecture hierarchy." },
  { step: "05", title: "UI DESIGN", description: "Crafting visual design tokens, typography, dark-mode color palettes, and polished components." },
  { step: "06", title: "PROTOTYPE", description: "Building interactive micro-interactions and transitions to validate usability." },
  { step: "07", title: "DEVELOP", description: "Writing clean, accessible TypeScript code with modern frameworks and robust backend APIs." },
  { step: "08", title: "TEST", description: "Running cross-browser testing, accessibility audits, and Lighthouse performance checks." },
  { step: "09", title: "ITERATE", description: "Refining based on user metrics, performance feedback, and continuous product iteration." }
];

export const designLabExamples = [
  {
    id: "booking-flow",
    title: "BOOKING SEAT HIERARCHY",
    problem: "Users struggled to quickly differentiate between available, reserved, and selected seats in public transport interfaces.",
    solution: "Engineered a high-contrast visual matrix with distinct color indicators, micro-animations, and immediate total price updates.",
    beforeLabel: "Confusing list table",
    afterLabel: "Interactive visual spatial matrix",
    image: "/projects/smart_bus.png"
  },
  {
    id: "health-dashboard",
    title: "CLINICAL WORKFLOW DASHBOARD",
    problem: "Doctors experienced cognitive overload when reading dense unformatted patient record tables.",
    solution: "Re-architected the layout into categorized tab modules with AI-summarized health highlights and color-coded alert badges.",
    beforeLabel: "Dense unformatted text",
    afterLabel: "Modular card grid with AI summary",
    image: "/projects/pharmacy_inventory.png"
  },
  {
    id: "study-workspace",
    title: "AI STUDY WORKSPACE",
    problem: "Students felt overwhelmed switching between PDF documents, notepad, and chat windows.",
    solution: "Created a side-by-side split screen workspace with synchronized document scrolling and inline contextual AI actions.",
    beforeLabel: "Multiple overlapping windows",
    afterLabel: "Unified dual-pane workspace",
    image: "/projects/study_assistant.png"
  }
];

export const architectureNodes = [
  {
    id: "client",
    title: "Next.js Web Client",
    type: "FRONTEND",
    description: "App Router SSR & React Client Components rendered with high performance.",
    tech: "Next.js 15 · React 19 · TypeScript"
  },
  {
    id: "api",
    title: "API Gateway & REST Routes",
    type: "GATEWAY",
    description: "Request validation, rate limiting, and route handling.",
    tech: "Node.js / Express · Laravel"
  },
  {
    id: "cache",
    title: "Redis In-Memory Cache",
    type: "CACHE",
    description: "Fast data caching, session store, and real-time pub/sub queues.",
    tech: "Redis 7.0"
  },
  {
    id: "db",
    title: "Relational Database",
    type: "DATABASE",
    description: "Secure and reliable data storage for structured application records.",
    tech: "MySQL 8.0 · PostgreSQL"
  },
  {
    id: "ai",
    title: "Amazon Bedrock AI Engine",
    type: "AI INFRASTRUCTURE",
    description: "AI-powered document search, question answering, and content translation.",
    tech: "Amazon Bedrock Nova Micro / Pro"
  },
  {
    id: "cloud",
    title: "AWS Cloud Infrastructure",
    type: "CLOUD",
    description: "Scalable object storage, container management, and automated deployments.",
    tech: "AWS S3 · Amplify · Docker"
  }
];

export const aiLabItems = [
  {
    title: "Smart Document Search & Q&A (RAG)",
    description: "Upload lengthy PDF lecture notes or company documents and ask questions in plain English. The AI finds the exact answers with page citations without making up facts.",
    status: "PRODUCTION",
    tech: "Amazon Bedrock · Node.js · PostgreSQL",
    businessValue: "Cuts hours spent manually searching through dense PDFs down to seconds."
  },
  {
    title: "Multilingual Website Translation",
    description: "Context-aware web content translation into Sinhala and Tamil, preserving grammatical nuances and technical terminology.",
    status: "PRODUCTION",
    tech: "Amazon Nova Micro · MD5 Caching",
    businessValue: "Makes web applications accessible to local language audiences across Sri Lanka."
  },
  {
    title: "Automated Flashcard & Quiz Creator",
    description: "Analyzes uploaded documents and generates active-recall study flashcards and practice multiple-choice quizzes automatically.",
    status: "PRODUCTION",
    tech: "TypeScript · Zod Schema Validation",
    businessValue: "Improves student retention and speeds up test preparation."
  },
  {
    title: "Clinical Note Summarization Copilot",
    description: "Assists medical staff by summarizing patient visit histories while automatically redacting names and private data before processing.",
    status: "PROTOTYPE",
    tech: "Bedrock LLMs · Client-Side PII Scrubbing",
    businessValue: "Demonstrates secure AI assistance without compromising patient confidentiality."
  }
];

export interface TechCategory {
  category: string;
  description: string;
  items: {
    name: string;
    note: string;
    businessBenefit: string;
  }[];
}

export const technologyMap: TechCategory[] = [
  {
    category: "Frontend Development",
    description: "The tools I use to build fast, responsive, and easy-to-use screens for websites and web apps.",
    items: [
      { name: "React.js", note: "Component-driven user interfaces", businessBenefit: "Enables fast, modular page updates without full browser reloads." },
      { name: "Next.js", note: "App Router SSR & Search Engine Optimization", businessBenefit: "Delivers fast initial page loads and better Google search rankings." },
      { name: "TypeScript", note: "Type-safe JavaScript for fewer bugs", businessBenefit: "Catches errors before production code is shipped to users." },
      { name: "Tailwind CSS", note: "Utility-first styling & design tokens", businessBenefit: "Ensures responsive design that looks polished on mobile, tablet, and desktop." }
    ]
  },
  {
    category: "Backend Development",
    description: "The server runtimes and logic layers that process data, handle payments, and keep systems secure.",
    items: [
      { name: "Node.js & Express", note: "Asynchronous JavaScript server APIs", businessBenefit: "Handles multiple user requests simultaneously with low server overhead." },
      { name: "Java & Spring Boot", note: "Enterprise backend services & security", businessBenefit: "Robust framework for mission-critical business transactions and data security." },
      { name: "PHP & Laravel", note: "Structured MVC web application engine", businessBenefit: "Fast development cycle for complex business portals and admin dashboards." },
      { name: "RESTful API Design", note: "Predictable HTTP contract endpoints", businessBenefit: "Allows mobile apps, web apps, and third-party systems to communicate seamlessly." }
    ]
  },
  {
    category: "Databases & Storage",
    description: "Where user information, transactions, and business records are safely and permanently stored.",
    items: [
      { name: "PostgreSQL", note: "Advanced relational database engine", businessBenefit: "Proven data integrity for complex multi-table queries and financial records." },
      { name: "MySQL", note: "Reliable relational database", businessBenefit: "Reliable database power for user management, catalogs, and order history." },
      { name: "Redis", note: "In-memory caching and message queues", businessBenefit: "Speeds up frequently accessed data for faster page loads." }
    ]
  },
  {
    category: "Cloud, DevOps & Tools",
    description: "How software is tested, packaged, deployed, and kept running 24/7 without downtime.",
    items: [
      { name: "AWS Cloud", note: "Hosting, S3 storage & Amazon Bedrock AI", businessBenefit: "Provides scalable cloud infrastructure that grows with your user base." },
      { name: "Docker", note: "Containerized application packaging", businessBenefit: "Ensures the application runs identically on development laptops and live servers." },
      { name: "Git & GitHub", note: "Version control and peer code reviews", businessBenefit: "Safeguards source code history and facilitates structured team collaboration." },
      { name: "Postman", note: "API testing and endpoint verification", businessBenefit: "Validates that every API route behaves correctly before deployment." }
    ]
  }
];

export const education = [
  {
    degree: "BSc (Hons) in Software Engineering",
    institution: "Cardiff Metropolitan University, United Kingdom",
    classification: "Second Class Honours, Upper Division (2:1)",
    period: "2025 – 2026",
    status: "Graduated / Degree Awarded",
    verificationNote: "Official degree qualification accredited by Cardiff Metropolitan University UK.",
    highlights: [
      "Rigorous foundations in software architecture, enterprise systems, and database engineering.",
      "Graduated with Second Class Honours Upper Division (2:1).",
      "Academic transcript and degree certificate available for recruiter verification upon request."
    ]
  },
  {
    degree: "Higher Diploma in Computing & Software Engineering",
    institution: "Cardiff Met. (via ICBT Campus, Sri Lanka)",
    classification: "Graduated with Merit / Distinction",
    period: "2023 – 2025",
    status: "Graduated with Merit",
    verificationNote: "Two-year intensive diploma covering computer science fundamentals and full-stack software development.",
    highlights: [
      "Deep focus on Object-Oriented Programming (OOP), Data Structures, Algorithms, and Relational Database Systems.",
      "Completed practical capstone projects including desktop POS billing systems and commercial web apps."
    ]
  }
];

export const experienceTimeline = [
  {
    year: "2025 – Present",
    role: "Associate Software Engineer",
    company: "Amazoft IT",
    description: "Developing production React.js & TypeScript web applications, designing optimized database schemas, investigating and fixing bugs, and collaborating in Agile sprint cycles.",
    status: "Current Commercial Position"
  },
  {
    year: "2022 – 2025",
    role: "Trainee Software Developer",
    company: "Amazoft IT",
    description: "Built responsive frontend screens with React.js, supported Java Spring Boot REST APIs, implemented JWT token authentication, prepared Docker builds, and created Postman API test suites.",
    status: "Commercial Role"
  },
  {
    year: "2025 – 2026",
    role: "BSc (Hons) Software Engineering",
    company: "Cardiff Metropolitan University, UK",
    description: "Awarded Second Class Upper Division (2:1). Specialized in software architecture, enterprise systems, and modern web application development.",
    status: "Degree Awarded (2:1)"
  },
  {
    year: "2023 – 2025",
    role: "Higher Diploma in Computing & SE",
    company: "Cardiff Met. (via ICBT Campus)",
    description: "Completed with Merit / Distinction, establishing strong fundamentals in computer science, OOP, algorithms, and database modeling.",
    status: "Diploma Awarded"
  }
];

export interface CompanyProject {
  id: string;
  name: string;
  area: string;
  description: string;
  link?: string;
  tech: string[];
}

export interface WorkExperience {
  company: string;
  role: string;
  period: string;
  status: "CURRENT" | "PAST";
  location: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  projects: CompanyProject[];
  achievements: string[];
}

export const workExperience: WorkExperience[] = [
  {
    company: "Amazoft IT",
    role: "Associate Software Engineer",
    period: "December 2025 – Present",
    status: "CURRENT",
    location: "Meetiyagoda, Ambalangoda, Sri Lanka",
    summary:
      "Architect and maintain production web features using React.js, TypeScript, and REST APIs, design and optimize database schemas in PostgreSQL, investigate and fix bugs, and collaborate in Agile sprint cycles.",
    responsibilities: [
      "Architect and maintain production web features using React.js, TypeScript, and REST APIs, ensuring modularity and optimal browser performance.",
      "Design and optimize database schemas and indexing strategies in PostgreSQL, ensuring data integrity and efficient query performance.",
      "Investigate, debug, and fix application issues through log analysis and systematic troubleshooting to improve overall application stability.",
      "Collaborate in Agile sprint planning, daily standups, and code reviews via Git/GitHub to maintain clean code standards."
    ],
    technologies: [
      "React.js",
      "TypeScript",
      "RESTful APIs",
      "PostgreSQL",
      "SQL Indexing",
      "Git",
      "GitHub",
      "Agile/Scrum",
      "Root-Cause Diagnostics"
    ],
    projects: [
      {
        id: "nipunex",
        name: "nipuneX – AI-Driven Recruitment Platform",
        area: "AI / Recruitment Platform",
        description:
          "Developed responsive user interfaces in Next.js/React.js integrated with REST endpoints for talent filtering and automated candidate assessment. Optimized PostgreSQL queries and AWS storage integration for efficient candidate searches.",
        link: "https://www.nipunex.com/",
        tech: ["Next.js", "React.js", "Node.js", "PostgreSQL", "AWS"]
      },
      {
        id: "school-management",
        name: "School Management System (EdTech Platform)",
        area: "EdTech Platform",
        description:
          "Engineered role-based portals (Admin, Teacher, Student, Parent) with modules for attendance tracking, grading, timetables, and notification alerts. Designed MySQL databases with proper permissions and reporting features.",
        tech: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"]
      }
    ],
    achievements: [
      "Optimized PostgreSQL query indexing and data fetching for efficient candidate filtering.",
      "Enforced modular component architecture and strict TypeScript type safety across production frontend features.",
      "Participated actively in daily Agile standups and pull request reviews on GitHub to maintain code quality."
    ]
  },
  {
    company: "Amazoft IT",
    role: "Trainee Software Developer",
    period: "June 2022 – December 2025",
    status: "PAST",
    location: "Meetiyagoda, Ambalangoda, Sri Lanka",
    summary:
      "Developed responsive user interfaces with HTML5, CSS3, and React.js while supporting Java Spring Boot RESTful API services, token authentication, Docker builds, and Postman API contract testing.",
    responsibilities: [
      "Developed responsive user interfaces with HTML5, CSS3, and React.js while supporting RESTful API services built with Java and Spring Boot.",
      "Implemented secure token-based authentication (JWT, OAuth 2.0) and Role-Based Access Control (RBAC) following secure coding guidelines.",
      "Assisted in containerizing multi-service components using Docker, preparing reproducible builds, and deploying services to AWS test environments.",
      "Authored comprehensive Postman test collections and unit test suites to validate API endpoint contracts and regression stability."
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Framework",
      "React.js",
      "HTML5",
      "CSS3",
      "JWT",
      "OAuth 2.0",
      "RBAC",
      "Docker",
      "AWS",
      "Postman"
    ],
    projects: [
      {
        id: "attendance-pos",
        name: "Employee Attendance & HR Management System / POS & Inventory",
        area: "HR / Attendance & POS Inventory",
        description:
          "Built attendance and shift tracking features with role-based access control; developed POS sales, goods receiving, and real-time inventory management logic.",
        tech: ["Java", "Spring Boot", "PostgreSQL", "Docker", "REST APIs"]
      }
    ],
    achievements: [
      "Built reliable attendance tracking features with role-based access control and token-based authentication (JWT, OAuth 2.0).",
      "Prepared reproducible Docker builds and deployed containerized services to AWS test environments.",
      "Authored comprehensive Postman test suites to validate API endpoint behavior and catch regressions."
    ]
  }
];
