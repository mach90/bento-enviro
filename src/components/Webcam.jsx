export default function Webcam({data}) {
    
    const webcamTimestamp = data.lastUpdatedOn ? new Date(data.lastUpdatedOn).toLocaleString() : "no timestamp";
    
    return (
        <div className="relative flex flex-col text-colorTextMedium snap-center justify-between h-full p-1 bg-gradient-to-tr from-transparent to-colorAccent4t">
            {data.title && <p className="font-custom1 text-sm w-full">{data.title.length > 25 ? `${data.title.slice(0,25)}...` : data.title}</p>}
            {data.images.current.preview && <img src={data.images.current.preview} alt="webcam" />}
            {webcamTimestamp && <p className="font-custom1 text-sm w-full">{webcamTimestamp}</p>}
        </div>
    );
}
