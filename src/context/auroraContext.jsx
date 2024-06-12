/* ████████████████████████████████████████████████████████████████████████████████████████████████████
IMPORTS
████████████████████████████████████████████████████████████████████████████████████████████████████ */
import { createContext, useContext, useReducer, useEffect } from "react";
const apiurl = "https://services.swpc.noaa.gov/json/ovation_aurora_latest.json";

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
CONTEXT
████████████████████████████████████████████████████████████████████████████████████████████████████ */
const AuroraContext = createContext();

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
REDUCER + INITIAL STATE
████████████████████████████████████████████████████████████████████████████████████████████████████ */
const initialState = {
    auroraData: null,
}

function reducer(state, action) {
    switch(action.type) {
        case "dataReceived": return {...state, 
            auroraData: action.payload,
            status: "ready",
        };
        case "dataFailed": return {...state, status: "error"};
        default: throw new Error("Unknown action type");
    }
}

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
PROVIDER COMPONENT
████████████████████████████████████████████████████████████████████████████████████████████████████ */
function AuroraProvider ({children, latitude, longitude}) {
    // const [longitude, setLongitude] = useState(null);
    // const [latitude, setLatitude] = useState(null);
	const [{auroraData}, dispatch] = useReducer(reducer, initialState);

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
        const fetchAurora = async () => {
            if(latitude && longitude) try {
                const response = await fetch(`${apiurl}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                const auroraEntryNumber = (Math.trunc(longitude + 180)*181) + Math.trunc(latitude + 90); 

                // console.log(data)
                
                dispatch({ type: 'dataReceived', payload: data.coordinates.at(auroraEntryNumber).at(2)});
            } catch (error) {
                dispatch({ type: 'dataFailed'});
            }
        };

        fetchAurora();
    }, [latitude, longitude]);

    return <AuroraContext.Provider value={{auroraData}}>{children}</AuroraContext.Provider>
}

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
CUSTOM HOOK
████████████████████████████████████████████████████████████████████████████████████████████████████ */
function useAurora() {
    const context = useContext(AuroraContext);
    if(context === undefined) throw new Error("AuroraContext used outside of the AuroraProvider");
    return context;
}

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
EXPORTS
████████████████████████████████████████████████████████████████████████████████████████████████████ */
export {AuroraProvider, useAurora};
