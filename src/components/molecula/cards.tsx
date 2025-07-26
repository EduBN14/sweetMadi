import Heading from "../atomo/heading";
import Text from "../atomo/text";
import { galletasDB } as GalleDB from "../../db/catalgoDB";

export default function Card(
) {
    return (
        <div>
            galletasDB.
            <Heading level={2} className="text-2xl font-bold mb-4">
                {heading}
            </Heading>
            <Text className="text-lg text-gray-700 mb-2">
                {text}
            </Text>
        </div>

    )
}