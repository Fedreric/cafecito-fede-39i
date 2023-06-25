import { Card, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardProducto = ({producto}) => {
  /*
  "nombreProducto": "Te clásico",
      "precio": "350",
      "imagen": "https://static.eldiario.es/clip/1a916b0b-a4db-40d9-bc84-78ac9fb04a29_16-9-aspect-ratio_default_0.jpg",
      "categoria": "bebida caliente",
      "descripcion": "Té clásico",
      "id": 4
  */ 
 return (
    <Container>
      <Card className="m-1 p-0">
        <Card.Img
          variant="top"
          src={producto.imagen}
        />
        <Card.Body>
          <Card.Title>{producto.nombreProducto}</Card.Title>
          <Card.Text>$ {producto.precio}</Card.Text>
          <Link className="btn btn-primary" to={'/detalle/'+producto.id}>Ver detalle</Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CardProducto;
