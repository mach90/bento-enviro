import { useWebcam } from "../context/webcamContext";
import Webcam from "./Webcam";

export default function CardWebcam() {
    const {webcams} = useWebcam();

    return (
        <div className="relative flex flex-row overflow-x-scroll border border-colorBorder snap-x snap-mandatory h-full cursor-grab px-4 py-2">
            {!webcams && <p className="font-custom2 text-md text-colorTextMedium">No webcams found</p>}
            {webcams && webcams.map(webcam => (
                <div className="h-full w-full justify-between flex-shrink-0" key={webcam.webcamId}>
                    <Webcam data={webcam} />
                </div>
            ))}
        </div>
    );
}
