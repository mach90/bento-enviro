import { useWeather } from "../context/weatherContext";
import { Thermometer, CircleGauge, Droplets, MoveDown, MoveUp } from 'lucide-react';

export default function CardWeather() {
    const {city, dt, timezone, description, temp, feels, pressure, humidity, minTemp, maxTemp, clouds } = useWeather();
    
    const formattedDate = dt ? new Date(dt * 1000).toLocaleString() : "No timestamp";

    return (
        <div className="bg-amber-300 text-amber-900 md:row-span-3 lg:row-span-3 p-4 rounded-3xl flex flex-col justify-between">

            <p className="font-custom1 font-600 text-3xl border-b-2 border-amber-900">
                {city ? city.toUpperCase() : "Can't find your city"}
            </p>

            <p className="font-custom2 mt-1">
                {formattedDate} (UTC{timezone > 0 ? "+" : ""}{timezone ? timezone / 3600 : "??"})
            </p>

            <p className="font-custom1 text-3xl mt-4">
                {description ? description.toUpperCase() : "Unknown weather"}
            </p>

            <p className="font-custom2 text-xl">
                {clouds ? `Cloud coverage ${clouds}%` : ""}
            </p>

            <p className="font-custom1 text-3xl flex gap-1 items-center justify-center mt-6 bg-amber-900 text-amber-300 rounded-xl p-2">
                <Thermometer size={24}/>{temp ? temp.toFixed(0) : "??"}°C
            </p>

            <p className="font-custom2 text-2xl flex justify-center mt-2">
                Feels like {feels ? feels.toFixed(0) : "??"}°C
            </p>

            <p className="font-custom2 text-2xl flex gap-1 mt-2 items-center justify-center">
                <MoveUp size={16} />{maxTemp ? maxTemp.toFixed(0) : "??"}°C / <MoveDown size={16}/>{minTemp ? minTemp.toFixed(0) : "??"}°C
            </p>

            <p className="font-custom1 text-2xl flex gap-1 items-center justify-center mt-4">
                <CircleGauge size={16}/>{pressure ? pressure : "??"} hPa
            </p>

            <p className="font-custom1 text-2xl flex gap-1 items-center justify-center mt-4">
                <Droplets size={16}/>{humidity ? humidity : "??"}%
            </p>

        </div>
    )
}
