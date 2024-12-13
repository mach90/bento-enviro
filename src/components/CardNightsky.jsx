import { useState } from "react";
import { useNightsky } from "../context/nightskyContext";

const cardNightskyContainerStyle = "relative bg-stone-950 p-2 rounded-full flex flex-col gap-4 justify-center items-center";
const cardNightskyContainerInsideStyle = " flex flex-col justify-center items-center gap-2 rounded-full col-span-1 row-span-1 h-72 w-72 border-8 border-black";
const cardNightskyStarsStyle = "absolute rounded-full h-72 w-72 bg-[url(img/stars.jpg)] bg-cover bg-no-repeat border-8 border-black shadow-inner shadow-1000";
const cardNightskyStarsRedStyle = "absolute rounded-full w-72 h-72 bg-[url(img/stars.jpg)] bg-cover bg-no-repeat border-8 border-black shadow-inner shadow-cyan-950 brightness-200 saturate-[10] hue-rotate-[150deg]";
const cardNightskyDataContainerStyle = "flex flex-row gap-1 items-center z-10";
const cardNightskyDataTitleStyle = "font-exp text-exp text-300";
const cardNightskyDataValueStyle = "font-exp text-exp text-0";
const cardNightskyDataUnitStyle = "font-exp text-exp text-300";
const cardNightskyButtonStyle = "bg-first font-exp text-exp text-900 rounded-full w-max h-max p-2 hover:brightness-125 border border-black";

/* //////////////////////////////////////////////////
CARDNIGHTSKY COMPONENT
////////////////////////////////////////////////// */
export default function CardNightsky() {
    const [vision, setVision] = useState("day");
    const {sqm, totalBrightness, artificialBrightness, ratioBrightness} = useNightsky();

    function handleVision() {
        if(vision === "night") setVision("day");
        if(vision === "day") setVision("night");
    }

    let bortleClass;
    let bortleClassName;
    let bortleClassBackground;
    let bortleClassStars;

    switch (true) {
        case (sqm >= 21.99 && sqm <= 22.00):
            bortleClass = "1";
            bortleClassBackground = "bg-[#000010]"
            bortleClassName = "Excellent dark";
            bortleClassStars = "opacity-100";
            break;
        case (sqm >= 21.89 && sqm < 21.99):
            bortleClass = "2";
            bortleClassBackground = "bg-[#020224]";
            bortleClassName = "Dark";
            bortleClassStars = "opacity-95";
            break;
        case (sqm >= 21.69 && sqm < 21.89):
            bortleClass = "3";
            bortleClassBackground = "bg-[#0a0e36]";
            bortleClassName = "Rural";
            bortleClassStars = "opacity-85";
            break;
        case (sqm >= 20.49 && sqm < 21.69):
            bortleClass = "4";
            bortleClassBackground = "bg-[#16203f]";
            bortleClassName = "Suburban/Rural";
            bortleClassStars = "opacity-75";
            break;
        case (sqm >= 19.50 && sqm < 20.49):
            bortleClass = "5";
            bortleClassBackground = "bg-[#283a54]";
            bortleClassName = "Suburban";
            bortleClassStars = "opacity-65";
            break;
        case (sqm >= 18.94 && sqm < 19.50):
            bortleClass = "6";
            bortleClassBackground = "bg-[#455064]";
            bortleClassName = "Bright suburban";
            bortleClassStars = "opacity-50";
            break;
        case (sqm >= 18.38 && sqm < 18.94):
            bortleClass = "7";
            bortleClassBackground = "bg-[#5d6775]";
            bortleClassName = "City/Suburbian";
            bortleClassStars = "opacity-35";
            break;
        case (sqm < 18.38):
            bortleClass = "8/9";
            bortleClassBackground = "bg-[#6e6b5c]";
            bortleClassName = "City";
            bortleClassStars = "opacity-15";
            break;
        default:
            bortleClass = "Invalid Sky Mag";
            bortleClassBackground = "bg-[#000010]";
            bortleClassName = "Unknown";
            bortleClassStars = "opacity-100";
    }
    
    return (
        <div className={cardNightskyContainerStyle}>
            <div className={`${cardNightskyContainerInsideStyle} + ${bortleClassBackground}`}>                
                <div className={`${vision === "day" ? cardNightskyStarsStyle : cardNightskyStarsRedStyle} + ${bortleClassStars}`}></div>

                <div className={cardNightskyDataContainerStyle}>
                    <p className={cardNightskyDataValueStyle}>{sqm ? bortleClassName + " sky" : "???"}</p>
                </div>

                <div className={cardNightskyDataContainerStyle}>
                    <p className={cardNightskyDataTitleStyle}>Bortle class</p>
                    <p className={cardNightskyDataValueStyle}>{sqm ? bortleClass + " of 9" : "???"}</p>
                </div>

                <div className={cardNightskyDataContainerStyle}>
                    <p className={cardNightskyDataTitleStyle}>SQM</p>
                    <p className={cardNightskyDataValueStyle}>{sqm ? sqm : "??"}/22.00</p>
                    <p className={cardNightskyDataUnitStyle}>mag./arc sec2</p>
                </div>

                <div className={cardNightskyDataContainerStyle}>
                    <p className={cardNightskyDataTitleStyle}>Total bright.</p>
                    <p className={cardNightskyDataValueStyle}>{totalBrightness ? totalBrightness : "?"}</p>
                    <p className={cardNightskyDataUnitStyle}>mcd/m2</p>
                </div>

                <div className={cardNightskyDataContainerStyle}>
                    <p className={cardNightskyDataTitleStyle}>Artificial bright.</p>
                    <p className={cardNightskyDataValueStyle}>{artificialBrightness ? artificialBrightness / 1000 : "?"}</p>
                    <p className={cardNightskyDataUnitStyle}>mcd/m2</p>
                </div>
                
                <div className={cardNightskyDataContainerStyle}>
                    <p className={cardNightskyDataTitleStyle}>Natural bright.</p>
                    <p className={cardNightskyDataValueStyle}>0.17</p>
                    <p className={cardNightskyDataUnitStyle}>mcd/m2</p>
                </div>
                
                <div className={cardNightskyDataContainerStyle}>
                    <p className={cardNightskyDataTitleStyle}>Ratio</p>
                    <p className={cardNightskyDataValueStyle}>{ratioBrightness ? ratioBrightness : "?"}</p>
                </div>
            </div>
            <button className={cardNightskyButtonStyle} onClick={handleVision}>MODE</button>
        </div>
    );
}
