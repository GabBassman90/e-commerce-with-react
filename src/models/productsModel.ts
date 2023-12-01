export type Root = Root2[]

export interface Root2 {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: Rating
  amount?: number
}

export interface Rating {
  rate: number
  count: number
}
