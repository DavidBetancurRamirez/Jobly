import '../styles/App.css';
import Layout from './Layout';
import HomeInfo from "../elements/HomeInfo";
import VideoSec from "../elements/VideoSec";
import Contadores from '../elements/Contadores';
import { BtnInfo } from './Empresa';

const App = () => {
    return (
        <Layout>

          <div className="img-bg">
            <HomeInfo />
            {/* <VideoSec /> */}
          </div>

          <BtnInfo />

          <Contadores 
              estudiantes={5000}
              empresas={100}
          />
        </Layout>
    )
}

export default App;