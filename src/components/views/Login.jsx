import { Form, Button, Container, Card } from "react-bootstrap";
import { login } from "../helpers/queries";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";

const Login = ({ setUsuarioLogeado }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const navegacion = useNavigate();
  
  const onSubmit = (usuario) =>{
      login(usuario).then((respuesta)=>{
        if(respuesta.status === 200){
            //debo loguear al usuario
            sessionStorage.setItem('usuario', JSON.stringify(respuesta));
            setUsuarioLogeado(respuesta);
            Swal.fire('Listo', 'Disfruta nuestros productos!','success');
            navegacion('/')
        }else{
            //Mensaje de error al usuario
            Swal.fire('ERROR', 'Email o password incorrecto','error');
        }
      })
  }

  return (
    <Container className="mainSection">
      <Card className="my-5">
        <Card.Header as="h5">Login</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Ingrese un email" 
                {
                    ...register('email',{
                        required: 'El email es obligatorio',
                        pattern:{
                          value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                          message:"El email ingresado es incorrecto"
                        }
                    })
                }
              />
              <Form.Text className="text-danger fst-italic">
                {errors.email?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" {
                    ...register('password',{
                        required: 'El password es obligatorio',
                        pattern: {
                            value:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                            message: "La contraseña debe contener una Mayuscula, caracter especial y numero"
                        }
                    })
                }
              />
              <Form.Text className="text-danger fst-italic">
                {errors.password?.message}
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
              Ingresar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
