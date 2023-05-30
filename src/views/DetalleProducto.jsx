import { Container, Row, Image } from "react-bootstrap";

const DetalleProducto = () => {
  return (
    <Container className="my-5">
      <Row xs={1} md={2}>
        <Container className="mb-4">
        <Image src="https://cdn7.kiwilimon.com/recetaimagen/36986/640x640/46349.jpg.webp" fluid className="ounded" />
        </Container>
        <Container>
            <h2 className="display-6 text-center">Nombre del producto</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eum nemo similique quo non quam dolor nulla! Molestiae iusto error quod alias nulla velit adipisci quidem. Obcaecati facere sapiente doloribus? Nulla pariatur, autem tenetur alias ea delectus vel praesentium excepturi.</p>
            <p><b className="text-danger">Categoria:</b> Café</p> 
            <p><b className="text-danger">Precio:</b> $900.00</p> 
        </Container>
      </Row>
    </Container>
  );
};

export default DetalleProducto;
