"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"



export function ModeSwitch() {
  const { setTheme } = useTheme()
  let a : string= useTheme().theme=="dark"? "dark": "light"
  function swap(setTheme:(a: string)=>void, b:string){
    
    if (b=="light"){
        setTheme("dark")
    }
    else{
        setTheme("light")
    }
}
  return (
    <Button variant="ghost" size="icon" onClick={()=>swap(setTheme, a)}>
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
  )
}