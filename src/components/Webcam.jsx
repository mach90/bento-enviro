export default function Webcam({data}) {
    
    const webcamTimestamp = data.lastUpdatedOn ? new Date(data.lastUpdatedOn).toLocaleString() : "no timestamp";
    
    return (
        <div className="flex flex-col text-stone-300">
            {data.title && <p className="bg-stone-900 font-custom2 text-xl rounded-tr-3xl p-1 w-full">{data.title.length > 25 ? `${data.title.slice(0,25)}...` : data.title}</p>}
            {data.images.current.preview && <img src={data.images.current.preview} alt="webcam" className="border-4 border-stone-900"/>}
            {webcamTimestamp && <p className="bg-stone-900 font-custom2 text-md p-1 w-full">{webcamTimestamp}</p>}
            {/* <iframe width="600" height="400" src="https://webcams.windy.com/webcams/public/embed/player/1710229910/day"></iframe> */}
        </div>
    );
}
