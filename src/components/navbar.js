import React from 'react'
import {FaYoutube} from "react-icons/fa"
import './navbar.css'

const navbar = () => {
    return (
        <>
        <nav className='main-nav'>
            {/* 1st logo part */}
            <div className='logo'>
                <h2>
                    <span>T</span>echnical
                    <span>N</span>akshatra
                </h2>
            </div>


            {/* 2nd logo part */}
            <div className='menu-link'>
                <ul>
                    <li>
                        <a href='#'>Home</a>
                    </li>
                    <li>
                        <a href='#'>about</a>
                    </li>
                    <li>
                        <a href='#'>service</a>
                    </li>
                    <li>
                        <a href='#'>contact</a>
                    </li>
                </ul>
            </div>

            <div className='scoial-media'>
                {/* 3rd social media part */}
                <ul className='social-media-desktop'>
                    <li>
                        <a href = "https://www.youtube.com/watch?v=Km71Rr9K-Bw&ab_channel=NewJeans">
                            <FaYoutube/>
                        </a>
                    </li>
                </ul>
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