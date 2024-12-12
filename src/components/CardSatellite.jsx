import fakeSatelliteImage from '../img/satellite.jpg';

const cardSatelliteContainerStyle = "bg-second p-4 flex flex-col justify-center items-center cursor-not-allowed rounded-lg col-span-1 row-span-1 md:col-span-2 md:row-span-2";

export default function CardSatellite({latitude, longitude}) {
    return (
        <div className={cardSatelliteContainerStyle}>
            {/* <img src={fakeSatelliteImage} alt="satimage" className="w-full h-full rounded-md" /> */}
            {/* <p className="text-center text-textAlternateVariant font-heading text-md">Satellite viewer not yet implemented</p> */}
            <iframe className='w-full min-h-96 h-full bg-first rounded-lg shadow-inner shadow-stone-950 p-2' src={`https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=mm&metricTemp=°C&metricWind=km/h&zoom=7&overlay=satellite&product=ecmwf&level=surface&lat=${latitude}&lon=${longitude}&pressure=true&message=true`} frameborder="0"></iframe>
        </div>
    );
}
