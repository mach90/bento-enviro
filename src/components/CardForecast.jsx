import { useForecast } from "../context/forecastContext";
import Forecast from "./Forecast";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const cardForecastContainerStyle = "bg-cardDark h-full w-full cursor-grab rounded-lg shadow-md";

export default function CardForecast() {
    const {forecast} = useForecast();

    return (
        // <div className="flex flex-row gap-4 overflow-x-scroll border border-borderPrimary md:col-span-2 xl:col-span-full snap-x snap-mandatory cursor-grab">
        <Swiper 
            slidesPerView={"auto"}
            className={cardForecastContainerStyle}
        >
            {forecast && forecast.map(entry => (
                <SwiperSlide><Forecast key={entry.dt} data={entry} /></SwiperSlide>
            ))}
        </Swiper>
    );
}
