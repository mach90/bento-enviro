import { useNightsky } from "../context/nightskyContext";

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
        <div className="p-4 flex flex-col justify-end gap-2 border border-colorBorder bg-gradient-to-bl from-colorAccent3t via-colorAccent3t to-colorAccent2t">
            <div className="flex flex-row gap-1 items-center">
                <p className="font-custom1 text-colorTextMedium text-sm">SQM</p>
                <p className="font-custom1 text-colorTextLight text-sm">{sqm ? sqm : "??"}/22.00</p>
                <p className="font-custom1 text-xs text-colorTextMedium">mag./arc sec2</p>
            </div>

            <div className="flex flex-row gap-1 items-center">
                <p className="font-custom1 text-colorTextMedium text-sm">Total bright.</p>
                <p className="font-custom1 text-colorTextLight text-sm">{totalBrightness ? totalBrightness : "?"}</p>
                <p className="font-custom1 text-xs text-colorTextMedium">mcd/m2</p>
            </div>

            <div className="flex flex-row gap-1 items-center">
                <p className="font-custom1 text-colorTextMedium text-sm">Artificial bright.</p>
                <p className="font-custom1 text-colorTextLight text-sm">{artificialBrightness ? artificialBrightness / 1000 : "?"}</p>
                <p className="font-custom1 text-xs text-colorTextMedium">mcd/m2</p>
            </div>
            
            <div className="flex flex-row gap-1 items-center">
                <p className="font-custom1 text-colorTextMedium text-sm">Natural bright.</p>
                <p className="font-custom1 text-colorTextLight text-sm">0.17</p>
                <p className="font-custom1 text-xs text-colorTextMedium">mcd/m2</p>
            </div>
            
            <div className="flex flex-row gap-1 items-center">
                <p className="font-custom1 text-colorTextMedium text-sm">Ratio</p>
                <p className="font-custom1 text-colorTextLight text-sm">{ratioBrightness ? ratioBrightness : "?"}</p>
            </div>

            <div className="flex flex-row gap-1 items-center">
                <p className="font-custom1 text-colorTextMedium text-sm">Bortle class</p>
                <p className="font-custom1 text-colorTextLight text-sm">{sqm ? getNumberCode(sqm) : "???"}</p>
            </div>
        </div>
    );
}
