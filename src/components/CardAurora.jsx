import { useAurora } from "../context/auroraContext";

export default function CardAurora() {
    const {auroraData} = useAurora();

    return (
        <div className="card card-aurora">
            <p>Kp:{auroraData}</p>
            <img src="https://services.swpc.noaa.gov/images/animations/ovation/north/latest.jpg" alt="sat photo" width="100%"/>
        </div>
    );
}