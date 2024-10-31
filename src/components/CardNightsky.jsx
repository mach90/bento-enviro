import { useNightsky } from "../context/nightskyContext";

const cardNightskyContainerStyle = "p-4 flex flex-col justify-end gap-2 bg-cardFifth rounded-lg shadow-md col-span-1 row-span-1";
const cardNightskyDataContainerStyle = "flex flex-row gap-1 items-center";
const cardNightskyDataTitleStyle = "font-heading text-textFifthVariant text-sm";
const cardNightskyDataValueStyle = "font-heading text-textFifth text-sm";
const cardNightskyDataUnitStyle = "font-heading text-xs text-textFifthVariant";

/* //////////////////////////////////////////////////
CARDNIGHTSKY COMPONENT
////////////////////////////////////////////////// */
export default function CardNightsky() {  
    const {sqm, totalBrightness, artificialBrightness, ratioBrightness} = useNightsky();

    function getNumberCode(skyMag) {
        switch (true) {
            case (skyMag >= 21.99 && skyMag <= 22.00):
                return "1";
            case (skyMag >= 21.89 && skyMag < 21.99):
                return "2";
            case (skyMag >= 21.69 && skyMag < 21.89):
                return "3";
            case (skyMag >= 20.49 && skyMag < 21.69):
                return "4";
            case (skyMag >= 19.50 && skyMag < 20.49):
                return "5";
            case (skyMag >= 18.94 && skyMag < 19.50):
                return "6";
            case (skyMag >= 18.38 && skyMag < 18.94):
                return "7";
            case (skyMag < 18.38):
                return "8/9";
            default:
                return "Invalid Sky Mag";
        }
    }

    return (
        <div className={cardNightskyContainerStyle}>
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
                <p className={cardNightskyDataValueStyle}>{sqm ? getNumberCode(sqm) : "???"}</p>
            </div>
        </div>
    );
}
