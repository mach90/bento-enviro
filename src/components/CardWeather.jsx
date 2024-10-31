import { useWeather } from "../context/weatherContext";
import { Thermometer, CircleGauge, Droplets, Eye } from 'lucide-react';

const cardWeatherContainerStyle = "bg-cardAlternate p-4 flex flex-row justify-between items-center rounded-lg shadow-md col-span-1 row-span-1 md:col-span-2 lg:col-span-1";
const cardWeatherDataContainerStyle = "h-full w-full flex flex-col justify-between";
const cardWeatherDescriptionStyle = "font-heading text-lg text-textAlternate";
const cardWeatherPrecisionStyle = "font-body text-sm text-textAlternateVariant";
const cardWeatherTemperatureStyle = "font-heading font-bold text-lg flex gap-1 items-center justify-start border-2 border-borderAlternate text-textAlternate px-4 py-2 w-max rounded-lg bg-cardAlternate";
const cardWeatherMeasureStyle = "font-heading text-md flex gap-1 items-center justify-start text-textAlternate";

export default function CardWeather() {
    const { description, temp, feels, pressure, humidity, clouds, visibility } = useWeather();
    
    return (
        <div className={cardWeatherContainerStyle}>

            <div className="mr-8">
                <svg width="8" height="200" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)">
                    <rect x="0" y="90%" width="100%" height="1.5" fill="#fff" />
                    <rect x="0" y="80%" width="100%" height="1.5" fill="#fff" />
                    <rect x="0" y="70%" width="100%" height="1.5" fill="#fff" />
                    <rect x="0" y="60%" width="100%" height="1.5" fill="#fff" />
                    <rect x="0" y="50%" width="100%" height="1.5" fill="#fff" />
                    <rect x="0" y="40%" width="100%" height="5" fill="#fff" />
                    <rect x="0" y="30%" width="100%" height="1.5" fill="#fff" />
                    <rect x="0" y="20%" width="100%" height="1.5" fill="#fff" />
                    <rect x="0" y="10%" width="100%" height="1.5" fill="#fff" />
                    <rect x="25%" y="0" width="50%" height="100%"  fill="#fff" />
                    <rect x="25%" y="0" width="50%" height={`${temp ? `${temp + 40}` : `${0}`}%`} fill="#f50000aa">
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
            </div>

            <div className={cardWeatherDataContainerStyle}>
                <p className={cardWeatherDescriptionStyle}>
                    {description ? description.toUpperCase() : "Unknown weather"}
                </p>

                <p className={cardWeatherPrecisionStyle}>
                    {clouds ? `Cloud coverage ${clouds}%` : ""}
                </p>

                <p className={cardWeatherTemperatureStyle}>
                    <Thermometer size={24}/>{temp ? temp.toFixed(0) : "??"}°C
                </p>

                <p className={cardWeatherPrecisionStyle}>
                    Feels like {feels ? feels.toFixed(0) : "??"}°C
                </p>

                <p className={cardWeatherMeasureStyle}>
                    <CircleGauge size={16}/>{pressure ? pressure : "??"} hPa
                </p>

                <p className={cardWeatherMeasureStyle}>
                    <Droplets size={16}/>{humidity ? humidity : "??"}%
                </p>

                <p className={cardWeatherMeasureStyle}>
                    <Eye size={16}/>{visibility ? visibility : "??"} km
                </p>
            </div>

           

        </div>
    )
}