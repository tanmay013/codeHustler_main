import React from "react";
import '../CompCSS/HomePageFoot.css';
import Insta from "../images/insta.png";
import Telegram from "../images/telegram.png";
import FooterLi from "../images/footerli.png";
import chlogo from "../images/chLogo.svg";
import { Link } from "react-router-dom";

function HomePageFooter(){
    return(
        <div className="footerMain">
           <div className="FooterHeader">
                <h3 className="Footerlogo"><img src={chlogo} /><span>CodeHustler</span></h3>
                </div>
            <div className="FooterListLinks">
                <ul>
                    <li><Link style={{'color':'#FFFFFF'}} to="/"> About Us </Link></li>
                    <li><Link style={{'color':'#FFFFFF'}} to="/#contactUs"> Contact </Link> </li>
                    <li> FAQ </li>
                    <li><Link style={{'color':'#FFFFFF'}} to="/dsatopics"> Library </Link></li>
                </ul>
            </div>
            <svg className="FooterLine" viewBox="0 0 1228 1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="1" x2="1228" y2="1" stroke="url(#paint0_radial_84_441)" strokeOpacity="0.77" strokeWidth="1.5"/>
                <defs>
                <radialGradient id="paint0_radial_84_441" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(614 1.99627) rotate(178.471) scale(562.2 690382)">
                <stop stopColor="white"/>
                <stop offset="1" stopColor="white" stopOpacity="0"/>
                </radialGradient>
                 </defs>
            </svg>
            <div className="FooterImageLinks">
            <a href="https://www.instagram.com/codehustlers2205/" target="_blank"><img style={{'height':'5.1vh', 'width':'3vw'}} src={Insta} ></img></a>
            <a href="https://t.me/+gVYQGqr_0dk1MDA1" target="_blank"><img src={Telegram} ></img></a>
            <a href="https://www.linkedin.com/in/code-hustlers-711386240/" target="_blank"><img src={FooterLi} ></img></a>
            </div>
            <div className="FooterCopyRight">
                <h3> @Copyright 2022-2023 | All Right Reserved. </h3>
                <svg className="footerrect1" width="537" height="64" viewBox="0 0 537 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0H473C508.346 0 537 28.6538 537 64H0V0Z" fill="white" fillOpacity="0.36"/>
                    </svg>
                    <svg  className="footerrect2" width="525" height="64" viewBox="0 0 525 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 64C0 28.6538 28.6538 0 64 0H525V64H0Z" fill="white" fillOpacity="0.36"/>
                        </svg>


            </div>
        </div>
    );
}

export default HomePageFooter;