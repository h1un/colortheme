"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ThemeSwitcher } from "./theme-switcher"
import { Line, LineChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"
import { SubscriptionCard } from "./subscription-card"
import { ChatSupport } from "./chat-support"
import { CookieSettings } from "./cookie-settings"
import { PaymentMethod } from "./payment-method"

const chartData = [
  { month: "Jan", value: 100 },
  { month: "Feb", value: 120 },
  { month: "Mar", value: 170 },
  { month: "Apr", value: 140 },
  { month: "May", value: 200 },
  { month: "Jun", value: 180 },
]

export function ThemeDemo() {
  return (
    <div className="min-h-screen p-8 space-y-8 bg-background text-foreground">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">Theme Showcase</h1>
        <ThemeSwitcher />
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Button Variants</CardTitle>
            <CardDescription>Different button styles with current theme</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-4">
            <Button variant="default">Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">outline</Button>
            <Button variant="outlinePrimary">outlinePrimary</Button>
            <Button variant="outlinePrimaryHoverFill">outlinePrimaryHoverFill</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">link</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Chart Example</CardTitle>
            <CardDescription>Monthly progress visualization</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card description goes here</CardDescription>
          </CardHeader>
          <CardContent>
            This is a sample card content to demonstrate theme colors.
          </CardContent>
        </Card>

        <Card className="bg-secondary">
          <CardHeader>
            <CardTitle>Secondary Background</CardTitle>
            <CardDescription>Using secondary color</CardDescription>
          </CardHeader>
          <CardContent>
            This card uses the secondary background color.
          </CardContent>
        </Card>

        <Card className="bg-muted">
          <CardHeader>
            <CardTitle>Muted Background</CardTitle>
            <CardDescription>Using muted color</CardDescription>
          </CardHeader>
          <CardContent>
            This card uses the muted background color.
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <SubscriptionCard />
        <ChatSupport />
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <CookieSettings />
        <PaymentMethod />
      </div>
    </div>
  )
}

