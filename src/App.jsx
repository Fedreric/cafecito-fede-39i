import 'bootstrap/dist/css/bootstrap.min.css';  
import './App.css'
import Menu from './components/common/Menu';
import FooterFedeLedesma from './components/common/FooterFedeLedesma';
import Inicio from './views/Inicio';

function App() {

  return (
    <>
      <section className='mainPage'>
        <header>
        <Menu></Menu>
        </header>
        <Inicio></Inicio>
      </section>
      <FooterFedeLedesma></FooterFedeLedesma>
    </>
  )
}

export default App
