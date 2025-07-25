import Heading from "../atomo/heading";
import Text from "../atomo/text";

type CardProps = {
    heading: string;
    text: string;
};

export default function Card(
    { heading, text }: CardProps
) {
    return (
        <div>
            <Heading level={2} className="text-2xl font-bold mb-4">
                {heading}
            </Heading>
            <Text className="text-lg text-gray-700 mb-2">
                {text}
            </Text>
        </div>

    )
}