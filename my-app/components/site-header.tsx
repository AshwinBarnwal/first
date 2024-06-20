import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "./ui/button"
import { ModeSwitch } from "@/components/mode-switch";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="https://roboticsclubiitk.github.io/" target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"><Button variant="link"><b>Robotics Club</b></Button></Link>
        <div className="flex flex-1 items-center justify-end space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
          </div>
          <nav className="flex items-center">
            <ModeSwitch />
          </nav>
        </div>
      </div>
    </header>
  )
}