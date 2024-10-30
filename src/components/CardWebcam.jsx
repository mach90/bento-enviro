import { useWebcam } from "../context/webcamContext";
import Webcam from "./Webcam";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const cardWebcamContainerStyle = "bg-cardDark h-full w-full cursor-grab rounded-lg shadow-md";

export default function CardWebcam() {
    const {webcams} = useWebcam();

    return (
        // <div className="bg-red-600 relative flex flex-row overflow-x-scroll border border-colorBorder snap-x snap-mandatory h-full cursor-grab px-4 py-2">
        <Swiper className={cardWebcamContainerStyle}>
            {/* {!webcams && <p className="font-custom2 text-md text-colorTextMedium">No webcams found</p>} */}
            {webcams && webcams.map(webcam => (
                    <SwiperSlide><Webcam data={webcam} key={webcam.webcamId}/></SwiperSlide>
            ))}
        </Swiper>
        // </div>
        // </div>
    );
}
