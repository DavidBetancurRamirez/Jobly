import Regresar from '../../elements/Regresar';
import Trabajoc from '../Trabajo/Trabajoc';
import Layout from '../../elements/Layout';
import { useNavigate } from 'react-router-dom';
import { AltHeading } from '../../styles/empresas';

const iempresa = {
    nombre: "Bcookie",
    contacto: "Mateo Asmar +57 213 992 8129",
    descripcion: "Bcookie es una empresa que vende cookie dough con varios puntos de venta",
}
const trabajos = [
    {
        cargo: "Cajero",
        fecha: "Septiembre 12 - Septiembre 15",
        remuneracion: 150.000,
        descripcion: "Se busca cajero para la sede del mall la florida"
    },
    {
        cargo: "Mesero",
        fecha: "Jueves 12 de Agosto",
        remuneracion: 80.000,
        descripcion: "Se busca mesero el dia 12 de agosto para un evento en llanogrande. Se trabajara de 5pm a 9pm"
    },
]

const InfoEmpresa = () => {
    const navigate = useNavigate()

    return (
        <Layout>
            <div>
                <h1 className='secondary-heading'>{iempresa.nombre}</h1>
                <div className="div-container">
                    <div className='secondary-text col'>{iempresa.descripcion}</div>
                    <div className='secondary-text col'> Contacto: {iempresa.contacto} </div>
                </div>
            </div>

            <AltHeading>Trabajos Publicados</AltHeading>

            <div className="grid-container-2">
                {trabajos.map((trabajo, index) => (
                    <div className="grid-item" key={index}>
                        <Trabajoc props={trabajo} />
                    </div>
                ))}
            </div>

            <div className='center-grid'>
                <Regresar />
                <button 
                    className="secondary-button"
                    onClick={() => navigate("/formtrabajo")}
                >
                    Añadir Trabajo
                </button>
            </div>
        </Layout>
    )
}

export default InfoEmpresa;