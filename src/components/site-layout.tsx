import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { ClientWidgets } from "@/components/ui/client-widgets";

type Props = { children: React.ReactNode };

export function SiteLayout({ children }: Props) {
  return (
    <div className="min-h-screen bg-[--bg] text-[--text] w-full overflow-x-hidden relative">
      <Header />
      <main className="w-full overflow-x-hidden">{children}</main>
      <Footer />
      <ClientWidgets />
    </div>
  );
}
