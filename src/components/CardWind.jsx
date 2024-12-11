import { useWeather } from "../context/weatherContext";
import { MoveRight, Fan } from 'lucide-react';

const cardWindContainerStyle = "bg-fifth p-6 flex flex-col justify-between items-end shadow-md col-span-1 row-span-1 rounded-tl-[60px] rounded-tr-[40px] rounded-b-2xl gap-4";
const cardWindInfosContainerStyle = "bg-second w-full h-max flex flex-col justify-center items-center rounded-xl p-4 shadow-inner shadow-1000";
const cardWindNoDataStyle = "font-heading text-heading text-1000";
const cardWindWindspeedStyle = "flex items-center gap-2 bg-1000 text-heading font-heading text-200";
const cardWindIconStyle = "text-1000";
const cardWindFanStyle = "bg-first rounded-full p-1 border-4 border-1000 text-fifth";
const cardWindDescription = "test-body font-body text-1000";

export default function CardWeather({unit}) {
    const { windSpeed, windDirection, windGust } = useWeather();
    
    // Convert wind speeds based on unit
    const windSpeedConverted = unit === "metric" ? windSpeed * 3.6 : windSpeed * 2.236936;
    const windGustConverted = unit === "metric" ? windGust * 3.6 : windGust * 2.236936;

    // Calculate spin duration based on wind speed
    const calculateSpinDuration = () => {
        if (!windSpeed) return 0;
    
        const windSpeedKmh = windSpeed * 3.6;
        
        // Inverse relationship: faster wind = slower spin
        const baseDuration = 20;
        const spinDuration = Math.max(
            0.1, 
            baseDuration / windSpeedKmh
        );
        
        return spinDuration;
    };

    // Beaufort Wind Scale Determination
    let beaufortWindDescription;
    let beaufortWindForce;

    if(windSpeed) {   
        switch (true) {
            case windSpeed * 3.6 <= 1:
                beaufortWindDescription = "Calm";
                beaufortWindForce = 0;
                break;
            case windSpeed * 3.6 <= 5:
                beaufortWindDescription = "Light Air";
                beaufortWindForce = 1;
                break;
            case windSpeed * 3.6 <= 11:
                beaufortWindDescription = "Light Breeze";
                beaufortWindForce = 2;
                break;
            case windSpeed * 3.6 <= 19:
                beaufortWindDescription = "Gentle Breeze";
                beaufortWindForce = 3;
                break;
            case windSpeed * 3.6 <= 28:
                beaufortWindDescription = "Moderate Breeze";
                beaufortWindForce = 4;
                break;
            case windSpeed * 3.6 <= 38:
                beaufortWindDescription = "Fresh Breeze";
                beaufortWindForce = 5;
                break;
            case windSpeed * 3.6 <= 49:
                beaufortWindDescription = "Strong Breeze";
                beaufortWindForce = 6;
                break;
            case windSpeed * 3.6 <= 61:
                beaufortWindDescription = "Near Gale";
                beaufortWindForce = 7;
                break;
            case windSpeed * 3.6 <= 74:
                beaufortWindDescription = "Gale";
                beaufortWindForce = 8;
                break;
            case windSpeed * 3.6 <= 88:
                beaufortWindDescription = "Strong Gale";
                beaufortWindForce = 9;
                break;
            case windSpeed * 3.6 <= 102:
                beaufortWindDescription = "Storm";
                beaufortWindForce = 10;
                break;
            case windSpeed * 3.6 <= 117:
                beaufortWindDescription = "Violent Storm";
                beaufortWindForce = 11;
                break;
            case windSpeed * 3.6 > 117:
                beaufortWindDescription = "Hurricane";
                beaufortWindForce = 12;
                break;
            default:
                beaufortWindDescription = "???";
                beaufortWindForce = "?";
        }
    }

    // Calculate spin duration
    const spinDuration = calculateSpinDuration();

    return (
        <div className={cardWindContainerStyle}>
            <div className={cardWindFanStyle}>
                <Fan 
                    size={64} 
                    style={{ 
                        animation: spinDuration > 0 
                            ? `spin ${spinDuration}s linear infinite` 
                            : 'none' 
                    }}
                />
            </div>
            <div className={cardWindInfosContainerStyle}>
                {!windSpeed && <p className={cardWindNoDataStyle}>No wind recorded</p>}

                {windSpeed && <>
                    <p className={cardWindDescription}>Force {beaufortWindForce}/12</p>
                    <p className={cardWindWindspeedStyle}>{beaufortWindDescription}</p>
                    <p className={cardWindWindspeedStyle}>
                        {(windSpeedConverted).toFixed(0)} {unit === "metric" ? "km/h" : "mph"}
                    </p>
                    <p className={cardWindDescription}>
                        {windDirection >= 0 ? windDirection : "???"}°
                    </p>
                    <p className={cardWindIconStyle}>
                        <MoveRight size={48} transform={`rotate(${windDirection + 90})`} />
                    </p>
                </>}

                {windGust && 
                    <p className={cardWindDescription}>
                        {(windGustConverted).toFixed(0)} {unit === "metric" ? "km/h" : "mph"} gusts
                    </p>
                }
            </div>
        </div>
    );
}