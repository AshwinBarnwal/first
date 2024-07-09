import Link from "next/link"
import { Button, buttonVariants } from "./ui/button"
import { ModeSwitch } from "@/components/mode-switch";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { Session } from "next-auth";
import Login from "@/app/Login";
import Logout from "@/app/Logout";
import SessionProvider from "@/app/SessionProvider";
export async function SiteHeader() {
  const session = await getServerSession(authOptions) as Session | null;
  return (
    <header className="sticky top-0 z-30 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href={`/`}
            className="font-medium underline underline-offset-4"><Button variant="link"><b>LC Board</b></Button></Link>
        <Link href={`/problems`}><Button variant="link">Problems</Button></Link>
        <div className="flex flex-1 items-center justify-end space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
          </div>
          <nav className="flex items-center">
            {!session?<Login/>:<SessionProvider session={session}><Logout/></SessionProvider>}
            <ModeSwitch />
          </nav>
        </div>
      </div>
    </header>
  )
}
