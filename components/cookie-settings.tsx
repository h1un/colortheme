"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"

export function CookieSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>쿠키 설정</CardTitle>
        <CardDescription>여기에서 쿠키 설정을 관리하세요.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between space-x-2">
          <div className="space-y-1">
            <div className="font-medium">필수 쿠키</div>
            <div className="text-sm text-muted-foreground">
              웹사이트 사용에 필수적인 쿠키입니다.
            </div>
          </div>
          <Switch checked disabled />
        </div>
        <div className="flex items-center justify-between space-x-2">
          <div className="space-y-1">
            <div className="font-medium">기능성 쿠키</div>
            <div className="text-sm text-muted-foreground">
              맞춤형 기능을 제공하는 쿠키입니다.
            </div>
          </div>
          <Switch />
        </div>
        <div className="flex items-center justify-between space-x-2">
          <div className="space-y-1">
            <div className="font-medium">성능 쿠키</div>
            <div className="text-sm text-muted-foreground">
              웹사이트 성능 향상을 위한 쿠키입니다.
            </div>
          </div>
          <Switch />
        </div>
        <Button className="w-full">설정 저장</Button>
      </CardContent>
    </Card>
  )
}

