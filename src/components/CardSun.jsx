import { useSun } from "../context/sunContext";
import { Sunrise,  Sunset, Sun, Telescope, ShipWheel, PersonStanding} from 'lucide-react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const cardSunContainerStyle = "flex flex-col justify-center items-center bg-first p-4 shadow-md rounded-lg gap-4 col-span-1 row-span-1 h-full w-full p-4";
const cardSunDataContainerStyle = "flex flex-col justify-center items-center w-full bg-second p-1 rounded-lg";
const cardSunTrioStyle = "flex flex-row gap-2 justify-center items-center w-full h-full";
const cardSunTrioItemStyle = "text-300 font-exp text-exp flex flex-row justify-center items-center gap-2";
const cardSunInfoStyle = "w-full flex flex-row justify-center items-center gap-2 text-100 font-body text-body";

export default function CardSun() {
    const {sunrise, sunset, solarNoon, dayLength, civilTwilightBegin, civilTwilightEnd, nauticalTwilightBegin, nauticalTwilightEnd, astronomicalTwilightBegin, astronomicalTwilightEnd} = useSun();

    // Timezone = Browser timezone. Converts "2024-12-13T06:40:24+01:00" to timestamp in seconds.
    const astronomicalTwilightBeginTimestamp =  new Date(String(astronomicalTwilightBegin)).getTime() / 1000;
    const nauticalTwilightBeginTimestamp =  new Date(String(nauticalTwilightBegin)).getTime() / 1000;
    const civilTwilightBeginTimestamp =  new Date(String(civilTwilightBegin)).getTime() / 1000;
    const sunriseTimestamp = new Date(String(sunrise)).getTime() / 1000;
    const solarNoonTimestamp = new Date(String(solarNoon)).getTime() / 1000;
    const sunsetTimestamp = new Date(String(sunset)).getTime() / 1000;
    const civilTwilightEndTimestamp =  new Date(String(civilTwilightEnd)).getTime() / 1000;
    const nauticalTwilightEndTimestamp =  new Date(String(nauticalTwilightEnd)).getTime() / 1000;
    const astronomicalTwilightEndTimestamp =  new Date(String(astronomicalTwilightEnd)).getTime() / 1000;

    // Timezone = Browser timezone. Converts "2024-12-13T06:40:24+01:00" to 06:40
    const options = { hour12: false, hour: 'numeric', minute: 'numeric' };
    const astronomicalTwilightBeginLocale = astronomicalTwilightBegin ? new Date(astronomicalTwilightBegin).toLocaleTimeString(undefined, options) : "??";
    const nauticalTwilightBeginLocale = nauticalTwilightBegin ? new Date(nauticalTwilightBegin).toLocaleTimeString(undefined, options) : "??";
    const civilTwilightBeginLocale = civilTwilightBegin ? new Date(civilTwilightBegin).toLocaleTimeString(undefined, options) : "??";
    const sunriseLocale = sunrise ? new Date(sunrise).toLocaleString(undefined, options) : "??";
    const solarNoonLocale = solarNoon ? new Date(solarNoon).toLocaleString(undefined, options) : "??";
    const sunsetLocale = sunset ? new Date(sunset).toLocaleString(undefined, options) : "??";
    const civilTwilightEndLocale = civilTwilightEnd ? new Date(civilTwilightEnd).toLocaleString(undefined, options) : "??";
    const nauticalTwilightEndLocale = nauticalTwilightEnd ? new Date(nauticalTwilightEnd).toLocaleString(undefined, options) : "??";
    const astronomicalTwilightEndLocale = astronomicalTwilightEnd ? new Date(astronomicalTwilightEnd).toLocaleString(undefined, options) : "??";

    // Time data for Pie Chart
    const dataPie = [
        { 
            name: 'Astronomic Twilight Begin',
            start: astronomicalTwilightBeginLocale,
            end: nauticalTwilightBeginLocale,
            duration: ((nauticalTwilightBeginTimestamp - astronomicalTwilightBeginTimestamp) / 3600),
            color: "#111125",
        },
        { 
            name: 'Nautical Twilight Begin',
            start: nauticalTwilightBeginLocale,
            end: civilTwilightBeginLocale,
            duration: ((civilTwilightBeginTimestamp - nauticalTwilightBeginTimestamp) / 3600),
            color: "#0f3460",
        },
        { 
            name: 'Civil Twilight Begin',
            start: civilTwilightBeginLocale,
            end: sunriseLocale,
            duration: ((sunriseTimestamp - civilTwilightBeginTimestamp) / 3600),
            color: "#d590ec",
        },
        { 
            name: 'Sunrise',
            start: sunriseLocale,
            end: solarNoonLocale,
            duration: ((solarNoonTimestamp - sunriseTimestamp) / 3600),
            color: "#c7bdae",
        },
        { 
            name: 'Noon',
            start: solarNoonLocale,
            end: sunsetLocale, 
            duration: ((sunsetTimestamp - solarNoonTimestamp) / 3600),
            color: "#a6a097",
        },
        { 
            name: 'Sunset',
            start: sunsetLocale,
            end: civilTwilightEndLocale,
            duration: ((civilTwilightEndTimestamp - sunsetTimestamp) / 3600),
            color: "#f08a5d",
        },
        { 
            name: 'Civil Twilight End ',
            start: civilTwilightEndLocale,
            end: nauticalTwilightEndLocale,
            duration: ((nauticalTwilightEndTimestamp - civilTwilightEndTimestamp) / 3600),
            color: "#b83b5e",
        },
        { 
            name: 'Nautrical Twilight End ',
            start: nauticalTwilightEndLocale,
            end: astronomicalTwilightEndLocale,
            duration: ((astronomicalTwilightEndTimestamp - nauticalTwilightEndTimestamp) / 3600),
            color: "#201360",
        },
        { 
            name: 'Astronomic Twilight End (Night)',
            start: astronomicalTwilightEndLocale,
            end: null,
            duration: (24) - (((astronomicalTwilightEndTimestamp - nauticalTwilightBeginTimestamp - 3600) / 3600)),
            color: "#1c1c1c",
        },
    ];

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            const { name, value, payload: data } = payload[0]; // Extract data from tooltip
            return (
                <div style={{ backgroundColor: '#818181', color: '#313131', padding: '10px', border: '1px solid #313131', borderRadius: '4px' }}>
                    <p><strong>{name}</strong></p>
                    <p>Start: {data.start}</p>
                    {data.end ? <p>End: {data.end}</p> : ""}
                    <p>Duration: {value.toFixed(2)}h</p>
                </div>
            );
        }
        return null;
    };

    return (
        <>
            <div className={cardSunContainerStyle}>
                <div className={cardSunDataContainerStyle}>
                    <div className={cardSunTrioStyle}>
                        <p className={cardSunTrioItemStyle}><Telescope size={14} />{astronomicalTwilightBeginLocale}</p>
                        <p className={cardSunTrioItemStyle}><ShipWheel size={14} />{nauticalTwilightBeginLocale}</p>
                        <p className={cardSunTrioItemStyle}><PersonStanding size={14} />{civilTwilightBeginLocale}</p>
                    </div>
                    <p className={cardSunInfoStyle}><Sunrise size={16}/> {sunriseLocale}</p>
                </div>
                <div className={cardSunDataContainerStyle}>
                    <p className={cardSunInfoStyle}><Sun size={16}/>{solarNoonLocale}</p>
                    <p className={cardSunInfoStyle}>{dayLength ? `Day length ${(dayLength / 3600).toFixed(2)}h` : "??h"}</p>
                </div>
                <div className={cardSunDataContainerStyle}>
                    <p className={cardSunInfoStyle}><Sunset size={16}/> {sunsetLocale}</p>
                    <div className={cardSunTrioStyle}>
                        <p className={cardSunTrioItemStyle}><PersonStanding size={14} />{civilTwilightEndLocale}</p>
                        <p className={cardSunTrioItemStyle}><ShipWheel size={14} />{nauticalTwilightEndLocale}</p>
                        <p className={cardSunTrioItemStyle}><Telescope size={14} />{astronomicalTwilightEndLocale}</p>
                    </div>
                </div>
                <div className="w-full h-full p-4 bg-second rounded-lg">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie data={dataPie} nameKey="name" dataKey="duration" innerRadius={50} outerRadius="100%" startAngle={180}  endAngle={-180}>
                                {dataPie.map(entry => <Cell fill={entry.color} stroke={entry.color} key={entry.duration}/>)}
                            </Pie>
                            <Tooltip content={<CustomTooltip />} />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </>
    );
}

/* //////////////////////////////////////////////////
OLD: FROM WEATHER PROVIDER
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
//         <div className="flex flex-col justify-around font-heading text-2xl gap-4">
//             <p className="bg-indigo-200 rounded-t-3xl flex flex-row justify-center items-center p-2 h-full gap-2 text-indigo-900 "><Sunrise /> {sunriseDate}</p>
//             <p className="bg-orange-300 rounded-b-3xl flex flex-row justify-center items-center p-2 h-full gap-2 text-colorTextMedium "><Sunset /> {sunsetDate}</p>
//         </div>
//     );
// }