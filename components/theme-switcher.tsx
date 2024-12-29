"use client"

import * as React from "react"
import { Moon, Sun, Palette } from 'lucide-react'
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"

export function ThemeSwitcher() {
    const [mounted, setMounted] = React.useState(false)
    const { theme, setTheme } = useTheme()

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    const colors = [
        { name: 'Default', light: 'light', dark: 'dark', bg: 'bg-slate-900' },
        { name: 'Red', light: 'light-red', dark: 'dark-red', bg: 'bg-red-500' },
        { name: 'Blue', light: 'light-blue', dark: 'dark-blue', bg: 'bg-blue-500' },
        { name: 'Orange', light: 'light-orange', dark: 'dark-orange', bg: 'bg-orange-500' },
        { name: 'Green', light: 'light-green', dark: 'dark-green', bg: 'bg-green-500' },
        { name: 'Yellow', light: 'light-yellow', dark: 'dark-yellow', bg: 'bg-yellow-500' },
        { name: 'Violet', light: 'light-violet', dark: 'dark-violet', bg: 'bg-violet-500' },
    ]

    const isDark = theme?.includes('dark')

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline" size="icon">
                    {theme?.includes('light') && <Sun className="h-[1.2rem] w-[1.2rem]" />}
                    {theme?.includes('dark') && <Moon className="h-[1.2rem] w-[1.2rem] text-foreground" />}
                    {(!theme || theme === 'system') && <Palette className="h-[1.2rem] w-[1.2rem]" />}
                    <span className="sr-only">테마 설정</span>
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
                <div className="space-y-4">
                    <div>
                        <h4 className="font-medium leading-none mb-3">테마 설정</h4>
                        <p className="text-sm text-muted-foreground mb-4">
                            원하는 색상과 모드를 선택하세요.
                        </p>
                        <div className="grid grid-cols-2 gap-2">
                            <Button
                                variant="outline"
                                size="sm"
                                className={cn(
                                    "justify-start",
                                    !isDark && "border-2 border-primary"
                                )}
                                onClick={() => setTheme(theme?.replace('dark', 'light') || 'light')}
                            >
                                <Sun className="h-4 w-4 mr-2" />
                                라이트
                            </Button>
                            <Button
                                variant="outline"
                                size="sm"
                                className={cn(
                                    "justify-start",
                                    isDark && "border-2 border-primary"
                                )}
                                onClick={() => setTheme(theme?.replace('light', 'dark') || 'dark')}
                            >
                                <Moon className="h-4 w-4 mr-2" />
                                다크
                            </Button>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h4 className="font-medium leading-none mb-3">색상</h4>
                        <div className="grid grid-cols-2 gap-2">
                            {colors.map((color) => {
                                const isSelected = theme === color.light || theme === color.dark;
                                const currentTheme = isDark ? color.dark : color.light
                                return (
                                    <Button
                                        key={color.name}
                                        variant="outline"
                                        size="sm"
                                        className={cn(
                                            "justify-start",
                                            (isSelected || (color.name === 'Default' && theme === (isDark ? 'dark' : 'light'))) && "border-2 border-primary"
                                        )}
                                        onClick={() => setTheme(currentTheme)}
                                    >
                                        <div className={cn(
                                            "h-4 w-4 rounded-full mr-2",
                                            color.bg
                                        )} />
                                        {color.name}
                                    </Button>
                                )}
                            )}
                        </div>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}

