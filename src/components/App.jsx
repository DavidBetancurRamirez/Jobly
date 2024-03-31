//import logo from './logo.svg';
import '../styles/App.css';
import Home from "../elements/Home";
import VideoSec from "../elements/VideoSec";
import Footer from "../elements/Footer"
import JobContainer from '../elements/JobContainer';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom'

function App() {
  const { auth, signOut } = useAuth()
  const navigate = useNavigate()

  console.log(auth?.accessToken)
  
  return (
    <div className="App">
      <div>
        <p>Username: {auth?.username}</p>
        <p>AccessToken: {auth?.accessToken}</p>
        <button onClick={() => {
          signOut()
          navigate('/sesion')
        }}>Logout</button>
        <button onClick={() => navigate('/sesion')}>Iniciar sesion</button>
      </div>
      <Home/>
      <JobContainer/>
      <VideoSec />
      <Footer/>
    </div>
  );
}

export default App;
