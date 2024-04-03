import '../styles/App.css';
// import AboutBackground from "../images/about-background.png";
import PropTypes from "prop-types";
import YoutubeEmbed from './YoutubeEmbed';

//awIa_HyQT9g&list=TLGGUSDdX7qrOgowMzA0MjAyNA&t=3s

const VideoSec = () => {
    return (
        <div className="about-section-container">
            <meta name="referrer" content="no-referrer"></meta>
            <div className="about-section-image-container">
                <iframe id="player" width="560" height="315" src={`https://www.youtube.com/embed/TLGGUSDdX7qrOgowMzA0MjAyNA`}  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <YoutubeEmbed embedId="TLGGUSDdX7qrOgowMzA0MjAyNA"/>
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