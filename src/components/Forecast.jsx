import { Thermometer, CircleGauge, Droplets, Wind } from 'lucide-react';

const cardForecastItemDataContainerStyle = "bg-first h-full w-full flex flex-col justify-center items-center px-2 py-4 border-x border-1000 border-dashed gap-2";
const cardForecastItemCountStyle = "font-body text-body text-600";
const cardForecastItemDescriptionStyle = "font-body text-body text-0";
const cardForecastItemPrecisionStyle = "font-body text-body text-1000 bg-fourth";
const cardForecastItemTemperatureStyle = "font-body text-body flex gap-1 items-center justify-start border-2 border-1000 text-0 px-4 py-2 w-max rounded-lg bg-cardFirst";
const cardForecastItemMeasureStyle = "font-exp text-exp flex gap-2 items-center justify-start text-400";

export default function Forecast({data, i, count, unit}) {
    const formattedDate = data.dt ? new Date(data.dt * 1000).toLocaleString() : "No timestamp";

    const tempConverted = unit === "metric" ? data.main.temp : (data.main.temp * 1.8 + 32);
    const feelsConverted = unit === "metric" ? data.main.feels_like : (data.main.feels_like * 1.8 + 32);
    const pressureConverted = unit === "metric" ? data.main.pressure : (data.main.pressure * 0.029529983071445);
    const windSpeedConverted = unit === "metric" ? data.wind.speed * 3.6 : data.wind.speed * 2.236936;
    const windGustConverted = unit === "metric" ? data.wind.gust * 3.6 : data.wind.speed * 2.236936;

    return (
        <div className={cardForecastItemDataContainerStyle}>
            <h1 className={cardForecastItemCountStyle}>FORECAST {i + 1}/{count}</h1>
            <p className={cardForecastItemPrecisionStyle}>{formattedDate}</p>

            <p className={cardForecastItemDescriptionStyle}>{data.weather[0].description ? (data.weather[0].description).toUpperCase() : "Unknown weather"}</p>

            <p className={cardForecastItemTemperatureStyle}>
                <Thermometer size={24}/>{data.main.temp ? tempConverted.toFixed(0) : "??"}{unit === "metric" ? "°C" : "°F"}
            </p>

            <p className={cardForecastItemMeasureStyle}>Feels {data.main.feels_like ? feelsConverted.toFixed(0) : "??"}{unit === "metric" ? "°C" : "°F"}</p>

            <p className={cardForecastItemMeasureStyle}>
                <CircleGauge size={16}/>{data.main.pressure ? unit === "metric" ? pressureConverted.toFixed(0) : pressureConverted.toFixed(2) : "??"} {unit === "metric" ? "hPa" : "inHg"}
            </p>

            <p className={cardForecastItemMeasureStyle}>
                <Droplets size={16}/>{data.main.humidity ? data.main.humidity : "??"} %
            </p>

            {!data.wind.speed && <p className={cardForecastItemMeasureStyle}>No wind recorded</p>}

            {data.wind.speed && <>
                <div className={cardForecastItemMeasureStyle}>
                    <Wind size={16} transform={`rotate(${data.wind.deg + 90})`} />
                    <p>{(windSpeedConverted).toFixed(0)} {unit === "metric" ? "km/h" : "mph"}</p>
                    <p>{data.wind.deg >= 0 ? data.wind.deg : "???"}°</p>
                </div>
                
            </>}

            {data.wind.gust && 
                <p className={cardForecastItemMeasureStyle}>
                    {(windGustConverted).toFixed(0)} {unit === "metric" ? "km/h" : "mph"} gusts
                </p>
            }

        </div>
    );
}
