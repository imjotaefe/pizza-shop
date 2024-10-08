import { api } from "../lib/axios";

export type GetDailyRevenueInPeriodResponse = {
  data: string
  receipt: number
}[]

export interface GetDailyRevenueInPeriodQuery {
  from?: Date
  to?: Date
}

export const getDailyRevenueInPeriodResponse = async ({from, to}: GetDailyRevenueInPeriodQuery) => {
  const response = await api.get<GetDailyRevenueInPeriodResponse>('/metrics/daily-receipt-in-period', {
    params: {
      from,
      to
    }
  });

  return response.data
}
