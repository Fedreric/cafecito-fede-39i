import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Menu from "./components/common/Menu";
import FooterFedeLedesma from "./components/common/FooterFedeLedesma";
import Inicio from "./components/views/Inicio";
import Error404 from "./components/views/Error404";
import DetalleProducto from "./components/views/DetalleProducto";
import Administrador from "./components/views/Administrador";
import Registro from "./components/views/Registro";
import CrearProducto from "./components/views/producto/CrearProducto";
import EditarProducto from "./components/views/producto/EditarProducto";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/views/Login";
import { useState } from "react";
import RutasProtegidas from "./components/routes/RutasProtegidas";
import RutasAdministrador from "./components/routes/RutasAdministrador";

function App() {
  const usuarioSesionStorage = JSON.parse(sessionStorage.getItem('usuario')) || {};
  const [usuarioLogueado, setUsuarioLogeado] = useState(usuarioSesionStorage);

  return (
    <BrowserRouter>
      <section className="mainPage">
        <header>
          <Menu usuarioLogueado={usuarioLogueado} setUsuarioLogeado={setUsuarioLogeado}></Menu>
        </header>
        <Routes>
          <Route exact path="/" element={<Inicio></Inicio>}></Route>
          <Route exact path="/registro" element={<Registro></Registro>}></Route>
          <Route exact path="/login" element={<Login setUsuarioLogeado={setUsuarioLogeado}></Login>}></Route>
          <Route path="/administrador/*" element={
            <RutasProtegidas>
              <RutasAdministrador></RutasAdministrador>
            </RutasProtegidas>
          }></Route>
          <Route
            exact
            path="/detalle/:id"
            element={<DetalleProducto></DetalleProducto>}
          ></Route>
          <Route path="*" element={<Error404></Error404>}></Route>
        </Routes>
      </section>
      <FooterFedeLedesma></FooterFedeLedesma>
    </BrowserRouter>
  );
}

export default App;
