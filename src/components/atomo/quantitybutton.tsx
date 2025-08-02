import clsx from "clsx";
import { useCart } from "../../context/useCart";

type QuantityButtonProps = {
  productId: string;
  min?: number;
  max?: number;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
};

export default function QuantityButton({
  productId,
  min = 1,
  max = 99,
  disabled = false,
  size = "md"
}: QuantityButtonProps) {
  
  const { cart, updateQuantity } = useCart();
  
  // Encontrar el item en el carrito
  const cartItem = cart.items.find(item => item.id === productId);
  const quantity = cartItem?.cantidad || 0;
  
  const canDecrease = quantity > min && !disabled;
  const canIncrease = quantity < max && !disabled;
  
  const handleIncrease = () => {
    if (canIncrease) {
      updateQuantity(productId, quantity + 1);
    }
  };
  
  const handleDecrease = () => {
    if (canDecrease) {
      updateQuantity(productId, quantity - 1);
    }
  };

  const sizeClasses = {
    sm: "w-6 h-6 text-sm",
    md: "w-8 h-8 text-base", 
    lg: "w-10 h-10 text-lg"
  };

  const buttonClass = clsx(
    "flex items-center justify-center rounded font-bold transition-colors",
    "border border-gray-300 hover:bg-gray-100",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    sizeClasses[size]
  );

  return (
    <div className="flex items-center gap-2">
      {/* Botón Disminuir */}
      <button
        onClick={handleDecrease}
        disabled={!canDecrease}
        className={clsx(buttonClass, "text-raspberry-pink hover:bg-raspberry-pink hover:text-white")}
        aria-label="Disminuir cantidad"
      >
        -
      </button>

      {/* Display de cantidad */}
      <span className={clsx(
        "font-semibold text-center min-w-[2rem]",
        size === "sm" && "text-sm",
        size === "md" && "text-base", 
        size === "lg" && "text-lg"
      )}>
        {quantity}
      </span>

      {/* Botón Aumentar */}
      <button
        onClick={handleIncrease}
        disabled={!canIncrease}
        className={clsx(buttonClass, "text-raspberry-pink hover:bg-raspberry-pink hover:text-white")}
        aria-label="Aumentar cantidad"
      >
        +
      </button>
    </div>
  );
}
