import React, { useState } from "react";
import "../CompCSS/HomePageWhyUs.css";
import WhyUsCard from "./WhyUsCard";
import BestQualityImage from "../images/Quality.png";
import AffordableImage from "../images/Affordable.png";
import UsefulImage from "../images/Useful.png";
import qualityIcon from "../images/QualIcon.png";
import AffordableIcon from "../images/priceIcon.png";
import EasyIcon from "../images/easyIcon.png";

function HomePAgeWhyUs(){

    var [handleCard, sethandleCard] = useState(false);

    const handleCardClick = () => {
        sethandleCard(!handleCard);
    }

    return(
        <div className="HomePageWhyUsMain">
            <div className="HomePageWhyUsHeading">
                <h1 className="text3d"> Why Choose Us </h1>
            </div>
            
            <div className="WhyUsCardcontainer">
                <WhyUsCard image={BestQualityImage} iconimage={qualityIcon} heading={'Quality Content'} content={'We provide the best of the best content by exploring different sheets and websites and making our sheet special.'}/>
                <WhyUsCard image={AffordableImage} iconimage={AffordableIcon}  heading={'Easily Affordable'} content={'Our product is so cost effective that anybody can buy it. And its worth its price because of its quality.'}/>
                <WhyUsCard image={UsefulImage} iconimage={EasyIcon} heading={'Highly Useful'} content={'Our Course is of high standards and is highly recommended for people of computer Background.'}/>
            </div>
        </div>
    );
}

export default HomePAgeWhyUs;