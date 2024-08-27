import { api } from "../lib/axios";

export interface GetMonthCaceledOrdersAmountResponse {
  amount: number
  diffFromLastMonth: number
}

export const getMonthCaceledOrdersAmount = async () => {
  const response = await api.get<GetMonthCaceledOrdersAmountResponse>('/metrics/month-canceled-orders-amount');

  return response.data
}
