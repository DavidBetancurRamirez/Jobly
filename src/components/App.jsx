import '../styles/App.css';
import Home from "../elements/Home";
import VideoSec from "../elements/VideoSec";
import Footer from "../elements/Footer";
import Navbar from "../elements/Navbar";
import Contadores from '../elements/Contadores';
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

const App = () => {
    return (
        <div className='white-bg'>
          <Navbar />

          <div className="img-bg">
            <Home />
            <VideoSec />
          </div>

          <BtnDesplegable info={info.medioTiempo} />
          <BtnDesplegable info={info.esporadicos} />

          <Contadores 
              estudiantes={5000}
              empresas={100}
          />

          <Footer />
        </div>
    )
}

export default App;