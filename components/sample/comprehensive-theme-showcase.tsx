"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ThemeSwitcher } from "../theme-switcher"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { SubscriptionCard } from "./subscription-card"
import { ChatSupport } from "./chat-support"
import { CookieSettings } from "./cookie-settings"
import { PaymentMethod } from "./payment-method"

export function ComprehensiveThemeShowcase() {
    const [switchState, setSwitchState] = useState(false)

    return (
        <div className="min-h-screen p-8 space-y-8 bg-background text-foreground">
            <div className="flex justify-between items-center">
                <h1 className="text-4xl font-bold">종합 테마 쇼케이스</h1>
                <ThemeSwitcher />
            </div>

            <div className="grid gap-8 md:grid-cols-2 ">
                <Card className="">
                    <CardHeader>
                        <CardTitle>배경 및 텍스트 색상</CardTitle>
                        <CardDescription>다양한 배경과 텍스트 색상 조합</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <div className="p-4 bg-background text-foreground rounded">bg-background / text-foreground</div>
                        <div className="p-4 bg-primary text-primary-foreground rounded">bg-primary / text-primary-foreground</div>
                        <div className="p-4 bg-secondary text-secondary-foreground rounded">bg-secondary / text-secondary-foreground</div>
                        <div className="p-4 bg-muted text-muted-foreground rounded">bg-muted / text-muted-foreground</div>
                        <div className="p-4 bg-accent text-accent-foreground rounded">bg-accent / text-accent-foreground</div>
                        <div className="p-4 bg-destructive text-destructive-foreground rounded">bg-destructive / text-destructive-foreground</div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>버튼 변형</CardTitle>
                        <CardDescription>다양한 버튼 스타일</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-4">
                        <Button variant="default">Default</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="destructive">Destructive</Button>
                        <Button variant="outline">Outline</Button>
                        <Button variant="outlinePrimary">Outline</Button>
                        <Button variant="ghost">Ghost</Button>
                        <Button variant="link">link</Button>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>입력 요소</CardTitle>
                        <CardDescription>다양한 입력 필드</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="email">이메일</Label>
                            <Input type="email" id="email" placeholder="이메일 주소" />
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox id="terms" />
                            <Label htmlFor="terms">이용약관에 동의합니다</Label>
                        </div>
                        <RadioGroup defaultValue="option-one">
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="option-one" id="option-one" />
                                <Label htmlFor="option-one">옵션 1</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="option-two" id="option-two" />
                                <Label htmlFor="option-two">옵션 2</Label>
                            </div>
                        </RadioGroup>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>선택 요소</CardTitle>
                        <CardDescription>드롭다운 및 슬라이더</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="테마 선택" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="light">라이트</SelectItem>
                                <SelectItem value="dark">다크</SelectItem>
                                <SelectItem value="system">시스템</SelectItem>
                            </SelectContent>
                        </Select>
                        <div className="space-y-2">
                            <Label>볼륨</Label>
                            <Slider defaultValue={[50]} max={100} step={1} />
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>토글 요소</CardTitle>
                        <CardDescription>스위치 및 탭</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <Switch id="airplane-mode" checked={switchState} onCheckedChange={setSwitchState} />
                            <Label htmlFor="airplane-mode">비행기 모드 {switchState ? "켜짐" : "꺼짐"}</Label>
                        </div>
                        <Tabs defaultValue="account" className="w-[400px]">
                            <TabsList>
                                <TabsTrigger value="account">계정</TabsTrigger>
                                <TabsTrigger value="password">비밀번호</TabsTrigger>
                            </TabsList>
                            <TabsContent value="account">계정 설정을 관리합니다.</TabsContent>
                            <TabsContent value="password">비밀번호를 변경합니다.</TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>텍스트 영역</CardTitle>
                        <CardDescription>여러 줄 입력 필드</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Textarea placeholder="여기에 메시지를 입력하세요." />
                    </CardContent>
                </Card>

                <SubscriptionCard />
                <ChatSupport />
                <CookieSettings />
                <PaymentMethod />
            </div>
        </div>
    )
}

