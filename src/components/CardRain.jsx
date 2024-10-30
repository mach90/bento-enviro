import { useWeather } from "../context/weatherContext";
import { CloudRain, CloudSnow } from 'lucide-react';

const cardRainContainerStyle = "bg-cardSecondary p-4 flex flex-col justify-center items-center rounded-lg shadow-md";
const cardRainNoDataStyle = "font-heading text-lg text-textSecondaryVariant";
const cardRainMeasureMainStyle = "flex items-center gap-2 font-heading text-lg text-textSecondary";
const cardRainMeasureSecondStyle = "flex items-center gap-2 font-body text-lg text-textSecondary";
const cardRainDateStyle = "font-body text-md text-textSecondaryVariant";

export default function CardWeather() {
    const {rain, snow} = useWeather();

    return (
        <div className={cardRainContainerStyle}>
            
            {!rain && !snow && <p className={cardRainNoDataStyle}>No fall recorded</p>}

            {rain?.['1h'] && <div className='bg-[url(img/rain.gif)] bg-bottom w-full flex flex-col justify-center items-center'>
                <p className={cardRainMeasureMainStyle}>
                    <CloudRain size={24} /> {rain?.['1h']} mm
                </p>
                <p className={cardRainDateStyle}>
                    Last hour
                </p>
            </div>}

            {rain?.['3h'] && <div className='bg-[url(img/rain.gif)] bg-bottom w-full flex flex-col justify-center items-center'>
                <p className={cardRainMeasureSecondStyle}>
                    <CloudRain size={16} /> {rain?.['3h']} mm
                </p>
                <p className={cardRainDateStyle}>
                    Last 3 hours
                </p>
            </div>}

            {snow?.['1h'] && <div className='bg-[url(img/snow.gif)] w-full flex flex-col justify-center items-center'>
                <p className={cardRainMeasureMainStyle}>
                    <CloudSnow size={24} /> {snow?.['1h']} mm
                </p>
                <p className={cardRainDateStyle}>
                    Last hour
                </p>
            </div>}

            {snow?.['3h'] && <div className='bg-[url(img/snow.gif)] w-full flex flex-col justify-center items-center'>
                <p className={cardRainMeasureSecondStyle}>
                    <CloudSnow size={16} /> {snow?.['3h']} mm
                </p>
                <p className={cardRainDateStyle}>
                    Last 3 hours
                </p>
            </div>}
            
        </div>
    )
}
