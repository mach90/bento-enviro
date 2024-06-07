import { useAir } from "../context/airContext";

export default function CardAir() {
    const {aqi, attributions} = useAir();

    return (
        <div className="card card-air">
            <div className="air-xxxBox">
                <p>AQI {aqi ? aqi : "no AQI data"}</p>
                {aqi <= 50 && <p>Good</p>}
                {aqi > 50 && aqi <= 100 && <p>Moderate</p>}
                {aqi > 100 && aqi <= 150 && <p>Unhealthy for Sensitive Groups</p>}
                {aqi > 150 && aqi <= 200 && <p>Unhealthy</p>}
                {aqi > 250 && aqi <= 300 && <p>Very Unhealthy</p>}
                {aqi > 300 && <p>Hazardous</p>}
                <p>{attributions ? attributions : "no attributions data"}</p>
            </div>
        </div>
    );
}

//https://dashboard.iqair.com/personal/api-keys
//https://aqicn.org/json-api/doc/#api-Geolocalized_Feed


//https://openweathermap.org/api/air-pollution 🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺🔺