import { Image, Container, Row } from "react-bootstrap";
import CardProducto from "./producto/CardProducto";
import { useState, useEffect } from "react";
import { obtenerProductos } from "../helpers/queries";
const Inicio = () => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    obtenerProductos().then((respuesta) => {
      console.log(respuesta);
      setProductos(respuesta);
      //resolver que sucede al no iniciar la api
    });
  }, []);
  return (
    <>
      <Image
        src="https://media.glamour.mx/photos/6190b72fa6e030d64810483c/master/w_1600%2Cc_limit/225340.jpg"
        fluid
      />
      <Container className="mb-5">
        <h1 className="text-center display-4 my-5">Nuestros Productos</h1>
        <Row xs={1} md={2} lg={3}>
            {
             productos.map((producto)=>{
                return <CardProducto key={producto._id} producto={producto}></CardProducto> 
             })
            }
        </Row>
      </Container>
    </>
  );
};

export default Inicio;
