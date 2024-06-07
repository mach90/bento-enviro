import { useEffect, useState } from "react";

export default function Card({cardStyle}) {
    //https://openweathermap.org/current
    //https://openweathermap.org/api/hourly-forecast
    //https://openweathermap.org/forecast5
    //https://openweathermap.org/forecast16
    //https://openweathermap.org/history
    //https://openweathermap.org/api/statistics-api
    const [station, setStation] = useState(null);
    const [temp, setTemp] = useState(null);
    const [tempFeelsLike, setTempFeelsLike] = useState(null);
    const [tempMin, setTempMin] = useState(null);
    const [tempMax, setTempMax] = useState(null);
    const [pressure, setPressure] = useState(null);
    const [humidity, setHumidity] = useState(null);
    const [windSpeed, setWindSpeed] = useState(null);
    const [windDirection, setWindDirection] = useState(null);
    const [windGust, setWindGust] = useState(null);

    useEffect(()=> {
        async function getWeather(){
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=48.1&lon=2&appid=46d9827b0d0d06ee89c1a28f33fd2b1e&units=metric`);
            const data = await res.json();
            console.log(data)
            if(data) {
                setStation(data.name);
                setTemp(data.main.temp);
                setTempFeelsLike(data.main.feels_like);
                setTempMin(data.main.temp_min);
                setTempMax(data.main.temp_max);
                setPressure(data.main.pressure);
                setHumidity(data.main.humidity);
                setWindSpeed(data.wind.speed);
                setWindDirection(data.wind.deg);
                setWindGust(data.wind.gust);
            }
        }
    
        getWeather();
    }, []);

    return (
        <div className={`card ${cardStyle}`}>
            <p>{station ? `${station}` : "no station found"}</p>
            <p>{temp ? `${temp}°C` : "no data"}</p>
            <p>{tempFeelsLike ? `Feels like ${tempFeelsLike}°C` : "no data"}</p>
            <p>{tempMin ? `${tempMin}°C min` : "no data"}</p>
            <p>{tempMax ? `${tempMax}°C max` : "no data"}</p>
            <p>{pressure ? `${pressure} HPa` : "no data"}</p>
            <p>{humidity ? `${humidity} %` : "no data"}</p>
            <p>{windSpeed ? `${windSpeed} m/s` : "no data"}</p>
            <p>{windDirection ? `${windDirection}°` : "no data"}</p>
            <p>{windGust ? `${windGust} m/s gust` : "no data"}</p>
        </div>
    );
}
