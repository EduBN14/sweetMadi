import Card from "../molecula/cards";
import { galletasDB } from "../../db/catalgoDB";
import { parsePrice } from "../../utils/priceUtils";

export default function SectionCards() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {galletasDB.map((galleta) => (
        <Card
          key={galleta.id}
          id={galleta.id}
          nombre={galleta.nombre}
          descripcion={galleta.descripcion}
          precio={parsePrice(galleta.priceUnidad)}
          img={galleta.img}
          priceMolde={galleta.priceMolde ? parsePrice(galleta.priceMolde) : undefined}
        />
      ))}
    </section>
  );
}