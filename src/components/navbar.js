import React from 'react'
import {FaYoutube} from "react-icons/fa"
import './navbar.css'
import logo from './images/Group1.png'
import bell from './images/Bell_pin_light.png'
import Sign from './images/SignUpButton.png'

const navbar = () => {
    return (
        <>
        <nav className='main-nav'>
            {/* 1st logo part */}
            <div className='logo'>
                <img src={logo} alt ="Logo" />
            </div>


            {/* 2nd logo part */}
            <div className='menu-link'>
                <ul>
                    <li >
                        <a href='#'>KNOW MORE</a>
                    </li>
                    <li>
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
            <div className='scoial-media'>
                {/* 3rd social media part */}

            </div>
        </nav>

        {/*extra section */}

        <section className='hero-section'>
            <p>
                welcome to
            </p>
            <h1>NEWjeans</h1>
        </section>
    </>
    )
}

export default navbar