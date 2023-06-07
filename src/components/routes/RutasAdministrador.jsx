import { Routes, Route } from "react-router-dom";
import CrearProducto from "../views/producto/CrearProducto";
import Administrador from "../views/Administrador";
import EditarProducto from "../views/producto/EditarProducto";

const RutasAdministrador = () => {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={<Administrador></Administrador>}
        ></Route>
        <Route
          exact
          path="/crear"
          element={<CrearProducto></CrearProducto>}
        ></Route>
        <Route
          exact
          path="/editar"
          element={<EditarProducto></EditarProducto>}
        ></Route>
      </Routes>
    </>
  );
};

export default RutasAdministrador;
