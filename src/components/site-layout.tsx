import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";

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
    </main>
  );
}
