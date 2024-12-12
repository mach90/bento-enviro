/* ████████████████████████████████████████████████████████████████████████████████████████████████████
IMPORTS
████████████████████████████████████████████████████████████████████████████████████████████████████ */
import { createContext, useContext, useReducer, useEffect } from "react";
// const apiurl = 'https://wft-geo-db.p.rapidapi.com/v1/geo/locations/33.832213-118.387099/nearbyCities?radius=100';
// const apikey = 'fd1d329f06mshbb2e30165934af3p12c514jsnc5a3085e41d3';

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
CONTEXT
████████████████████████████████████████████████████████████████████████████████████████████████████ */
const TesterContext = createContext();

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
REDUCER + INITIAL STATE
████████████████████████████████████████████████████████████████████████████████████████████████████ */
const initialState = {testData: null,}
    
function reducer(state, action) {
    switch(action.type) {
        case "dataReceived": return {...state, 
            testData: action.payload,
            status: "ready",
        };
        case "dataFailed": return {...state, status: "error"};
        default: throw new Error("Unknown action type");
    }
}

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
PROVIDER COMPONENT
████████████████████████████████████████████████████████████████████████████████████████████████████ */
function TesterProvider ({children, latitude, longitude}) {
    const [{testData}, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
        const fetchTesterData = async () => {
            if(latitude && longitude) try {
                const url = 'https://dummyjson.com/recipes/1';

                const options = {
                    method: 'GET',
                    headers: {
                        'x-rapidapi-key': 'fd1d329f06mshbb2e30165934af3p12c514jsnc5a3085e41d3',
                        'x-rapidapi-host': 'world-geo-data.p.rapidapi.com'
                    }
                };

                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                // console.log("📄📄📄📄📄📄📄📄📄📄", data)
                dispatch({ type: 'dataReceived', payload: data});
            } catch (error) {
                dispatch({ type: 'dataFailed'});
            }
        };

        fetchTesterData();
    }, [latitude, longitude]);

    return <TesterContext.Provider value={{testData}}>{children}</TesterContext.Provider>
}

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
CUSTOM HOOK
████████████████████████████████████████████████████████████████████████████████████████████████████ */
function useTester() {
    const context = useContext(TesterContext);
    if(context === undefined) throw new Error("TesterContext used outside of the TesterProvider");
    return context;
}

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
EXPORTS
████████████████████████████████████████████████████████████████████████████████████████████████████ */
export {TesterProvider, useTester};