import Layout from '../../elements/Layout';
import Regresar from '../../elements/Regresar';
import { useNavigate } from 'react-router-dom';
import ContEmpresa from '../Empresa/ContEmpresa';

//Esto debe venir del backend realmente
const empresas = [
    {
        nombre: "Bcookie",
        trabajos: "3",
    },
    {
        nombre: "Qroom",
        trabajos: "2",
    }
]

const Admin = () => {
    const navigate = useNavigate()

    return (
        <Layout>
            <h1 className='secondary-heading'>
                Empresas Registradas
            </h1>

            <div className="grid-container">
                {empresas.map((empresa, index) => (
                    <div className="grid-item" key={index}>
                        <ContEmpresa info={empresa} />
                    </div>
                ))}
            </div>

            <div className='center-grid'>
                <Regresar />
                <button 
                    className="secondary-button"
                    onClick={() => navigate("/formempresa")}
                >
                    Añadir Empresa
                </button>
            </div>
        </Layout>
    );
};

export default Admin