import '../styles/App.css';
// import AboutBackground from "../images/about-background.png";

const VideoSec = () => {
    return (
        <div className="about-section-container">
            <meta name="referrer" content="no-referrer"></meta>
            <div className="about-background-image-container">
                {/* <img src={AboutBackground} alt="" /> */}
            </div>
            <div className="about-section-image-container">
                <iframe id="player" width="560" height="315" src={`https://www.youtube.com/watch?v=GR51MWK_o2M`}  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div>
                <h1 className="secondary-heading">
                    Nuestra Oferta
                </h1>
                <p className="primary-text">
                    Medio tiempo: Son ofertas laborales menores a 40 horas semanales.
                </p>
                <p className="primary-text">
                    Son ofertas laborales eventuales, o por proyecto y tienen fecha finalización.
                </p>
            </div>
        </div>
    )
}

export default VideoSec