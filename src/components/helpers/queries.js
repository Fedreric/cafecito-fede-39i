//llamar la variable de entorno
/*
GET: Obtener elemento/s
POST: Crear un elemento
PUT: Editar un elemento
DELETE: Borrar un elemento
PATH: Modifica una propiedad del elemento
*/

const URL_USUARIO = import.meta.env.VITE_API_USUARIO;
const URL_PRODUCTO = import.meta.env.VITE_API_PRODUCTO;
export const login = async (usuario) =>{
    try {
      console.log(usuario);
      const respuesta = await fetch(URL_USUARIO, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuario),
      });
      const datos = await respuesta.json();
      return {
        status: respuesta.status,
        mensaje: datos.mensaje,
        usuario: datos.nombre,
        uid: datos.uid
      };
    
    } catch (error) {
      console.log("errores en el login");
      return;
    }
  }

export const obtenerProductos = async () =>{
    try{
        const respuesta = await fetch(URL_PRODUCTO);
        const listaProductos = await respuesta.json();
        return listaProductos;
    }catch(e){
        console.log(e); 
    }
}
export const obtenerProducto = async (id) =>{
    try{
        const respuesta = await fetch(`${URL_PRODUCTO}/${id}`);
        const producto = await respuesta.json();
        return producto;
    }catch(e){
        console.log(e); 
    }
}

export const consultaBorrarProducto = async (id) =>{
    try{
        const respuesta = await fetch(`${URL_PRODUCTO}/${id}`,{
            method:"DELETE"
        });
        return respuesta;
    }catch(e){
        console.log(e); 
    }
}
export const consultaCrearProducto = async (producto) =>{
    console.log(producto)
    try{
        const respuesta = await fetch(URL_PRODUCTO,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(producto)
        });
        console.log('respuesta' + respuesta)
        return respuesta;
    }catch(e){
        console.log(e); 
    }
}
export const consultaEditarProducto = async (producto,id) =>{
    try{
        console.log(producto)
        const respuesta = await fetch(URL_PRODUCTO+"/"+id,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(producto)
        });
        return respuesta;
    }catch(e){
        console.log(e); 
    }
}