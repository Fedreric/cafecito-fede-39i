import React from "react";
import { Container, Table, Button } from "react-bootstrap";

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
          <tr>
            <td>1</td>
            <td>Latte</td>
            <td>900</td>
            <td>https://cdn7.kiwilimon.com/recetaimagen/36986/640x640/46349.jpg.webp</td>
            <td>Café</td>
            <td className="d-flex flex-column"> 
                <Button variant="warning">Editar</Button>
                <Button variant="danger">Borrar</Button> 
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default Administrador;
