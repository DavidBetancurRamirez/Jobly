import { useNavigate } from 'react-router-dom';
import { Titulo, CardEmpresa } from '../../styles/empresas';


const ContEmpresa = ({ info }) => {
    const navigate = useNavigate()

    return (
      <CardEmpresa>
        <Titulo>{info.nombre}</Titulo>
  
        <div>
          <h3>Total trabajos: {info.trabajos}</h3>
        </div>

        <button 
            className="secondary-button"
            onClick={() => navigate("/empresa/id")}
        >
            Expandir
        </button>
      </CardEmpresa>
    );
  };

export default ContEmpresa