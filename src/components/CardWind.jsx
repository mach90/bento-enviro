import { useWeather } from "../context/weatherContext";
import { Wind } from 'lucide-react';

export default function CardWeather() {
    const {windSpeed, windDirection, windGust} = useWeather();
    
    return (
        <div className="bg-gray-50 text-gray-600 p-4 rounded-3xl flex flex-col justify-center items-center shadow-md">
            
            {!windSpeed && <p className="font-custom1 text-3xl">No wind recorded</p>}

            {windSpeed && <>
                <p className="flex items-center gap-2 text-3xl font-custom1">
                    {(windSpeed * 3.6).toFixed(0)} km/h
                </p>
                <p className="text-xl font-custom2">
                    {windDirection >= 0 ? windDirection : "???"}°
                </p>
                <p className="text-gray-400">
                    <Wind size={80} transform={`rotate(${windDirection + 90})`} />
                </p>
            </>}

            {/* {windSpeed &&
                <>

                    <p>
                        <svg width="80" height="80" viewBox="0 0 100 100" style={{ transform: `rotate(${windDirection}deg)` }}>
                            <circle cx="50" cy="50" r="45" stroke="#none" strokeWidth="2" fill="none" />
                            <polygon points="50,10 55,40 70,40 50,70 30,40 45,40" fill="#1e3a8a" />
                        </svg>
                    </p>
                </>
            } */}

            {windGust && 
                <p className="font-custom2 text-xl">
                    {(windGust * 3.6).toFixed(0)} km/h gusts
                </p>
            }

        </div>
    )
}
