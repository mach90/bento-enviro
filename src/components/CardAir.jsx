import { useAir } from "../context/airContext";
import { TriangleAlert } from "lucide-react";

const cardAirContainerStyle = "bg-cardSecond relative flex flex-col gap-4 p-6 justify-between items-start rounded-lg shadow-md col-span-1 row-span-1";
const cardAirScoreContainerStyle = "text-textSecond";
const cardAirScoreTextStyle = "font-heading text-md font-600 text-textSecond"

const cardAirScoreIsGood = "absolute top-1 right-1 text-green-800";
const cardAirScoreIsModerate = "absolute top-1 right-1 text-yellow-800";
const cardAirScoreIsUnhealthy1 = "absolute top-1 right-1 text-orange-800";
const cardAirScoreIsUnhealthy2 = "absolute top-1 right-1 text-red-800";
const cardAirScoreIsUnhealthy3 = "absolute top-1 right-1 text-purple-800";
const cardAirScoreIsHazardous = "absolute top-1 right-1 text-stone-950";

const cardAirDataContainerStyle = "font-body text-sm flex flex-col";
const cardAirDataRowStyle = "flex flex-row gap-2 items-center";
const cardAirDataTitleStyle = "font-heading text-sm text-textSecondVariant";
const cardAirDataValueStyle = "font-heading text-sm text-textSecond";
const cardAirDataUnitStyle = "font-heading text-xs text-textSecondVariant";

export default function CardAir() {
    const {aqi, attributions, co, no2, o3, pm10, pm25, so2} = useAir();

    return (
        <div className={cardAirContainerStyle}>

            {!aqi && <p className="font-body text-md p-2 text-textPrimaryVariant">No data</p>}

            {aqi > 0 && aqi <= 50 && <div className={cardAirScoreContainerStyle}><p className={cardAirScoreTextStyle}>Air Quality {aqi}</p><p className={cardAirScoreTextStyle}>Good</p><p className={cardAirScoreIsGood}><TriangleAlert size={96}/></p></div>}

            {aqi > 50 && aqi <= 100 && <div className={cardAirScoreContainerStyle}><p className={cardAirScoreTextStyle}>Air Quality {aqi}</p><p className={cardAirScoreTextStyle}>Moderate</p><p className={cardAirScoreIsModerate}><TriangleAlert size={96}/></p></div>}

            {aqi > 100 && aqi <= 150 && <div className={cardAirScoreContainerStyle}><p className={cardAirScoreTextStyle}>Air Quality {aqi}</p><p className={cardAirScoreTextStyle}>Unhealthy for sensitive groups</p><p className={cardAirScoreIsUnhealthy1}><TriangleAlert size={96}/></p></div>}

            {aqi > 150 && aqi <= 200 && <div className={cardAirScoreContainerStyle}><p className={cardAirScoreTextStyle}>Air Quality {aqi}</p><p className={cardAirScoreTextStyle}>Unhealthy</p><p className={cardAirScoreIsUnhealthy2}><TriangleAlert size={96}/></p></div>}

            {aqi > 250 && aqi <= 300 && <div className={cardAirScoreContainerStyle}><p className={cardAirScoreTextStyle}>Air Quality {aqi}</p><p className={cardAirScoreTextStyle}>Very unhealthy</p><p className={cardAirScoreIsUnhealthy3}><TriangleAlert size={96}/></p></div>}

            {aqi > 300 && <div className={cardAirScoreContainerStyle}><p className={cardAirScoreTextStyle}>Air Quality {aqi}</p><p className={cardAirScoreTextStyle}>Hazardous</p><p className={cardAirScoreIsHazardous}><TriangleAlert size={96}/></p></div>}

            {/* {attributions && <p className="font-body text-sm text-textPrimaryVariant">{attributions}</p>} */}

            <div className={cardAirDataContainerStyle}>
                <div className={cardAirDataRowStyle}>
                    <p className={cardAirDataTitleStyle}>CO</p>
                    <p className={cardAirDataValueStyle}>{co ? co : "No data"}</p>
                    <p className={cardAirDataUnitStyle}>μg/m3</p>
                </div>

                <div className={cardAirDataRowStyle}>
                    <p className={cardAirDataTitleStyle}>NO2</p>
                    <p className={cardAirDataValueStyle}>{no2 ? no2 : "No data"}</p>
                    <p className={cardAirDataUnitStyle}>μg/m3</p>
                </div>

                <div className={cardAirDataRowStyle}>
                    <p className={cardAirDataTitleStyle}>O3</p>
                    <p className={cardAirDataValueStyle}>{o3 ? o3 : "No data"}</p>
                    <p className={cardAirDataUnitStyle}>μg/m3</p>
                </div>

                <div className={cardAirDataRowStyle}>
                    <p className={cardAirDataTitleStyle}>PM10</p>
                    <p className={cardAirDataValueStyle}>{pm10 ? pm10 : "No data"}</p>
                    <p className={cardAirDataUnitStyle}>μg/m3</p>
                </div>

                <div className={cardAirDataRowStyle}>
                    <p className={cardAirDataTitleStyle}>PM2.5</p>
                    <p className={cardAirDataValueStyle}>{pm25 ? pm25 : "No data"}</p>
                    <p className={cardAirDataUnitStyle}>μg/m3</p>
                </div>

                <div className={cardAirDataRowStyle}>
                    <p className={cardAirDataTitleStyle}>SO2</p>
                    <p className={cardAirDataValueStyle}>{so2 ? so2 : "No data"}</p>
                    <p className={cardAirDataUnitStyle}>μg/m3</p>
                </div>
            </div>
        </div>
    );
}
