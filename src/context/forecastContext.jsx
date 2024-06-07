/* ████████████████████████████████████████████████████████████████████████████████████████████████████
IMPORTS
████████████████████████████████████████████████████████████████████████████████████████████████████ */
import { createContext, useContext, useReducer, useEffect, useState } from "react";

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
CONTEXT
████████████████████████████████████████████████████████████████████████████████████████████████████ */
const ForecastContext = createContext();

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
REDUCER + INITIAL STATE
████████████████████████████████████████████████████████████████████████████████████████████████████ */
const initialState = {
    forecast: null,
}

function reducer(state, action) {
    switch(action.type) {
        case "dataReceived": return {...state, 
            forecast: action.payload.list,
            status: "ready",
        };
        case "dataFailed": return {...state, status: "error"};
        default: throw new Error("Unknown action type");
    }
}

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
PROVIDER COMPONENT
████████████████████████████████████████████████████████████████████████████████████████████████████ */
function ForecastProvider ({children}) {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
	const [{forecast}, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
    if (navigator.geolocation) { //if browser has geolocation feature
        navigator.geolocation.getCurrentPosition(
            function(position) {
                const {latitude} = position.coords;
                const {longitude} = position.coords;
                setLatitude(latitude);
                setLongitude(longitude);
            },
            function() {
                alert("Could not get your position");
            }
        );
    }

    }, [latitude, longitude]);

	useEffect(() => {
        const fetchForecast = async () => {
            if(latitude && longitude) try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=46d9827b0d0d06ee89c1a28f33fd2b1e&units=metric`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                dispatch({ type: 'dataReceived', payload: data});
            } catch (error) {
                dispatch({ type: 'dataFailed'});
            }
        };

        fetchForecast();
    }, [latitude, longitude]);

    return <ForecastContext.Provider value={{forecast}}>{children}</ForecastContext.Provider>
}

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
CUSTOM HOOK
████████████████████████████████████████████████████████████████████████████████████████████████████ */
function useForecast() {
    const context = useContext(ForecastContext);
    if(context === undefined) throw new Error("ForecastContext used outside of the forecastProvider");
    return context;
}

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
EXPORTS
████████████████████████████████████████████████████████████████████████████████████████████████████ */
export {ForecastProvider, useForecast};


//https://openweathermap.org/forecast5