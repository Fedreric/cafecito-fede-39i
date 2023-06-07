import { Button, Form, Container, FloatingLabel } from "react-bootstrap";
import { useForm } from "react-hook-form";

const EditarProducto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (producto) => {
    console.log(producto);
  };
    return (
        <Container className="my-5">
      <h1 className="display-6">Editar Producto</h1>
      <hr />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="producto">
          <Form.Label>Producto*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Café"
            {...register("producto", {
              required: "El nombre del producto es obligatorio",
              minLength: {
                value: 4,
                message: "El nombre debe contener como minimo 4 caracteres",
              },
              maxLength: {
                value: 20,
                message: "El nombre debe contener como maximo 20 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger fst-italic">
            {errors.producto?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="precio">
          <Form.Label>Precio*</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej: 50"
            {...register("precio", {
              required: "El precio del producto es obligatorio",
              min: {
                value: 10,
                message: "El precio no puede ser menor a 10",
              },
              max: {
                value: 20000,
                message: "El precio no puede ser mayor a 20000",
              },
            })}
          />
          <Form.Text className="text-danger fst-italic">
            {errors.precio?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="imagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="https://cdn7.kiwilimon.com/recetaimagen/36986/640x640/46349.jpg.webp"
            {...register("urlImagen", {
              required: "El url de la imagen es obligatorio",
              pattern: {
                value: /^(https?:\/\/.*\.(?:jpg|png|jpeg|webp))$/,
                message: "El link no cumple las normas (jpg,png,jpeg,webp)",
              },
              maxLength: {
                value: 250,
                message: "La url no puede contener mas de 250 ch",
              },
            })}
          />
          <Form.Text className="text-danger fst-italic">
            {errors.urlImagen?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="categoria">
          <Form.Label>Categoria*</Form.Label>
          <Form.Select
            {...register("categoria", {
              required: "Selecciona una categoria",
            })}
          >
            <option value=''>Seleccione una categoria</option>
            <option value='salado'>Salado</option>
            <option value='dulce'>Dulce</option>
            <option value='bebida caliente'>Bebida caliente</option>
            <option value='bebida fria'>Bebida fria</option>
          </Form.Select>
          <Form.Text className="text-danger fst-italic">
            {errors.categoria?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="descripcion">
          <FloatingLabel
            controlId="floatingTextarea"
            label="Descripcion*"
            className="mb-3"
          >
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              {...register("descripcion", {
                required: "Ingresa una descripcion para el producto",
                minLength: {
                  value: 8,
                  message: "La descripcion debe contener como minimo 8 ch",
                },
                maxLength: {
                  value: 400,
                  message: "La descripcion debe contener como maximo 400 ch",
                },
              })}
            />
          </FloatingLabel>
          <Form.Text className="text-danger fst-italic">
            {errors.descripcion?.message}
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Agregar
        </Button>
      </Form>
    </Container>
    );
};

export default EditarProducto;