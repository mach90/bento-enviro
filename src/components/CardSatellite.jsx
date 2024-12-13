import { useState } from "react";
// import fakeSatelliteImage from '../img/satellite.jpg';

const cardSatelliteContainerStyle = "bg-second p-4 flex flex-col gap-2 justify-center items-center cursor-not-allowed rounded-lg col-span-1 row-span-1 md:col-span-2 md:row-span-2";
const cardSatelliteEmbStyle1 = "w-full min-h-96 h-full bg-first rounded-lg shadow-inner shadow-stone-950 p-2";
const cardSatelliteEmbStyle2 = "w-full min-h-96 h-full bg-first rounded-lg shadow-inner shadow-stone-950 p-2 grayscale";
const cardSatelliteEmbStyle3 = "w-full min-h-96 h-full bg-first rounded-lg shadow-inner shadow-stone-950 p-2 sepia";
const cardSatelliteEmbStyle4 = "w-full min-h-96 h-full bg-first rounded-lg shadow-inner shadow-stone-950 p-2 grayscale contrast-200 brightness-90";
const cardSatelliteEmbStyle5 = "w-full min-h-96 h-full bg-first rounded-lg shadow-inner shadow-stone-950 p-2 grayscale contrast-150 brightness-150 invert";
const cardSatelliteButtonsContainerStyle = "flex flex-row justify-center items-center gap-1 border-y-2 border-1000 py-1 w-full rounded-md";
const cardSatelliteButtonStyle = "font-exp text-exp bg-first p-1 text-400 rounded-lg min-w-6 hover:brightness-125";

export default function CardSatellite({latitude, longitude}) {
    const [filter, setFilter] = useState(cardSatelliteEmbStyle1);

    return (
        <div className={cardSatelliteContainerStyle}>
            <iframe className={filter} src={`https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=mm&metricTemp=°C&metricWind=km/h&zoom=7&overlay=satellite&product=ecmwf&level=surface&lat=${latitude}&lon=${longitude}&pressure=true&message=true`} frameborder="0"></iframe>
            <div className={cardSatelliteButtonsContainerStyle}>
                <p className="text-1000">•</p>
                <p className="text-1000">•</p>
                <button className={cardSatelliteButtonStyle} onClick={() => setFilter(cardSatelliteEmbStyle1)}>COL</button>
                <button className={cardSatelliteButtonStyle} onClick={() => setFilter(cardSatelliteEmbStyle2)}>GRY</button>
                <button className={cardSatelliteButtonStyle} onClick={() => setFilter(cardSatelliteEmbStyle3)}>SEP</button>
                <button className={cardSatelliteButtonStyle} onClick={() => setFilter(cardSatelliteEmbStyle4)}>WHT</button>
                <button className={cardSatelliteButtonStyle} onClick={() => setFilter(cardSatelliteEmbStyle5)}>BLK</button>
                <p className="text-1000">•</p>
                <p className="text-1000">•</p>
            </div>
        </div>
    );
}
