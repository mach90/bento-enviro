/* ████████████████████████████████████████████████████████████████████████████████████████████████████
IMPORTS
████████████████████████████████████████████████████████████████████████████████████████████████████ */
import { createContext, useContext, useReducer, useEffect } from "react";
const apiurl = "https://api.waqi.info/feed";
const apikey = import.meta.env.VITE_API_AIRKEY;

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
CONTEXT
████████████████████████████████████████████████████████████████████████████████████████████████████ */
const AirContext = createContext();

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
REDUCER + INITIAL STATE
████████████████████████████████████████████████████████████████████████████████████████████████████ */
const initialState = {
    aqi: null,
    co: null,
    no2: null,
    o3: null,
    pm10: null,
    pm25: null,
    so2: null,
    attributions: null,
}

function reducer(state, action) {
    switch(action.type) {
        case "dataReceived": return {...state, 
            aqi: action.payload.data?.aqi,
            co: action.payload.data?.iaqi?.co?.v,
            no2: action.payload.data?.iaqi?.no2?.v,
            o3: action.payload.data?.iaqi?.o3?.v,
            pm10: action.payload.data?.iaqi?.pm10?.v,
            pm25: action.payload.data?.iaqi?.pm25?.v,
            so2: action.payload.data?.iaqi?.so2?.v,
            attributions: action.payload.data?.attributions[0]?.url,
            status: "ready",
        };
        case "dataFailed": return {...state, status: "error"};
        default: throw new Error("Unknown action type");
    }
}

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
PROVIDER COMPONENT
████████████████████████████████████████████████████████████████████████████████████████████████████ */
function AirProvider ({children, latitude, longitude}) {
    // const [latitude, setLatitude] = useState(null);
    // const [longitude, setLongitude] = useState(null);
	const [{aqi, attributions, co, no2, o3, pm10, pm25, so2}, dispatch] = useReducer(reducer, initialState);

    // useEffect(() => {
    // if (navigator.geolocation) { //if browser has geolocation feature
    //     navigator.geolocation.getCurrentPosition(
    //         function(position) {
    //             const {latitude} = position.coords;
    //             const {longitude} = position.coords;
    //             setLatitude(latitude);
    //             setLongitude(longitude);
    //         },
    //         function() {
    //             alert("Could not get your position");
    //         }
    //     );
    // }

    // }, [latitude, longitude]);

	useEffect(() => {
        const fetchAir = async () => {
            if(latitude && longitude) try {
                const response = await fetch(`${apiurl}/geo:${latitude};${longitude}/?token=${apikey}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                dispatch({ type: 'dataReceived', payload: data});
                // console.log(data)
            } catch (error) {
                dispatch({ type: 'dataFailed'});
            }
        };

        fetchAir();
    }, [latitude, longitude]);

    return <AirContext.Provider value={{aqi, attributions, co, no2, o3, pm10, pm25, so2}}>{children}</AirContext.Provider>
}

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
CUSTOM HOOK
████████████████████████████████████████████████████████████████████████████████████████████████████ */
function useAir() {
    const context = useContext(AirContext);
    if(context === undefined) throw new Error("AirContext used outside of the AirProvider");
    return context;
}

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
EXPORTS
████████████████████████████████████████████████████████████████████████████████████████████████████ */
export {AirProvider, useAir};
