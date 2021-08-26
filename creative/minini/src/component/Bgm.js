import React, { useState } from 'react'
import Sound from 'react-sound'
import BadGuy from '../component/music/badguy.mp3'
import './Bgm.css'




function Bgm() {
    const [isPlaying, setIsPlaying] = useState(true)
    const handlePlaying = () => {
        setIsPlaying(!isPlaying)
    }
    return (
        <div className= 'bgm-wrapper'>
            <i onClick= {handlePlaying} className = {isPlaying ? "fas fa-volume-up" : "fas fa-volume-mute"}/>
            <Sound
            url={BadGuy}
            playStatus = {isPlaying ?  Sound.status.PLAYING : Sound.status.STOPPED}
            />
            
        </div>
    )
}

export default Bgm
