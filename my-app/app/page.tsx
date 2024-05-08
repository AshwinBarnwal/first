import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle";
import { useTheme } from "next-themes";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { ModeSwitch } from "@/components/mode-switch";

export default function Home() {
  return (
<div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
  <div className="relative px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
        <div className="flex space-x-4">
          <Button>Hello</Button>
          <ModeSwitch />
        </div>
  </div>
</div>
  );
}