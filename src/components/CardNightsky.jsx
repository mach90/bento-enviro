import { useNightsky } from "../context/nightskyContext";

const cardNightskyContainerStyle = "relative p-4 flex flex-col justify-end gap-2 rounded-lg col-span-1 row-span-1 h-full w-full";
const cardNightskyStarsStyle = "absolute inset-0 rounded-lg h-full w-full bg-[url(img/stars.jpg)] bg-contain";
const cardNightskyDataContainerStyle = "flex flex-row gap-1 items-center z-10";
const cardNightskyDataTitleStyle = "font-body text-body text-300";
const cardNightskyDataValueStyle = "font-body text-body text-0";
const cardNightskyDataUnitStyle = "font-exp text-exp text-300";

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
            bortleClassStars = "opacity-95";
            break;
        case (sqm >= 21.89 && sqm < 21.99):
            bortleClass = "2";
            bortleClassBackground = "bg-[#020224]";
            bortleClassName = "Dark";
            bortleClassStars = "opacity-85";
            break;
        case (sqm >= 21.69 && sqm < 21.89):
            bortleClass = "3";
            bortleClassBackground = "bg-[#0a0e36]";
            bortleClassName = "Rural";
            bortleClassStars = "opacity-75";
            break;
        case (sqm >= 20.49 && sqm < 21.69):
            bortleClass = "4";
            bortleClassBackground = "bg-[#16203f]";
            bortleClassName = "Suburban/Rural";
            bortleClassStars = "opacity-65";
            break;
        case (sqm >= 19.50 && sqm < 20.49):
            bortleClass = "5";
            bortleClassBackground = "bg-[#283a54]";
            bortleClassName = "Suburban";
            bortleClassStars = "opacity-50";
            break;
        case (sqm >= 18.94 && sqm < 19.50):
            bortleClass = "6";
            bortleClassBackground = "bg-[#455064]";
            bortleClassName = "Bright suburban";
            bortleClassStars = "opacity-30";
            break;
        case (sqm >= 18.38 && sqm < 18.94):
            bortleClass = "7";
            bortleClassBackground = "bg-[#5d6775]";
            bortleClassName = "City/Suburbian";
            bortleClassStars = "opacity-15";
            break;
        case (sqm < 18.38):
            bortleClass = "8/9";
            bortleClassBackground = "bg-[#6e6b5c]";
            bortleClassName = "City";
            bortleClassStars = "opacity-5";
            break;
        default:
            bortleClass = "Invalid Sky Mag";
            bortleClassBackground = "bg-[#000010]";
            bortleClassName = "Unknown";
            bortleClassStars = "opacity-100";
    }
    

    return (
        <div className={`${cardNightskyContainerStyle} + ${bortleClassBackground}`}>
            <div className={`${cardNightskyStarsStyle} + ${bortleClassStars}`}></div>

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

            <div className={cardNightskyDataContainerStyle}>
                <p className={cardNightskyDataTitleStyle}>Bortle class</p>
                <p className={cardNightskyDataValueStyle}>{sqm ? bortleClass + " of 9" : "???"}</p>
            </div>

            <div className={cardNightskyDataContainerStyle}>
                <p className={cardNightskyDataValueStyle}>{sqm ? bortleClassName + " sky" : "???"}</p>
            </div>
        </div>
    );
}
