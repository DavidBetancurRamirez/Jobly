import Regresar from '../../elements/Regresar';
import Layout from '../../elements/Layout';
import { useNavigate } from 'react-router-dom';
import { AltHeading } from '../../styles/empresas';
import Aplicantec from './Aplicantec';

const itrabajo = {
    cargo: "Cajero",
    fecha: "Septiembre 12 - Septiembre 15",
    remuneracion: 150.000,
    descripcion:"Se busca cajero para la sede del mall la florida",
}
const aplicantes = [
    {
        nombre: 'Simon',
        descripcion: "Soy Simon, Estudiante de Administracion de Negocios, me gustan los perros y soy muy trabajador.",
    },
    {
        nombre:"Juan",
        descripcion: "Soy Juan estudiante de negocios internacionales y me apasiona la analitica de negocios"
    },
]

const InfoTrabajo = () => {
    const navigate = useNavigate()

    return (
        <Layout>
            <div>
                <h1 className='secondary-heading'>{itrabajo.cargo}</h1>
                <div className="div-container">
                    <div className='secondary-text col'>{itrabajo.fecha}</div>
                    <div className='secondary-text col'> Pago: {itrabajo.remuneracion} </div>
                    <div className='secondary-text col'> {itrabajo.descipcion} </div>
                </div>
            </div>

            <AltHeading>Postulantes</AltHeading>

            <div className="grid-container-2">
                {aplicantes.map((aplicante, index) => (
                    <div className="grid-item" key={index}>
                        <Aplicantec props={aplicante} />
                    </div>
                ))}
            </div>
        </Layout>
    )
}

export default InfoTrabajo;