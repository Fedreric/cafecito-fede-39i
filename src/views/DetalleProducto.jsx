import { Container, Row } from "react-bootstrap";

const DetalleProducto = () => {
  return (
    <div>
      <Row xs={1} md={2}>
        <Container>
          <Card.Img
            variant="top"
            src="https://cdn7.kiwilimon.com/recetaimagen/36986/640x640/46349.jpg.webp"
          />
        </Container>
        <Container>
            <h2>Nombre del producto</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eum nemo similique quo non quam dolor nulla! Molestiae iusto error quod alias nulla velit adipisci quidem. Obcaecati facere sapiente doloribus? Nulla pariatur, autem tenetur alias ea delectus vel praesentium excepturi.</p>
            <p><span>Categoria:</span> Café</p> 
            <p><span>Precio:</span> $900.00</p> 
        </Container>
      </Row>
    </div>
  );
};

export default DetalleProducto;
