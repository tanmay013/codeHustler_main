import React from "react";
import "../CompCSS/HomePageAskedIn.css";
import AskedInImage from "../images/Vector2.png";
import AskedInCarousel from "./AskedInCarousel";

function HomePageAskedIn(){

    return(
        <div className="HomePageAskedInMain">
            <div className="AskedInHeading">
              <h1> Potential Companies To Crack </h1>
              <div className="AskedInShape"> <img src={AskedInImage} /> </div>
            </div>
            <div className="AskedInCarouselContainerMain">
              <AskedInCarousel reverse={false} noOfSlides={4} centerslide={false} mt={'0'} speed={2200}/>
              <AskedInCarousel reverse={true} noOfSlides={4.14} centerslide={true} mt={'5.5%'} speed={2400}/>
            </div>
        </div>
    );
}

export default HomePageAskedIn;