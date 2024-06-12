/* ████████████████████████████████████████████████████████████████████████████████████████████████████
IMPORTS
████████████████████████████████████████████████████████████████████████████████████████████████████ */
import { createContext, useContext, useReducer, useEffect } from "react";
import pako from "pako";

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
CONTEXT
████████████████████████████████████████████████████████████████████████████████████████████████████ */
const NightskyContext = createContext();

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
REDUCER + INITIAL STATE
████████████████████████████████████████████████████████████████████████████████████████████████████ */
const initialState = {
    sqm: null,
    totalBrightness: null,
    artificialBrightness: null,
    ratioBrightness: null,
}

function reducer(state, action) {
    switch(action.type) {
        case "dataReceived": return {...state, 
            sqm: action.payload.sqm,
            totalBrightness: action.payload.totalBrightness,
            artificialBrightness: action.payload.artificialBrightness,
            ratioBrightness: action.payload.ratioBrightness,
            status: "ready",
        };
        case "dataFailed": return {...state, status: "error"};
        default: throw new Error("Unknown action type");
    }
}

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
PROVIDER COMPONENT
████████████████████████████████████████████████████████████████████████████████████████████████████ */
function NightskyProvider ({children, latitude, longitude}) {
    // const [latitude, setLatitude] = useState(null);
    // const [longitude, setLongitude] = useState(null);
	const [{sqm, totalBrightness, artificialBrightness, ratioBrightness}, dispatch] = useReducer(reducer, initialState);

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

    /* ////////////////////////////////////////////////////////////////////////////////////////////////////
    FULL CREDIT TO 
    https://djlorenz.github.io/astronomy/lp2020/ 
    FOR THE DATA AND ALGORITHMS
    //////////////////////////////////////////////////////////////////////////////////////////////////// */
    useEffect(() => {
        getInfoFromLonLat({ lat: latitude, lng: longitude }, 2022);
    }, [latitude, longitude]);

    function getInfoFromLonLat(elatlng,year) {
        let xhr;
            
        /* //////////////////////////////////////////////////
        Figure out which tile has binary data. 
        Each tile is 600 x 600 points (1/120 degree resolution)
        ////////////////////////////////////////////////// */
        const lonFromDateLine = ((((elatlng.lng + 180.0) % 360.0) + 360.0) % 360.0);
        const latFromStart = elatlng.lat + 65.0;
        const tilex = Math.floor(lonFromDateLine / 5.0) + 1;
        const tiley = Math.floor(latFromStart / 5.0) + 1;
        // console.log(tilex, tiley)
        
        /* //////////////////////////////////////////////////
        Figure out location of nearset grid point in tile
        ////////////////////////////////////////////////// */
        const ix = Math.round( 120.0*(lonFromDateLine - 5.0*(tilex - 1) + 1./240.0) );
        const iy = Math.round( 120.0*(latFromStart - 5.0*(tiley - 1) + 1./240.0) );

        /* //////////////////////////////////////////////////
        ////////////////////////////////////////////////// */
        function LpAtlasInBounds() {

            // console.log(`xhrResponse ${xhr.response}`)

            const data_array = new Int8Array(pako.ungzip(xhr.response));
            // const data_array = new Int8Array(xhr.response);

            // Lower left corner is 2 byte actual value. Afterwards content is 1-byte change relative to adjacent value (for compression)
            const first_number = 128 * Number(data_array[0]) + Number(data_array[1]);
            // console.log(`First number ${first_number}`)

            // Loop through the changes in latitude
            let change = 0.0;
            // console.log(`Change initial value ${change}`)
            
            // Start at i = 1 because first corner is actual compressed value rather than change
            for (let i = 1; i < iy; i++) {
                // + 1 instead of +0 because first point is 2 bytes in my compression scheme
                change += Number(data_array[600 * i + 1]);
                // console.log(`Change1 ${change}`)
            }

            // Now add up changes in longitude, start at 1. This time because first value is change in latitude
            for (let i = 1; i < ix; i++) {
                // + 1 instead of +0 because first point is 2 bytes in my compression scheme
                change += Number(data_array[600 * (iy - 1) + 1 + i]);
                // console.log(`Change2 ${change}`)
            }

            // Now have compressed value
            const compressed = first_number + change;
            // console.log(`Compressed ${compressed}`)

            const brightnessRatio = (5.0 / 195.0) * (Math.exp(0.0195 * compressed) - 1.0);
            
            const mpsas = 22.0 - 5.0 * Math.log(1.0 + brightnessRatio) / Math.log(100.0);

            // Payload
            const nightSkyData = {
                sqm: mpsas.toFixed(2),
                totalBrightness: (108000000 * Math.pow(10, -0.4 * mpsas)).toFixed(2),
                artificialBrightness: (((108000000 * Math.pow(10, -0.4 * mpsas)) - 0.171168465) * 1000).toFixed(0),
                ratioBrightness: (((108000000 * Math.pow(10, -0.4 * mpsas)) - 0.171168465) / 0.171168465).toFixed(1),
            }

            // console.log(mpsas.toFixed(2))
            dispatch({ type: 'dataReceived', payload: nightSkyData });
        }

        if ( tiley >= 1 && tiley <= 28 ) {
            // const url = `../binary_tiles/${year}/binary_tile_${tilex}_${tiley}.dat.gz`;
            const url = `https://djlorenz.github.io/astronomy/binary_tiles/${year}/binary_tile_${tilex}_${tiley}.dat.gz`;
            // console.log(url)
            
            xhr = new XMLHttpRequest();
            xhr.responseType = 'arraybuffer';
            xhr.onload = function() {
                try {
                    LpAtlasInBounds(xhr.response);
                } catch (error) {
                    console.error('An error occurred while processing the response:', error);
                }
            };
            xhr.onerror = function() {
                console.error('An error occurred during the XMLHttpRequest.');
            };
            xhr.open("GET", url, true);
            xhr.send();
   
        } else {
            dispatch({ type: 'dataFailed'});
        }
    }

    return <NightskyContext.Provider value={{sqm, totalBrightness, artificialBrightness, ratioBrightness}}>{children}</NightskyContext.Provider>
}

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
CUSTOM HOOK
████████████████████████████████████████████████████████████████████████████████████████████████████ */
function useNightsky() {
    const context = useContext(NightskyContext);
    if(context === undefined) throw new Error("NightskyContext used outside of the NightskyProvider");
    return context;
}

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
EXPORTS
████████████████████████████████████████████████████████████████████████████████████████████████████ */
export {NightskyProvider, useNightsky};

/*
The World Atlas dataset contains calculated artificial brightness in mcd/cm2 (ARTIFICIAL_BRIGHTNESS ). Assuming that the natural brightness of the night sky is 22.00 mag./arc sec2 or 0.171168465 mcd/m2, you can then calculate other properties:

Total brightness: ARTIFICIAL_BRIGHTNESS + 0.171168465 mcd/m2
SQM: log10((Total brightness)/108000000)/-0.4
Ratio: ARTIFICIAL_BRIGHTNESS/0.171168465 mcd/m2
Bortle: SQM classification table
*/