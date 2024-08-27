import { http, HttpResponse } from 'msw';
import { GetProfileResponse } from '../get-profile'

export const getProfileMock = http.get<never, never, GetProfileResponse>('/me', () => {
  return HttpResponse.json({
    id: "1111",
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    phone: '234234234',
    role: 'manager',
    createdAt: new Date(),
    updatedAt: null
  })
})
