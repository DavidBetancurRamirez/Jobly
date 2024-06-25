import '../styles/App.css';
import Layout from '../elements/Layout';
import VideoSec from "../elements/VideoSec";
import Contadores from '../elements/Contadores';
import { BtnInfo } from './Empresa/Empresa';
import { FiArrowRight } from "react-icons/fi";

const App = () => {
    return (
        <Layout>

          <div className="img-bg">
            <HomeInfo />
            <VideoSec />
          </div>

          <BtnInfo />

          <Contadores 
              estudiantes={5000}
              empresas={100}
          />
        </Layout>
    )
}

const HomeInfo = () => {
  return (
    <div className="home-container">
      <div className="home-banner-container">
        <div className="home-text-section">
          <h1 className="primary-heading">
            ¡Conecta con oportunidades
            laborales!
          </h1>
          <p className="primary-text">
            Sabemos que ganas no te faltan, pero conseguir un trabajo ideal no es fácil. Nosotros nos encargamos de conectarte con el lugar donde podrás aprender, experimentar, y generar ingresos extra.
          </p>
          <button className="secondary-button">
            Registrate <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
        </div>
      </div>
    </div>
  )
}

export default App;