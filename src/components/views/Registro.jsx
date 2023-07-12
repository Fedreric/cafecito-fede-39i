import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { consultaCrearUsuario } from "../helpers/queries";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Registro = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navegacion = useNavigate();

  const onSubmit = (usuario) => {
    //agregar un usuario nuevo a la db
    console.log(usuario)
    consultaCrearUsuario(usuario).then((respuesta) => {
      if (respuesta.status === 201) {
        Swal.fire("Usuario creado!", `Inicia sesi'on`, "success");
        navegacion("/login");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Error al crear usuario!",
        });
      }
    });
  };

  // const onSubmit = (producto) => {
  //   console.log(producto);
  //   //agregar producto a la api
  //   consultaCrearProducto(producto).then((respuesta)=>{
  //     console.log(respuesta)
  //     if(respuesta.status === 201){
  //       Swal.fire(
  //         'Producto creado!',
  //         `El producto "${producto.nombreProducto}" fue creado`,
  //         'success'
  //       )
  //       reset();
  //     }else{
  //       Swal.fire({
  //         icon: 'error',
  //         title: 'Oops...',
  //         text: 'Algo falló!',
  //       })
  //     }
  //   })
  // };

  return (
    <div className="mt-5 mainSection">
      <h3 className="text-center">Registro</h3>
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-xl-4">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-2">
              <Form.Control
                type="text"
                placeholder="Ingrese un nombre de usuario"
                {...register("nombreUsuario", {
                  required: "Ingrese un nombre de usuario",
                  minLength: {
                    value: 4,
                    message:
                      "El usuario debe contener como minimo 4 caracteres",
                  },
                  maxLength: {
                    value: 20,
                    message:
                      "El usuario debe contener como maximo 20 caracteres",
                  },
                })}
              />
              <Form.Text className="text-danger fst-italic">
                {errors.usuario?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Control
                placeholder="Ingrese un email"
                {...register("email", {
                  required: "El email es obligatorio",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "El email ingresado es incorrecto",
                  },
                })}
              />
              <Form.Text className="text-danger fst-italic">
                {errors.email?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Control
                type="password"
                placeholder="Ingrese un password"
                {...register("password", {
                  required: "El password es obligatorio",
                  pattern: {
                    value:
                      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                    message:
                      "La contraseña debe contener una Mayuscula, caracter especial y numero",
                  },
                })}
              />
              <Form.Text className="text-danger fst-italic">
                {errors.password?.message}
              </Form.Text>
            </Form.Group>
            <div className="row">
              <Button
                className="btn btn-dark btn-lg btn-block mb-2"
                type="submit"
              >
                Registrar
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Registro;
