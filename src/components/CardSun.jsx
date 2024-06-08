import { useWeather } from "../context/weatherContext";
import { Sunrise, Sunset } from 'lucide-react';

export default function CardSun() {
    const {sunrise, sunset} = useWeather();
    
    if(sunrise && sunset) {
        const sunriseDate = new Date(sunrise * 1000);
        console.log(sunriseDate)
        // const sunriseHour = sunriseDate.getHours();
        const sunriseDay = sunriseDate.toLocaleString(navigator.language, { day: 'numeric' });
        const sunriseHours = sunriseDate.toLocaleString(navigator.language, { hour: 'numeric', hour12: false });
        const sunriseMinutes = sunriseDate.toLocaleString(navigator.language, { minute: 'numeric' });

        const sunsetDate = new Date(sunset * 1000);
        console.log(sunsetDate)
        // const sunsetHour = sunsetDate.getHours();
        const sunsetDay = sunsetDate.toLocaleString(navigator.language, { day: 'numeric' });
        const sunsetHours = sunsetDate.toLocaleString(navigator.language, { hour: 'numeric', hour12: false });
        const sunsetMinutes = sunsetDate.toLocaleString(navigator.language, { minute: 'numeric' });

        return (
            <div className="card card-sun">
                <p className="sun-sunrise"><Sunrise />{sunriseDay < 10 ? `0${sunriseDay}` : sunriseDay} @ {sunriseHours}h{sunriseMinutes < 10 ? `0${sunriseMinutes}` : sunriseMinutes}</p>
                <p className="sun-sunset"><Sunset />{sunsetDay < 10 ? `0${sunsetDay}` : sunsetDay} @ {sunsetHours}h{sunsetMinutes < 10 ? `0${sunsetMinutes}` : sunsetMinutes}</p>
            </div>
        );
    }
}

/* //////////////////////////////////////////////////
FOR MORE DATA
////////////////////////////////////////////////// */
// import { useSun } from "../context/sunContext";
// import { Sunrise, Sunset } from 'lucide-react';

// export default function CardSun() {
//     const {sunrise, sunset, solarNoon, dayLength, civilTwilightBegin, civilTwilightEnd, nauticalTwilightBegin, nauticalTwilightEnd, astronomicalTwilightBegin, astronomicalTwilightEnd} = useSun();
    
//     if(sunrise) console.log(sunrise)
//     // const sunriseMinutes = new Date(sunrise).getHours;

//     return (
//         <div className="card card-sun">
//             <p className="sun-sunrise"><Sunrise /> {sunrise}</p>
//         </div>
//     );
// }
