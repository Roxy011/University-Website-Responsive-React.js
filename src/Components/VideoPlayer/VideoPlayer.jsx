import React, { useRef } from 'react'
import './VideoPlayer.css'
import video from '../../assets/GOS-Final.mp4'

const VideoPlayer = ({playState, setPlayState}) => {

    const player = useRef(null);
    const closePLayer = (e) => {
        if(e.target === player.current){
            setPlayState(false);
        }
    }

  return (
    <div className={`video-player ${playState ? '' : 'hide'}`} ref={player} onClick={closePLayer}> 
        <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer