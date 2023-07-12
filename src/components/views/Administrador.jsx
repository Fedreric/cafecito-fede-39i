import React, { useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import ItemProducto from "./producto/ItemProducto";
import { obtenerProductos } from "../helpers/queries";
import { Link } from "react-router-dom";

const Administrador = () => {
  const [productos, setProductos] = useState([]);
  useEffect(()=>{
    obtenerProductos().then((respuesta)=>{
      console.log(respuesta);
      setProductos(respuesta);
      //resolver que sucede al no iniciar la api
    })
  },[])
  return (
    <Container className="my-5">
      <section className="d-flex justify-content-between align-items-center">
      <h1 className="display-6 mb-4">Productos disponibles</h1>
        <Link className="btn btn-primary" to={"/administrador/crear"}>Agregar</Link>
      </section>
      <Table bordered hover variant="dark" responsive>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Imagen</th>
            <th>Categoria</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {
            productos.map((producto)=><ItemProducto key={producto._id} producto={producto} setProductos={setProductos}></ItemProducto>)
          }  
        </tbody>
      </Table>
    </Container>
  );
};

export default Administrador;
