import { http, HttpResponse } from 'msw';
import { GetManagedRestaurantResponse } from '../get-managed-restaurant'

export const getManagedRestaurantMock = http.get<never, never, GetManagedRestaurantResponse>('/managed-restaurant', () => {
  return HttpResponse.json({
   id: 'aaaaaa',
   name: 'Pizza Shop',
   description: 'description',
   managerId: '1111',
   createdAt: new Date(),
   updatedAt: null
  })
})
