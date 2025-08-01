import { createContext, useReducer, ReactNode } from "react";
import type { CartItem, CartState, CartContextType } from "../models/cart_types";

// Estado inicial del carrito
const initialState: CartState = {
  items: [],
  total: 0,
  itemCount: 0
};

// Tipos de acciones para el reducer
type CartAction =
  | { type: "ADD_ITEM"; payload: Omit<CartItem, "cantidad"> }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "UPDATE_QUANTITY"; payload: { id: string; cantidad: number } }
  | { type: "CLEAR_CART" };

// Reducer para manejar las acciones del carrito
function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        // Si el item ya existe, aumentar cantidad
        const updatedItems = state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
        return calculateTotals({ ...state, items: updatedItems });
      } else {
        // Si es nuevo, agregarlo con cantidad 1
        const newItem: CartItem = { ...action.payload, cantidad: 1 };
        return calculateTotals({ ...state, items: [...state.items, newItem] });
      }
    }

    case "REMOVE_ITEM": {
      const filteredItems = state.items.filter(item => item.id !== action.payload);
      return calculateTotals({ ...state, items: filteredItems });
    }

    case "UPDATE_QUANTITY": {
      const { id, cantidad } = action.payload;
      
      if (cantidad <= 0) {
        // Si la cantidad es 0 o menor, remover el item
        const filteredItems = state.items.filter(item => item.id !== id);
        return calculateTotals({ ...state, items: filteredItems });
      }
      
      const updatedItems = state.items.map(item =>
        item.id === id ? { ...item, cantidad } : item
      );
      return calculateTotals({ ...state, items: updatedItems });
    }

    case "CLEAR_CART": {
      return initialState;
    }

    default:
      return state;
  }
}

// Función helper para calcular totales
function calculateTotals(state: CartState): CartState {
  const total = state.items.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
  const itemCount = state.items.reduce((sum, item) => sum + item.cantidad, 0);
  
  return {
    ...state,
    total,
    itemCount
  };
}

// Crear el contexto
export const CartContext = createContext<CartContextType | undefined>(undefined);

// Provider del contexto
export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (item: Omit<CartItem, "cantidad">) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  const removeFromCart = (id: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const updateQuantity = (id: string, cantidad: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, cantidad } });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const contextValue: CartContextType = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    isOpen: false, // Por ahora false, después podemos añadir lógica para abrir/cerrar
    toggleCart: () => {} // Por ahora vacío
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
}
