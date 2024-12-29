import { ThemeProvider } from "@/providers/theme-provider"
import { ThemeDemo } from "@/components/theme-demo"
import "./globals.css"

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
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

