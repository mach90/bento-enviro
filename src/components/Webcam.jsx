export default function Webcam({data}) {
    
    const webcamTimestamp = data.lastUpdatedOn ? new Date(data.lastUpdatedOn).toLocaleString() : "no timestamp";
    
    return (
        <div className="flex flex-col text-gray-300">
            {data.title && <p className="font-custom2 text-xl w-full mb-2 ml-4">{data.title.length > 25 ? `${data.title.slice(0,25)}...` : data.title}</p>}
            {data.images.current.preview && <img src={data.images.current.preview} alt="webcam" className="px-4 bg-gray-600"/>}
            {webcamTimestamp && <p className="font-custom2 text-md mt-2 w-full ml-4">{webcamTimestamp}</p>}
        </div>
    );
}
