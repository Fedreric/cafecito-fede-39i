import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { consultaBorrarProducto, obtenerProductos } from "../../helpers/queries";

const ItemProducto = ({producto, setProductos}) => {

  const borrarProducto = () =>{
    Swal.fire({
      title: 'Estas seguro de eliminar el producto?',
      text: "No puedes revertir este cambio!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        //aqui tengo que hacer el delete
        consultaBorrarProducto(producto.id).then((respuesta) =>{
          if(respuesta.status === 200){
            Swal.fire(
              'Producto eliminado!',
              `El producto "${producto.nombreProducto}" fue eliminado`,
              'success'
            )
            obtenerProductos().then((respuesta)=>{
              setProductos(respuesta);
            });
            
          }else{
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Algo falló!',
            })
          }
        })
      }
    })
  }

  return (
    <tr>
      <td>{producto.id}</td>
      <td>{producto.nombreProducto}</td>
      <td>$ {producto.precio}</td>
      <td className='text-truncate'>
      {producto.imagen}
      </td>
      <td>{producto.categoria}</td>
      <td className="d-flex flex-column">
        <Link className="btn btn-warning" to={"/administrador/editar/"+producto.id}>Editar</Link>
        <Button variant="danger" onClick={borrarProducto}>Borrar</Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
