import Heading from "../atomo/heading";
import Text from "../atomo/text";

type CardProps = {
    id:number;
    nombre: string;
    descripcion: string;
}
export default function Card({ id, nombre, descripcion }: CardProps) {
    return (
        <div key={id} className="border p-4 rounded-lg">
            <Heading level={2} className="text-2xl font-bold mb-4">
                {nombre}
            </Heading>
            <Text className="text-lg text-gray-700 mb-2">
                {descripcion}
            </Text>
        </div>
    )
}