/* ████████████████████████████████████████████████████████████████████████████████████████████████████
IMPORTS
████████████████████████████████████████████████████████████████████████████████████████████████████ */
import { createContext, useContext, useReducer, useEffect, useState } from "react";

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
CONTEXT
████████████████████████████████████████████████████████████████████████████████████████████████████ */
const MoonContext = createContext();

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
REDUCER + INITIAL STATE
████████████████████████████████████████████████████████████████████████████████████████████████████ */
const initialState = {
    moonAge: null,
    moonIlluminatedFraction: null,
    moonPhaseAngle: null,
    moonPhaseName: null,
    moonPhaseTransitTime: null,
    moonrise: null,
    moonset: null,
}

function reducer(state, action) {
    switch(action.type) {
        case "dataReceived": return {...state, 
            moonAge: action.payload.data_day.moonage[0],
            moonIlluminatedFraction: action.payload.data_day.moonilluminatedfraction[0],
            moonPhaseAngle: action.payload.data_day.moonphaseangle[0],
            moonPhaseName: action.payload.data_day.moonphasename[0],
            moonPhaseTransitTime: action.payload.data_day.moonphasetransittime[0],
            moonrise: action.payload.data_day.moonrise[0],
            moonset: action.payload.data_day.moonset[0],
            status: "ready",
        };
        case "dataFailed": return {...state, status: "error"};
        default: throw new Error("Unknown action type");
    }
}

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
PROVIDER COMPONENT
████████████████████████████████████████████████████████████████████████████████████████████████████ */
function MoonProvider ({children}) {
    const [longitude, setLongitude] = useState(null);
    const [latitude, setLatitude] = useState(null);
	const [{moonAge, moonIlluminatedFraction, moonPhaseAngle, moonPhaseName,moonPhaseTransitTime, moonrise, moonset}, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
    if (navigator.geolocation) { //if browser has geolocation feature
        navigator.geolocation.getCurrentPosition(
            function(position) {
                const {longitude} = position.coords;
                const {latitude} = position.coords;
                setLongitude(longitude);
                setLatitude(latitude);
            },
            function() {
                alert("Could not get your position");
            }
        );
    }

    }, [longitude, latitude]);

	useEffect(() => {
        const fetchMoon = async () => {
            if(latitude && longitude) try {
                const response = await fetch(`https://my.meteoblue.com/packages/sunmoon?apikey=MlxzusqgTwXchA5B&lat=${latitude}&lon=${longitude}&asl=186&format=json`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log(data)
                
                dispatch({ type: 'dataReceived', payload: data});
            } catch (error) {
                dispatch({ type: 'dataFailed'});
            }
        };

        fetchMoon();
    }, [latitude, longitude]);

    return <MoonContext.Provider value={{moonAge, moonIlluminatedFraction, moonPhaseAngle, moonPhaseName,moonPhaseTransitTime, moonrise, moonset}}>{children}</MoonContext.Provider>
}

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
CUSTOM HOOK
████████████████████████████████████████████████████████████████████████████████████████████████████ */
function useMoon() {
    const context = useContext(MoonContext);
    if(context === undefined) throw new Error("MoonContext used outside of the MoonProvider");
    return context;
}

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
EXPORTS
████████████████████████████████████████████████████████████████████████████████████████████████████ */
export {MoonProvider, useMoon};
