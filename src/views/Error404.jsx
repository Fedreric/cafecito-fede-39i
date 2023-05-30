import { Image, Button, Container } from "react-bootstrap";

const Error404 = () => {
  return (
    <Container className="text-center">
      <Image
        src="https://static.vecteezy.com/system/resources/previews/003/454/900/non_2x/error-404-with-the-cute-coffee-cup-mascot-free-vector.jpg"
        fluid
        className="error404"
      />
      <div className="my-3">
        <Button>Volver al inicio</Button>
      </div>
    </Container>
  );
};

export default Error404;
