import {useState} from 'react'
import './Navbar.css'
import GBImage from '../assets/GB-english.png'
import User from './User'

const Navbar = ({side}) => {
    
    return (
        <>
        <nav className="navbar">
            <div className="hamburger" onClick={side}>
                    {/* <img src="/hamburger-menu.svg" alt="menu" className="menu-icon" /> */}
                    <svg xmlns="/hamburger-menu.svg" width="30" height="30" viewBox="0 0 24 24" fill="white" >
                        <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
                    </svg>
                </div>
            <div >
               <User />

            </div>

            <div className="lang">
                <div>English</div>  <img src={GBImage} alt="flag" className="flag" /></div>
               
        </nav>
        </>
    )
}

export default Navbar