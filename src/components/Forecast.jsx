export default function Forecast({data}) {
    // console.log(data)
    const formattedDate = data.dt ? new Date(data.dt * 1000).toLocaleString() : "No timestamp";

    return (
        <div className="forecast-item">
            <p>{formattedDate}</p>
            <p>{(data.main.temp).toFixed(0)}°C</p>
            <p>Feels like {(data.main.feels_like).toFixed(0)}°C</p>
            <p>{data.weather[0].description}</p>
            <p>{(data.wind.speed * 3.6).toFixed(0)}km/h</p>
            <p>{data.wind.deg}°</p>
            <p>
                <svg
                width="30"
                height="30"
                viewBox="0 0 100 100"
                style={{ transform: `rotate(${data.wind.deg}deg)` }}
                >
                <circle
                cx="50"
                cy="50"
                r="45"
                stroke="black"
                strokeWidth="2"
                fill="none"
                />
                <polygon
                points="50,20 60,60 40,60"
                fill="black"
                />
                </svg>
            </p>
            <p>{(data.wind.gust * 3.6).toFixed(0)}km/h gusts</p>
        </div>
    );
}
