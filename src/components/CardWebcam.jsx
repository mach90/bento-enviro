import { useWebcam } from "../context/webcamContext";
import Webcam from "./Webcam";

export default function CardWebcam() {
    const {webcams} = useWebcam();

    return (
        <div className="flex flex-row overflow-x-scroll md:col-span-2 lg:col-span-1 shadow-md bg-gray-600 p-4 rounded-3xl snap-x snap-mandatory">
            {!webcams && <p className="font-custom2 text-xl text-gray-900">No webcams found</p>}
            {webcams && webcams.map(webcam => (
                <div className="h-full w-full justify-between flex-shrink-0" key={webcam.webcamId}>
                    <Webcam data={webcam} />
                </div>
            ))}
        </div>
    );
}
