import { DollarSign, Utensils } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card"

export const DayOrdersAmountCard = (params) => {
  return (
    <Card>
      <CardHeader className="flex items-center justify-between pb-2 flex-row space-y-0">
        <CardTitle className="text-base font-semibold"> Pedido do (dia)</CardTitle>
        <Utensils className="h-4 w-4 text-muted-foreground"/>
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">
          12
        </span> 
        <p className="text-xs text-muted-foreground"><span className="text-rose-500 dark:text-rose-400">-4%</span> em relação a ontem</p>
      </CardContent>
    </Card>
  )
}
