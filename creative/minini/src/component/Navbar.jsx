import { Link } from 'react-router-dom'
import './Navbar.css'
import React, {useState, useEffect} from 'react'
import {Button} from './Button'
import Bgm from './Bgm'



function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => {
        setClick(!click)
    }
    const closeMovbileMenu = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 960 ){
            setButton(false)
        }else{
            setButton(true)
        }
    }
    useEffect(() => {
        showButton()
    }, [])
    





    window.addEventListener('resize', showButton)
    return (
        <div>
            <div className='navbar'>
                <div className = 'navbar-container'>
                <Link  to="/" className="navbar-logo" >
                    Klevv <i className="far fa-keyboard"/>
                </Link>
                <div className="menu-icon" onClick= {handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <div className='bgm-wrapper'>
                <Bgm />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to ='/' className="nav-links" onClick={closeMovbileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to ='/servies' className="nav-links" onClick={closeMovbileMenu}>
                            Services
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to ='/producks' className="nav-links" onClick={closeMovbileMenu}>
                            Products
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to ='/sign-up' 
                        className='nav-links-mobile' 
                        onClick={closeMovbileMenu}>
                            Sign Up
                        </Link>
                    </li>
                    
                </ul>
                {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>

            </div>
            
        </div>
    )
}

export default Navbar
