import { useState } from "react";
import Heading from "../atomo/heading";
import QuantityButton from "../atomo/quantitybutton";
import Text from "../atomo/text";
import { useCart } from "../../context/useCart";

type CardProps = {
    id: number;
    nombre: string;
    descripcion: string;
    precio?: number;
    img?: string;
}

export default function Card({ id, nombre, descripcion, precio = 0, img = "" }: CardProps) {
    const { cart, updateQuantity, addToCart } = useCart();
    const [localQuantity, setLocalQuantity] = useState(1);
    
    // Buscar si el item ya está en el carrito
    const cartItem = cart.items.find(item => item.id === id.toString());
    const quantityInCart = cartItem ? cartItem.cantidad : 0;

    const handleIncrease = () => {
        if (quantityInCart > 0) {
            // Si ya está en el carrito, actualizar directamente
            updateQuantity(id.toString(), quantityInCart + 1);
        } else {
            // Si no está en el carrito, aumentar cantidad local
            setLocalQuantity(prev => prev + 1);
        }
    };

    const handleDecrease = () => {
        if (quantityInCart > 0) {
            // Si está en el carrito, actualizar directamente
            updateQuantity(id.toString(), quantityInCart - 1);
        } else {
            // Si no está en el carrito, disminuir cantidad local
            setLocalQuantity(prev => Math.max(1, prev - 1));
        }
    };

    const handleAddToCart = () => {
        addToCart({
            id: id.toString(),
            nombre,
            precio,
            img,
            descripcion
        });
        setLocalQuantity(1); // Resetear cantidad local
    };

    const displayQuantity = quantityInCart > 0 ? quantityInCart : localQuantity;


    return (
        <div key={id} className="border p-4 rounded-lg">
            <Heading level={2} className="text-2xl font-bold mb-4">
                {nombre}
            </Heading>
            <Text className="text-lg text-gray-700 mb-2">
                {descripcion}
            </Text>
            
            {/* Mostrar precio si está disponible */}
            {precio > 0 && (
                <Text className="text-xl font-semibold text-raspberry-pink mb-4">
                    S/ {precio.toFixed(2)}
                </Text>
            )}
            
            <div className="flex items-center justify-between">
                <QuantityButton
                    quantity={displayQuantity}
                    onIncrease={handleIncrease}
                    onDecrease={handleDecrease}
                />
                
                {quantityInCart === 0 ? (
                    <button
                        onClick={handleAddToCart}
                        className="bg-raspberry-pink text-white px-4 py-2 rounded-lg hover:bg-raspberry-dark transition"
                    >
                        Agregar al carrito
                    </button>
                ) : (
                    <Text className="text-green-600 font-semibold">
                        En el carrito: {quantityInCart}
                    </Text>
                )}
            </div>
        </div>
    )
}