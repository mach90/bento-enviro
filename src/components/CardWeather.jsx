import { useWeather } from "../context/weatherContext";
import { Thermometer, CircleGauge, Droplets, Eye } from 'lucide-react';

export default function CardWeather() {
    const { description, temp, feels, pressure, humidity, clouds, visibility } = useWeather();
    
    return (
        <div className="bg-colorCard1 p-4 rounded-2xl flex flex-row gap-6 justify-between items-center shadow-md ">

            <div className="w-full">
                <p className="font-custom1 text-xl mt-4 text-colorDark">
                    {description ? description.toUpperCase() : "Unknown weather"}
                </p>

                <p className="font-custom2 text-md text-colorMedium">
                    {clouds ? `Cloud coverage ${clouds}%` : ""}
                </p>

                <p className="font-custom1 text-xl flex gap-1 items-center justify-center mt-6 bg-colorDark text-colorBrand rounded-xl p-2">
                    <Thermometer size={24}/>{temp ? temp.toFixed(0) : "??"}°C
                </p>

                <p className="font-custom2 text-md flex justify-center mt-2 text-colorMedium">
                    Feels like {feels ? feels.toFixed(0) : "??"}°C
                </p>

                <p className="font-custom1 text-xl flex gap-1 items-center justify-center mt-4 text-colorDark">
                    <CircleGauge size={16}/>{pressure ? pressure : "??"} hPa
                </p>

                <p className="font-custom1 text-lg flex gap-1 items-center justify-center mt-4 text-colorDark">
                    <Droplets size={16}/>{humidity ? humidity : "??"}%
                </p>

                <p className="font-custom1 text-md flex gap-1 items-center justify-center mt-4 text-colorDark">
                    <Eye size={16}/>{visibility ? visibility : "??"} km
                </p>
            </div>

            <div>
                <svg width="30" height="300" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)">
                    <rect x="0" y="90%" width="100%" height="1.5" fill="#999" />
                    <rect x="0" y="80%" width="100%" height="1.5" fill="#999" />
                    <rect x="0" y="70%" width="100%" height="1.5" fill="#999" />
                    <rect x="0" y="60%" width="100%" height="1.5" fill="#999" />
                    <rect x="0" y="50%" width="100%" height="1.5" fill="#999" />
                    <rect x="0" y="40%" width="100%" height="5" fill="#999" />
                    <rect x="0" y="30%" width="100%" height="1.5" fill="#999" />
                    <rect x="0" y="20%" width="100%" height="1.5" fill="#999" />
                    <rect x="0" y="10%" width="100%" height="1.5" fill="#999" />
                    <rect x="25%" y="0" width="50%" height="100%"  fill="#999" />
                    <rect x="25%" y="0" width="50%" height={`${temp ? `${temp + 40}` : `${0}`}%`} fill="#f6c355">
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

        </div>
    )
}