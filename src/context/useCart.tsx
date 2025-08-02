import { useContext } from "react";
import { CartContext } from "./CartContext.context";

// Hook personalizado para usar el contexto
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("Not Found");
  }
  return context;
}
