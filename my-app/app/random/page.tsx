"use client"
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { signOut,useSession } from "next-auth/react";

export default function Home() {
  const session=useSession()
  return (
    <>
    <SiteHeader/>
      <div>{session?.data?.user?.name}</div>
      <button onClick={()=>signOut()}>Logout</button>
      <SiteFooter/>
    </>
  );
}