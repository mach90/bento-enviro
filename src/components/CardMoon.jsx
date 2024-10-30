import { useMoon } from "../context/moonContext";

const cardMoonContainerStyle = "bg-cardDark p-4 flex flex-col justify-center items-center relative rounded-lg shadow-md";
const cardMoonDataContainerStyle = "bg-cardDark w-max rounded-xl flex flex-col justify-center items-center absolute";
const cardMoonDataItemStyle = " text-textDark font-heading text-md px-1";

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
        <div className={cardMoonContainerStyle}>

            <div className={cardMoonDataContainerStyle}>
                <p className={cardMoonDataItemStyle}>Moonrise: {moonrise ? moonrise : "??:??"}</p>
                <p className={cardMoonDataItemStyle}>Moonset: {moonset ? moonset : "??:??"}</p>
                <p className={cardMoonDataItemStyle}>{moonPhaseName ? moonPhaseName : "unknown"} ({moonIlluminatedFraction >= 0 ? moonIlluminatedFraction : "unknown"}%)</p>
                <p className={cardMoonDataItemStyle}>Transit: {moonPhaseTransitTime ? moonPhaseTransitTime : "??:??"}</p>
                <p className={cardMoonDataItemStyle}>{moonAge >= 0 ? `${moonAge} days` : "unknown"}</p>
            </div>

            {!moonPhaseName && !moonIlluminatedFraction &&
            <svg width="250" height="250" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <g transform="rotate(0, 50, 50)">
                    <circle cx="50" cy="50" r="50" fill="#1e1f1e"/>
                </g>
            </svg>}

            {moonPhaseName === "new" && 
            <svg width="250" height="250" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <g transform="rotate(0, 50, 50)">
                    <circle cx="50" cy="50" r="50" fill="#1e1f1e"/>
                    <path id="crescent" fill="#ffffff" d={`M 50 0 A 50 50 0 1 1 50 100 A ${50 - moonIlluminatedFraction} 50 0 1 0 50 0 Z`}/>
                </g>
            </svg>}

            {moonPhaseName === "waxing crescent" && 
            <svg width="250" height="250" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <g transform="rotate(0, 50, 50)">
                    <circle cx="50" cy="50" r="50" fill="#1e1f1e"/>
                    <path id="crescent" fill="#ffffff" d={`M 50 0 A 50 50 0 1 1 50 100 A ${50 - moonIlluminatedFraction} 50 0 1 0 50 0 Z`}/>
                </g>
            </svg>}

            {moonPhaseName === "first quarter" && 
            <svg width="250" height="250" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <g transform="rotate(0, 50, 50)">
                    <circle cx="50" cy="50" r="50" fill="#1e1f1e"/>
                    <path id="crescent" fill="#ffffff" d={`M 50 0 A 50 50 0 1 1 50 100 A ${50 - moonIlluminatedFraction} 50 0 1 0 50 0 Z`}/>
                </g>
            </svg>}

            {moonPhaseName === "waxing gibbous" && 
            <svg width="250" height="250" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <g transform="rotate(180, 50, 50)">
                    <circle cx="50" cy="50" r="50" fill="#ffffff"/>
                    <path id="crescent" fill="#1e1f1e" d={`M 50 0 A 50 50 0 1 1 50 100 A ${50 - moonIlluminatedFraction} 50 0 1 0 50 0 Z`}/>
                </g>
            </svg>}

            {moonPhaseName === "full" && 
            <svg width="250" height="250" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <g transform="rotate(180, 50, 50)">
                    <circle cx="50" cy="50" r="50" fill="#ffffff"/>
                    <path id="crescent" fill="#1e1f1e" d={`M 50 0 A 50 50 0 1 1 50 100 A ${50 - moonIlluminatedFraction} 50 0 1 0 50 0 Z`}/>
                </g>
            </svg>}

            {moonPhaseName === "waning gibbous" && 
            <svg width="250" height="250" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <g transform="rotate(0, 50, 50)">
                    <circle cx="50" cy="50" r="50" fill="#ffffff"/>
                    <path id="crescent" fill="#1e1f1e" d={`M 50 0 A 50 50 0 1 1 50 100 A ${50 - moonIlluminatedFraction} 50 0 1 0 50 0 Z`}/>
                </g>
            </svg>}

            {moonPhaseName === "last quarter" && 
            <svg width="250" height="250" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <g transform="rotate(180, 50, 50)">
                    <circle cx="50" cy="50" r="50" fill="#1e1f1e"/>
                    <path id="crescent" fill="#ffffff" d={`M 50 0 A 50 50 0 1 1 50 100 A ${50 - moonIlluminatedFraction} 50 0 1 0 50 0 Z`}/>
                </g>
            </svg>}

            {moonPhaseName === "waning crescent" && 
            <svg width="250" height="250" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <g transform="rotate(180, 50, 50)">
                    <circle cx="50" cy="50" r="50" fill="#1e1f1e"/>
                    <path id="crescent" fill="#ffffff" d={`M 50 0 A 50 50 0 1 1 50 100 A ${50 - moonIlluminatedFraction} 50 0 1 0 50 0 Z`}/>
                </g>
            </svg>}

        </div>
    );
}

// https://moonphases.co.uk/moon-phases