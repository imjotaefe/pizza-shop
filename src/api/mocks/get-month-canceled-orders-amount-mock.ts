import { http, HttpResponse } from 'msw';
import { GetMonthCaceledOrdersAmountResponse } from '../get-month-canceled-orders-amount'

export const getMonthCanceledOrdersAmountMock = http.get<never, never, GetMonthCaceledOrdersAmountResponse>('/metrics/month-canceled-orders-amount', () => {
  return HttpResponse.json({
    amount: 5,
    diffFromLastMonth: -5
  })
})
