/* ████████████████████████████████████████████████████████████████████████████████████████████████████
IMPORTS
████████████████████████████████████████████████████████████████████████████████████████████████████ */
import { createContext, useContext, useReducer, useEffect, useState } from "react";

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
CONTEXT
████████████████████████████████████████████████████████████████████████████████████████████████████ */
const WebcamContext = createContext();

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
REDUCER + INITIAL STATE
████████████████████████████████████████████████████████████████████████████████████████████████████ */
const initialState = {
    webcams: null,
}

function reducer(state, action) {
    switch(action.type) {
        case "dataReceived": return {...state, 
            webcams: action.payload,
            status: "ready",
        };
        case "dataFailed": return {...state, status: "error"};
        default: throw new Error("Unknown action type");
    }
}

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
PROVIDER COMPONENT
████████████████████████████████████████████████████████████████████████████████████████████████████ */
function WebcamProvider ({children}) {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
	const [{webcams}, dispatch] = useReducer(reducer, initialState);

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
        const fetchWebcam = async () => {
            
            if(latitude && longitude) try {
                const length = 0.3515625 / 2;
                const latitudeSouth = latitude - length;
                const latitudeNorth = latitude + length;
                const longitudeWest = longitude - length;
                const longitudeEast = longitude + length;
                const url = `https://api.windy.com/webcams/api/v3/map/clusters?lang=en&northLat=${latitudeNorth}&southLat=${latitudeSouth}&eastLon=${longitudeEast}&westLon=${longitudeWest}&zoom=10&include=images,player`;
                const options = {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'x-windy-api-key': '0jJpTsHfK99YUGbj4WbASVsRUvaU2l9R',
                    }
                };
                const response = await fetch(url, options);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();

                dispatch({ type: 'dataReceived', payload: data});
            } catch (error) {
                dispatch({ type: 'dataFailed'});
            }
        };

        fetchWebcam();
    }, [latitude, longitude]);

    return <WebcamContext.Provider value={{webcams}}>{children}</WebcamContext.Provider>
}

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
CUSTOM HOOK
████████████████████████████████████████████████████████████████████████████████████████████████████ */
function useWebcam() {
    const context = useContext(WebcamContext);
    if(context === undefined) throw new Error("WebcamContext used outside of the WebcamProvider");
    return context;
}

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
EXPORTS
████████████████████████████████████████████████████████████████████████████████████████████████████ */
export {WebcamProvider, useWebcam};
