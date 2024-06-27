import { useWebcam } from "../context/webcamContext";
import Webcam from "./Webcam";

export default function CardWebcam() {
    const {webcams} = useWebcam();

    return (
        <div className="flex flex-row overflow-x-scroll shadow-md bg-colorDark p-4 rounded-2xl snap-x snap-mandatory h-full">
            {!webcams && <p className="font-custom2 text-xl text-colorLight">No webcams found</p>}
            {webcams && webcams.map(webcam => (
                <div className="h-full w-full justify-between flex-shrink-0" key={webcam.webcamId}>
                    <Webcam data={webcam} />
                </div>
            ))}
        </div>
    );
}
