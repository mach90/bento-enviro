/* ████████████████████████████████████████████████████████████████████████████████████████████████████
IMPORTS
████████████████████████████████████████████████████████████████████████████████████████████████████ */
import { createContext, useContext, useReducer, useEffect } from "react";

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
CONTEXT
████████████████████████████████████████████████████████████████████████████████████████████████████ */
const SunContext = createContext();

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
REDUCER + INITIAL STATE
████████████████████████████████████████████████████████████████████████████████████████████████████ */
const initialState = {
    sunrise: null, 
    sunset: null, 
    solarNoon: null, 
    dayLength: null, 
    civilTwilightBegin: null, 
    civilTwilightEnd: null, 
    nauticalTwilightBegin: null, 
    nauticalTwilightEnd: null, 
    astronomicalTwilightBegin: null, 
    astronomicalTwilightEnd: null,
}

function reducer(state, action) {
    switch(action.type) {
        case "dataReceived": return {...state, 
            sunrise: action.payload.sunrise, 
            sunset: action.payload.sunset, 
            solarNoon: action.payload.solar_noon, 
            dayLength: action.payload.day_length, 
            civilTwilightBegin: action.payload.civil_twilight_begin, 
            civilTwilightEnd: action.payload.civil_twilight_end, 
            nauticalTwilightBegin: action.payload.nautical_twilight_begin, 
            nauticalTwilightEnd: action.payload.nautical_twilight_end, 
            astronomicalTwilightBegin: action.payload.astronomical_twilight_begin, 
            astronomicalTwilightEnd: action.payload.astronomical_twilight_end,
            status: "ready",
        };
        case "dataFailed": return {...state, status: "error"};
        default: throw new Error("Unknown action type");
    }
}

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
PROVIDER COMPONENT
████████████████████████████████████████████████████████████████████████████████████████████████████ */
function SunProvider ({children, latitude, longitude}) {
    // const [longitude, setLongitude] = useState(null);
    // const [latitude, setLatitude] = useState(null);
	const [{sunrise, sunset, solarNoon, dayLength, civilTwilightBegin, civilTwilightEnd, nauticalTwilightBegin, nauticalTwilightEnd, astronomicalTwilightBegin, astronomicalTwilightEnd}, dispatch] = useReducer(reducer, initialState);

    // useEffect(() => {
    // if (navigator.geolocation) { //if browser has geolocation feature
    //     navigator.geolocation.getCurrentPosition(
    //         function(position) {
    //             const {longitude} = position.coords;
    //             const {latitude} = position.coords;
    //             setLongitude(longitude);
    //             setLatitude(latitude);
    //         },
    //         function() {
    //             alert("Could not get your position");
    //         }
    //     );
    // }

    // }, [longitude, latitude]);

	useEffect(() => {
        const fetchSun = async () => {
            if(latitude && longitude) try {
                const browserTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
                const response = await fetch(`https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&formatted=0&tzid=${browserTimeZone}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                // console.log(data)
                
                dispatch({ type: 'dataReceived', payload: data.results});
            } catch (error) {
                dispatch({ type: 'dataFailed'});
            }
        };

        fetchSun();
    }, [latitude, longitude]);

    return <SunContext.Provider value={{sunrise, sunset, solarNoon, dayLength, civilTwilightBegin, civilTwilightEnd, nauticalTwilightBegin, nauticalTwilightEnd, astronomicalTwilightBegin, astronomicalTwilightEnd}}>{children}</SunContext.Provider>
}

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
CUSTOM HOOK
████████████████████████████████████████████████████████████████████████████████████████████████████ */
function useSun() {
    const context = useContext(SunContext);
    if(context === undefined) throw new Error("SunContext used outside of the SunProvider");
    return context;
}

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
EXPORTS
████████████████████████████████████████████████████████████████████████████████████████████████████ */
export {SunProvider, useSun};
