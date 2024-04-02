//import logo from './logo.svg';
import '../styles/App.css';
import Home from "../elements/Home";
import VideoSec from "../elements/VideoSec";
import Footer from "../elements/Footer";
import Navbar from "../elements/Navbar";


function App() {  
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <VideoSec />
      <Footer/>
    </div>
  );
}

export default App;
