import { useContext } from "react";
import { CartContext } from "./CartContext";

// Hook personalizado para usar el contexto
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart debe ser usado dentro de un CartProvider");
  }
  return context;
}
