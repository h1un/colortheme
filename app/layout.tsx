import { ThemeProvider } from "@/providers/theme-provider"
import { ThemeDemo } from "@/components/theme-demo"
import "./globals.css"
import {ComprehensiveThemeShowcase} from "@/components/comprehensive-theme-showcase";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <ThemeDemo />
            <ComprehensiveThemeShowcase/>

          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

