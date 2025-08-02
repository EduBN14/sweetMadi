import Buton from "../atomo/buton.tsx";
import { useCart } from "../../context/useCart";

export type WhatsAppButtonProps = {
  phone?: string;           
  newTab?: boolean;         
  variant?: "primary" | "secondary";
  disabled?: boolean;
  classname?: string;
};

export default function Butonwssp({
  phone = "51964158504",  
  newTab = true,
  variant = "primary",    
  disabled = false,       
}: WhatsAppButtonProps) {
  
  const { cart } = useCart();
  
  const handleClick = () => {
    if (disabled) return;
    
    // Generar mensaje detallado del carrito
    let message = "¡Hola! Me interesa realizar el siguiente pedido:\n\n";
    
    if (cart.itemCount === 0) {
      message = "Hola, estoy interesado en sus productos.";
    } else {
      message += "🛒 *DETALLE DEL PEDIDO:*\n";
      message += "━━━━━━━━━━━━━━━━━━━━━\n\n";
      
      // Agregar cada producto
      cart.items.forEach((item, index) => {
        message += `${index + 1}. *${item.nombre}*\n`;
        message += `   📦 Cantidad: ${item.cantidad}\n`;
        message += `   💰 Precio c/u: S/ ${item.precio.toFixed(2)}\n`;
        message += `   💵 Subtotal: S/ ${(item.precio * item.cantidad).toFixed(2)}\n\n`;
      });
      
      message += "━━━━━━━━━━━━━━━━━━━━━\n";
      message += `🧮 *TOTAL GENERAL: S/ ${cart.total.toFixed(2)}*\n`;
      message += `📋 Total de items: ${cart.itemCount}\n\n`;
      message += "¿Podrían confirmar la disponibilidad y el tiempo de entrega?\n\n";
      message += "¡Gracias! 😊";
    }
    
    const textParam = `?text=${encodeURIComponent(message)}`;
    const url = `https://wa.me/${phone}${textParam}`;
    
    if (newTab) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = url;
    }
  };

  return (
    <Buton
      onClick={handleClick}
      variant={variant}
      disabled={disabled}
      type="button"
    >
      {cart.itemCount > 0 ? `Enviar Pedido (${cart.itemCount} items)` : "Contactanos por WhatsApp"}
    </Buton>
  );
}