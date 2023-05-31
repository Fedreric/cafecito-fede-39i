import { Card, Button, Container } from "react-bootstrap";

const CardProducto = () => {
  return (
    <Container>
      <Card className="m-1 p-0">
        <Card.Img
          variant="top"
          src="https://cdn7.kiwilimon.com/recetaimagen/36986/640x640/46349.jpg.webp"
        />
        <Card.Body>
          <Card.Title>Latte</Card.Title>
          <Card.Text>$ 900.00</Card.Text>
          <Button variant="primary">Ver detalle</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CardProducto;
