import { api } from './api'

export type TripDetails = {
  id: string
  destination: string
  start_at: string
  ends_at: string
  is_confirmed: boolean
}

type TripCreate = Omit<TripDetails, 'id' | 'is_confirmed'> & {
  emails_to_invite: string[]
}

async function getById (id: string) {
  try {
    const { data } = await api.get<{ trip: TripDetails }>(`/trips/${id}`)
    return data.trip
  } catch (error) {
    throw error
  }
}

async function create ({
  destination,
  start_at,
  ends_at,
  emails_to_invite
}: TripCreate) {
  try {
    const { data } = await api.post<{ tripId: string }>('/trips', {
      destination,
      start_at,
      ends_at,
      emails_to_invite,
      owner_name: 'Juscélia de Souza',
      owner_email: 'jusceliadesousa@gmail.com'
    })

    return data
  } catch (error) {
    throw error
  }
}

export const tripServer = { getById, create }
