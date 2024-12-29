"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Send } from 'lucide-react'

export function ChatSupport() {
  return (
    <Card className="h-[500px] flex flex-col">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>SD</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-base">Sofia Davis</CardTitle>
            <div className="text-sm text-muted-foreground">m@example.com</div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-between">
        <div className="space-y-4">
          <div className="bg-muted p-3 rounded-lg max-w-[80%]">
            안녕하세요, 어떻게 도와드릴까요?
          </div>
          <div className="bg-primary text-primary-foreground p-3 rounded-lg max-w-[80%] ml-auto">
            계정에 문제가 있습니다.
          </div>
          <div className="bg-muted p-3 rounded-lg max-w-[80%]">
            어떤 문제가 있으신가요?
          </div>
          <div className="bg-primary text-primary-foreground p-3 rounded-lg max-w-[80%] ml-auto">
            로그인이 안 됩니다.
          </div>
        </div>
        <div className="flex gap-2 mt-4">
          <Input placeholder="메시지를 입력하세요..." className="flex-1" />
          <Button size="icon" className="shrink-0">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

