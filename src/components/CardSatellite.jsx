import fakeSatelliteImage from '../img/satellite.jpg';

export default function CardSatellite() {
    return (
        <div className="bg-colorCard1 rounded-2xl text-colorDark p-4 font-custom1 font-700 text-xl shadow-md">
            <img src={fakeSatelliteImage} alt="satimage"className="rounded-2xl" width="100%" height="100%" />
        </div>
    );
}
