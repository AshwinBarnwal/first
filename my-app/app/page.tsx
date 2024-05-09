import { SiteHeader } from "@/components/site-header";
import { ThemeToggle } from "@/components/theme-toggle";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ textAlign: 'center' }}>
        <SiteHeader/>
      </div>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="flex flex-col justify-items-end items-center px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:max-w-lg sm:rounded-lg sm:px-10">
        <ThemeToggle />
      </div>
      </div>
      <div style={{textAlign: 'center' }}>
        <SiteFooter/>
      </div>
    </div>
  );
}
