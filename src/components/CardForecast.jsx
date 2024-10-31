import { useForecast } from "../context/forecastContext";
import Forecast from "./Forecast";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const cardForecastContainerStyle = "bg-cardDark cursor-grab rounded-lg shadow-md";

export default function CardForecast() {
    const {forecast} = useForecast();

    return (
        // <div className="flex flex-row gap-4 overflow-x-scroll border border-borderPrimary md:col-span-2 xl:col-span-full snap-x snap-mandatory cursor-grab">
        <>
            <div className="min-w-40 max-w-full col-span-1 row-span-1 md:hidden">
                <Swiper 
                    slidesPerView={"1"}
                    className={cardForecastContainerStyle}
                >
                    {forecast && forecast.map(entry => (
                        <SwiperSlide key={entry.dt}><Forecast data={entry} /></SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="hidden md:block md:col-span-2 lg:col-span-3">
                <Swiper 
                    slidesPerView={"3"}
                    className={cardForecastContainerStyle}
                >
                    {forecast && forecast.map(entry => (
                        <SwiperSlide key={entry.dt}><Forecast data={entry} /></SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
}
