export interface Product {
  id: number
  name: string
  brand: string
  price: number
  image: string
  rating: number
  inStocks: number
  quantity?: number
}

export interface CartItem {
  id: number
  quantity: number
}
