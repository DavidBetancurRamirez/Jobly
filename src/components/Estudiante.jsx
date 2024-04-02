import '../styles/App.css';
import JobContainer from '../elements/JobContainer';
import Navbar from "../elements/Navbar";
import SaludoE from '../elements/SaludoE';
import Footer from "../elements/Footer";
import Joberdef from '../elements/Joberdef';
import Experiencia from '../elements/Experiencia';


function Estudiante() {  
    return (
      <div className="Estudiante">
        <Navbar />
        <SaludoE />
        <Joberdef />
        <div ClassName = "page-container">
            <Experiencia />
        </div>
        <Footer />
      </div>
    );
}


export default Estudiante;