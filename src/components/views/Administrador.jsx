import React, { useState, useEffect } from "react";
import { Container, Table, Button } from "react-bootstrap";
import ItemProducto from "./producto/ItemProducto";
import { obtenerProductos } from "../helpers/queries";

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
      <section className="d-flex justify-content-between">
      <h1 className="display-6 mb-4">Productos disponibles</h1>
        <Button variant="primary" className="mb-4">Agregar</Button>
      </section>
      <Table bordered hover variant="dark" responsive>
        <thead>
          <tr>
            <th>Cod</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>Imagen</th>
            <th>Categoria</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {
            productos.map((producto)=><ItemProducto key={producto.id} producto={producto}></ItemProducto>)
          }  
        </tbody>
      </Table>
    </Container>
  );
};

export default Administrador;
