import { galletasDB } from "../../db/catalgoDB";
import Pictures from "../molecula/pictures";

export function PicturesSection() {
  return (
    <section className="grid grid-cols-3 grid-rows-2 gap-4">
      {galletasDB.map((galleta) => (
        <Pictures key={galleta.id} src={galleta.img} alt={galleta.nombre} />
      ))}
    </section>
  );
}
