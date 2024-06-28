import { Thermometer, CircleGauge, Droplets, Wind } from 'lucide-react';

export default function Forecast({data}) {
    const formattedDate = data.dt ? new Date(data.dt * 1000).toLocaleString() : "No timestamp";

    return (
        <div className="flex flex-col gap-1 p-4 justify-center items-start w-[200px] flex-shrink-0 snap-center">

            <p className="font-custom2 text-sm text-colorTextMedium ">{formattedDate}</p>

            <p className="font-custom1 text-md text-colorTextLight">{data.weather[0].description ? (data.weather[0].description).toUpperCase() : "Unknown weather"}</p>

            <p className="font-custom1 text-md flex gap-1 items-center bg-gradient-to-r from-colorAccent2t to-transparent text-colorTextLight p-2 w-full">
                <Thermometer size={24}/>{data.main.temp ? data.main.temp.toFixed(0) : "??"}°C
            </p>

            <p className="font-custom2 text-sm flex text-colorTextMedium">Feels like {data.main.feels_like ? (data.main.feels_like).toFixed(0) : "??"}°C</p>

            <p className="font-custom1 text-sm flex gap-1 items-center text-colorTextMedium">
                <CircleGauge size={16}/>{data.main.pressure ? data.main.pressure : "??"} hPa
            </p>

            <p className="font-custom1 text-sm flex gap-1 items-center text-colorTextMedium">
                <Droplets size={16}/>{data.main.humidity ? data.main.humidity : "??"} %
            </p>

            {!data.wind.speed && <p className="font-custom1 text-sm text-colorTextMedium mt-2">No wind recorded</p>}

            {data.wind.speed && <>
                <p className="flex flex-row gap-1 text-center text-sm font-custom1 items-center">
                    <Wind size={16} transform={`rotate(${data.wind.deg + 90})`} className='text-colorTextMedium'/>
                    <p className='text-colorTextLight'>{(data.wind.speed * 3.6).toFixed(0)} km/h</p>
                    <p className='text-colorTextMedium'>{data.wind.deg >= 0 ? data.wind.deg : "???"}°</p>
                </p>
                
            </>}

            {data.wind.gust && 
                <p className="font-custom2 text-sm text-colorTextMedium">
                    {(data.wind.gust * 3.6).toFixed(0)} km/h gusts
                </p>
            }

        </div>
    );
}
