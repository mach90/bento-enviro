import { useRef } from "react";
import { usePollen } from "../context/pollenContext";
import { Swiper, SwiperSlide } from 'swiper/react';
import Pollen from "./Pollen";

const cardPollenContainerStyle = "bg-third relative flex flex-col justify-start items-start p-1 col-span-1 row-span-1 shadow-inner shadow-800 border-8 border-500 rounded-lg";
const cardPollenContainerInnerStyle = "h-full w-full";
const cardPollenSliderStyle = "cursor-grab h-full w-64 md:w-full";
const cardPollenButtonsContainerStyle = "flex flex-row w-full justify-center items-center gap-3 py-1 rounded-md"
const cardPollenButtonStyle = "font-exp text-exp bg-800 p-1 text-400 rounded-full w-6 text-center hover:brightness-125";

export default function CardPollen() {
    const { pollenForecast, status } = usePollen();
    const swiperRef = useRef(null);

    console.log(pollenForecast)

    const handleNextSlide = () => {
        if(pollenForecast.length === 0 || !pollenForecast) return;
        if (swiperRef.current) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const handlePrevSlide = () => {
        if(pollenForecast.length === 0 || !pollenForecast) return;
        if (swiperRef.current) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    if (status === "loading") {
        return (
            <div className={cardPollenContainerStyle}>
                <p className="text-center text-600 font-body text-body">Loading pollen data...</p>
            </div>
        );
    }

    if (status === "error") {
        return (
            <div className={cardPollenContainerStyle}>
                <p className="text-center text-red-500 font-body text-body">Failed to load pollen data</p>
            </div>
        );
    }

    if (!pollenForecast || pollenForecast.length === 0) {
        return (
            <div className={cardPollenContainerStyle}>
                <p className="text-center text-600 font-body text-body">No pollen data available</p>
            </div>
        );
    }

    return (
        <div className={cardPollenContainerStyle}>
            <div className={cardPollenContainerInnerStyle}>
                <Swiper ref={swiperRef} loop={false} className={cardPollenSliderStyle}>
                    {pollenForecast.map((forecast, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <Pollen forecast={forecast} />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
            <div className={cardPollenButtonsContainerStyle}>
                <button className={cardPollenButtonStyle} onClick={handlePrevSlide}>◄</button> 
                <button className={cardPollenButtonStyle} onClick={handleNextSlide}>►</button>
            </div>
        </div>
    );
}