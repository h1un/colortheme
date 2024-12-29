import { ThemeProvider } from "@/providers/theme-provider"
import { ThemeDemo } from "@/components/sample/theme-demo"
import "./globals.css"
import {ComprehensiveThemeShowcase} from "@/components/sample/comprehensive-theme-showcase";
import Header from "@/components/layout/header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Header isAlwaysOpaque={false} showDropdownIcons={true}
          backgroundColor={"orange-100"}/>
          <ThemeDemo />
            <ComprehensiveThemeShowcase/>

          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

