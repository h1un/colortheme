"use client"

import { Moon, Sun, Palette } from 'lucide-react'
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { useEffect, useState } from 'react'

type ColorScheme = {
    name: string;
    bg: string;
}

const colorSchemes: ColorScheme[] = [
    { name: 'default', bg: 'bg-slate-900' },
    { name: 'red', bg: 'bg-red-500' },
    { name: 'blue', bg: 'bg-blue-500' },
    { name: 'orange', bg: 'bg-orange-500' },
    { name: 'green', bg: 'bg-green-500' },
    { name: 'yellow', bg: 'bg-yellow-500' },
    { name: 'violet', bg: 'bg-violet-500' },
    { name: 'periwinkle', bg: 'bg-periwinkle-500' },
]

export function ThemeSwitcher() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    const isDark = theme ? theme.includes('dark') : false
    const currentColorScheme = theme?.split('-')[1] || 'default'

    useEffect(() => {
        setMounted(true)
    }, [])

    const handleThemeChange = (colorScheme: string, mode: 'light' | 'dark') => {
        setTheme(colorScheme === 'default' ? mode : `${mode}-${colorScheme}`)
    }

    const isSelected = (schemeName: string) =>
        schemeName === 'default'
            ? ['light', 'dark', 'default'].includes(theme as string)
            : theme?.endsWith(`-${schemeName}`)

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline" size="icon">
                    {mounted ? (
                        isDark ? (
                            <Moon className="h-[1.2rem] w-[1.2rem] text-foreground" />
                        ) : theme === 'light' || theme?.startsWith('light-') ? (
                            <Sun className="h-[1.2rem] w-[1.2rem]" />
                        ) : (
                            <Palette className="h-[1.2rem] w-[1.2rem]" />
                        )
                    ) : (
                        <Palette className="h-[1.2rem] w-[1.2rem]" />
                    )}
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
                            {(['light', 'dark'] as const).map((mode) => (
                                <Button
                                    key={mode}
                                    variant="outline"
                                    size="sm"
                                    className={cn(
                                        "justify-start",
                                        (theme === mode || theme?.startsWith(`${mode}-`)) && "border-2 border-primary"
                                    )}
                                    onClick={() => handleThemeChange(currentColorScheme, mode)}
                                >
                                    {mode === 'light' ? (
                                        <Sun className="h-4 w-4 mr-2" />
                                    ) : (
                                        <Moon className="h-4 w-4 mr-2" />
                                    )}
                                    {mode === 'light' ? '라이트' : '다크'}
                                </Button>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h4 className="font-medium leading-none mb-3">색상</h4>
                        <div className="grid grid-cols-2 gap-2">
                            {colorSchemes.map((scheme) => (
                                <Button
                                    key={scheme.name}
                                    variant="outline"
                                    size="sm"
                                    className={cn(
                                        "justify-start",
                                        isSelected(scheme.name) && "border-2 border-primary"
                                    )}
                                    onClick={() => handleThemeChange(scheme.name, isDark ? 'dark' : 'light')}
                                >
                                    <div className={cn(
                                        "h-4 w-4 rounded-full mr-2",
                                        scheme.bg
                                    )} />
                                    {scheme.name === 'default' ? '기본' : scheme.name}
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}

