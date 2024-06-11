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
        <div className=" p-6 bg-[url('img/lightpollution.jpg')] bg-right-bottom rounded-3xl">
            <p className="font-custom2 text-orange-100">Sky Quality Meter (mag./arc sec2)</p>
            <p className="font-custom1 mb-2 text-lg text-orange-200">{sqm} / 22</p>
            <p className="font-custom2 text-orange-100">Total brightness (mcd/m²)</p>
            <p className="font-custom1 mb-2 text-lg text-orange-200">{totalBrightness}</p>
            <p className="font-custom2 text-orange-100">Artifificial brightness (mcd/m²)</p>
            <p className="font-custom1 mb-2 text-lg text-orange-200">{artificialBrightness / 1000}</p>
            <p className="font-custom2 text-orange-100 text-sm">Natural brightness (mcd/m²)</p>
            <p className="font-custom1 mb-2 text-sm text-orange-200">0.17</p>
            <p className="font-custom2 text-orange-100">Ratio (artificial/natural brightnesses)</p>
            <p className="font-custom1 mb-2 text-lg text-orange-200">{ratioBrightness}</p>
            <p className="font-custom2 text-orange-100">Bortle class</p>
            <p className="font-custom1 mb-2 text-lg text-orange-200">{getNumberCode(sqm)}</p>
            {/* <p>Elevation: higher = darker sky</p> */}
            {/* <p>
            - SQM Sky quality meter {sqm} (mag./arc sec2): higher = darker sky, max 22 
            - Total Brightness {totalBrightness} (mcd/m²): total light pollution from sky + artificial, lower = darker sky 
            - Artif. bright. {artificialBrightness} (μcd/m²): artificial light pollution, lower = darker sky
            - Ratio {ratioBrightness}: This ratio compares the artificial brightness to the natural sky brightness. It shows how much brighter the sky is due to artificial lighting. lower = darker sky
            - Bortle class: visibility of objects, lower = most objects visible
            - Elevation: higher = darker sky
            </p> */}
        </div>
    );
}


/*

The World Atlas dataset contains calculated artificial brightness in mcd/cm2 (ARTIFICIAL_BRIGHTNESS ). 
Assuming that the natural brightness of the night sky is 22.00 mag./arc sec2 or 0.171168465 mcd/m2, you can then calculate other properties:

Total brightness: ARTIFICIAL_BRIGHTNESS + 0.171168465 mcd/m2
Total brighness = 108000000×10^(−0.4SQM)
SQM: log10((Total brightness)/108000000)/-0.4
Ratio: ARTIFICIAL_BRIGHTNESS/0.171168465 mcd/m2
Bortle: SQM --> classification table




*/