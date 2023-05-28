import React from "react";
import "../CompCSS/HomePageFirst.css";
import Navbar from "./Navbar";
import introImage from "../images/image.png";
import { Link } from "react-router-dom";

function HomePageFirstCont(props){
    return(
        <div className="HomePageFirstMain">
            <Navbar compActive='Home' activeAlways={false} shadow = {true} handleCont={props.handleContact} handleHome={props.handleHomeClick} />
            <div className="IntroContainerHeading">
                <h1> One Sheet to Rule </h1>
                <h1> Them All </h1>
            </div>
            <div className="IntroContainerPara">
                <p> Hustle Beats Talent When <br/> Talent Doesn't Hustle.  </p>
            </div>
            <div className="IntroContainerLine" >
                <div className="IntroContainerLine2" />
                <div className="IntroContainerLine2" />
            </div>
            
            <div className="IntroContainerButton">
            <button><Link  to="/dsatopics" >
                    <div className="IntroContainerButonInside">
                        <div className="InsideButtonText">Let's Code  
                            <div className="IntroSvg">
                                <svg fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.66675 1.66667H18.3334V18.3333" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <svg  fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.66675 18.3333L18.3334 1.66667" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div> 
                        </div>       
                    </div>
                    </Link>
                    </button>
            </div>
            <div className="IntroContainerImage">
                <img src={introImage}></img>
            </div>
        </div>
    );
}



export default HomePageFirstCont;