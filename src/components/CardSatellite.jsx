import fakeSatelliteImage from '../img/satellite.jpg';

const cardSatelliteContainerStyle = "bg-cardFifth flex flex-col justify-center items-center cursor-not-allowed rounded-lg shadow-md col-span-1 row-span-1 md:col-span-2 md:row-span-2";

export default function CardSatellite({latitude, longitude}) {
    console.log(latitude, longitude)
    return (
        <div className={cardSatelliteContainerStyle}>
            {/* <img src={fakeSatelliteImage} alt="satimage" className="w-full h-full rounded-md" /> */}
            {/* <p className="text-center text-textAlternateVariant font-heading text-md">Satellite viewer not yet implemented</p> */}
            <iframe className='w-full min-h-96 h-full rounded-lg' src={`https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=mm&metricTemp=°C&metricWind=km/h&zoom=7&overlay=satellite&product=ecmwf&level=surface&lat=${latitude}&lon=${longitude}&pressure=true&message=true`} frameborder="0"></iframe>
        </div>
    );
}
