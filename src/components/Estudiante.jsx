import '../styles/App.css';
import Navbar from "../elements/Navbar";
import Footer from "../elements/Footer";
import Tarjeta from '../elements/Tarjeta';

import { FiArrowRight } from "react-icons/fi";
import EstudianteBG from "../images/EstudianteBG.jpg";

const tarjetas = [
    {
      nombre: "Experiencia",
      texto: "A través de los trabajos de Jobly obtendrás experiencia en campos de tu interés, perfectos para tu CV.",
      color: "#A2A3E9"
    },
    {
      nombre: "Ingresos",
      texto: "Con Jobly podrás aumentar tus ingresos y monetizar tu tiempo libre.",
      color: "#CFD6FF"
    },
    {
      nombre: "Networking",
      texto: "Una increíble forma de conocer gente es en el trabajo, en especial, si es un sector que te gusta.",
      color: "#E8EAED"
    },
    {
      nombre: "Aprende",
      texto: "Existen personas que aprendemos mejor haciendo, y con Jobly tienes un aprendizaje asegurado.",
      color: "#8A96D7"
    }
]

const Estudiante = () => {
    return (
        <div className="Estudiante">
            <Navbar />

            <div className="estud-container">
                <div className="home-banner-container">
                    <div className="home-bannerImage-container" />
                    <div className="home-text-section">
                      <h1 className="primary-heading">
                        Hola Futuro Jober
                      </h1>
                      <p className="primary-text">
                      ¡Que genial que quieras ser parte de Jobly! Somos la casa de los estudiantes listos para demostrar su talento ante el mundo laboral
                      </p>
                      <button className="secondary-button" href="/sesion">
                      Registrate <FiArrowRight />
                      </button>
                    </div>
                    <div className="home-image-section">
                      <img src={EstudianteBG} alt="" />
                    </div>
                </div>
            </div>

            <div className="page-container-2">
                <div className="secondary-heading">
                    Jober
                </div>
                <div className = "secondary-text">
                (Sustantivo) Estudiante talentoso, berraco y con muchas ganas de trabajar. Los Jobers son jóvenes inquietos, que rompen esquemas y exprimen al máximo sus habilidades. Y su casa es Jobly, donde encuentran trabajos de medio tiempo y esporádicos.
                </div>
            </div>

            <div className="grid-container">
                {tarjetas.map((tarjeta, i) => (
                    <Tarjeta key={i} info={tarjeta} />
                ))}
            </div>

            <Footer />
        </div>
    )
}

export default Estudiante;