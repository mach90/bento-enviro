// import { useMoon } from "../context/moonContext";

export default function CardMoon() {
    // const {moonAge, moonIlluminatedFraction, moonPhaseAngle, moonPhaseName,moonPhaseTransitTime, moonrise, moonset} = useMoon();

    const moonAge = 219; 
    const moonIlluminatedFraction = 90; 
    const moonPhaseAngle = 219; 
    const moonPhaseName = 219;
    const moonPhaseTransitTime = 219; 
    const moonrise = 219; 
    const moonset = 219;

    return (
        <div className="bg-[#161616] text-stone-400">
            <p>{moonAge}</p>
            <p>{moonIlluminatedFraction}%</p>
            <p>{moonPhaseAngle}</p>
            <p>{moonPhaseName}</p>
            <p>{moonPhaseTransitTime}</p>
            <p>{moonrise}</p>
            <p>{moonset}</p>
            {moonIlluminatedFraction > 50 &&  
            <svg width="200" height="200" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <g transform="rotate(0, 50, 50)">
                    <circle cx="50" cy="50" r="50" fill="#d1d1d1"/>
                    <path id="crescent" fill="#303030" d={`M 50 0 A 50 50 0 1 1 50 100 A ${moonIlluminatedFraction - 50} 50 0 1 0 50 0 Z`}/>
                </g>
            </svg>}
            {moonIlluminatedFraction <= 50 &&
            <svg width="200" height="200" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <g transform="rotate(180, 50, 50)">
                    <circle cx="50" cy="50" r="50" fill="#303030"/>
                    <path id="crescent" fill="#d1d1d1" d={`M 50 0 A 50 50 0 1 1 50 100 A ${50 - moonIlluminatedFraction} 50 0 1 0 50 0 Z`}/>
                </g>
            </svg>}
        </div>
    );
}


/*
<svg width="200" height="200" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="50" fill="white"/>
    <path id="crescent" fill="darkgray" d="M 50 0 A 50 50 0 1 1 50 100 A X 50 0 1 0 50 0 Z"/>
</svg>
*/