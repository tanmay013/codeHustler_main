import React, { useEffect, useState } from "react";
import HomePageFirstCont from "./HomePageFirstCont.jsx";
import HomePageWhyUs from "./HomePageWhyUs.jsx";
import HomePageContact from "./HomePageContact.jsx";
import HomePageFooter from "./HomePageFooter.jsx";
import HomePageAskedIn from "./HomePageAskedIn.jsx";
// import axios from 'axios';
function HomePage(){

    return(
        <div className="HomePageMain">
            <HomePageFirstCont />
            <HomePageWhyUs />
            <HomePageAskedIn />
            <HomePageContact />
            <HomePageFooter />
        </div>
        
    );
}

export default HomePage;