import { useForecast } from "../context/forecastContext";
import Forecast from "./Forecast";

export default function CardForecast() {
    const {forecast} = useForecast();

    return (
        <div className="flex flex-row gap-4 overflow-x-scroll md:col-span-2 px-2 py-4 snap-x snap-mandatory">
            {forecast ? forecast.map(entry => <Forecast key={entry.dt} data={entry} />) : "No forecast"}
        </div>
    );
}
