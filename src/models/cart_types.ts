export interface CartItem {
  id: string;
  nombre: string;
  precio: number;
  img: string;
  cantidad: number;
  descripcion?: string;
}

export interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
}

export interface CartContextType {
  cart: CartState;
  addToCart: (item: Omit<CartItem, 'cantidad'>) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, cantidad: number) => void;
  clearCart: () => void;
  isOpen: boolean;
  toggleCart: () => void;
}
