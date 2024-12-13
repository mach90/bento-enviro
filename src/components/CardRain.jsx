import { useWeather } from "../context/weatherContext";
import { CloudRain, CloudSnow } from 'lucide-react';

const cardRainContainerStyle = "relative bg-second border-x-8 border-b-8 border-second flex justify-end items-end p-1 rounded-b-xl";
const cardRainDataContainerStyle = "absolute inset-0 flex flex-col gap-2 justify-center items-center h-full w-full z-10 backdrop-blur-sm bg-gradient-to-br from-white/10 via-30% via-white/30 to-white/10 rounded-b-lg";
const cardRainNoDataStyle = "font-body text-body text-800";
const cardRainMeasureMainStyle = "flex items-center gap-2 font-heading text-heading text-0";
const cardRainMeasureSecondStyle = "flex items-center gap-2 font-body text-body text-0";
const cardRainDataGroupStyle = "w-full flex flex-col justify-center items-center";
const cardRainDataStyle = "font-body text-body text-200";

export default function CardRain({unit}) {
    const {rain, snow} = useWeather();

    const rain1hConverted = unit === "metric" ? rain?.['1h'] : rain?.['1h'] * 0.03937008;
    const rain3hConverted = unit === "metric" ? rain?.['3h'] : rain?.['3h'] * 0.03937008;
    const snow1hConverted = unit === "metric" ? snow?.['1h'] / 10 : snow?.['1h'] * 0.03937008;
    const snow3hConverted = unit === "metric" ? snow?.['3h'] / 10: snow?.['3h'] * 0.03937008;

    return (
        <div className={cardRainContainerStyle}>
            
            <div className={cardRainDataContainerStyle}>
                {!rain && !snow && <p className={cardRainNoDataStyle}>No fall recorded</p>}

                {rain?.['1h'] && <div className={cardRainDataGroupStyle}>
                    <p className={cardRainDataStyle}>
                        Last hour
                    </p>
                    <p className={cardRainMeasureMainStyle}>
                        <CloudRain size={24} /> {parseFloat(rain1hConverted.toPrecision(2))} {unit === "metric" ? "mm" : "in"}
                    </p>
                </div>}

                {snow?.['1h'] && <div className={cardRainDataGroupStyle}>
                    <p className={cardRainDataStyle}>
                        Last hour
                    </p>
                    <p className={cardRainMeasureMainStyle}>
                        <CloudSnow size={24} /> {parseFloat(snow1hConverted.toPrecision(2))} {unit === "metric" ? "cm" : "in"}
                    </p>
                </div>}

                {rain?.['3h'] && <div className={cardRainDataGroupStyle}>
                    <p className={cardRainDataStyle}>
                        Last 3 hours
                    </p>
                    <p className={cardRainMeasureSecondStyle}>
                        <CloudRain size={16} /> {parseFloat(rain3hConverted.toPrecision(2))} {unit === "metric" ? "mm" : "in"}
                    </p>
                </div>}


                {snow?.['3h'] && <div className={cardRainDataGroupStyle}>
                    <p className={cardRainDataStyle}>
                        Last 3 hours
                    </p>
                    <p className={cardRainMeasureSecondStyle}>
                        <CloudSnow size={16} /> {parseFloat(snow3hConverted.toPrecision(2))} {unit === "metric" ? "cm" : "in"}
                    </p>
                </div>}
            </div>
            
            {rain && <div className={`opacity-50 w-full h-full bg-[url(img/rain.gif)] bg-no-repeat bg-cover border-b-8 border-fourth`}></div>}

            {snow && <div className={`opacity-50 w-full h-full bg-[url(img/snow.gif)] bg-no-repeat bg-cover border-b-8 border-100`}></div>}

        </div>
    )
}