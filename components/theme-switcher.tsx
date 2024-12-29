"use client"

import { Moon, Sun, Palette } from 'lucide-react'
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useEffect, useState } from 'react'

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          {theme?.includes('light') && <Sun className="h-[1.2rem] w-[1.2rem]" />}
          {theme?.includes('dark') && <Moon className="h-[1.2rem] w-[1.2rem] text-foreground" />}
          {(!theme || theme === 'system') && <Palette className="h-[1.2rem] w-[1.2rem]" />}
          <span className="sr-only">테마 변경</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          기본 라이트
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          기본 다크
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("light-red")}>
          레드 라이트
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark-red")}>
          레드 다크
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("light-blue")}>
          블루 라이트
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark-blue")}>
          블루 다크
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("light-orange")}>
          오렌지 라이트
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark-orange")}>
          오렌지 다크
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("light-green")}>
          그린 라이트
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark-green")}>
          그린 다크
        </DropdownMenuItem>
        {/*<DropdownMenuItem onClick={() => setTheme("system")}>*/}
        {/*  시스템*/}
        {/*</DropdownMenuItem>*/}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

