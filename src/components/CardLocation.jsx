import { useWeather } from "../context/weatherContext";
import { MapPin } from "lucide-react";

function CardSearch() {
    const {city, dt, timezone } = useWeather();
    const formattedDate = dt ? new Date(dt * 1000).toLocaleString() : "No timestamp";

    return (
        <div className="p-4 border border-colorBorder sm:col-span-full md:col-span-full lg:col-span-full xl:col-span-2 flex flex-col md:flex-row gap-4 justify-between bg-gradient-to-br from-colorAccent1t to-transparent">
            
            <div className="flex flex-col w-full">
                <p className="font-custom1 font-600 text-lg border-b-2 border-colorBorder text-colorTextLight flex flex-row gap-1 justify-start items-center">
                <MapPin /> {city ? city.toUpperCase() : "Unknown location"} 
                </p>

                <p className="font-custom2 mt-1 text-sm text-colorTextMedium">
                    {formattedDate} (UTC{timezone > 0 ? "+" : ""}{timezone || timezone === 0 ? timezone / 3600 : "??"})
                </p>
            </div>

        </div>
    );
}

export default CardSearch;