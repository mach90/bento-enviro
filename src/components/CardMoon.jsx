// import { useMoon } from "../context/moonContext";

export default function CardMoon() {
    // const {moonAge, moonIlluminatedFraction, moonPhaseAngle, moonPhaseName,moonPhaseTransitTime, moonrise, moonset} = useMoon();

    const moonAge = 12; 
    // const moonIlluminatedFraction = 90; 
    const moonPhaseAngle = 1; 
    const moonPhaseName = "Something crescent";
    const moonPhaseTransitTime = "12:34"; 
    const moonrise = "12:34"; 
    const moonset = "12:34";

    return (
        <div className="bg-[url('img/stars.jpg')] text-stone-200 text-md p-4 rounded-3xl font-custom2 flex flex-col justify-center items-center relative">

            <div className="flex flex-col justify-center items-center absolute ">
                <p className="bg-stone-800 bg-opacity-50 p-1 rounded-xl">Moonrise: {moonrise ? moonrise : "??:??"}</p>
                <p className="bg-stone-800 bg-opacity-50 p-1 rounded-xl">Moonset: {moonset ? moonset : "??:??"}</p>
                <p className="bg-stone-800 bg-opacity-50 p-1 rounded-xl">{moonPhaseName ? moonPhaseName : "unknown"} ({moonPhaseAngle ? moonPhaseAngle : "unknown"}%)</p>
                <p className="bg-stone-800 bg-opacity-50 p-1 rounded-xl">Transit: {moonPhaseTransitTime ? moonPhaseTransitTime : "??:??"}</p>
                <p className="bg-stone-800 bg-opacity-50 p-1 rounded-xl">{moonAge ? `${moonAge} days` : "unknown"}</p>
            </div>

            {moonPhaseAngle > 50 &&  
            <svg width="250" height="250" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <g transform="rotate(0, 50, 50)">
                    <circle cx="50" cy="50" r="50" fill="#d1d1d1"/>
                    <path id="crescent" fill="#303030" d={`M 50 0 A 50 50 0 1 1 50 100 A ${moonPhaseAngle - 50} 50 0 1 0 50 0 Z`}/>
                </g>
            </svg>}

            {moonPhaseAngle <= 50 &&
            <svg width="250" height="250" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <g transform="rotate(180, 50, 50)">
                    <circle cx="50" cy="50" r="50" fill="#303030"/>
                    <path id="crescent" fill="#d1d1d1" d={`M 50 0 A 50 50 0 1 1 50 100 A ${50 - moonPhaseAngle} 50 0 1 0 50 0 Z`}/>
                </g>
            </svg>}

        </div>
    );
}

// https://moonphases.co.uk/moon-phases