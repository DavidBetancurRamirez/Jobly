import '../styles/App.css';
import { SiLinkedin } from "react-icons/si";

const Footer = () => {
    return (
      <div className="footer-wrapper">
        <div className="footer-section-one">
          <div className="footer-logo-container">
            <h2>Jobly.</h2>
            <p>© 2024 Jobly.</p>
          </div>
          <div className="footer-icons">
            <SiLinkedin />
          </div>
        </div>
        <div className="footer-section-two">
          <div className="footer-section-columns">
            <span>Paginas</span>
            <span>Estudiante</span>
            <span>Empresa</span>
            <span>Blog</span>
          </div>
          
          <div className="footer-section-columns">
            <span><a href="https://www.thejobly.com/_files/ugd/65010f_d3c612e9c9ee481ab9f56ce5aeaaaa99.pdf" target="_blank">Terminos y Condiciones</a></span>
            <span><a href="https://www.thejobly.com/_files/ugd/65010f_e4728011ccdb41e7986ec3dca699ed6e.pdf" target ="_blank">Política de privacidad de datos</a></span>
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;