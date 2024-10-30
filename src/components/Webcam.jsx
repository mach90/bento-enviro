const cardWebcamItemContainerStyle = "relative flex flex-col snap-center justify-between h-full p-4";
const cardWebcamItemInfoStyle = "font-heading text-sm text-textDark w-full";
const cardWebcamItemDateStyle = "font-heading text-sm text-textDarkVariant w-full";

export default function Webcam({data}) {
    
    const webcamTimestamp = data.lastUpdatedOn ? new Date(data.lastUpdatedOn).toLocaleString() : "no timestamp";
    
    return (
        <div className={cardWebcamItemContainerStyle}>
            {data.title && <p className={cardWebcamItemInfoStyle}>{data.title.length > 25 ? `${data.title.slice(0,25)}...` : data.title}</p>}
            {data.images.current.preview && <img src={data.images.current.preview} alt="webcam snapshot" />}
            {webcamTimestamp && <p className={cardWebcamItemDateStyle}>{webcamTimestamp}</p>}
        </div>
    );
}
