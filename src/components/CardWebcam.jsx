import { useState, useRef } from "react";
import { useWebcam } from "../context/webcamContext";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/effect-fade';
import Webcam from "./Webcam";

const carWebcamContainerStyle = "flex flex-col gap-2 bg-second h-full w-full p-4 rounded-xl shadow-inset shadow-black";
const cardWebcamContainerInnerStyle = "bg-black p-2 rounded-lg  w-full";
const cardWebcamSliderStyle = "bg-first h-full min-h-60 w-full cursor-grab rounded-2xl col-span-1 row-span-1";
const cardWebcomButtonsContainerStyle = "flex flex-row justify-center items-center gap-1 border-y-2 border-1000 py-1"
const cardWebcamButtonStyle = "font-exp text-exp bg-first p-1 text-400 rounded-lg min-w-6 hover:brightness-125";

export default function CardWebcam() {
    const {webcams} = useWebcam();
    const [brightn, setBrightn] = useState(100); //50, 75, 100, 125, 150;
    const swiperRef = useRef(null);

    function handleIncreaseBrightn() {
        if(brightn === 150) return;
        setBrightn(brightn + 25);
    }

    function handleDecreaseBrightn() {
        if(brightn === 50) return;
        setBrightn(brightn - 25);
    }

    const handleNextSlide = () => {
        if(webcams.length === 0 || !webcams) return;
        if (swiperRef.current) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const handlePrevSlide = () => {
        if(webcams.length === 0 || !webcams) return;
        if (swiperRef.current) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    return (
        <div className={carWebcamContainerStyle}>
            <div className={cardWebcamContainerInnerStyle}>
                <Swiper 
                    ref={swiperRef}
                    loop={true} 
                    modules={[EffectFade]} 
                    effect="fade" 
                    className={cardWebcamSliderStyle}
                    style={{ filter: `brightness(${brightn}%)` }}
                >
                    {!webcams || webcams.length === 0 &&
                        <SwiperSlide>
                            <div className="bg-blue-600 p-2 h-full w-full text-lime-500 text-body font-body">NO WEBCAM</div>
                        </SwiperSlide>
                    }
                    {webcams && webcams.map((webcam, i) => (
                        <SwiperSlide key={webcam.webcamId}>
                            <Webcam data={webcam} i={i} count={webcams.length} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className={cardWebcomButtonsContainerStyle}>
                <p className="text-1000">•</p>
                <p className="text-1000">•</p>
                 <button className={cardWebcamButtonStyle} onClick={handleDecreaseBrightn} disabled={brightn === 50}>BRT-</button> 
                <button className={cardWebcamButtonStyle} onClick={handleIncreaseBrightn} disabled={brightn === 150}>BRT+</button> 
                <button className={cardWebcamButtonStyle} onClick={handlePrevSlide}>▼</button> 
                <button className={cardWebcamButtonStyle} onClick={handleNextSlide}>▲</button>
                <p className="text-1000">•</p>
                <p className="text-1000">•</p>
            </div>
        </div>
    );
}