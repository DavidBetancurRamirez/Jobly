import '../styles/App.css';
// import Navbar from "./Navbar";
import BannerBackground from "../images/home-banner-background.png";
import BannerImage from "../images/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";
//import BannerImage from "../images/home-banner-image.png";

const Home = () => {
  return (
    <div className="home-container">
      {/* <Navbar /> */}
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
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
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home