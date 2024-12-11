import { useForecast } from "../context/forecastContext";
import Forecast from "./Forecast";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const cardForecastContainerStyle = "cursor-grab h-full w-full bg-first";

export default function CardForecast({unit}) {
    const {forecast} = useForecast();

    return (
        // <div className="flex flex-row gap-4 overflow-x-scroll border border-borderPrimary md:col-span-2 xl:col-span-full snap-x snap-mandatory cursor-grab">
        <>
            <div className="min-w-40 max-w-full col-span-1 row-span-1 md:hidden pt-8 bg-[url('img/hole.jpg')] bg-repeat-x">
                
                <Swiper 
                    slidesPerView={"1"}
                    className={cardForecastContainerStyle}
                >
                    {forecast && forecast.map((entry, i) => (
                        <SwiperSlide key={entry.dt}><Forecast data={entry} i={i} count={forecast.length} unit={unit}/></SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="hidden md:block md:col-span-2 lg:col-span-3 pt-8 bg-[url('img/hole.jpg')] bg-repeat-x">
                <Swiper 
                    slidesPerView={"3"}
                    className={cardForecastContainerStyle}
                >
                    {forecast && forecast.map((entry, i) => (
                        <SwiperSlide key={entry.dt}><Forecast data={entry} i={i} count={forecast.length} unit={unit}/></SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
}
