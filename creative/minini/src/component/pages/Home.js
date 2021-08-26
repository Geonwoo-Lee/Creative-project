import React, {useState} from 'react'
import KeyboardSection from '../KeyboardSection'
import './Home.css'
import LightSection from '../LightSection'

function Home() {
    const [choosed, setChoosed] = useState(false)
    const handleChoosed = () => {
        setChoosed(!choosed)
    }

    return (
        <div className='home'>
        {choosed ?
        <div className='light-ani'>
        <LightSection/>
        </div> : 
        <div className='keyboard-ani'>
          <KeyboardSection/>
         </div>}

        <i className={choosed ? "fas fa-circle" : "fas fa-dot-circle"} onClick = {handleChoosed}></i>
        <i className={choosed ? "fas fa-dot-circle" : "fas fa-circle"} onClick = {handleChoosed}></i>
        </div>
    )
}

export default Home
