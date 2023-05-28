import React from "react";


function WhyUsCard(props){
    return(
        <div className="WhyUsCard" style={{'--backimage' : `url(${props.image})`}}>
            <div className="WhyUsCardContent">
                <div className="WhyUsCardImage">
                    <svg width="64" height="64" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="41" cy="41" r="41" fill="white"/>
                    </svg>
                    <img src={props.iconimage} />
                </div>
                <div className="WhyUsCardHeading">
                    <h1>  
                        {props.heading}
                    </h1>
                </div>
                <div className="WhyUsCardPara">
                    <p>
                        {props.content}
                    </p>
                </div>

            </div>
        </div>
    );
}

export default WhyUsCard;