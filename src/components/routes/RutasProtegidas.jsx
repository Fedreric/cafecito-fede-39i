import { Navigate } from "react-router-dom";

const RutasProtegidas = ({ children }) => {
    const usuarioLogeado =JSON.parse(sessionStorage.getItem('usuario')) || null
    //preguntar si el usuario No esta logueado
    if(usuarioLogeado.usuario !== 'admin'){
        return <Navigate to={'/'}></Navigate>
    }else{
        return children;
    }   
};

export default RutasProtegidas;