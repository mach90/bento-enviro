/* //////////////////////////////////////////////////
FROM WEATHER PROVIDER
////////////////////////////////////////////////// */
// import { useWeather } from "../context/weatherContext";
// import { Sunrise, Sunset } from 'lucide-react';

// export default function CardSun() {
//     const {sunrise, sunset} = useWeather();
    
//     // const optionsDate = {
//     //     second: 'numeric',
//     //     hour: 'numeric',
//     //     minute: 'numeric',
//     //     day: 'numeric',
//     //     month: 'short',
//     //     year: 'numeric',
//     //     weekday: 'short',
//     // };
//     // const locale = navigator.language;
//     const sunriseDate = sunrise ? new Date(sunrise * 1000).toLocaleString() : "No sunrise data";
//     // const sunriseDateLocale = new Intl.DateTimeFormat(locale, optionsDate).format(sunriseDate);
//     const sunsetDate = sunset ? new Date(sunset * 1000).toLocaleString() : "No sunset data";
//     // const sunsetDateLocale = new Intl.DateTimeFormat(locale, optionsDate).format(sunsetDate);
        
//     return (
//         <div className="flex flex-col justify-around font-custom1 text-2xl gap-4">
//             <p className="bg-indigo-200 rounded-t-3xl flex flex-row justify-center items-center p-2 h-full gap-2 text-indigo-900 "><Sunrise /> {sunriseDate}</p>
//             <p className="bg-orange-300 rounded-b-3xl flex flex-row justify-center items-center p-2 h-full gap-2 text-colorDark "><Sunset /> {sunsetDate}</p>
//         </div>
//     );
// }

/* //////////////////////////////////////////////////
FROM SUN PROVIDER
////////////////////////////////////////////////// */
import { useSun } from "../context/sunContext";
import { Sunrise,  Sunset, Sun, Telescope, ShipWheel, PersonStanding} from 'lucide-react';

export default function CardSun() {
    const {sunrise, sunset, solarNoon, dayLength, civilTwilightBegin, civilTwilightEnd, nauticalTwilightBegin, nauticalTwilightEnd, astronomicalTwilightBegin, astronomicalTwilightEnd} = useSun();
    
    const options = { hour12: false, hour: 'numeric', minute: 'numeric' };
    const astronomicalTwilightBeginLocale = astronomicalTwilightBegin ? new Date(astronomicalTwilightBegin).toLocaleTimeString(undefined, options) : "??";
    const nauticalTwilightBeginLocale = nauticalTwilightBegin ? new Date(nauticalTwilightBegin).toLocaleTimeString(undefined, options) : "??";
    const civilTwilightBeginLocale = civilTwilightBegin ? new Date(civilTwilightBegin).toLocaleTimeString(undefined, options) : "??";
    const sunriseLocale = sunrise ? new Date(sunrise).toLocaleString() : "??";
    const solarNoonLocale = solarNoon ? new Date(solarNoon).toLocaleString(undefined, options) : "??";
    const sunsetLocale = sunset ? new Date(sunset).toLocaleString() : "??";
    const civilTwilightEndLocale = civilTwilightEnd ? new Date(civilTwilightEnd).toLocaleString(undefined, options) : "??";
    const nauticalTwilightEndLocale = nauticalTwilightEnd ? new Date(nauticalTwilightEnd).toLocaleString(undefined, options) : "??";
    const astronomicalTwilightEndLocale = astronomicalTwilightEnd ? new Date(astronomicalTwilightEnd).toLocaleString(undefined, options) : "??";

    return (
        <div className="flex flex-col justify-center w-full h-full">

            <div className="bg-colorBrand rounded-2xl flex flex-col justify-center items-center shadow-md h-full gap-2">
                <div className="flex flex-row gap-2 justify-center items-center w-full">
                    <p className="text-colorDark font-custom2 text-sm flex flex-row justify-center items-center gap-2"><Telescope size={14} />{astronomicalTwilightBeginLocale}</p>
                    <p className="text-colorDark font-custom2 text-sm flex flex-row justify-center items-center gap-2"><ShipWheel size={14} />{nauticalTwilightBeginLocale}</p>
                    <p className="text-colorDark font-custom2 text-sm flex flex-row justify-center items-center gap-2"><PersonStanding size={14} />{civilTwilightBeginLocale}</p>
                </div>
                <p className="w-full flex flex-row justify-center items-center gap-2 text-colorDark font-custom1 text-md"><Sunrise /> {sunriseLocale}</p>
            
                <p className="flex flex-row justify-center items-center gap-2 text-colorDark font-custom1 text-lg mt-6"><Sun />{solarNoonLocale}</p>

                <p className="flex flex-row justify-center items-center gap-2 text-colorDark font-custom2 text-sm mb-6">{dayLength ? `Day length ${(dayLength / 3600).toFixed(2)}h` : "??h"}</p>
        
                <p className="flex flex-row justify-center items-center gap-2 text-colorDark font-custom1 text-md w-full"><Sunset /> {sunsetLocale}</p>
                <div className="flex flex-row gap-2 justify-center items-center w-full">
                    <p className="text-colorDark font-custom2 text-sm flex flex-row justify-center items-center gap-2"><PersonStanding size={14} />{civilTwilightEndLocale}</p>
                    <p className="text-colorDark font-custom2 text-sm flex flex-row justify-center items-center gap-2"><ShipWheel size={14} />{nauticalTwilightEndLocale}</p>
                    <p className="text-colorDark font-custom2 text-sm flex flex-row justify-center items-center gap-2"><Telescope size={14} />{astronomicalTwilightEndLocale}</p>
                </div>
            </div>

        </div>
    );
}
