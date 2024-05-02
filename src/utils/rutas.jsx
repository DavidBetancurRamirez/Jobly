import Admin from '../components/Admin.jsx';
import App from '../components/App.jsx';
import Empresa from '../components/Empresa.jsx';
import EmpresaInfo from '../components/EmpresaInfo.jsx';
import Error404 from '../components/Error404.jsx';
import Estudiante from '../components/Estudiante.jsx';
import Perfil from '../components/Perfil.jsx';
import PubEmpresa from '../components/PubEmpresa.jsx';
import PubTrabajo from '../components/PubTrabajo.jsx';
import Recuperar from '../components/Recuperar.jsx';
import Sesion from '../components/Sesion.jsx';


// Paginas temporales
const Unauthorized = () => {
    return (
        <div>No está autorizado</div>
    )
}

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
    perfil: {
        path: '/perfil',
        element: <Perfil />
    },
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
        element: <EmpresaInfo />
    },
    pubEmpresa: {
        path: '/formempresa',
        element: <PubEmpresa />
    },
    pubTrabajo: {
        path: '/formtrabajo/ide',
        element: <PubTrabajo />
    },
};
