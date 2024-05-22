import Admin from '../components/Admin/Admin.jsx';
import App from '../components/App.jsx';
import Empresa from '../components/Empresa/Empresa.jsx';
import InfoEmpresa from '../components/Empresa/InfoEmpresa.jsx';
import Error404 from '../elements/Varios/Error404.jsx';
import Estudiante from '../components/Usuario/Estudiante.jsx';
import Perfil from '../components/Usuario/Perfil.jsx';
import FormEmpresa from '../components/Empresa/FormEmpresa.jsx';
import FormTrabajo from '../components/Trabajo/FormTrabajo.jsx';
import Recuperar from '../elements/Varios/Recuperar.jsx';
import Sesion from '../components/Usuario/Sesion.jsx';
import Unauthorized from '../elements/Varios/Unauthorized.jsx';


// Objeto que contiene la información de las rutas
export const rutasPublicas = {
    app: {
        path: '/',
        element: <App />
    },
    empresas: {
        path: '/empresas',
        element: <Empresa />
    },
    error404: {
        path: '*',
        element: <Error404 />
    },
    estudiantes: {
        path: '/estudiantes',
        element: <Estudiante />
    },
    // perfil: {
    //     path: '/perfil',
    //     element: <Perfil />
    // },
    recuperarContraseña: {
        path: '/recuperar-contraseña',
        element: <Recuperar />
    },
    sesion: {
        path: '/sesion',
        element: <Sesion />
    },
    unauthorized: {
        path: '/unauthorized',
        element: <Unauthorized />
    },
};

export const rutasProtegidas = {
    admin: {
        path: '/admin',
        element: <Admin />
    },
    empresaID: {
        path: '/empresa/id',
        element: <InfoEmpresa />
    },
    formEmpresa: {
        path: '/formempresa',
        element: <FormEmpresa />
    },
    formTrabajo: {
        path: '/formtrabajo',
        element: <FormTrabajo />
    },
};
