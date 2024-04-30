import '../styles/App.css';
import YoutubePlayer from 'react-player/youtube'


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

const VideoSec = () => {
    return (
        <div className="about-section-container">
            {/* <div className='player-wrapper'>
                <YoutubePlayer
                    className='react-player'
                    url='https://www.youtube.com/watch?v=awIa_HyQT9g'
                    width='100%'
                    height='100%'
                    loop
                    muted
                    playing
                    controls
                />
            </div> */}
            <YoutubePlayer
                url='https://www.youtube.com/watch?v=awIa_HyQT9g'
                loop
                muted
                playing
                controls
            />
            <div>
                <h1 className="secondary-heading">
                    Nuestra Oferta
                </h1>
                {/* <BtnDesplegable info={info.medioTiempo} />
                <BtnDesplegable info={info.esporadicos} /> */}
            </div>
        </div>
    )
}

export default VideoSec