export default function Webcam({data}) {
    
    const webcamTimestamp = data.lastUpdatedOn ? new Date(data.lastUpdatedOn).toLocaleString() : "no timestamp";
    
    return (
        <div className="flex flex-col text-stone-300 relative">
            {data.title && <p className="bg-stone-800 font-custom2 text-xl absolute top-0 left-0 p-1 w-full">{data.title}</p>}
            {webcamTimestamp && <p className="bg-stone-800 font-custom2 text-md absolute bottom-0 left-0 p-1 w-full">{webcamTimestamp}</p>}
            {data.images.current.preview && <img src={data.images.current.preview} alt="webcam" className="border-4 border-stone-800"/>}
            {/* <iframe width="600" height="400" src="https://webcams.windy.com/webcams/public/embed/player/1710229910/day"></iframe> */}
        </div>
    );
}
