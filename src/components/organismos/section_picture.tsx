import { clsx } from 'clsx';
import { galletasDB } from "../../db/catalgoDB";
import Pictures from "../molecula/pictures";

export function PicturesSection() {
  const sectionClasses = clsx(
    'grid gap-4 mx-auto px-4 grid-cols-1',
    'sm:grid-cols-2 sm:gap-6 sm:px-6',
    'md:grid-cols-2 md:gap-8 md:px-12',
    'lg:grid-cols-3 lg:gap-8 lg:px-16',
    'xl:grid-cols-4 xl:gap-6 xl:px-4'
  );

  return (
    <section className={sectionClasses}>
      {galletasDB.map((galleta) => (
        <Pictures key={galleta.id} src={galleta.img} alt={galleta.nombre} />
      ))}
    </section>
  );
}
