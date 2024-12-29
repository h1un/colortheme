import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ColorDemo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>테마 색상 데모</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="font-semibold">배경 색상</div>
          <div className="flex items-center space-x-2">
            <div className="w-16 h-16 bg-background border border-border"></div>
            <span className="text-sm">bg-background</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-16 h-16 bg-primary border border-border"></div>
            <span className="text-sm">bg-primary</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-16 h-16 bg-secondary border border-border"></div>
            <span className="text-sm">bg-secondary</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-16 h-16 bg-muted border border-border"></div>
            <span className="text-sm">bg-muted</span>
          </div>
        </div>
        <div className="space-y-2">
          <div className="font-semibold">텍스트 색상</div>
          <div className="flex items-center space-x-2">
            <div className="w-16 h-16 text-foreground">안녕하세요</div>
            <span className="text-sm">text-foreground</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-16 h-16 text-primary">안녕하세요</div>
            <span className="text-sm">text-primary</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-16 h-16 bg-primary text-primary-foreground">안녕하세요</div>
            <span className="text-sm">text-primary-foreground</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-16 h-16 bg-primary text-secondary">안녕하세요</div>
            <span className="text-sm">text-secondary</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-16 h-16 bg-primary text-muted-foreground">안녕하세요</div>
            <span className="text-sm">text-muted-foreground</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

