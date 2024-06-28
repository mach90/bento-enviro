import { useWeather } from "../context/weatherContext";
import { Search, MapPin, RefreshCcwDot } from "lucide-react";

export default function CardStatus() {
    const {city, dt, timezone } = useWeather();

    const formattedDate = dt ? new Date(dt * 1000).toLocaleString() : "No timestamp";

    return (
        <div className="p-4 border border-colorBorder col-span-5 flex flex-row gap-4 justify-between bg-gradient-to-br from-colorAccent1t to-transparent rounded-bl-lg">
            
            <div className="flex flex-col w-max">
                <p className="font-custom1 font-600 text-lg border-b-2 border-colorBorder text-colorTextLight flex flex-row gap-1 justify-start items-center">
                <MapPin /> {city ? city.toUpperCase() : "Unknown location"} 
                </p>

                <p className="font-custom2 mt-1 text-sm text-colorTextMedium">
                    {formattedDate} (UTC{timezone > 0 ? "+" : ""}{timezone || timezone === 0 ? timezone / 3600 : "??"})
                </p>
            </div>

            <div className="relative flex flex-row gap-2 justify-center items-center h-full">
                <div className="border border-colorBorder rounded-md p-2 text-custom1 text-sm justify-start items-center text-colorTextMedium w-72 cursor-not-allowed">Search for a city_</div>
                <button className="bg-colorAccent1 rounded-xl flex flex-row gap-1 p-2 justify-center items-center text-custom1 text-sm text-colorTextMedium cursor-not-allowed">Search <Search /></button>
                <button className="bg-colorAccent3 rounded-xl flex flex-row gap-1 p-2 justify-center items-center text-custom1 text-sm text-colorTextMedium cursor-not-allowed"><RefreshCcwDot /></button>
                <p className="absolute top-0 bg-red-700 text-white text-xs p-1">INOP</p>
            </div>
        </div>
    );
}
