import { Thermometer, CircleGauge, Droplets, Wind } from 'lucide-react';

export default function Forecast({data}) {
    const formattedDate = data.dt ? new Date(data.dt * 1000).toLocaleString() : "No timestamp";

    return (
        <div className="bg-colorCard3 flex flex-col gap-2 p-4 justify-center items-center w-[200px] flex-shrink-0 rounded-2xl shadow-inner snap-center">

            <p className="font-custom2 text-sm text-colorLight">{formattedDate}</p>

            <p className="font-custom1 text-xl flex gap-1 items-center justify-center bg-colorDark text-colorBrand rounded-xl p-2">
                <Thermometer size={24}/>{data.main.temp ? data.main.temp.toFixed(0) : "??"}°C
            </p>

            <p className="font-custom2 text-sm flex justify-center text-colorLight">Feels like {data.main.feels_like ? (data.main.feels_like).toFixed(0) : "??"}°C</p>

            <p className="font-custom1 text-md text-colorLight">{data.weather[0].description ? (data.weather[0].description).toUpperCase() : "Unknown weather"}</p>

            <p className="font-custom1 text-sm flex gap-1 items-center justify-center text-colorLight">
                <CircleGauge size={16}/>{data.main.pressure ? data.main.pressure : "??"} hPa
            </p>

            <p className="font-custom1 text-sm flex gap-1 items-center justify-center text-colorLight">
                <Droplets size={16}/>{data.main.humidity ? data.main.humidity : "??"} %
            </p>

            {!data.wind.speed && <p className="font-custom1 text-sm text-colorLight">No wind recorded</p>}

            {data.wind.speed && <>
                <p className="flex items-center gap-2 text-sm font-custom1 text-colorLight">
                    {(data.wind.speed * 3.6).toFixed(0)} km/h
                </p>
                <p className="text-sm font-custom2 text-colorLight">
                    {data.wind.deg >= 0 ? data.wind.deg : "???"}°
                </p>
                <p className='text-colorLight text-sm'>
                    <Wind size={40} transform={`rotate(${data.wind.deg + 90})`} />
                </p>
            </>}

            {data.wind.gust && 
                <p className="font-custom2 text-sm text-colorLight">
                    {(data.wind.gust * 3.6).toFixed(0)} km/h gusts
                </p>
            }

        </div>
    );
}
