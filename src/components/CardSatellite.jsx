import satelliteImage from '../img/satellite.jpg';

export default function CardSatellite() {
    return (
        <div className="bg-gray-50 rounded-3xl lg:row-span-2 text-stone-700 p-4 font-custom1 font-700 text-2xl shadow-md">
            <img src={satelliteImage} alt="satimage"className="rounded-2xl" width="100%" height="100%" />
        </div>
    );
}
