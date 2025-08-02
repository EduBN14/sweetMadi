import { useCart } from "../../context/useCart";
import Text from "../atomo/text";

export default function CartSummary() {
  const { cart, removeFromCart, clearCart } = useCart();
  
  const handleRemoveItem = (productId: string) => {
    removeFromCart(productId);
  };
  
  const handleClearCart = () => {
    if (window.confirm('¿Estás seguro de que quieres vaciar todo el carrito?')) {
      clearCart();
    }
  };
  
  if (cart.itemCount === 0) {
    return (
      <div className="fixed top-4 right-4 z-50 bg-raspberry-pink text-gray-500 px-4 py-2 rounded-lg shadow-lg border">
        <Text className="text-white text-sm">
          Carrito vacío
        </Text>
      </div>
    );
  }
  
  return (
    <div className="fixed top-4 right-4 z-50 bg-white border border-gray-200 rounded-lg shadow-lg max-w-sm w-80">
      {/* Header del carrito */}
      <div className="bg-raspberry-pink text-white px-4 py-2 rounded-t-lg flex justify-between items-center">
        <Text className="font-semibold text-white text-sm">
          🛒 Carrito ({cart.itemCount} {cart.itemCount === 1 ? 'item' : 'items'})
        </Text>
        <button
          onClick={handleClearCart}
          className="text-white hover:text-red-200 transition text-xs bg-red-500 hover:bg-red-600 px-2 py-1 rounded"
          title="Vaciar carrito"
        >
          🗑️ Vaciar
        </button>
      </div>
      
      {/* Lista de productos */}
      <div className="max-h-60 overflow-y-auto">
        {cart.items.map((item) => (
          <div key={item.id} className="border-b border-gray-100 px-4 py-3 last:border-b-0">
            <div className="flex justify-between items-start">
              <div className="flex-1 min-w-0">
                <Text className="font-medium text-gray-900 text-sm truncate">
                  {item.nombre}
                </Text>
                <div className="flex items-center gap-2 mt-1">
                  <Text className="text-gray-600 text-xs">
                    Cantidad: {item.cantidad}
                  </Text>
                  <Text className="text-gray-600 text-xs">
                    c/u: S/ {item.precio.toFixed(2)}
                  </Text>
                </div>
              </div>
              <div className="flex items-center gap-2 ml-2">
                <Text className="font-semibold text-raspberry-pink text-sm">
                  S/ {(item.precio * item.cantidad).toFixed(2)}
                </Text>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="text-red-500 hover:text-red-700 transition text-xs bg-red-50 hover:bg-red-100 p-1 rounded"
                  title="Eliminar producto"
                >
                  ❌
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Total */}
      <div className="bg-gray-50 px-4 py-3 rounded-b-lg border-t border-gray-200">
        <div className="flex justify-between items-center">
          <Text className="font-bold text-gray-900">
            Total:
          </Text>
          <Text className="font-bold text-raspberry-pink text-lg">
            S/ {cart.total.toFixed(2)}
          </Text>
        </div>
      </div>
    </div>
  );
}
