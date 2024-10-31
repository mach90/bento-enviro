import fakeSatelliteImage from '../img/satellite.jpg';

const cardSatelliteContainerStyle = "bg-cardSecondary flex flex-col justify-center items-center cursor-not-allowed rounded-lg shadow-md p-6 col-span-1 row-span-1 md:col-span-2 md:row-span-2";

export default function CardSatellite() {
    return (
        <div className={cardSatelliteContainerStyle}>
            <img src={fakeSatelliteImage} alt="satimage" className="w-full rounded-md" />
            {/* <p className="text-center text-textAlternateVariant font-heading text-md">Satellite viewer not yet implemented</p> */}
        </div>
    );
}
