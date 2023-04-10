export interface IProvider {
  children: React.ReactNode
}

export interface IContext {
  products: IProduct[]
  setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>
  cartItems: ICardItem[]
  setCartItems: React.Dispatch<React.SetStateAction<ICardItem[]>>
  showCart: boolean
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>
  filter: string
  setFilter: React.Dispatch<React.SetStateAction<string>>
  search: string
  setSearch: React.Dispatch<React.SetStateAction<string>>
  isBiggerCard: boolean
  setIsBiggerCard: React.Dispatch<React.SetStateAction<boolean>>
  showPayment: boolean
  setShowPayment: React.Dispatch<React.SetStateAction<boolean>>
  addProductCart: (id: number, img: string, name: string, price: number, amount: number) => void
  removeProductCart: (id: number) => void
  clearCart: () => void
  total: () => number
}

export interface IProduct {
  id: number
  img: string
  name: string
  description: string
  price: number
  stock: number
  mark: string
  category: string
  amount: number
}

export interface ICard {
  product: IProduct
}

export interface ICardPayment {
  product: ICardItem
}

export interface IProductPayment {
  id: number
  img: string
  name: string
  price: number
  amount: number
}

export interface ICardItem {
  id: number
  img: string
  name: string
  price: number
  amount: number
}

export interface ICardCart {
  product: ICardItem
}

export interface IFilter {
  id: string
  value: string
  legend: string
}

export interface ICardStyleProps {
  width: string
  height: string
  width_price_quantity: string
  flex_direction: string
  margin_bottom: string
  heightDescription: string
  heightPriceQuantityButton: string
  buttonWidth: string
  gap: string
  filter: string
}

export interface IHomeStyleProps {
  overflowX: string
  overflowY: string
  height: string
  flex_direction: string
  flex_wrap: string
}

export interface ICartStyleProps {
  height: string
}