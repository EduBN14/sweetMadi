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
    priceMolde?: number;
}

export default function Card({ id, nombre, descripcion, precio = 3.00, img = "", priceMolde }: CardProps) {
    const { cart, addToCart, removeFromCart } = useCart();
    
    // Buscar si el item ya está en el carrito
    const cartItem = cart.items.find(item => item.id === id.toString());
    const quantityInCart = cartItem ? cartItem.cantidad : 0;

    const handleAddToCart = () => {
        addToCart({
            id: id.toString(),
            nombre,
            precio,
            img,
            descripcion
        });
    };

    const handleAddMoldeToCart = () => {
        if (priceMolde) {
            addToCart({
                id: `${id}-molde`,
                nombre: `${nombre} (Molde completo)`,
                precio: priceMolde,
                img,
                descripcion: `${descripcion} - Molde completo`
            });
        }
    };

    const handleRemoveFromCart = () => {
        removeFromCart(id.toString());
    };

    return (
        <div key={id} className="border p-4 rounded-lg">
            <Heading level={2} className="text-2xl font-bold mb-4">
                {nombre}
            </Heading>
            <Text className="text-lg text-gray-700 mb-2">
                {descripcion}
            </Text>
            
            {/* Mostrar precios */}
            <div className="mb-4">
                <Text className="text-xl font-semibold text-raspberry-pink">
                    Por unidad: S/ {precio.toFixed(2)}
                </Text>
                {priceMolde && (
                    <Text className="text-lg font-medium text-blue-600">
                        Molde completo: S/ {priceMolde.toFixed(2)}
                    </Text>
                )}
            </div>
            
            <div className="space-y-3">
                {/* Sección por unidad */}
                <div className="flex items-center justify-between border rounded-lg p-3 bg-gray-50">
                    <Text className="font-medium text-gray-700">Por unidad:</Text>
                    {quantityInCart === 0 ? (
                        <button
                            onClick={handleAddToCart}
                            className="bg-raspberry-pink text-white px-4 py-2 rounded-lg hover:bg-raspberry-600 transition text-sm"
                        >
                            Agregar al carrito
                        </button>
                    ) : (
                        <div className="flex items-center gap-3">
                            <QuantityButton productId={id.toString()} />
                            <Text className="text-green-600 font-semibold text-sm">
                                En carrito: {quantityInCart}
                            </Text>
                            <button
                                onClick={handleRemoveFromCart}
                                className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition text-sm"
                            >
                                Eliminar
                            </button>
                        </div>
                    )}
                </div>
                
                {/* Sección por molde (solo si existe precio por molde) */}
                {priceMolde && (
                    <div className="flex items-center justify-between border rounded-lg p-3 bg-blue-50">
                        <Text className="font-medium text-blue-700">Molde completo:</Text>
                        <button
                            onClick={handleAddMoldeToCart}
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm"
                        >
                            Agregar molde
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}