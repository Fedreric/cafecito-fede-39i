import 'bootstrap/dist/css/bootstrap.min.css';  
import './App.css'
import Menu from './components/common/Menu';
import FooterFedeLedesma from './components/common/FooterFedeLedesma';

function App() {

  return (
    < >
      <section className='mainPage'>
        <header>
        <Menu></Menu>
        </header>
      </section>
      <FooterFedeLedesma></FooterFedeLedesma>
    </>
  )
}

export default App
