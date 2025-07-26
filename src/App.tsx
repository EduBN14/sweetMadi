import './App.css'
import Butonwssp from './components/atomo/butonwssp/butonwssp'
import Card from './components/molecula/cards'
import HeroText from './components/molecula/herotext'

function App() {

  return (
    <>
      <div>
        <HeroText />
      </div>
      <Butonwssp phone="51964158504" message="Hola, estoy interesado en sus productos." newTab={true} variant="primary" disabled={false} />
      <div>
        <Card heading='galletas' text='galletas de chocolate' />
      </div>
    </>
  )
}

export default App
