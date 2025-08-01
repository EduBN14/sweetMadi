import Heading from "../atomo/heading"; 
import Text from "../atomo/text";

export default function HeroText() {
  return (
    <div className="flex flex-col items-center justify-center text-center p-4">
      <Heading level={1} className="text-7xl font-medium mb-4 font-pacifico">
        Welcome to Sweet Madi ❤️
      </Heading>
      <Text className="text-2xl text-gray-700 mb-6 my-4">
        ¡Tu tienda única para todo lo dulce y delicioso!
      </Text>
      <Text className="text-2xl">
        Explora nuestra amplia gama de productos y disfruta de la dulzura de la vida.
      </Text>
    </div>
  );
}