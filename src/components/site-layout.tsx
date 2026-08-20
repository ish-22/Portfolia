import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { ChatWidget } from "@/components/ui/chat-widget";

type SiteLayoutProps = {
  children: React.ReactNode;
  className?: string;
};

export function SiteLayout({ children, className = "" }: SiteLayoutProps) {
  return (
    <main className={`min-h-screen overflow-hidden ${className}`}>
      <Header />
      {children}
      <Footer />
      <ScrollToTop />
      <ChatWidget />
    </main>
  );
}
