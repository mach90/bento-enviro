import { useWeather } from "../context/weatherContext";
import { CloudRain, CloudSnow } from 'lucide-react';

export default function CardWeather() {
    const {rain, snow} = useWeather();

    return (
        <div className="bg-gray-50 bg-center text-gray-600 p-4 rounded-3xl flex flex-col justify-center items-center lg:row-span-1/2 shadow-md">
            
            {!rain && !snow && <p className="font-custom1 text-3xl">No fall recorded</p>}

            {rain?.['1h'] && <>
                <p className="flex items-center gap-2 font-custom1 text-2xl">
                    <CloudRain size={24} /> {rain?.['1h']} mm
                </p>
                <p className="font-custom2 text-lg">
                    Last hour
                </p>
            </>}

            {rain?.['3h'] && <>
                <p className="flex items-center gap-2 font-custom2 text-2xl">
                    <CloudRain size={16} /> {rain?.['3h']} mm
                </p>
                <p className="font-custom2 text-lg">
                    Last 3 hours
                </p>
            </>}

            {snow?.['1h'] && <>
                <p className="flex items-center gap-2 font-custom1 text-2xl">
                    <CloudSnow size={24} /> {snow?.['1h']} mm
                </p>
                <p className="font-custom2 text-lg">
                    Last hour
                </p>
            </>}

            {snow?.['3h'] && <>
                <p className="flex items-center gap-2 font-custom2 text-2xl">
                    <CloudSnow size={16} /> {snow?.['3h']} mm
                </p>
                <p className="font-custom2 text-lg">
                    Last 3 hours
                </p>
            </>}
            
        </div>
    )
}
