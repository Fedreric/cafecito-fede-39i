import { Button, Form, Container } from "react-bootstrap";

const EditarProducto = () => {
    return (
        <Container className="my-5">
      <h1 className="display-6">Editar Producto</h1>
      <hr />
      <Form>
        <Form.Group className="mb-3" controlId="producto">
          <Form.Label>Producto*</Form.Label>
          <Form.Control type="text" placeholder="Ej: Café" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="precio">
          <Form.Label>Precio*</Form.Label>
          <Form.Control type="number" placeholder="Ej: 50" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="imagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control type="text" placeholder="https://cdn7.kiwilimon.com/recetaimagen/36986/640x640/46349.jpg.webp" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="categoria">
          <Form.Label>Categoria*</Form.Label>
          <Form.Select>
          <option>Categoria 1</option>
          <option>Categoria 2</option>
          <option>Categoria 3</option>
          <option>Categoria 4</option>
          <option>Categoria 5</option>
        </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="descripcion">
          <FloatingLabel
            controlId="floatingTextarea"
            label="Descripcion*"
            className="mb-3"
          >
            <Form.Control as="textarea" placeholder="Leave a comment here" />
          </FloatingLabel>
        </Form.Group>
        <Button variant="primary" type="submit">
          Editar
        </Button>
      </Form>
    </Container>
    );
};

export default EditarProducto;