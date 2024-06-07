/* ████████████████████████████████████████████████████████████████████████████████████████████████████
IMPORTS
████████████████████████████████████████████████████████████████████████████████████████████████████ */
import { createContext, useContext, useReducer, useEffect, useState } from "react";

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
CONTEXT
████████████████████████████████████████████████████████████████████████████████████████████████████ */
const WeatherContext = createContext();

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
REDUCER + INITIAL STATE
████████████████████████████████████████████████████████████████████████████████████████████████████ */
const initialState = {
    city: null,
    dt: null,
    description: null,
    temp: null,
    feels: null,
    pressure: null,
    humidity: null,
    minTemp: null,
    maxTemp: null,
    windSpeed: null,
    windDirection: null,
    windGust: null,
    clouds: null,
    rain: null,
    snow: null,
    sunrise: null,
    sunset: null,
}

function reducer(state, action) {
    switch(action.type) {
        case "dataReceived": return {...state, 
            city: action.payload.name,
            dt: action.payload.dt,
            timezone: action.payload.timezone,
            description: action.payload.weather[0].description,
            temp: action.payload.main.temp, 
            feels: action.payload.main.feels_like,
            pressure: action.payload.main.pressure,
            humidity: action.payload.main.humidity,
            minTemp: action.payload.main.temp_min,
            maxTemp: action.payload.main.temp_max,
            windSpeed: action.payload.wind.speed,
            windDirection: action.payload.wind.deg,
            windGust: action.payload.wind.gust,
            clouds: action.payload.clouds.all,
            rain: action.payload.rain,
            snow: action.payload.snow,
            sunrise: action.payload.sys.sunrise,
            sunset: action.payload.sys.sunset,
            status: "ready",
        };
        case "dataFailed": return {...state, status: "error"};
        default: throw new Error("Unknown action type");
    }
}

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
PROVIDER COMPONENT
████████████████████████████████████████████████████████████████████████████████████████████████████ */
function WeatherProvider ({children}) {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
	const [{city, dt, timezone, description, temp, feels, pressure, humidity, minTemp, maxTemp, windSpeed, windDirection, windGust, clouds, rain, snow, sunrise, sunset}, dispatch] = useReducer(reducer, initialState);

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
        const fetchWeather = async () => {
            if(latitude && longitude) try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=46d9827b0d0d06ee89c1a28f33fd2b1e&units=metric`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                dispatch({ type: 'dataReceived', payload: data});
                console.log(data)
            } catch (error) {
                dispatch({ type: 'dataFailed'});
            }
        };

        fetchWeather();
    }, [latitude, longitude]);

    return <WeatherContext.Provider value={{city, dt, timezone, description, temp, feels, pressure, humidity, minTemp, maxTemp, windSpeed, windDirection, windGust, clouds, rain, snow, sunrise, sunset}}>{children}</WeatherContext.Provider>
}

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
CUSTOM HOOK
████████████████████████████████████████████████████████████████████████████████████████████████████ */
function useWeather() {
    const context = useContext(WeatherContext);
    if(context === undefined) throw new Error("WeatherContext used outside of the WeatherProvider");
    return context;
}

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
EXPORTS
████████████████████████████████████████████████████████████████████████████████████████████████████ */
export {WeatherProvider, useWeather};


//https://openweathermap.org/weather-conditions