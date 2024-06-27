import { useMoon } from "../context/moonContext";

export default function CardMoon() {
    const {moonAge, moonIlluminatedFraction, moonPhaseName,moonPhaseTransitTime, moonrise, moonset} = useMoon();

    // const moonAge = 4; 
    // const moonIlluminatedFraction = 65; 
    // const moonPhaseName = "waning crescent";
    // const moonPhaseTransitTime = "12:34"; 
    // const moonrise = "12:34"; 
    // const moonset = "12:34";

    // const moonAge = null; 
    // const moonIlluminatedFraction = null; 
    // const moonPhaseName = null;
    // const moonPhaseTransitTime = null; 
    // const moonrise = null; 
    // const moonset = null;

    return (
        <div className="bg-[url('img/stars.jpg')] text-colorBrand text-md p-4 rounded-3xl font-custom2 flex flex-col justify-center items-center relative shadow-md">

            <div className="flex flex-col justify-center items-center absolute ">
                <p className="bg-colorDark bg-opacity-50 p-1 rounded-xl">Moonrise: {moonrise ? moonrise : "??:??"}</p>
                <p className="bg-colorDark bg-opacity-50 p-1 rounded-xl">Moonset: {moonset ? moonset : "??:??"}</p>
                <p className="bg-colorDark bg-opacity-50 p-1 rounded-xl">{moonPhaseName ? moonPhaseName : "unknown"} ({moonIlluminatedFraction >= 0 ? moonIlluminatedFraction : "unknown"}%)</p>
                <p className="bg-colorDark bg-opacity-50 p-1 rounded-xl">Transit: {moonPhaseTransitTime ? moonPhaseTransitTime : "??:??"}</p>
                <p className="bg-colorDark bg-opacity-50 p-1 rounded-xl">{moonAge >= 0 ? `${moonAge} days` : "unknown"}</p>
            </div>

            {!moonPhaseName && !moonIlluminatedFraction &&
            <svg width="250" height="250" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <g transform="rotate(0, 50, 50)">
                    <circle cx="50" cy="50" r="50" fill="#000000"/>
                </g>
            </svg>}

            {moonPhaseName === "new" && 
            <svg width="250" height="250" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <g transform="rotate(0, 50, 50)">
                    <circle cx="50" cy="50" r="50" fill="#000000"/>
                    <path id="crescent" fill="#efedec" d={`M 50 0 A 50 50 0 1 1 50 100 A ${50 - moonIlluminatedFraction} 50 0 1 0 50 0 Z`}/>
                </g>
            </svg>}

            {moonPhaseName === "waxing crescent" && 
            <svg width="250" height="250" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <g transform="rotate(0, 50, 50)">
                    <circle cx="50" cy="50" r="50" fill="#000000"/>
                    <path id="crescent" fill="#efedec" d={`M 50 0 A 50 50 0 1 1 50 100 A ${50 - moonIlluminatedFraction} 50 0 1 0 50 0 Z`}/>
                </g>
            </svg>}

            {moonPhaseName === "first quarter" && 
            <svg width="250" height="250" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <g transform="rotate(0, 50, 50)">
                    <circle cx="50" cy="50" r="50" fill="#000000"/>
                    <path id="crescent" fill="#efedec" d={`M 50 0 A 50 50 0 1 1 50 100 A ${50 - moonIlluminatedFraction} 50 0 1 0 50 0 Z`}/>
                </g>
            </svg>}

            {moonPhaseName === "waxing gibbous" && 
            <svg width="250" height="250" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <g transform="rotate(180, 50, 50)">
                    <circle cx="50" cy="50" r="50" fill="#efedec"/>
                    <path id="crescent" fill="#000000" d={`M 50 0 A 50 50 0 1 1 50 100 A ${50 - moonIlluminatedFraction} 50 0 1 0 50 0 Z`}/>
                </g>
            </svg>}

            {moonPhaseName === "full" && 
            <svg width="250" height="250" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <g transform="rotate(180, 50, 50)">
                    <circle cx="50" cy="50" r="50" fill="#efedec"/>
                    <path id="crescent" fill="#000000" d={`M 50 0 A 50 50 0 1 1 50 100 A ${50 - moonIlluminatedFraction} 50 0 1 0 50 0 Z`}/>
                </g>
            </svg>}

            {moonPhaseName === "waning gibbous" && 
            <svg width="250" height="250" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <g transform="rotate(0, 50, 50)">
                    <circle cx="50" cy="50" r="50" fill="#efedec"/>
                    <path id="crescent" fill="#000000" d={`M 50 0 A 50 50 0 1 1 50 100 A ${50 - moonIlluminatedFraction} 50 0 1 0 50 0 Z`}/>
                </g>
            </svg>}

            {moonPhaseName === "last quarter" && 
            <svg width="250" height="250" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <g transform="rotate(180, 50, 50)">
                    <circle cx="50" cy="50" r="50" fill="#000000"/>
                    <path id="crescent" fill="#efedec" d={`M 50 0 A 50 50 0 1 1 50 100 A ${50 - moonIlluminatedFraction} 50 0 1 0 50 0 Z`}/>
                </g>
            </svg>}

            {moonPhaseName === "waning crescent" && 
            <svg width="250" height="250" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <g transform="rotate(180, 50, 50)">
                    <circle cx="50" cy="50" r="50" fill="#000000"/>
                    <path id="crescent" fill="#efedec" d={`M 50 0 A 50 50 0 1 1 50 100 A ${50 - moonIlluminatedFraction} 50 0 1 0 50 0 Z`}/>
                </g>
            </svg>}

        </div>
    );
}

// https://moonphases.co.uk/moon-phases