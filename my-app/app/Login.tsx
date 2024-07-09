'use client'
import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button"
export default function Login(){
    return(
        <Button variant="link" onClick={() => signIn('google')}>Login</Button>
    )
}