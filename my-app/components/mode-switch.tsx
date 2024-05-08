/*import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeSwitch() {
  const {setTheme} = useTheme()

  let sys= useTheme().systemTheme
  function swap() {
    if (sys == "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  let isDarkMode = sys == "dark"

  return (
    <Button variant="outline" size="icon" onClick={swap}>
      <SunIcon className={`h-[1.2rem] w-[1.2rem] rotate-${isDarkMode ? '0' : '-90'} scale-${isDarkMode ? '100' : '0'} transition-all dark:-rotate-90 dark:scale-0`} />
      <MoonIcon className={`absolute h-[1.2rem] w-[1.2rem] rotate-${isDarkMode ? '90' : '0'} scale-${isDarkMode ? '0' : '100'} transition-all dark:rotate-0 dark:scale-100`} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}*/

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
    <Button variant="outline" size="icon" onClick={()=>swap(setTheme, a)}>
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
  )
}