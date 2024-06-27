import { useWeather } from "../context/weatherContext";
import { CloudRain, CloudSnow } from 'lucide-react';

export default function CardWeather() {
    const {rain, snow} = useWeather();

    return (
        <div className="bg-colorCard1 bg-center text-colorText p-4 rounded-3xl flex flex-col justify-center items-center lg:row-span-1/2 shadow-md">
            
            {!rain && !snow && <p className="font-custom1 text-3xl">No fall recorded</p>}

            {rain?.['1h'] && <div className='bg-[url(img/rain.gif)] bg-bottom w-full flex flex-col justify-center items-center'>
                <p className="flex items-center gap-2 font-custom1 text-2xl">
                    <CloudRain size={24} /> {rain?.['1h']} mm
                </p>
                <p className="font-custom2 text-lg">
                    Last hour
                </p>
            </div>}

            {rain?.['3h'] && <div className='bg-[url(img/rain.gif)] bg-bottom w-full flex flex-col justify-center items-center'>
                <p className="flex items-center gap-2 font-custom2 text-2xl">
                    <CloudRain size={16} /> {rain?.['3h']} mm
                </p>
                <p className="font-custom2 text-lg">
                    Last 3 hours
                </p>
            </div>}

            {snow?.['1h'] && <div className='bg-[url(img/snow.gif)] w-full flex flex-col justify-center items-center'>
                <p className="flex items-center gap-2 font-custom1 text-2xl">
                    <CloudSnow size={24} /> {snow?.['1h']} mm
                </p>
                <p className="font-custom2 text-lg">
                    Last hour
                </p>
            </div>}

            {snow?.['3h'] && <div className='bg-[url(img/snow.gif)] w-full flex flex-col justify-center items-center'>
                <p className="flex items-center gap-2 font-custom2 text-2xl">
                    <CloudSnow size={16} /> {snow?.['3h']} mm
                </p>
                <p className="font-custom2 text-lg">
                    Last 3 hours
                </p>
            </div>}
            
        </div>
    )
}
