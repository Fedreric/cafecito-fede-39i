import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Registro = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (usuario) => {
    console.log(usuario);
  };

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
                {...register("usuario", {
                  required: "Ingrese el nombre de usuario",
                })}
              />
              <Form.Text className="text-danger fst-italic">
                {errors.usuario?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Control placeholder="Ingrese un email" {...register("email", {
                  required: "Ingrese el email",
                })}/>
                <Form.Text className="text-danger fst-italic">
                {errors.email?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Control type="password" placeholder="Ingrese un password" {...register("password", {
                  required: "Ingrese la password",
                })}/>
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
