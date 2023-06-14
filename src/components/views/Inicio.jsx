import {Image, Container, Row} from 'react-bootstrap';
import CardProducto from './producto/CardProducto';
const Inicio = () => {
    return (
        <>
        <Image src="https://media.glamour.mx/photos/6190b72fa6e030d64810483c/master/w_1600%2Cc_limit/225340.jpg" fluid />
        <Container className='mb-5'>
            <h1 className='text-center display-4 my-5'>Nuestros Productos</h1>
            <Row xs={1} md={2} lg={3}>
                <CardProducto></CardProducto>
                <CardProducto></CardProducto>
                <CardProducto></CardProducto>
                <CardProducto></CardProducto>
                <CardProducto></CardProducto>
                <CardProducto></CardProducto>
            </Row>
        </Container>
        </>
    );
};

export default Inicio;