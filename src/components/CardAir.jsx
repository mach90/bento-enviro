import { useAir } from "../context/airContext";
import { Smile, TriangleAlert, OctagonAlert, Biohazard } from "lucide-react";

const cardAirContainerStyle = "bg-third relative flex flex-col gap-4 p-6 justify-between items-start rounded-lg col-span-1 row-span-1 shadow-inner shadow-800 border-8 border-500";
const cardAirScoreContainerStyle = "text-800";
const cardAirScoreTextStyle = "font-body text-body text-800"

const cardAirScoreIsGood = "absolute top-1 right-1 text-green-600 opacity-30";
const cardAirScoreIsModerate = "absolute top-1 right-1 text-yellow-600 opacity-30";
const cardAirScoreIsUnhealthy1 = "absolute top-1 right-1 text-orange-600 opacity-30";
const cardAirScoreIsUnhealthy2 = "absolute top-1 right-1 text-red-600 opacity-30";
const cardAirScoreIsUnhealthy3 = "absolute top-1 right-1 text-purple-600 opacity-30";
const cardAirScoreIsHazardous = "absolute top-1 right-1 text-stone-600 opacity-30";

const cardAirDataContainerStyle = "flex flex-col z-10";
const cardAirDataRowStyle = "flex flex-row gap-2 items-center";
const cardAirDataTitleStyle = "font-body text-body text-600";
const cardAirDataNeutralValueStyle = "font-body text-body text-1000";
const cardAirDataBadValueStyle = "font-body text-body text-red-700";
const cardAirDataUnitStyle = "font-exp text-exp text-600";

export default function CardAir() {
    const { aqi, attributions, co, no2, o3, pm10, pm25, so2} = useAir();

    return (
        <div className={cardAirContainerStyle}>

            {!aqi && <p className="font-body text-body p-2 text-700">No data</p>}

            {aqi >= 0 && aqi <= 50 && <div className={cardAirScoreContainerStyle}><p className={cardAirScoreTextStyle}>Air Quality {aqi}</p><p className={cardAirScoreTextStyle}>Good</p><p className={cardAirScoreIsGood}><Smile size={96}/></p></div>}

            {aqi > 50 && aqi <= 100 && <div className={cardAirScoreContainerStyle}><p className={cardAirScoreTextStyle}>Air Quality {aqi}</p><p className={cardAirScoreTextStyle}>Moderate</p><p className={cardAirScoreIsModerate}><TriangleAlert size={96}/></p></div>}

            {aqi > 100 && aqi <= 150 && <div className={cardAirScoreContainerStyle}><p className={cardAirScoreTextStyle}>Air Quality {aqi}</p><p className={cardAirScoreTextStyle}>Unhealthy for sensitive groups</p><p className={cardAirScoreIsUnhealthy1}><TriangleAlert size={96}/></p></div>}

            {aqi > 150 && aqi <= 200 && <div className={cardAirScoreContainerStyle}><p className={cardAirScoreTextStyle}>Air Quality {aqi}</p><p className={cardAirScoreTextStyle}>Unhealthy</p><p className={cardAirScoreIsUnhealthy2}><OctagonAlert size={96}/></p></div>}

            {aqi > 200 && aqi <= 300 && <div className={cardAirScoreContainerStyle}><p className={cardAirScoreTextStyle}>Air Quality {aqi}</p><p className={cardAirScoreTextStyle}>Very unhealthy</p><p className={cardAirScoreIsUnhealthy3}><OctagonAlert size={96}/></p></div>}

            {aqi > 300 && <div className={cardAirScoreContainerStyle}><p className={cardAirScoreTextStyle}>Air Quality {aqi}</p><p className={cardAirScoreTextStyle}>Hazardous</p><p className={cardAirScoreIsHazardous}><Biohazard size={96}/></p></div>}

            {/* {attributions && <p className="font-body text-sm text-textPrimaryVariant">{attributions}</p>} */}

            <div className={cardAirDataContainerStyle}>
                <div className={cardAirDataRowStyle}>
                    <p className={cardAirDataTitleStyle}>CO</p>
                    {co ? co < 2.9 ? <p className={cardAirDataNeutralValueStyle}>{co}</p> : <p className={cardAirDataBadValueStyle}>{co}</p> : <p className={cardAirDataNeutralValueStyle}>...</p>}
                    <p className={cardAirDataUnitStyle}>μg/m3</p>
                </div>

                <div className={cardAirDataRowStyle}>
                    <p className={cardAirDataTitleStyle}>NO2</p>
                    {no2 ? no2 < 40 ? <p className={cardAirDataNeutralValueStyle}>{no2}</p> : <p className={cardAirDataBadValueStyle}>{no2}</p> : <p className={cardAirDataNeutralValueStyle}>...</p>}
                    <p className={cardAirDataUnitStyle}>μg/m3</p>
                </div>

                <div className={cardAirDataRowStyle}>
                    <p className={cardAirDataTitleStyle}>O3</p>
                    {o3 ? o3 < 50 ? <p className={cardAirDataNeutralValueStyle}>{o3}</p> : <p className={cardAirDataBadValueStyle}>{o3}</p> : <p className={cardAirDataNeutralValueStyle}>...</p>}
                    <p className={cardAirDataUnitStyle}>μg/m3</p>
                </div>

                <div className={cardAirDataRowStyle}>
                    <p className={cardAirDataTitleStyle}>PM10</p>
                    {pm10 ? pm10 < 20 ? <p className={cardAirDataNeutralValueStyle}>{pm10}</p> : <p className={cardAirDataBadValueStyle}>{pm10}</p> : <p className={cardAirDataNeutralValueStyle}>...</p>}
                    <p className={cardAirDataUnitStyle}>μg/m3</p>
                </div>

                <div className={cardAirDataRowStyle}>
                    <p className={cardAirDataTitleStyle}>PM2.5</p>
                    {pm25 ? pm25 < 10 ? <p className={cardAirDataNeutralValueStyle}>{pm25}</p> : <p className={cardAirDataBadValueStyle}>{pm25}</p> : <p className={cardAirDataNeutralValueStyle}>...</p>}
                    <p className={cardAirDataUnitStyle}>μg/m3</p>
                </div>

                <div className={cardAirDataRowStyle}>
                    <p className={cardAirDataTitleStyle}>SO2</p>
                    {so2 ? so2 < 20 ? <p className={cardAirDataNeutralValueStyle}>{so2}</p> : <p className={cardAirDataBadValueStyle}>{so2}</p> : <p className={cardAirDataNeutralValueStyle}>...</p>}
                    <p className={cardAirDataUnitStyle}>μg/m3</p>
                </div>
            </div>
        </div>
    );
}
