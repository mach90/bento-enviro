import { useWeather } from "../context/weatherContext";
import { Search, MapPin } from "lucide-react";

export default function CardStatus() {
    const {city, dt, timezone } = useWeather();

    const formattedDate = dt ? new Date(dt * 1000).toLocaleString() : "No timestamp";

    return (
        <div className="bg-colorCard1 p-4 rounded-2xl md:col-span-2 lg:col-span-2 flex flex-row gap-4 justify-between">
            <div className="flex flex-col w-max">
                <p className="font-custom1 font-600 text-3xl border-b-2 border-colorMedium text-colorDark flex flex-row gap-1 justify-start items-center">
                    <MapPin /> {city ? city.toUpperCase() : "Unknown location"}
                </p>

                <p className="font-custom2 mt-1 text-colorMedium">
                    {formattedDate} (UTC{timezone > 0 ? "+" : ""}{timezone || timezone === 0 ? timezone / 3600 : "??"})
                </p>
            </div>

            <div className="flex flex-row gap-2 justify-center items-center h-full">
                <div className="bg-colorCard2 rounded-xl p-2 text-custom1 text-colorMedium">INOP</div>
                <button className="bg-colorCard3 rounded-xl flex flex-row gap-1 p-2 text-custom1 text-colorLight">INOP <Search /></button>
            </div>
        </div>
    );
}
