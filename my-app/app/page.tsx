import { SiteHeader } from "@/components/site-header";
import { ThemeToggle } from "@/components/theme-toggle";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { CarouselDemo } from "@/components/summer-projects";
//import { SummerCarousel } from "@/components/summer-projects";
export default function Home() {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ textAlign: 'center' }}>
        <SiteHeader/>
       
      </div>
      <div className="item-center justify-center md:text-center py-6"> <span className="text-4xl font-semibold">Summer Projects 24-25</span></div>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <CarouselDemo></CarouselDemo>
      </div>
      <div style={{textAlign: 'center' }}>
        <SiteFooter/>
      </div>
    </div>
  );
}
