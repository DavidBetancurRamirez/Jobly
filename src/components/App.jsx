import '../styles/App.css';
import Home from "../elements/Home";
import VideoSec from "../elements/VideoSec";
import Footer from "../elements/Footer";
import Navbar from "../elements/Navbar";
import Contadores from '../elements/Contadores';


const App = () => {
    return (
        <div className='white-bg'>
          <Navbar />

          <div className="img-bg">
            <Home />
            {/* <VideoSec /> */}
          </div>

          <Contadores 
              estudiantes={5000}
              empresas={100}
              tiempo={3}
          />

          <Footer />
        </div>
    )
}

export default App;