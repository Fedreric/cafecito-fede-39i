import { useEffect, useState } from "react";
import { Container, Row, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { obtenerProducto } from "../helpers/queries";
const DetalleProducto = () => {
  const {id} = useParams();
  const [producto, setProducto] = useState({})
  useEffect(()=>{
    obtenerProducto(id).then((respuesta)=>{
      setProducto(respuesta);
    })
  },[])
  return (
    <Container className="my-5">
      <Row xs={1} md={2}>
        <Container className="mb-4">
        <Image src={producto.imagen} fluid className="ounded" />
        </Container>
        <Container>
            <h2 className="display-6 text-center">{producto.nombreProducto}</h2>
            <p>{producto.descripcion}</p>
            <p><b className="text-danger">Categoria:</b> {producto.categoria}</p> 
            <p><b className="text-danger">Precio:</b> ${producto.precio}</p> 
        </Container>
      </Row>
    </Container>
  );
};

export default DetalleProducto;
