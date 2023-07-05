import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardProducto = ({ producto }) => {
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
          <Link className="btn btn-primary" to={'/detalle/'+producto._id}>Ver detalle</Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CardProducto;
