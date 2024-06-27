import { useNightsky } from "../context/nightskyContext";

/* //////////////////////////////////////////////////
CARDNIGHTSKY COMPONENT
////////////////////////////////////////////////// */
export default function CardNightsky() {  
    const {sqm, totalBrightness, artificialBrightness, ratioBrightness} = useNightsky();

    function getNumberCode(skyMag) {
        switch (true) {
            case (skyMag >= 21.99 && skyMag <= 22.00):
                return "1 (excellent dark sky)";
            case (skyMag >= 21.89 && skyMag < 21.99):
                return "2 (average dark sky)";
            case (skyMag >= 21.69 && skyMag < 21.89):
                return "3 (rural sky)";
            case (skyMag >= 20.49 && skyMag < 21.69):
                return "4 (rural/suburban transition)";
            case (skyMag >= 19.50 && skyMag < 20.49):
                return "5 (suburban)";
            case (skyMag >= 18.94 && skyMag < 19.50):
                return "6 (bright suburban)";
            case (skyMag >= 18.38 && skyMag < 18.94):
                return "7 (suburban/urban transition)";
            case (skyMag < 18.38):
                return "8/9 (city/inner city sky)";
            default:
                return "Invalid Sky Mag";
        }
    }

    return (
        <div className=" p-6 bg-[url('img/lightpollution.jpg')] bg-right-bottom rounded-3xl shadow-md">
            <p className="font-custom2 text-colorMedium">Sky Quality Meter (mag./arc sec2)</p>
            <p className="font-custom1 mb-2 text-lg text-colorBrand">{sqm ? sqm : "??"} / 22.00</p>

            <p className="font-custom2 text-colorMedium">Total brightness (mcd/m²)</p>
            <p className="font-custom1 mb-2 text-lg text-colorBrand">{totalBrightness ? totalBrightness : "?"}</p>

            <p className="font-custom2 text-colorMedium">Artifificial brightness (mcd/m²)</p>
            <p className="font-custom1 mb-2 text-lg text-colorBrand">{artificialBrightness ? artificialBrightness / 1000 : "?"}</p>

            <p className="font-custom2 text-colorMedium text-sm">Natural brightness (mcd/m²)</p>
            <p className="font-custom1 mb-2 text-sm text-colorBrand">0.17</p>

            <p className="font-custom2 text-colorMedium">Ratio (artificial/natural brightnesses)</p>
            <p className="font-custom1 mb-2 text-lg text-colorBrand">{ratioBrightness ? ratioBrightness : "?"}</p>

            <p className="font-custom2 text-colorMedium">Bortle class</p>
            <p className="font-custom1 mb-2 text-lg text-colorBrand">{sqm ? getNumberCode(sqm) : "???"}</p>
        </div>
    );
}
