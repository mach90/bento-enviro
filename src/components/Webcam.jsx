const cardWebcamItemContainerStyle = "bg-first flex flex-col snap-center justify-center h-full w-full gap-2 p-2";
const cardWebcamItemInfoStyle = "font-body text-body text-700 w-full";
const cardWebcamItemDateStyle = "font-body text-body text-700 w-full";

export default function Webcam({data, i, count}) {
    
    const webcamTimestamp = data.lastUpdatedOn ? new Date(data.lastUpdatedOn).toLocaleString() : "no timestamp";
    
    return (
        <div className={cardWebcamItemContainerStyle}>
            <p className="text-700 font-exp text-exp">🔴CAM {i+1}/{count}</p>
            {data.title && <p className={cardWebcamItemInfoStyle}>{data.title.length > 25 ? `${data.title.slice(0,25)}...` : data.title}</p>}
            {data.images.current.preview && <img src={data.images.current.preview} alt="webcam snapshot" className="w-full"/>}
            {webcamTimestamp && <p className={cardWebcamItemDateStyle}>{webcamTimestamp}</p>}
        </div>
    );
}