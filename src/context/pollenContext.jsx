/* ████████████████████████████████████████████████████████████████████████████████████████████████████
IMPORTS
████████████████████████████████████████████████████████████████████████████████████████████████████ */
import { createContext, useContext, useReducer, useEffect } from "react";
const apiurl = "https://pollen.googleapis.com/v1";
const apikey = import.meta.env.VITE_API_GOOGLEPOLLEN;

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
CONTEXT
████████████████████████████████████████████████████████████████████████████████████████████████████ */
const PollenContext = createContext();

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
REDUCER + INITIAL STATE
████████████████████████████████████████████████████████████████████████████████████████████████████ */
const initialState = {
    pollenForecast: null,
    status: "loading",
}

function reducer(state, action) {
    switch(action.type) {
        case "dataReceived": return {...state, 
            pollenForecast: action.payload?.dailyInfo,
            status: "ready",
        };
        case "dataFailed": return {...state, status: "error"};
        default: throw new Error("Unknown action type");
    }
}

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
PROVIDER COMPONENT
████████████████████████████████████████████████████████████████████████████████████████████████████ */
function PollenProvider ({children, latitude, longitude}) {
    const [{pollenForecast}, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const fetchPollen = async () => {
            if(latitude && longitude) try {
                const response = await fetch(`${apiurl}/forecast:lookup?key=${apikey}&location.longitude=${longitude}&location.latitude=${latitude}&days=5&languageCode=EN&plantsDescription=false`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();

                dispatch({ type: 'dataReceived', payload: data});

            } catch (error) {
                dispatch({ type: 'dataFailed'});
            }
        };

        fetchPollen();
    }, [latitude, longitude]);

    return <PollenContext.Provider value={{pollenForecast}}>{children}</PollenContext.Provider>
}

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
CUSTOM HOOK
████████████████████████████████████████████████████████████████████████████████████████████████████ */
function usePollen() {
    const context = useContext(PollenContext);
    if(context === undefined) throw new Error("PollenContext used outside of the PollenProvider");
    return context;
}

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
EXPORTS
████████████████████████████████████████████████████████████████████████████████████████████████████ */
export {PollenProvider, usePollen};
