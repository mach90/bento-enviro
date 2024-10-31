import { useWeather } from "../context/weatherContext";
import { MapPin } from "lucide-react";

const cardLocationContainerStyle = "p-4 flex flex-col md:flex-row gap-4 justify-between bg-cardSecondary rounded-lg shadow-md col-span-1 row-span-1 lg:col-span-3 xl:col-span-2";
const cardLocationInfosContainerStyle = "flex flex-col w-full";
const cardLocationCityStyle = "font-heading font-600 text-lg border-b border-borderSecondary text-textSecondary flex flex-row gap-1 justify-start items-center";
const cardLocationDateStyle = "font-body mt-1 text-sm text-textSecondaryVariant";

function CardSearch() {
    const {city, dt, timezone } = useWeather();
    const formattedDate = dt ? new Date(dt * 1000).toLocaleString() : "No timestamp";

    return (
        <div className={cardLocationContainerStyle}>
            
            <div className={cardLocationInfosContainerStyle}>
                <h1 className={cardLocationCityStyle}>
                <MapPin /> {city ? city.toUpperCase() : "Unknown location"} 
                </h1>

                <p className={cardLocationDateStyle}>
                    {formattedDate} (UTC{timezone > 0 ? "+" : ""}{timezone || timezone === 0 ? timezone / 3600 : "??"})
                </p>
            </div>

        </div>
    );
}

export default CardSearch;