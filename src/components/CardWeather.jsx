import { useWeather } from "../context/weatherContext";
import { Thermometer, CircleGauge, Droplets, MoveDown, MoveUp, Wind, CloudRain, CloudSnow } from 'lucide-react';

export default function CardWeather() {
    const {city, dt, timezone, description, temp, feels, pressure, humidity, minTemp, maxTemp, windSpeed, windDirection, windGust, clouds, rain, snow} = useWeather();
    const formattedDate = dt ? new Date(dt * 1000).toLocaleString() : "No timestamp";

    return (
        <div className="card card-weather">
            <div className="weather-cityBox">
                <h1>{city ? city.toUpperCase() : "Unknown position"}</h1>
                <em>{formattedDate} (UTC{timezone > 0 ? "+" : ""}{timezone / 3600})</em>
            </div>
            <div className="weather-descriptionBox">
                <p>{description ? description.toUpperCase() : "Unknown weather"}</p>
                {clouds > 0 && <em>Cloud coverage {clouds}%</em>}
            </div>
            <div className="weather-tempBox">
                <h1><Thermometer size={24}/>{temp ? `${temp.toFixed(0)}°C` : "No temp data"}</h1>
                <em>{feels ? `Feels like ${feels.toFixed(0)}°C` : "No temp feels like data"}</em>
                <p><MoveUp size={16} /> {maxTemp ?`${maxTemp.toFixed(0)}°C` : "No data"}</p>
                <p><MoveDown size={16}/> {minTemp ? `${minTemp.toFixed(0)}°C` : "No data"}</p>
                <p><CircleGauge size={16}/> {pressure ? `${pressure} hPa` : "No data"}</p>
                <p><Droplets size={16}/> {humidity ? `${humidity} %` : "No humidity data"}</p>
                <p>
                    <Wind size={16}/> {windSpeed ? `${(windSpeed * 3.6).toFixed(0)} km/h` : "No windSpeed data"}{windDirection >= 0 && <em>{windDirection}°</em>}
                    <svg width="30" height="30" viewBox="0 0 100 100" style={{ transform: `rotate(${windDirection}deg)` }}>
                        <circle cx="50" cy="50" r="45" stroke="#none" strokeWidth="2" fill="none" />
                        <polygon points="50,10 55,40 70,40 50,70 30,40 45,40" fill="#436971" />
                    </svg>
                </p>
                {windGust && <em>{(windGust * 3.6).toFixed(0)} km/h gusts</em>}
            </div>
            {rain && <div className="weather-rainBox">
                {rain?.['1h'] && <p>1h <CloudRain size={16} /> {rain['1h']} mm</p>}
                {rain?.['3h'] && <p>3h <CloudRain size={16} /> {rain['3h']} mm</p>}
            </div>}
            {snow && <div className="weather-snowBox">
                {snow?.['1h'] && <p>1h <CloudSnow size={16} /> {snow['1h']} mm</p>}
                {snow?.['3h'] && <p>3h <CloudSnow size={16} /> {snow['3h']} mm</p>}
            </div>}
        </div>
    );
}
