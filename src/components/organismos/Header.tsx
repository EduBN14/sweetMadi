import HeroText from '../molecula/herotext';
import Butonwssp from '../molecula/butonwssp';
import CartSummary from '../molecula/CartSummary';

export default function Header() {
  return (
    <header className="mb-8">
      {/* Carrito fijo - se renderiza pero se posiciona de forma fija */}
      <CartSummary />
      
      <div className="flex flex-col md:flex-row items-center gap-4 mx-auto px-4 md:px-24">
        <img
          src="src/assets/img/Logo_circular.png"
          alt="Sweet Madi Logo"
          className="w-48 sm:w-56 md:w-64 max-w-full h-auto object-contain rounded-lg"
        />
        <HeroText />
      </div>
      <div className="mt-6 mx-auto w-fit">
        <Butonwssp />
      </div>
    </header>
  );
}
