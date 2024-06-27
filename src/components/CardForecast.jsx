import { useForecast } from "../context/forecastContext";
import Forecast from "./Forecast";

export default function CardForecast() {
    const {forecast} = useForecast();

    return (
        <div className="flex flex-row gap-4 overflow-x-scroll md:col-span-full snap-x snap-mandatory">
            {forecast ? forecast.map(entry => <Forecast key={entry.dt} data={entry} />) : "No forecast"}
        </div>
    );
}
