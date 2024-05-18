import YoutubePlayer from 'react-player/youtube'


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
        </div>
    )
}

export default VideoSec