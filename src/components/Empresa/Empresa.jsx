import Layout from '../../elements/Layout';
import EmpresaBG from "../../images/EmpresaBG.jpg";
import BtnDesplegable from '../../elements/BtnDesplegable';

export const BtnInfo = () => {
    const info = [
        {
            titulo: "Medio tiempo",
            contenido: "Son ofertas laborales menores a 40 horas semanales. Por ejemplo: Community manager, Business developer, Setter, Asistente virtual, etc."
        },
        {
            titulo: "Esporadicos",
            contenido: "Son ofertas laborales eventuales, o por proyecto y tienen fecha finalización. Por ejemplo: Mesero, Staff de evento, Edición de video, Inventario, etc."
        }
    ]

    return (
        info.map((i, index) => (
            <BtnDesplegable key={index} info={i} />
        ))
    )
}

const Empresa = () => {
    return (
        <Layout>
            <div className="estud-container">
                <div className="home-banner-container">
                    <div className="home-bannerImage-container" />
                    <div className="home-text-section">
                      <h1 className="primary-heading">
                        Bienvenido a Jobly
                      </h1>

                      <button className="secondary-button" href="/sesion">
                      Contactanos
                      </button>
                    </div>
                    <div className="home-image-section">
                      <img src={EmpresaBG} alt="" />
                    </div>
                </div>
            </div>

            <div className="page-container-2">
                <div className="secondary-heading">
                    Nuestra Oferta
                </div>
                <div className="division">
                  <BtnInfo />
                </div>
            </div>

            <div className="page-container-2">
                <h1 className= "secondary-heading">
                &quot;Jobly es lo mejor para mis eventos, y los perfiles que reclutan son siempre lo que necesito.&quot;
                </h1>
                <h3>Miguel, CEO -Bcookie</h3>
            </div>
        </Layout>
    )
}

export default Empresa;