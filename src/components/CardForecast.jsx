import { useForecast } from "../context/forecastContext";
import Forecast from "./Forecast";

export default function CardForecast() {
    const {forecast} = useForecast();

    // console.log(forecast)

    return (
        <div className="card card-forecast">
            <div className="forecast-daysBox forecast-scrollbar">
                {forecast ? forecast.map(entry => <Forecast key={entry.dt} data={entry} />) : "Loading"}
            </div>
        </div>
    );
}
