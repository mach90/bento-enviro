import { useWeather } from "../context/weatherContext";
import { MapPin } from "lucide-react";

const cardLocationContainerStyle = "p-2 flex flex-col md:flex-row gap-2 justify-between bg-second col-span-1 row-span-1 lg:col-span-3 xl:col-span-2 w-full h-full";
const cardLocationLogoStyle = "text-second bg-1000 h-full w-max"
const cardLocationInfosContainerStyle = "flex flex-col w-full h-full justify-center";
const cardLocationCityStyle = "font-heading text-heading border-b-2 border-borderFourth text-1000 flex flex-row gap-1 justify-start items-center";
const cardLocationDateStyle = "bg-fourth font-body mt-1 text-body text-1000";

function CardSearch() {
    const {city, country, dt, timezone } = useWeather();
    const formattedDate = dt ? new Date(dt * 1000).toLocaleString() : "No timestamp";

    return (
        <div className={cardLocationContainerStyle}>

            <MapPin className={cardLocationLogoStyle} size={48}/>

            <div className={cardLocationInfosContainerStyle}>
                <h1 className={cardLocationCityStyle}>
                    {city ? city.toUpperCase() : "Unknown location"}{country ? <img src={`https://flagpedia.net/data/flags/h20/${country.toLowerCase()}.png`}/> : ""}
                    
                </h1>

                <p className={cardLocationDateStyle}>
                    {formattedDate} (UTC{timezone > 0 ? "+" : ""}{timezone || timezone === 0 ? timezone / 3600 : "??"})
                </p>
            </div>

        </div>
    );
}

export default CardSearch;