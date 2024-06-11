import { useWeather } from "../context/weatherContext";
import { Thermometer, CircleGauge, Droplets } from 'lucide-react';
// import { Thermometer, CircleGauge, Droplets, MoveDown, MoveUp } from 'lucide-react';

export default function CardWeather() {
    const {city, dt, timezone, description, temp, feels, pressure, humidity, clouds } = useWeather();
    // const {city, dt, timezone, description, temp, feels, pressure, humidity, minTemp, maxTemp, clouds } = useWeather();
    
    const formattedDate = dt ? new Date(dt * 1000).toLocaleString() : "No timestamp";

    return (
        <div className="text-amber-300 bg-amber-800 md:row-span-3 lg:row-span-3 p-4 rounded-3xl flex flex-row gap-6 justify-between items-center">

            <div className="w-full">
                <p className="font-custom1 font-600 text-3xl border-b-2 border-amber-300">
                    {city ? city.toUpperCase() : "Can't find your city"}
                </p>

                <p className="font-custom2 mt-1 text-amber-400">
                    {formattedDate} (UTC{timezone > 0 ? "+" : ""}{timezone ? timezone / 3600 : "??"})
                </p>

                <p className="font-custom1 text-3xl mt-4 text-stone-200">
                    {description ? description.toUpperCase() : "Unknown weather"}
                </p>

                <p className="font-custom2 text-xl text-stone-300">
                    {clouds ? `Cloud coverage ${clouds}%` : ""}
                </p>

                <p className="font-custom1 text-3xl flex gap-1 items-center justify-center mt-6 bg-amber-300 text-amber-900 rounded-xl p-2">
                    <Thermometer size={24}/>{temp ? temp.toFixed(0) : "??"}°C
                </p>

                <p className="font-custom2 text-2xl flex justify-center mt-2 text-amber-400">
                    Feels like {feels ? feels.toFixed(0) : "??"}°C
                </p>

                {/* <p className="font-custom2 text-2xl flex gap-1 mt-2 items-center justify-center">
                    <MoveUp size={16} />{maxTemp ? maxTemp.toFixed(0) : "??"}°C / <MoveDown size={16}/>{minTemp ? minTemp.toFixed(0) : "??"}°C
                </p> */}

                <p className="font-custom1 text-2xl flex gap-1 items-center justify-center mt-4">
                    <CircleGauge size={16}/>{pressure ? pressure : "??"} hPa
                </p>

                <p className="font-custom1 text-2xl flex gap-1 items-center justify-center mt-4">
                    <Droplets size={16}/>{humidity ? humidity : "??"}%
                </p>
            </div>

            <div>
                <svg width="30" height="300" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)">
                    <rect x="0" y="90%" width="100%" height="1.5" fill="#451e08" />
                    <rect x="0" y="80%" width="100%" height="1.5" fill="#451e08" />
                    <rect x="0" y="70%" width="100%" height="1.5" fill="#451e08" />
                    <rect x="0" y="60%" width="100%" height="1.5" fill="#451e08" />
                    <rect x="0" y="50%" width="100%" height="1.5" fill="#451e08" />
                    <rect x="0" y="40%" width="100%" height="5" fill="#fcd34d" />
                    <rect x="0" y="30%" width="100%" height="1.5" fill="#451e08" />
                    <rect x="0" y="20%" width="100%" height="1.5" fill="#451e08" />
                    <rect x="0" y="10%" width="100%" height="1.5" fill="#451e08" />
                    <rect x="25%" y="0" width="50%" height="100%"  fill="#451e08" />
                    <rect x="25%" y="0" width="50%" height={`${temp ? `${temp + 40}` : `${0}`}%`} fill="#fcd34d" />
                </svg>
            </div>

        </div>
    )
}