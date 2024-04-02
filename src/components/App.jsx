//import logo from './logo.svg';
import '../styles/App.css';
import Home from "../elements/Home";
import VideoSec from "../elements/VideoSec";
import Footer from "../elements/Footer"
import JobContainer from '../elements/JobContainer';

function App() {  
  return (
    <div className="App">
      <Home/>
      <JobContainer/>
      <VideoSec />
      <Footer/>
    </div>
  );
}

export default App;
