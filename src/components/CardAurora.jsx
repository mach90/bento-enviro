import { useAurora } from "../context/auroraContext";

export default function CardAurora() {
    const {auroraData} = useAurora();

    return (
        <div className="bg-black relative flex flex-col justify-center shadow-md rounded-3xl p-4">
            <p className="absolute bg-stone-900 bg-opacity-80 text-lime-500 p-4 font-custom1 text-3xl">Kp-index: {auroraData >= 0 ? auroraData : "?"}</p>
            <p><img src="https://services.swpc.noaa.gov/images/animations/ovation/north/latest.jpg" alt="latest aurora forecast snapshot" /></p>
        </div>
    );
}