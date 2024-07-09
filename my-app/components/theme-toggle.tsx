"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { setTheme } = useTheme()

  return (
    <Link href="/problems"><Button>Problems</Button></Link>
  )
}