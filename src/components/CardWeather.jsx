import { useWeather } from "../context/weatherContext";
import { Thermometer, CircleGauge, Droplets, Eye } from 'lucide-react';

export default function CardWeather() {
    const { description, temp, feels, pressure, humidity, clouds, visibility } = useWeather();
    
    return (
        <div className="p-4 flex flex-row justify-between items-center border border-colorBorder">

            <div className="mr-8">
                <svg width="8" height="200" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)">
                    <rect x="0" y="90%" width="100%" height="1.5" fill="#999999aa" />
                    <rect x="0" y="80%" width="100%" height="1.5" fill="#999999aa" />
                    <rect x="0" y="70%" width="100%" height="1.5" fill="#999999aa" />
                    <rect x="0" y="60%" width="100%" height="1.5" fill="#999999aa" />
                    <rect x="0" y="50%" width="100%" height="1.5" fill="#999999aa" />
                    <rect x="0" y="40%" width="100%" height="5" fill="#999999aa" />
                    <rect x="0" y="30%" width="100%" height="1.5" fill="#999999aa" />
                    <rect x="0" y="20%" width="100%" height="1.5" fill="#999999aa" />
                    <rect x="0" y="10%" width="100%" height="1.5" fill="#999999aa" />
                    <rect x="25%" y="0" width="50%" height="100%"  fill="#999999aa" />
                    <rect x="25%" y="0" width="50%" height={`${temp ? `${temp + 40}` : `${0}`}%`} fill="#8e5f3caa">
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

            <div className="h-full w-full flex flex-col justify-between">
                <p className="font-custom1 text-lg text-colorTextLight">
                    {description ? description.toUpperCase() : "Unknown weather"}
                </p>

                <p className="font-custom2 text-sm text-colorTextMedium">
                    {clouds ? `Cloud coverage ${clouds}%` : ""}
                </p>

                <p className="font-custom1 text-lg flex gap-1 items-center justify-start bg-gradient-to-r from-colorAccent2t to-transparent text-colorTextLight p-2">
                    <Thermometer size={24}/>{temp ? temp.toFixed(0) : "??"}°C
                </p>

                <p className="font-custom2 text-sm flex justify-start text-colorTextMedium">
                    Feels like {feels ? feels.toFixed(0) : "??"}°C
                </p>

                <p className="font-custom1 text-md flex gap-1 items-center justify-start text-colorTextMedium">
                    <CircleGauge size={16}/>{pressure ? pressure : "??"} hPa
                </p>

                <p className="font-custom1 text-md flex gap-1 items-center justify-start text-colorTextMedium">
                    <Droplets size={16}/>{humidity ? humidity : "??"}%
                </p>

                <p className="font-custom1 text-md flex gap-1 items-center justify-start text-colorTextMedium">
                    <Eye size={16}/>{visibility ? visibility : "??"} km
                </p>
            </div>

           

        </div>
    )
}