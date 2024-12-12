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
    
    const windSpeedConverted = unit === "metric" ? windSpeed * 3.6 : windSpeed * 2.236936;
    const windGustConverted = unit === "metric" ? windGust * 3.6 : windGust * 2.236936;

    let beaufortWindDescription;
    let beaufortWindForce;
    let fanSpeed;

    if(windSpeed) {   
        switch (true) {
            case windSpeed * 3.6 <= 1:
                beaufortWindDescription = "Calm";
                beaufortWindForce = 0;
                fanSpeed = "animate-spin0";
                break;
            case windSpeed * 3.6 <= 5:
                beaufortWindDescription = "Light Air";
                beaufortWindForce = 1;
                fanSpeed = "animate-spin1";
                break;
            case windSpeed * 3.6 <= 11:
                beaufortWindDescription = "Light Breeze";
                beaufortWindForce = 2;
                fanSpeed = "animate-spin2";
                break;
            case windSpeed * 3.6 <= 19:
                beaufortWindDescription = "Gentle Breeze";
                beaufortWindForce = 3;
                fanSpeed = "animate-spin3";
                break;
            case windSpeed * 3.6 <= 28:
                beaufortWindDescription = "Moderate Breeze";
                beaufortWindForce = 4;
                fanSpeed = "animate-spin4";
                break;
            case windSpeed * 3.6 <= 38:
                beaufortWindDescription = "Fresh Breeze";
                beaufortWindForce = 5;
                fanSpeed = "animate-spin5";
                break;
            case windSpeed * 3.6 <= 49:
                beaufortWindDescription = "Strong Breeze";
                beaufortWindForce = 6;
                fanSpeed = "animate-spin6";
                break;
            case windSpeed * 3.6 <= 61:
                beaufortWindDescription = "Near Gale";
                beaufortWindForce = 7;
                fanSpeed = "animate-spin7";
                break;
            case windSpeed * 3.6 <= 74:
                beaufortWindDescription = "Gale";
                beaufortWindForce = 8;
                fanSpeed = "animate-spin8";
                break;
            case windSpeed * 3.6 <= 88:
                beaufortWindDescription = "Strong Gale";
                beaufortWindForce = 9;
                fanSpeed = "animate-spin9";
                break;
            case windSpeed * 3.6 <= 102:
                beaufortWindDescription = "Storm";
                beaufortWindForce = 10;
                fanSpeed = "animate-spin10";
                break;
            case windSpeed * 3.6 <= 117:
                beaufortWindDescription = "Violent Storm";
                beaufortWindForce = 11;
                fanSpeed = "animate-spin11";
                break;
            case windSpeed * 3.6 > 117:
                beaufortWindDescription = "Hurricane";
                beaufortWindForce = 12;
                fanSpeed = "animate-spin12";
                break;
            default:
                beaufortWindDescription = "???";
                beaufortWindForce = "?";
                fanSpeed = "animate-spin0";
        }
    }

    return (
        <div className={cardWindContainerStyle}>
            <div className={`${cardWindFanStyle} ${fanSpeed}`}>
                <Fan size={64} />
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