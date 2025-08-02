import { createContext } from "react";
import type { CartContextType } from "../models/cart_types";

// Crear el contexto
export const CartContext = createContext<CartContextType | undefined>(undefined);
