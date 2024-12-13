import { useState } from "react";
import { useNightsky } from "../context/nightskyContext";

const cardNightskyContainerStyle = "aspect-square w-full bg-[url(img/lens.png)] bg-no-repeat bg-center bg-cover p-2 flex flex-col rounded-full justify-center items-center border-8 border-stone-950 shadow-inner shadow-black";
const cardNightskyLensBlockStyle = "aspect-square max-w-full min-w-[80%] bg-[url(img/stars.jpg)] flex flex-col justify-center items-center gap-2 rounded-full col-span-1 row-span-1 aspect-square border-8 border-stone-950 shadow-inner shadow-stone-200";
const cardNightskyLensStyle = "h-full w-full rounded-full flex flex-col justify-center items-center";
const cardNightskyDataContainerStyle = "flex flex-row gap-1 items-center mix-blend-screen";
const cardNightskyDataTitleStyle = "font-exp text-exp text-red-600 w-max";
const cardNightskyDataValueStyle = "font-exp text-exp text-red-400";
const cardNightskyDataUnitStyle = "font-exp text-exp text-red-600";

/* //////////////////////////////////////////////////
CARDNIGHTSKY COMPONENT
////////////////////////////////////////////////// */
export default function CardNightsky() {
    const {sqm, totalBrightness, artificialBrightness, ratioBrightness} = useNightsky();

    let bortleClass;
    let bortleClassName;
    let bortleClassBackground;
    let bortleClassStars;

    switch (true) {
        case (sqm >= 21.99 && sqm <= 22.00):
            bortleClass = "1";
            bortleClassBackground = "bg-[#000010]"
            bortleClassName = "Excellent dark";
            bortleClassStars = "bg-opacity-0";
            break;
        case (sqm >= 21.89 && sqm < 21.99):
            bortleClass = "2";
            bortleClassBackground = "bg-[#020224]";
            bortleClassName = "Dark";
            bortleClassStars = "bg-opacity-5";
            break;
        case (sqm >= 21.69 && sqm < 21.89):
            bortleClass = "3";
            bortleClassBackground = "bg-[#0a0e36]";
            bortleClassName = "Rural";
            bortleClassStars = "bg-opacity-10";
            break;
        case (sqm >= 20.49 && sqm < 21.69):
            bortleClass = "4";
            bortleClassBackground = "bg-[#16203f]";
            bortleClassName = "Suburban/Rural";
            bortleClassStars = "bg-opacity-25";
            break;
        case (sqm >= 19.50 && sqm < 20.49):
            bortleClass = "5";
            bortleClassBackground = "bg-[#283a54]";
            bortleClassName = "Suburban";
            bortleClassStars = "bg-opacity-35";
            break;
        case (sqm >= 18.94 && sqm < 19.50):
            bortleClass = "6";
            bortleClassBackground = "bg-[#455064]";
            bortleClassName = "Bright suburban";
            bortleClassStars = "bg-opacity-50";
            break;
        case (sqm >= 18.38 && sqm < 18.94):
            bortleClass = "7";
            bortleClassBackground = "bg-[#5d6775]";
            bortleClassName = "City/Suburbian";
            bortleClassStars = "bg-opacity-75";
            break;
        case (sqm < 18.38):
            bortleClass = "8/9";
            bortleClassBackground = "bg-[#6e6b5c]";
            bortleClassName = "City";
            bortleClassStars = "bg-opacity-95";
            break;
        default:
            bortleClass = "Invalid Sky Mag";
            bortleClassBackground = "bg-[#000010]";
            bortleClassName = "Unknown";
            bortleClassStars = "bg-opacity-0";
    }
    
    return (
        <div className={cardNightskyContainerStyle}>
            <div className={`${cardNightskyLensBlockStyle}`}>                
                <div className={`${cardNightskyLensStyle} + ${bortleClassBackground} + ${bortleClassStars}`}>
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
            </div>
        </div>
    );
}
