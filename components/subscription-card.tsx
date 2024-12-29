"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  { month: "Jun", subscriptions: 1800 },
  { month: "Jul", subscriptions: 2200 },
  { month: "Aug", subscriptions: 1700 },
  { month: "Sep", subscriptions: 2100 },
  { month: "Oct", subscriptions: 1600 },
  { month: "Nov", subscriptions: 1900 },
  { month: "Dec", subscriptions: 2350 },
  { month: "Jan", subscriptions: 1800 },
]

export function SubscriptionCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>구독</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div>
          <div className="text-4xl font-bold">+2350</div>
          <div className="text-muted-foreground">지난달 대비 +180.1%</div>
        </div>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="month" display="none" />
              <YAxis display="none" />
              <Bar
                dataKey="subscriptions"
                fill="hsl(var(--primary))"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

