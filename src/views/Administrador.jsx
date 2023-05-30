import React from "react";
import { Container, Table, Button } from "react-bootstrap";
import ItemProducto from "./producto/ItemProducto";

const Administrador = () => {
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
          <ItemProducto></ItemProducto>
          <ItemProducto></ItemProducto>
        </tbody>
      </Table>
    </Container>
  );
};

export default Administrador;
