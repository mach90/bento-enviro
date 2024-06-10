import { useWeather } from "../context/weatherContext";
import { Sunrise, Sunset } from 'lucide-react';

export default function CardSun() {
    const {sunrise, sunset} = useWeather();
    
    // const optionsDate = {
    //     second: 'numeric',
    //     hour: 'numeric',
    //     minute: 'numeric',
    //     day: 'numeric',
    //     month: 'short',
    //     year: 'numeric',
    //     weekday: 'short',
    // };
    // const locale = navigator.language;
    const sunriseDate = sunrise ? new Date(sunrise * 1000).toLocaleString() : "No sunrise data";
    // const sunriseDateLocale = new Intl.DateTimeFormat(locale, optionsDate).format(sunriseDate);
    const sunsetDate = sunset ? new Date(sunset * 1000).toLocaleString() : "No sunset data";
    // const sunsetDateLocale = new Intl.DateTimeFormat(locale, optionsDate).format(sunsetDate);
        
    return (
        <div className="flex flex-col justify-around font-custom1 text-2xl gap-4">
            <p className="bg-indigo-200 rounded-t-3xl flex flex-row justify-center items-center p-2 h-full gap-2 text-indigo-900 "><Sunrise /> {sunriseDate}</p>
            <p className="bg-orange-300 rounded-b-3xl flex flex-row justify-center items-center p-2 h-full gap-2 text-orange-900 "><Sunset /> {sunsetDate}</p>
        </div>
    );
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
