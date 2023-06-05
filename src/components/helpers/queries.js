//llamar la variable de entorno
const URL_USUARIO = import.meta.env.VITE_API_USUARIO

export const login = async (usuario) =>{
    console.log(usuario);
    try{
        const respuesta = await fetch (URL_USUARIO)
        const listaUsuarios = await respuesta.json();
        console.log(listaUsuarios)
        //buscar
        const usuarioBuscado = listaUsuarios.find((itemUsuario)=>itemUsuario.email === usuario.email)
        if(usuarioBuscado){
            console.log('Email encontrado')
            //verificar el pass
            if(usuarioBuscado.password === usuario.password){
                console.log('Encontramos el usuario')
                return usuarioBuscado;
            }else{
                console.log('Contraseña incorrecta')
                return null;
            }
        }else{
            console.log('email incorrecto')
            return null;
        }
    }catch(e){
        console.log(e)
    }
}