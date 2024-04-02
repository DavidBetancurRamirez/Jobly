import '../styles/App.css';
import Home from "../elements/Home";
import VideoSec from "../elements/VideoSec";
import Footer from "../elements/Footer";
import Navbar from "../elements/Navbar";
import FastCounter from '../elements/FastCounter';

function Main() {
  return (
    <div className='white-bg'>
      <Navbar />

      <div className="img-bg">
        <Home />
        <VideoSec />

      </div>

      <div class="countersection">
        <div class="counter-col">
          <div class="primary-text"><FastCounter stopAt={ 5000 } /></div>
          <h1 class="primary-text">Estudiantes Registrados</h1>
        </div>
        <div class="counter-col">
          <div class ="primary-text"><FastCounter stopAt={100} /></div>
          <h1 class="primary-text"> Empresas Registradas</h1>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Main;