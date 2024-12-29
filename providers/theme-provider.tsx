"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      themes={['light', 'dark',
        'light-red', 'dark-red',
        'light-blue', 'dark-blue',
        'light-orange', 'dark-orange',
        'light-green', 'dark-green',
        'light-yellow', 'dark-yellow',
        'light-violet', 'dark-violet']}
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}

