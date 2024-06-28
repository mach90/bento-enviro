// import fakeSatelliteImage from '../img/satellite.jpg';

export default function CardSatellite() {
    return (
        <div className="relative border border-colorBorder flex flex-col justify-center items-center p-2 cursor-not-allowed">
            {/* <img src={fakeSatelliteImage} alt="satimage" className="w-full" /> */}
            <p className="text-center text-colorTextMedium font-custom1 text-md">Satellite viewer not yet implemented</p>
            <p className="absolute top-1 right-1 bg-red-700 text-white text-xs p-1">INOP</p>
        </div>
    );
}
