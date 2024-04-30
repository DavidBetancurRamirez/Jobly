import '../styles/App.css';
import Navbar from "../elements/Navbar";
import Footer from "../elements/Footer";
import Tarjeta from '../elements/Tarjeta';

import { FiArrowRight } from "react-icons/fi";
import EmpresaBG from "../images/EmpresaBG.jpg";
import BtnDesplegable from '../elements/BtnDesplegable';

const info = {
    medioTiempo: {
      titulo: "Medio tiempo",
      contenido: "Son ofertas laborales menores a 40 horas semanales. Por ejemplo: Community manager, Business developer, Setter, Asistente virtual, etc."
    },
    esporadicos: {
      titulo: "Esporadicos",
      contenido: "Son ofertas laborales eventuales, o por proyecto y tienen fecha finalización. Por ejemplo: Mesero, Staff de evento, Edición de video, Inventario, etc."
    }
}

const InfoEmpresa = () => {
    return (
        <div className="Estudiante">
            <Navbar />

            <div className="estud-container">
                <div className="home-banner-container">
                    <div className="home-bannerImage-container" />
                    <div className="home-text-section">
                      <h1 className="primary-heading">
                        Bienvenido a Jobly
                      </h1>

                      <button className="secondary-button" href="/sesion">
                      Contactanos
                      </button>
                    </div>
                    <div className="home-image-section">
                      <img src={EmpresaBG} alt="" />
                    </div>
                </div>
            </div>

            <div className="page-container-2">
                <div className="secondary-heading">
                    Nuestra Oferta
                </div>
                <BtnDesplegable info={info.medioTiempo} />
                <BtnDesplegable info={info.esporadicos} />
            </div>

            <div className="page-container-2">
                <h1 className= "secondary-heading">
                "Jobly es lo mejor para mis eventos, y los perfiles que reclutan son siempre lo que necesito."
                </h1>
                <h3>Miguel, CEO -Bcookie</h3>
            </div>

            <Footer />
        </div>
    )
}

export default InfoEmpresa;