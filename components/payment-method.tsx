"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CreditCard, Apple } from 'lucide-react'
import { useState } from 'react'

export function PaymentMethod() {
  const [activeMethod, setActiveMethod] = useState<string | null>(null);
  return (
      <Card>
        <CardHeader>
          <CardTitle>결제 수단</CardTitle>
          <CardDescription>계정에 새로운 결제 수단을 추가하세요.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            <Button
                variant="outline"
                className={`flex flex-col h-24 items-center justify-center gap-2 hover:border-primary hover:text-primary ${
                    activeMethod === 'card' ? 'border-primary text-primary' : ''
                }`}
                onClick={() => setActiveMethod('card')}
            >
              <CreditCard className="h-6 w-6" />
              <span>카드</span>
            </Button>
            <Button
                variant="outline"
                className={`flex flex-col h-24 items-center justify-center gap-2 ${
                    activeMethod === 'paypal' ? 'border-primary text-primary' : ''
                }`}
                onClick={() => setActiveMethod('paypal')}
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.067 8.478c.492.88.556 2.014.3 3.327-.74 3.806-3.276 5.12-6.514 5.12h-.5a.805.805 0 0 0-.794.68l-.04.22-.63 3.993-.032.17a.804.804 0 0 1-.794.679H7.72a.483.483 0 0 1-.477-.558L7.418 21h1.518l.95-6.02h1.385c4.678 0 7.75-2.203 8.796-6.502zm-2.96-5.09c.762.868.983 1.81.752 3.285-.019.123-.04.24-.062.36-.735 3.773-3.089 5.446-6.956 5.446H8.957c-.63 0-1.174.414-1.354 1.002l-.014-.002-.93 5.894H3.121a.051.051 0 0 1-.05-.06l2.598-16.51A.95.95 0 0 1 6.607 2h5.976c2.183 0 3.716.469 4.523 1.388z"/>
              </svg>
              <span>Paypal</span>
            </Button>
            <Button
                variant="outline"
                className={`flex flex-col h-24 items-center justify-center gap-2 ${
                    activeMethod === 'apple' ? 'border-primary text-primary' : ''
                }`}
                onClick={() => setActiveMethod('apple')}
            >
              <Apple className="h-6 w-6" />
              <span>Apple</span>
            </Button>
          </div>
        </CardContent>
      </Card>
  )
}

