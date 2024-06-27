import { useAir } from "../context/airContext";

export default function CardAir() {
    const {aqi, attributions, co, no2, o3, pm10, pm25, so2} = useAir();

    return (
        <div className="bg-colorCard1 bg-[url('img/pollution.jpg')] shadow-md bg-center rounded-3xl py-2">

            <p className="font-custom1 text-xl p-2 text-center">Air Quality Score</p>

            {!aqi && <p className="font-custom2 text-xl p-2 text-center">No data</p>}
            {aqi > 0 && aqi <= 50 && <div className="bg-green-600 "><p className="font-custom1 text-3xl p-2 text-center">{aqi}</p><p className="font-custom1 text-xl p-2 text-center">Good</p></div>}
            {aqi > 50 && aqi <= 100 && <div className="bg-yellow-600 "><p className="font-custom1 text-3xl p-2 text-center">{aqi}</p><p className="font-custom1 text-xl p-2 text-center">Moderate</p></div>}
            {aqi > 100 && aqi <= 150 && <div className="bg-orange-600 "><p className="font-custom1 text-3xl p-2 text-center">{aqi}</p><p className="font-custom1 text-xl p-2 text-center">Unhealthy for sensitive groups</p></div>}
            {aqi > 150 && aqi <= 200 && <div className="bg-red-600 "><p className="font-custom1 text-3xl p-2 text-center">{aqi}</p><p className="font-custom1 text-xl p-2 text-center">Unhealthy</p></div>}
            {aqi > 250 && aqi <= 300 && <div className="bg-purple-800 "><p className="font-custom1 text-3xl p-2 text-center">{aqi}</p><p className="font-custom1 text-xl p-2 text-center">Very unhealthy</p></div>}
            {aqi > 300 && <div className="bg-colorDark "><p className="font-custom1 text-3xl p-2 text-center">{aqi}</p><p className="font-custom1 text-xl p-2 text-center">Hazardous</p></div>}
            {attributions && <p className="font-custom2 text-sm text-center p-1">{attributions}</p>}

            <div className="font-custom2 text-sm mt-2 p-2 text-colorDark">
                <div className="flex flex-row justify-between items-center mb-2  p-1">
                    <p className="font-custom2 text-md">Carbon monoxide (μg/m3)</p>
                    <p className="font-custom1 text-lg">{co ? co : "No data"}</p>
                </div>

                <div className="flex flex-row justify-between items-center mb-2  p-1">
                    <p className="font-custom2 text-md">Nitrogen dioxide (μg/m3)</p>
                    <p className="font-custom1 text-lg">{no2 ? no2 : "No data"}</p>
                </div>

                <div className="flex flex-row justify-between items-center mb-2  p-1">
                    <p className="font-custom2 text-md">Ozone (μg/m3)</p>
                    <p className="font-custom1 text-lg">{o3 ? o3 : "No data"}</p>
                </div>

                <div className="flex flex-row justify-between items-center mb-2  p-1">
                    <p className="font-custom2 text-md">Particles 10um (μg/m3)</p>
                    <p className="font-custom1 text-lg">{pm10 ? pm10 : "No data"}</p>
                </div>

                <div className="flex flex-row justify-between items-center mb-2  p-1">
                    <p className="font-custom2 text-md">Particles 2.5um (μg/m3)</p>
                    <p className="font-custom1 text-lg">{pm25 ? pm25 : "No data"}</p>
                </div>

                <div className="flex flex-row justify-between items-center mb-2  p-1">
                    <p className="font-custom2 text-md">Sulfure dioxide (μg/m3)</p>
                    <p className="font-custom1 text-lg">{so2 ? so2 : "No data"}</p>
                </div>
            </div>
        </div>
    );
}
