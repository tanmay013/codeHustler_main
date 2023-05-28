import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "../CompCSS/AskedInCarousel.css";
import Google from "../images/Google.png";
import facebook from "../images/Facebook.png";
import Amazon from "../images/Amazon.png";
import Microsoft from "../images/Microsoft.png";
import Lenskart from "../images/lenskart.png";
import Tcs from "../images/tcs.png";
import Goldman from "../images/goldman.png";
import Wipro from "../images/wipro.png";
import { Autoplay } from "swiper";

function AskedInCarousel(props){
    return(
        <div className="AskedInCarouselMain" style={{marginTop:`${props.mt}`}}>
            <Swiper
                centeredSlides={props.centerslide}
                slidesPerView={props.noOfSlides}
                speed={props.speed}
                spaceBetween={20}
                loop={true}
                autoplay={{
                    reverseDirection: props.reverse,
                    delay: 1,
                    disableOnInteraction: false,
                }}
               
                modules={[Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide><img src={Google} /></SwiperSlide>
                <SwiperSlide><img src={Amazon} /></SwiperSlide>
                <SwiperSlide><img src={facebook} /></SwiperSlide>
                <SwiperSlide><img src={Microsoft} /></SwiperSlide>
                <SwiperSlide><img src={Lenskart} /></SwiperSlide>
                <SwiperSlide><img src={Tcs} /></SwiperSlide>
                <SwiperSlide><img src={Goldman} /></SwiperSlide>
                <SwiperSlide><img src={Wipro} /></SwiperSlide>
            </Swiper>
        </div>
    );
}

export default AskedInCarousel;