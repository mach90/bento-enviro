import { useWeather } from "../context/weatherContext";
import { Thermometer, CircleGauge, Droplets, Eye } from 'lucide-react';

const cardWeatherContainerStyle = "bg-fifth p-6 flex flex-col justify-between items-center rounded-lg shadow-md col-span-1 row-span-1 md:col-span-2 lg:col-span-1";

const cardWeatherDataContainerStyle = "bg-second h-full w-full flex flex-col justify-between items-center rounded-xl shadow-inner shadow-1000";
const cardWeatherDataContainerTopStyle = "p-5 flex flex-col gap-2 h-full";
const cardWeatherDataContainerBottomStyle = "p-2 flex flex-row gap-2 h-max w-full items-center justify-end border-y-2 mt-2 border-fifth brightness-75";

const cardWeatherDescriptionStyle = "font-heading text-heading text-0 bg-first p-1";
const cardWeatherPrecisionStyle = "font-body text-body text-1000";
const cardWeatherTemperatureStyle = "font-heading text-heading flex gap-1 items-center justify-start text-0 p-1 w-max bg-first";
const cardWeatherMeasureStyle = "font-body text-body flex gap-1 items-center justify-start text-1000";

const cardWeatherButtonStyle = "rounded-full bg-700 p-2 border-2 border-800 font-exp text-exp text-400 hover:brightness-125 shadow-sm shadow-1000 w-max";

export default function CardWeather({unit, handleUnit}) {
    const { description, temp, feels, pressure, humidity, clouds, visibility } = useWeather();

    const tempConverted = unit === "metric" ? temp : (temp * 1.8 + 32);
    const feelsConverted = unit === "metric" ? feels : (feels * 1.8 + 32);
    const pressureConverted = unit === "metric" ? pressure : (pressure * 0.029529983071445);
    const visibilityConverted = unit === "metric" ? visibility : (visibility * 0.6213712);
        
    return (
        <div className={cardWeatherContainerStyle}>

            {/* <div className="mr-8 h-full">
                <svg width="10" height="250" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)">
                    <rect x="0" y="90%" width="100%" height="1.5" fill="#53595f" />
                    <rect x="0" y="80%" width="100%" height="1.5" fill="#53595f" />
                    <rect x="0" y="70%" width="100%" height="1.5" fill="#53595f" />
                    <rect x="0" y="60%" width="100%" height="1.5" fill="#53595f" />
                    <rect x="0" y="50%" width="100%" height="1.5" fill="#53595f" />
                    <rect x="0" y="40%" width="100%" height="5" fill="#53595f" />
                    <rect x="0" y="30%" width="100%" height="1.5" fill="#53595f" />
                    <rect x="0" y="20%" width="100%" height="1.5" fill="#53595f" />
                    <rect x="0" y="10%" width="100%" height="1.5" fill="#53595f" />
                    <rect x="25%" y="0" width="50%" height="100%"  fill="#53595f" />
                    <rect x="25%" y="0" width="50%" height={`${temp ? `${temp + 40}` : `${0}`}%`} fill="#1c1c1c">
                        <animate
                            attributeName="y"
                            from="0%"
                            to="0%"
                            dur="2s"
                            fill="freeze"
                        />
                        <animate
                            attributeName="height"
                            from="0%"
                            to={`${temp ? `${temp + 40}` : `${0}`}%`}
                            dur="2s"
                            fill="freeze"
                        />
                    </rect>
                </svg>
            </div> */}

            <div className={cardWeatherDataContainerStyle}>
                <div className={cardWeatherDataContainerTopStyle}>
                    <p className={cardWeatherDescriptionStyle}>
                        {description ? description.toUpperCase() : "Unknown weather"}
                    </p>

                    <p className={cardWeatherPrecisionStyle}>
                        {clouds ? `Cloud coverage ${clouds}%` : ""}
                    </p>

                    <p className={cardWeatherTemperatureStyle}>
                        <Thermometer size={24}/>{temp ? tempConverted.toFixed(0) : "??"}{unit === "metric" ? "°C" : "°F"}
                    </p>

                    <p className={cardWeatherPrecisionStyle}>
                        Feels {feels ? feelsConverted.toFixed(0) : "??"}{unit === "metric" ? "°C" : "°F"}
                    </p>

                    <p className={cardWeatherMeasureStyle}>
                        <CircleGauge size={16}/>{pressure ? unit === "metric" ? pressureConverted.toFixed(0) : pressureConverted.toFixed(2) : "??"} {unit === "metric" ? "hPa" : "inHg"}
                    </p>

                    <p className={cardWeatherMeasureStyle}>
                        <Droplets size={16}/>{humidity ? humidity : "??"}%
                    </p>

                    <p className={cardWeatherMeasureStyle}>
                        <Eye size={16}/>{visibility ? unit === "metric" ? visibilityConverted.toFixed(0) : visibilityConverted.toFixed(0) : "??"} {unit === "metric" ? "km" : "mi"}
                    </p>
                </div>
            </div>
            <div className={cardWeatherDataContainerBottomStyle}>
                <button onClick={() => handleUnit("metric")} className={cardWeatherButtonStyle}>METRIC</button>
                <button onClick={() => handleUnit("us")} className={cardWeatherButtonStyle}>US</button>
            </div>

        </div>
    )
}