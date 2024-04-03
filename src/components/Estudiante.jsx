import '../styles/App.css';
import JobContainer from '../elements/JobContainer';
import Navbar from "../elements/Navbar";
import SaludoE from '../elements/SaludoE';
import Footer from "../elements/Footer";
import Joberdef from '../elements/Joberdef';
import FlipCard from '../elements/Experiencia';
import Ingresos from '../elements/Ingresos';
import Experiencia from '../elements/Experiencia';
import Networking from '../elements/Networking';
import Aprende from '../elements/Aprende';


function Estudiante() {
  return (
    <div className="Estudiante">
    <Navbar />
    <SaludoE />
      <Joberdef />
      {/* <div ClassName="page-container">
      <div ClassName="col">
        <Experiencia />
        <Ingresos />
      </div>
      <div ClassName="col">
        <Networking />
        <Aprende />
      </div>
    </div> */}
    <div className="center-grid">
      <div className="grid-container">
        <div className="grid-item"><Experiencia /></div>
        <div className="grid-item"><Ingresos /></div>
        <div className="grid-item"><Networking /></div>
        <div className="grid-item"><Aprende /></div>
      </div>
    </div>
    <Footer />
    </div>
  );
}


export default Estudiante;