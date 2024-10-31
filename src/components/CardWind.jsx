import { useWeather } from "../context/weatherContext";
import { Wind } from 'lucide-react';

const cardWindContainerStyle = "bg-cardThird p-4 flex flex-col justify-center items-center rounded-lg shadow-md col-span-1 row-span-1";
const cardWindNoDataStyle = "font-heading text-lg text-textThirdVariant";
const cardWindWindspeedStyle = "flex items-center gap-2 text-lg font-heading text-textThird";
const cardWindMeasureStyle = "font-body text-md text-textThirdVariant";
const cardWindIconStyle = "text-textThirdVariant animate-shake";

export default function CardWeather() {
    const {windSpeed, windDirection, windGust} = useWeather();
    
    return (
        <div className={cardWindContainerStyle}>
            
            {!windSpeed && <p className={cardWindNoDataStyle}>No wind recorded</p>}

            {windSpeed && <>
                <p className={cardWindWindspeedStyle}>
                    {(windSpeed * 3.6).toFixed(0)} km/h
                </p>
                <p className={cardWindMeasureStyle}>
                    {windDirection >= 0 ? windDirection : "???"}°
                </p>
                <p className={cardWindIconStyle}>
                    <Wind size={48} transform={`rotate(${windDirection + 90})`} />
                </p>
            </>}

            {windGust && 
                <p className={cardWindMeasureStyle}>
                    {(windGust * 3.6).toFixed(0)} km/h gusts
                </p>
            }

        </div>
    )
}


