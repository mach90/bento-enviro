import { useWeather } from "../context/weatherContext";
import { Wind } from 'lucide-react';

const cardWindContainerStyle = "bg-cardPrimary p-4 flex flex-col justify-center items-center rounded-lg shadow-md";
const cardWindNoDataStyle = "font-heading text-lg text-textPrimaryVariant";
const cardWindWindspeedStyle = "flex items-center gap-2 text-lg font-heading text-textPrimary";
const cardWindMeasureStyle = "font-body text-md text-textPrimaryVariant";
const cardWindIconStyle = "text-textPrimaryVariant animate-shake";

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


