import { useAir } from "../context/airContext";
import { TriangleAlert } from "lucide-react";

export default function CardAir() {
    const {aqi, attributions, co, no2, o3, pm10, pm25, so2} = useAir();

    return (
        <div className="relative border border-colorBorder flex flex-col gap-4 p-6 justify-between items-start">

            {!aqi && <p className="font-custom2 text-md p-2 text-colorTextMedium">No data</p>}
            {aqi > 0 && aqi <= 50 && <div className="text-colorTextLight"><p className="font-custom1 text-md font-600">Air Quality {aqi}</p><p className="font-custom1 text-md font-600">Good</p><p className="absolute top-1 right-1 text-green-800"><TriangleAlert size={96}/></p></div>}
            {aqi > 50 && aqi <= 100 && <div className="text-colorTextLight"><p className="font-custom1 text-md font-600">Air Quality {aqi}</p><p className="font-custom1 text-md font-600">Moderate</p><p className="absolute top-1 right-1 text-yellow-800"><TriangleAlert size={96}/></p></div>}
            {aqi > 100 && aqi <= 150 && <div className="text-colorTextLight"><p className="font-custom1 text-md font-600">Air Quality {aqi}</p><p className="font-custom1 text-md font-600">Unhealthy for sensitive groups</p><p className="absolute top-1 right-1 text-orange-800"><TriangleAlert size={96}/></p></div>}
            {aqi > 150 && aqi <= 200 && <div className="text-colorTextLight"><p className="font-custom1 text-md font-600">Air Quality {aqi}</p><p className="font-custom1 text-md font-600">Unhealthy</p><p className="absolute top-1 right-1 text-red-800"><TriangleAlert size={96}/></p></div>}
            {aqi > 250 && aqi <= 300 && <div className="text-colorTextLight"><p className="font-custom1 text-md font-600">Air Quality {aqi}</p><p className="font-custom1 text-md font-600">Very unhealthy</p><p className="absolute top-1 right-1 text-purple-800"><TriangleAlert size={96}/></p></div>}
            {aqi > 300 && <div className="text-colorTextLight"><p className="font-custom1 text-md font-600">Air Quality {aqi}</p><p className="font-custom1 text-md font-600">Hazardous</p><p className="absolute top-1 right-1 text-stone-950"><TriangleAlert size={96}/></p></div>}
            {/* {attributions && <p className="font-custom2 text-sm text-colorTextMedium">{attributions}</p>} */}

            <div className="font-custom2 text-sm flex flex-col">
                <div className="flex flex-row gap-2 items-center">
                    <p className="font-custom1 text-sm text-colorTextMedium">CO</p>
                    <p className="font-custom1 text-sm text-colorTextLight">{co ? co : "No data"}</p>
                    <p className="font-custom1 text-xs text-colorTextMedium">μg/m3</p>
                </div>

                <div className="flex flex-row gap-2 items-center">
                    <p className="font-custom1 text-sm text-colorTextMedium">NO2</p>
                    <p className="font-custom1 text-sm text-colorTextLight">{no2 ? no2 : "No data"}</p>
                    <p className="font-custom1 text-xs text-colorTextMedium">μg/m3</p>
                </div>

                <div className="flex flex-row gap-2 items-center">
                    <p className="font-custom1 text-sm text-colorTextMedium">O3</p>
                    <p className="font-custom1 text-sm text-colorTextLight">{o3 ? o3 : "No data"}</p>
                    <p className="font-custom1 text-xs text-colorTextMedium">μg/m3</p>
                </div>

                <div className="flex flex-row gap-2 items-center">
                    <p className="font-custom1 text-sm text-colorTextMedium">PM10</p>
                    <p className="font-custom1 text-sm text-colorTextLight">{pm10 ? pm10 : "No data"}</p>
                    <p className="font-custom1 text-xs text-colorTextMedium">μg/m3</p>
                </div>

                <div className="flex flex-row gap-2 items-center">
                    <p className="font-custom1 text-sm text-colorTextMedium">PM2.5</p>
                    <p className="font-custom1 text-sm text-colorTextLight">{pm25 ? pm25 : "No data"}</p>
                    <p className="font-custom1 text-xs text-colorTextMedium">μg/m3</p>
                </div>

                <div className="flex flex-row gap-2 items-center">
                    <p className="font-custom1 text-sm text-colorTextMedium">SO2</p>
                    <p className="font-custom1 text-sm text-colorTextLight">{so2 ? so2 : "No data"}</p>
                    <p className="font-custom1 text-xs text-colorTextMedium">μg/m3</p>
                </div>
            </div>
        </div>
    );
}
