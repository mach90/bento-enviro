import { useAurora } from "../context/auroraContext";

export default function CardAurora() {
    const {auroraData} = useAurora();

    return (
        <div className="card card-aurora">
            <p>Kp:{auroraData}</p>
            <p>Geomagnetic activity</p>
        </div>
    );
}