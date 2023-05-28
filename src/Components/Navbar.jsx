import React from "react"; // Importing React in Navbar Component
import '../CompCSS/Navbar.css'; // Importing Css Of Navbar
import { useState } from "react";
import { Link } from "react-router-dom";
import LoginPopup from "./LoginPopup";

function Navbar(props)
{   
    const [navbaract, setnavbaract] = useState(props.activeAlways);
    const [showLogin, setShowLogin] = useState(false);
    const [login, setLogin] = useState(true);


    const changeBg = () => {
        if(window.scrollY >= 10){
            setnavbaract(true);
        } else{
            setnavbaract(props.activeAlways);
        }
    };

    window.addEventListener('scroll', changeBg);

    return(
        <div>
        {showLogin && login && <LoginPopup login={true} toggleLogin={() => setShowLogin(!showLogin)} />}
        {showLogin && !login && <LoginPopup signup={true} toggleLogin={() => setShowLogin(!showLogin)} />}
        <div className={navbaract ? props.shadow ? 'NavbarMain active shadow' : props.sheet ? 'NavbarMain active sheetpad' : 'NavbarMain active'  : 'NavbarMain passive'} >
            <div className="NavbarContainer" style={{'paddingTop':`${props.padding}`, 'paddingBottom':`${props.padding}`}}>
                <input type="checkbox" name="" id="NavCheck" />
            
                <div className="Navbarlogo-container">
                    <h3 className="Navbarlogo"><svg width="48" height="48" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M27.7575 56C43.2215 56 55.7575 43.464 55.7575 28C55.7575 12.536 43.2215 0 27.7575 0C13.5483 0 1.81113 10.5842 -7.29533e-07 24.2988C0.448427 22.9277 1.01824 21.6188 1.70943 20.372C3.67736 16.7786 6.4106 13.9958 9.90914 12.0238C13.4514 10.0079 17.4529 9 21.9135 9C27.38 9 32.0593 10.4462 35.9514 13.3385C39.8435 16.2308 42.4456 20.1748 43.7575 25.1706H31.4252C30.5068 23.2424 29.1949 21.7744 27.4893 20.7664C25.8275 19.7585 23.9252 19.2545 21.7823 19.2545C18.3275 19.2545 15.5287 20.4597 13.3858 22.8699C11.243 25.2802 10.1715 28.5012 10.1715 32.5329C10.1715 36.5646 11.243 39.7855 13.3858 42.1958C15.5287 44.6061 18.3275 45.8112 21.7823 45.8112C23.9252 45.8112 25.8275 45.3072 27.4893 44.2993C29.1949 43.2914 30.5068 41.8233 31.4252 39.8951H43.7575C42.4456 44.8909 39.8435 48.835 35.9514 51.7273C32.7808 54.0477 29.0878 55.423 24.8724 55.8532C25.8209 55.9503 26.7834 56 27.7575 56Z" fill="url(#paint0_linear_1_7)"/>
                                                <defs>
                                                <linearGradient id="paint0_linear_1_7" x1="61" y1="-4.62533e-07" x2="9" y2="68" gradientUnits="userSpaceOnUse">
                                                <stop offset="0.00951412" stopColor="#A026DA"/>
                                                <stop offset="1" stopColor="#4738F1"/>
                                                </linearGradient>
                                                </defs>
                                                </svg>
                                                CodeHustler</h3>
                </div>

                <div className="NavbarButton">
                    <div className="NavbarLinks">
                        <ul>
                            <li id="contactChange" className={props.compActive === "Home" ? "nav-link bold" : "nav-link"} style={{"--i": "0.6s"}}>
                                <Link to='/'><button className="navbutton" onClick={props.handleHome}>Home</button></Link>
                            </li>
                            <li className={props.compActive === "Library" ? "nav-link bold" : "nav-link"} style={{"--i": "0.85s"}}>
                                <Link to="/dsatopics" ><button className="navbutton">Library</button></Link>
                            </li>
                            <li id='contactClick' className={props.compActive === "Contact" ? "nav-link bold" : "nav-link"} style={{"--i": "1.1s"}}>
                                <Link to="/#contactUs" ><button className="navbutton" onClick={props.handleCont}>Contact Us</button></Link>
                                
                            </li>
                            <li className={props.compActive === "Feed" ? "nav-link bold" : "nav-link"} style={{"--i": "1.35s"}}>
                            <Link to="/" ><button className="navbutton">About Us</button></Link>
                            </li>
                            {/* <li className={props.compActive === "Feed" ? "nav-link bold" : "nav-link"} style={{"--i": "1.35s"}}>
                            <Link to="/feedback" ><button className="navbutton">Feedback</button></Link>
                            </li> */}
                        </ul>
                    </div>

                    <div className="NavbarLogSign" style={{"--i": "1.8s"}}>
                    {/* <Link to="/login" className="navbtn transparent">Log in</Link>
                    <Link to="/signup" className="navbtn solid">Sign up</Link> */}
                    <button onClick={() => { setShowLogin(!showLogin); setLogin(true); }} className="navbtn transparent"> Log in </button>
                    <button onClick={() => { setShowLogin(!showLogin); setLogin(false); }} className="navbtn solid"> Sign up </button>
                    </div>
                </div>
                <div className="hamburger-menu-container">
                    <div className="hamburger-menu">
                        <div></div>
                    </div>
                </div>
            </div>
            
        </div>
        </div>
    );
}

Navbar.defaultProps = {
    sheet: false
  }

export default Navbar;

