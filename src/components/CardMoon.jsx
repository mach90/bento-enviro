import { useMoon } from "../context/moonContext";

const cardMoonContainerStyle = "bg-first rounded-lg p-4 flex flex-col md:flex-row justify-center items-center col-span-1 md:col-span-2 row-span-1 gap-4";
const cardMoonDataContainerStyle = "bg-second shadow-inner shadow-1000 uppercase p-4 w-full flex flex-col justify-center items-center h-full rounded-md";
const cardMoonSVGContainerStyle = "bg-[#111] shadow-inner shadow-[#0c0c0c] uppercase p-4 w-full md:w-max flex flex-col justify-center items-center h-full rounded-md";
const cardMoonDataItemStyle = "text-1000 font-body text-body";

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

    // const filter = <filter id="pixelate" x="0" y="0">
    //     <feFlood x="1" y="1" height="1" width="1"/>
    //     <feComposite width="2" height="2"/><feTile result="a"/><feComposite in="SourceGraphic" in2="a" operator="in"/>
    //     <feMorphology operator="dilate" radius="1"/>
    // </filter>;
   
    return (
        <div className={cardMoonContainerStyle}>
            <div className={cardMoonSVGContainerStyle}>
                {!moonPhaseName && !moonIlluminatedFraction &&
                <svg width="200" height="200" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    {/* {filter} */}
                    <g preserveAspectRatio="xMidYMid slice" filter="url(#pixelate)" transform="rotate(0, 50, 50)">
                        <circle cx="50" cy="50" r="50" fill="#111"/>
                    </g>
                </svg>}

                {moonPhaseName === "new" && 
                <svg width="200" height="200" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    {/* {filter} */}
                    <g preserveAspectRatio="xMidYMid slice" filter="url(#pixelate)" transform="rotate(0, 50, 50)">
                        <circle cx="50" cy="50" r="50" fill="#111"/>
                        <path id="crescent" fill="#acacac" d={`M 50 0 A 50 50 0 1 1 50 100 A ${50 - moonIlluminatedFraction} 50 0 1 0 50 0 Z`}/>
                    </g>
                </svg>}

                {moonPhaseName === "waxing crescent" && 
                <svg width="200" height="200" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    {/* {filter} */}
                    <g preserveAspectRatio="xMidYMid slice" filter="url(#pixelate)" transform="rotate(0, 50, 50)">
                        <circle cx="50" cy="50" r="50" fill="#111"/>
                        <path id="crescent" fill="#acacac" d={`M 50 0 A 50 50 0 1 1 50 100 A ${50 - moonIlluminatedFraction} 50 0 1 0 50 0 Z`}/>
                    </g>
                </svg>}

                {moonPhaseName === "first quarter" && 
                <svg width="200" height="200" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    {/* {filter} */}
                    <g preserveAspectRatio="xMidYMid slice" filter="url(#pixelate)" transform="rotate(0, 50, 50)">
                        <circle cx="50" cy="50" r="50" fill="#111"/>
                        <path id="crescent" fill="#acacac" d={`M 50 0 A 50 50 0 1 1 50 100 A ${50 - moonIlluminatedFraction} 50 0 1 0 50 0 Z`}/>
                    </g>
                </svg>}

                {moonPhaseName === "waxing gibbous" && 
                <svg width="200" height="200" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    {/* {filter} */}
                    <g preserveAspectRatio="xMidYMid slice" filter="url(#pixelate)" transform="rotate(180, 50, 50)">
                        <circle cx="50" cy="50" r="50" fill="#acacac"/>
                        <path id="crescent" fill="#111" d={`M 50 0 A 50 50 0 1 1 50 100 A ${50 - moonIlluminatedFraction} 50 0 1 0 50 0 Z`}/>
                    </g>
                </svg>}

                {moonPhaseName === "full" && 
                <svg width="200" height="200" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    {/* {filter} */}
                    <g preserveAspectRatio="xMidYMid slice" filter="url(#pixelate)" transform="rotate(180, 50, 50)">
                        <circle cx="50" cy="50" r="50" fill="#acacac"/>
                        <path id="crescent" fill="#111" d={`M 50 0 A 50 50 0 1 1 50 100 A ${50 - moonIlluminatedFraction} 50 0 1 0 50 0 Z`}/>
                    </g>
                </svg>}

                {moonPhaseName === "waning gibbous" && 
                <svg width="200" height="200" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    {/* {filter} */}
                    <g preserveAspectRatio="xMidYMid slice" filter="url(#pixelate)" transform="rotate(0, 50, 50)">
                        <circle cx="50" cy="50" r="50" fill="#acacac"/>
                        <path id="crescent" fill="#111" d={`M 50 0 A 50 50 0 1 1 50 100 A ${50 - moonIlluminatedFraction} 50 0 1 0 50 0 Z`}/>
                    </g>
                </svg>}

                {moonPhaseName === "last quarter" && 
                <svg width="200" height="200" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    {/* {filter} */}
                    <g preserveAspectRatio="xMidYMid slice" filter="url(#pixelate)" transform="rotate(180, 50, 50)">
                        <circle cx="50" cy="50" r="50" fill="#111"/>
                        <path id="crescent" fill="#acacac" d={`M 50 0 A 50 50 0 1 1 50 100 A ${50 - moonIlluminatedFraction} 50 0 1 0 50 0 Z`}/>
                    </g>
                </svg>}

                {moonPhaseName === "waning crescent" && 
                <svg width="200" height="200" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    {/* {filter} */}
                    <g preserveAspectRatio="xMidYMid slice" filter="url(#pixelate)" transform="rotate(180, 50, 50)">
                        <circle cx="50" cy="50" r="50" fill="#111"/>
                        <path id="crescent" fill="#acacac" d={`M 50 0 A 50 50 0 1 1 50 100 A ${50 - moonIlluminatedFraction} 50 0 1 0 50 0 Z`}/>
                    </g>
                </svg>}
            </div>

            <div className={cardMoonDataContainerStyle}>
                <p className={cardMoonDataItemStyle}>Moonrise: {moonrise ? moonrise : "??:??"}</p>
                <p className={cardMoonDataItemStyle}>Moonset: {moonset ? moonset : "??:??"}</p>
                <p className={cardMoonDataItemStyle}>{moonPhaseName ? moonPhaseName : "unknown"} ({moonIlluminatedFraction >= 0 ? moonIlluminatedFraction : "unknown"}%)</p>
                <p className={cardMoonDataItemStyle}>Transit: {moonPhaseTransitTime ? moonPhaseTransitTime : "??:??"}</p>
                <p className={cardMoonDataItemStyle}>Age: {moonAge >= 0 ? `${moonAge} days` : "unknown"}</p>
            </div>
        </div>
    );
}

// https://moonphases.co.uk/moon-phases