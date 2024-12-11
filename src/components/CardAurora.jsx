import { useAurora } from "../context/auroraContext";

const cardAuroraContainerStyle = "relative flex flex-col justify-center bg-first rounded-lg  col-span-1 row-span-1 p-4";
const cardAuroraKpStyle = "absolute bg-stone-900 bg-opacity-80 text-lime-500 p-4 font-custom1 text-3xl";

export default function CardAurora({latitude}) {
    const {auroraData} = useAurora();

    const orientation = latitude >= 0 ? "north" : "south";

    return (
        <div className={cardAuroraContainerStyle}>
            <p className={cardAuroraKpStyle}>Kp-index: {auroraData >= 0 ? auroraData : "?"}</p>
            <p><img src={`https://services.swpc.noaa.gov/images/animations/ovation/${orientation}/latest.jpg`} alt="latest aurora forecast snapshot" className="rounded-md bg-black p-2"/></p>
        </div>
    );
}