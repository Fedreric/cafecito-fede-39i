import { Button } from "react-bootstrap";

const ItemProducto = () => {
  return (
    <tr>
      <td>1</td>
      <td>Latte</td>
      <td>900</td>
      <td>
        https://cdn7.kiwilimon.com/recetaimagen/36986/640x640/46349.jpg.webp
      </td>
      <td>Café</td>
      <td className="d-flex flex-column">
        <Button variant="warning">Editar</Button>
        <Button variant="danger">Borrar</Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
