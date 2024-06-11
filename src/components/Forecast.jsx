import { Thermometer, CircleGauge, Droplets, Wind } from 'lucide-react';


export default function Forecast({data}) {

    const formattedDate = data.dt ? new Date(data.dt * 1000).toLocaleString() : "No timestamp";

    return (
        <div className="bg-gray-50 flex flex-col gap-2 p-4 justify-center items-center w-[200px] flex-shrink-0 rounded-3xl shadow-md">

            <p className="font-custom2 text-gray-600">{formattedDate}</p>

            <p className="font-custom1 text-3xl flex gap-1 items-center justify-center bg-gray-600 text-gray-200 rounded-xl p-2">
                <Thermometer size={24}/>{data.main.temp ? data.main.temp.toFixed(0) : "??"}°C
            </p>

            <p className="font-custom2 text-lg flex justify-center text-gray-400">Feels like {data.main.feels_like ? (data.main.feels_like).toFixed(0) : "??"}°C</p>

            <p className="font-custom1 text-lg text-gray-600">{data.weather[0].description ? (data.weather[0].description).toUpperCase() : "Unknown weather"}</p>

            <p className="font-custom1 text-md flex gap-1 items-center justify-center text-gray-600">
                <CircleGauge size={16}/>{data.main.pressure ? data.main.pressure : "??"} hPa
            </p>

            <p className="font-custom1 text-md flex gap-1 items-center justify-center text-gray-600">
                <Droplets size={16}/>{data.main.humidity ? data.main.humidity : "??"} hPa
            </p>

            {!data.wind.speed && <p className="font-custom1 text-3xl text-gray-600">No wind recorded</p>}

            {data.wind.speed && <>
                <p className="flex items-center gap-2 text-lg font-custom1 text-gray-600">
                    {(data.wind.speed * 3.6).toFixed(0)} km/h
                </p>
                <p className="text-md font-custom2 text-gray-600">
                    {data.wind.deg >= 0 ? data.wind.deg : "???"}°
                </p>
                <p className='text-gray-600'>
                    <Wind size={40} transform={`rotate(${data.wind.deg + 90})`} />
                </p>
            </>}

            {data.wind.gust && 
                <p className="font-custom2 text-md text-gray-600">
                    {(data.wind.gust * 3.6).toFixed(0)} km/h gusts
                </p>
            }

        </div>
    );
}
