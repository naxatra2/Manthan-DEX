import React from 'react'
import {FaYoutube} from "react-icons/fa"
import './navbar.css'
import logo from './images/Group1.png'
import bell from './images/Bell_pin_light.png'
import Sign from './images/SignUpButton.png'
import BG1 from './images/BG1.png'
import slide1 from './images/OrderBookSlide1.png'

const navbar = () => {
    return (
        <>
            <div className='waves'>
                <img src={BG1} alt='' />
            </div>
        <nav className='main-nav'>
            {/* 1st logo part */}
            <div className='logo'>
                <img src={logo} alt ="Logo" />
            </div>
            {/* 2nd logo part */}
            <div className='menu-link'>
                <ul>
                    <li>
                        <a href='#'>KNOW MORE</a>
                    </li>
                    <li >
                        <a href='#'>GOVERNANCE</a>
                    </li>
                    <li>
                        <a href='#'>COMMUNITY</a>
                    </li>
                    <li>
                        <a href='#'>DEVELOPERS</a>
                    </li>
                    <li>
                        <a href='#'>NEUCRON</a>
                    </li>
                </ul>
                <ul className='foto'>
                    <li>
                        <a href='#'>
                            <img src={bell} alt ="" />
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <img src={Sign} alt ="" />
                        </a>
                    </li>
                </ul>
            </div>

        </nav>

    </>
    )
}

export default navbar