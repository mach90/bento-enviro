import { useWeather } from "../context/weatherContext";
import { Wind } from 'lucide-react';

export default function CardWeather() {
    const {windSpeed, windDirection, windGust} = useWeather();
    
    return (
        <div className="bg-colorCard1 text-colorDark p-4 rounded-3xl flex flex-col justify-center items-center shadow-md">
            
            {!windSpeed && <p className="font-custom1 text-3xl">No wind recorded</p>}

            {windSpeed && <>
                <p className="flex items-center gap-2 text-3xl font-custom1">
                    {(windSpeed * 3.6).toFixed(0)} km/h
                </p>
                <p className="text-xl font-custom2">
                    {windDirection >= 0 ? windDirection : "???"}°
                </p>
                <p className="text-colorCard3 animate-shake">
                    <Wind size={80} transform={`rotate(${windDirection + 90})`} />
                </p>
            </>}

            {windGust && 
                <p className="font-custom2 text-xl">
                    {(windGust * 3.6).toFixed(0)} km/h gusts
                </p>
            }

        </div>
    )
}
