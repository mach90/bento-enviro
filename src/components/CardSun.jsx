import { useWeather } from "../context/weatherContext";
import { Sunrise, Sunset } from 'lucide-react';

export default function CardSun() {
    const {sunrise, sunset} = useWeather();
    
    const sunriseDate = new Date(sunrise * 1000);
    // const sunriseHour = sunriseDate.getHours();
    const sunriseHours = sunriseDate.toLocaleString(navigator.language, { hour: 'numeric', hour12: false });
    const sunriseMinutes = sunriseDate.toLocaleString(navigator.language, { minute: 'numeric' });
    
    const sunsetDate = new Date(sunset * 1000);
    // const sunsetHour = sunsetDate.getHours();
    const sunsetHours = sunsetDate.toLocaleString(navigator.language, { hour: 'numeric', hour12: false });
    const sunsetMinutes = sunsetDate.toLocaleString(navigator.language, { minute: 'numeric' });

    return (
        <div className="card card-sun">
            <p className="sun-sunrise"><Sunrise /> {sunriseHours}h{sunriseMinutes}</p>
            <p className="sun-sunset"><Sunset /> {sunsetHours}h{sunsetMinutes}</p>
        </div>
    );
}
