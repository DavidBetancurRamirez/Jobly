import '../styles/App.css';
import EstudianteBG from "../images/EstudianteBG.jpg";
import { FiArrowRight } from "react-icons/fi";

const SaludoE = () => {
    return (
      <div className="estud-container">
        {/* <Navbar /> */}
        <div className="home-banner-container">
          <div className="home-bannerImage-container">
          </div>
          <div className="home-text-section">
            <h1 className="primary-heading">
              Hola Futuro Jober
            </h1>
            <p className="primary-text">
            ¡Que genial que quieras ser parte de Jobly! Somos la casa de los estudiantes listos para demostrar su talento ante el mundo laboral
            </p>
            <button className="secondary-button" href="/sesion">
            Registrate <FiArrowRight />{" "}
            </button>
          </div>
          <div className="home-image-section">
            <img src={EstudianteBG} alt="" />
          </div>
        </div>
      </div>
    )
  }
  
  export default SaludoE