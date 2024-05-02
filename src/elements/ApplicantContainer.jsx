import '../styles/App.css';
import BannerImage from "../images/UserIcon.png";

const ApplicantContainer = () => {
    return (
        <div className="ApplicantContainer">
            <img src={BannerImage} alt="" className = "userPFP"/>
            <div className = "col">
            </div>
            <h3 className="CardTitle">
                Soy Simon, Estudiante de Administracion de Negocios, me gustan los perros y soy muy trabajador.
            </h3>
            <div className = "col">
            </div>
            <div className = "align-buttons">
                <button>
                    Añadir
                </button>
                <button>
                    Ver Perfil
                </button>
            </div>
        </div>
    )
}

export default ApplicantContainer