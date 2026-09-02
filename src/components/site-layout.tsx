import { CustomCursor } from "@/components/ui/custom-cursor";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { ChatWidget } from "@/components/ui/chat-widget";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

type Props = { children: React.ReactNode };

export function SiteLayout({ children }: Props) {
  return (
    <div className="min-h-screen bg-[--bg] text-[--text]">
      <CustomCursor />
      <Header />
      <main>{children}</main>
      <Footer />
      <ScrollToTop />
      <ChatWidget />
    </div>
  );
}
