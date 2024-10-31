import { Thermometer, CircleGauge, Droplets, Wind } from 'lucide-react';

const cardForecastItemDataContainerStyle = "h-full w-full flex flex-col justify-between items-center p-4";
const cardForecastItemDescriptionStyle = "font-heading text-lg text-textSecond";
const cardForecastItemPrecisionStyle = "font-body text-sm text-textSecondVariant";
const cardForecastItemTemperatureStyle = "font-heading font-bold text-lg flex gap-1 items-center justify-start border-2 border-borderFirst text-textFirst px-4 py-2 w-max rounded-lg bg-cardFirst";
const cardForecastItemMeasureStyle = "font-heading text-md flex gap-2 items-center justify-start text-textSecond";

export default function Forecast({data}) {
    const formattedDate = data.dt ? new Date(data.dt * 1000).toLocaleString() : "No timestamp";

    return (
        <div className={cardForecastItemDataContainerStyle}>

            <p className={cardForecastItemPrecisionStyle}>{formattedDate}</p>

            <p className={cardForecastItemDescriptionStyle}>{data.weather[0].description ? (data.weather[0].description).toUpperCase() : "Unknown weather"}</p>

            <p className={cardForecastItemTemperatureStyle}>
                <Thermometer size={24}/>{data.main.temp ? data.main.temp.toFixed(0) : "??"}°C
            </p>

            <p className={cardForecastItemPrecisionStyle}>Feels like {data.main.feels_like ? (data.main.feels_like).toFixed(0) : "??"}°C</p>

            <p className={cardForecastItemMeasureStyle}>
                <CircleGauge size={16}/>{data.main.pressure ? data.main.pressure : "??"} hPa
            </p>

            <p className={cardForecastItemMeasureStyle}>
                <Droplets size={16}/>{data.main.humidity ? data.main.humidity : "??"} %
            </p>

            {!data.wind.speed && <p className={cardForecastItemMeasureStyle}>No wind recorded</p>}

            {data.wind.speed && <>
                <div className={cardForecastItemMeasureStyle}>
                    <Wind size={16} transform={`rotate(${data.wind.deg + 90})`} />
                    <p>{(data.wind.speed * 3.6).toFixed(0)} km/h</p>
                    <p>{data.wind.deg >= 0 ? data.wind.deg : "???"}°</p>
                </div>
                
            </>}

            {data.wind.gust && 
                <p className={cardForecastItemPrecisionStyle}>
                    {(data.wind.gust * 3.6).toFixed(0)} km/h gusts
                </p>
            }

        </div>
    );
}
