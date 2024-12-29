"use client"

import { Moon, Sun } from 'lucide-react'
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from 'react'

const colors = [
    { name: 'Zinc', value: 'zinc', class: 'bg-zinc-900' },
    { name: 'Red', value: 'red', class: 'bg-red-500' },
    { name: 'Rose', value: 'rose', class: 'bg-rose-500' },
    { name: 'Orange', value: 'orange', class: 'bg-orange-500' },
    { name: 'Green', value: 'green', class: 'bg-green-500' },
    { name: 'Blue', value: 'blue', class: 'bg-blue-500' },
    { name: 'Yellow', value: 'yellow', class: 'bg-yellow-500' },
    { name: 'Violet', value: 'violet', class: 'bg-violet-500' },
]

export function ThemeSwitcher() {
    const [isOpen, setIsOpen] = useState(false)
    const { theme, setTheme } = useTheme()

    return (
        <div className="relative">
            <Button
                variant="outline"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="relative"
            >
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
            </Button>

            {isOpen && (
                <Card className="absolute right-0 top-[calc(100%+0.5rem)] w-[320px] z-50">
                    <CardHeader>
                        <CardTitle>테마 커스터마이저</CardTitle>
                        <CardDescription>
                            컴포넌트 색상을 커스터마이즈하세요.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-2">
                            <h3 className="text-lg font-medium">색상</h3>
                            <div className="grid grid-cols-2 gap-2">
                                {colors.map((color) => (
                                    <Button
                                        key={color.value}
                                        variant="outline"
                                        className={`h-12 justify-start gap-2 ${
                                            theme?.includes(color.value) ? 'border-2 border-primary' : ''
                                        }`}
                                        onClick={() => {
                                            if (color.value === 'zinc') {
                                                setTheme(theme?.includes('dark') ? 'dark' : 'light')
                                            } else {
                                                setTheme(`${theme?.includes('dark') ? 'dark' : 'light'}-${color.value}`)
                                            }
                                        }}
                                    >
                                        <span className={`h-4 w-4 rounded-full ${color.class}`} />
                                        {color.name}
                                    </Button>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-lg font-medium">모드</h3>
                            <div className="grid grid-cols-2 gap-2">
                                <Button
                                    variant="outline"
                                    className={`justify-start gap-2 ${
                                        theme?.includes('light') ? 'border-2 border-primary' : ''
                                    }`}
                                    onClick={() => setTheme(theme?.replace('dark', 'light') || 'light')}
                                >
                                    <Sun className="h-4 w-4" />
                                    Light
                                </Button>
                                <Button
                                    variant="outline"
                                    className={`justify-start gap-2 ${
                                        theme?.includes('dark') ? 'border-2 border-primary' : ''
                                    }`}
                                    onClick={() => setTheme(theme?.replace('light', 'dark') || 'dark')}
                                >
                                    <Moon className="h-4 w-4" />
                                    Dark
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            )}
        </div>
    )
}

