import { useForecast } from "../context/forecastContext";
import Forecast from "./Forecast";

export default function CardForecast() {
    const {forecast} = useForecast();

    // console.log(forecast)

    return (
        <div className="bg-yellow-500 flex gap-4 overflow-x-scroll md:col-span-2">
            {forecast ? forecast.map(entry => <Forecast key={entry.dt} data={entry} />) : "Loading"}
        </div>
    );
}
