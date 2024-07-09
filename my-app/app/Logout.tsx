"use client"
import { Button } from "@/components/ui/button";
import { signOut,useSession } from "next-auth/react";

export default function Logout() {
  const session=useSession()
  return (
    <>
      <div>Hello {session?.data?.user?.name} </div>
      <Button variant="link" onClick={()=>signOut()}>Logout</Button>
      </>
  );
}
