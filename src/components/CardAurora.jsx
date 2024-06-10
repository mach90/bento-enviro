import { useAurora } from "../context/auroraContext";

export default function CardAurora() {
    const {auroraData} = useAurora();

    return (
        <div className="bg-yellow-500">
            <p>Kp:{auroraData}</p>
            <p><img src="https://services.swpc.noaa.gov/images/animations/ovation/north/latest.jpg" alt="sat photo" /></p>
        </div>
    );
}