import { useWeather } from "../context/weatherContext";
import { Wind } from 'lucide-react';

export default function CardWeather() {
    const {windSpeed, windDirection, windGust} = useWeather();
    
    return (
        <div className="bg-gradient-to-tr from-transparent to-colorAccent4t p-4 border border-colorBorder flex flex-col justify-center items-center rounded-tl-lg">
            
            {!windSpeed && <p className="font-custom1 text-lg text-colorTextMedium">No wind recorded</p>}

            {windSpeed && <>
                <p className="flex items-center gap-2 text-lg font-custom1 text-colorTextLight">
                    {(windSpeed * 3.6).toFixed(0)} km/h
                </p>
                <p className="text-md font-custom2 text-colorTextMedium">
                    {windDirection >= 0 ? windDirection : "???"}°
                </p>
                <p className="text-colorTextMedium animate-shake">
                    <Wind size={48} transform={`rotate(${windDirection + 90})`} />
                </p>
            </>}

            {windGust && 
                <p className="font-custom2 text-md text-colorTextMedium">
                    {(windGust * 3.6).toFixed(0)} km/h gusts
                </p>
            }

        </div>
    )
}


