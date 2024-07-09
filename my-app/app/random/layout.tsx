import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { getServerSession } from "next-auth";
import authOptions from '../../pages/api/auth/[...nextauth]'
import SessionProvider from "../SessionProvider";
import Home from "./page";
import Login from "../Login";
import { Session } from "next-auth";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Theme",
  description: "Changing themes",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions) as Session | null;
  console.log(session)
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider 
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
            <SessionProvider session={session}>{!session? <Login/>:<Home/>}</SessionProvider>
            </ThemeProvider>
        </body>
    </html>
  );
}