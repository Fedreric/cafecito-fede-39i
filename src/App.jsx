import 'bootstrap/dist/css/bootstrap.min.css';  
import './App.css'
import Menu from './components/common/Menu';
import FooterFedeLedesma from './components/common/FooterFedeLedesma';
import Inicio from './views/Inicio';
import Error404 from './views/Error404';
import DetalleProducto from './views/DetalleProducto';
import Administrador from './views/Administrador';
import CrearProducto from './views/producto/CrearProducto';
import EditarProducto from './views/producto/EditarProducto';

function App() {

  return (
    <>
      <section className='mainPage'>
        <header>
        <Menu></Menu>
        </header>
        {/* <Inicio></Inicio> */}
      {/* <Error404></Error404> */}
      {/* <DetalleProducto></DetalleProducto> */}
      {/* <Administrador></Administrador> */}
      {/* <CrearProducto></CrearProducto> */}
      <EditarProducto></EditarProducto>
      </section>
      <FooterFedeLedesma></FooterFedeLedesma>
    </>
  )
}

export default App
