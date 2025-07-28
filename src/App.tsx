import './App.css'
import HeroText from './components/molecula/herotext'
import Butonwssp from './components/organismos/butonwssp'
import SectionCards from './components/organismos/section_cards'
import { PicturesSection } from './components/organismos/section_picture'

function App() {

  return (
    <>
      <header>
        <HeroText />
        <Butonwssp phone="51964158504" message="Hola, estoy interesado en sus productos." newTab={true} variant="primary" disabled={false} />
      </header>
      <main className="my-8">
        <SectionCards />
      </main>
      <section className="my-8">
        <PicturesSection />
      </section>
      <footer className='footer'>
        <p>© 2025 Sweet Madi. Todos los derechos reservados.</p>
      </footer>
    </>
  )
}

export default App
