import proj4 from "proj4";
import mgrs from "mgrs";

const cardCoordinatesContainerStyle = "relative h-full w-full bg-second rounded-xl p-4";
const cardCoordinatesScreenStyle = "flex flex-col gap-2 bg-first rounded-xl p-4 font-600 text-sm font-exp h-full w-full";
const cardCoordinatesGroupStyle = "flex flex-col border-b border-800 border-dashed w-max";
const cardCoordinatesTitleStyle = "font-exp text-exp text-700";
const cardCoordinatesDataStyle = "font-exp text-exp text-500";

function CardCoordinates({latitude, longitude}) {
    //latitude = 48.85826
    //longitude = 2.29450

    function toDDM(coord) {
        const absolute = Math.abs(coord);
        const degrees = Math.floor(absolute);
        const minutes = ((absolute - degrees) * 60).toFixed(3);
        const direction = coord >= 0 ? (coord === latitude ? "N" : "E") : coord === latitude ? "S" : "W";
        return `${degrees}°${minutes}'${direction}`;
    }

    function toDMS(coord) {
        const absolute = Math.abs(coord);
        const degrees = Math.floor(absolute);
        const minutesNotTruncated = (absolute - degrees) * 60;
        const minutes = Math.floor(minutesNotTruncated);
        const seconds = ((minutesNotTruncated - minutes) * 60).toFixed(2);
        const direction = coord >= 0 ? (coord === latitude ? "N" : "E") : coord === latitude ? "S" : "W";
        return `${degrees}°${minutes}'${seconds}\"${direction}`;
    }

    // Convert to UTM
    const wgs84Proj = "+proj=longlat +datum=WGS84 +no_defs";
    const utmProj = "+proj=utm +zone=31 +datum=WGS84 +units=m +no_defs";
    const [easting, northing] = proj4(wgs84Proj, utmProj, [longitude, latitude]);

    //Convert to MGRS
    const mgrsCoord = mgrs.forward([longitude, latitude]);

    return (
        <div className={cardCoordinatesContainerStyle}>
            <div className={cardCoordinatesScreenStyle}>
                <div className={cardCoordinatesGroupStyle}>
                    <h2 className={cardCoordinatesTitleStyle}>DD(WGS84)</h2>
                    <p className={cardCoordinatesDataStyle}>{latitude.toFixed(6)}, {longitude.toFixed(6)}</p>
                </div>

                <div className={cardCoordinatesGroupStyle}>
                    <h2 className={cardCoordinatesTitleStyle}>DDM(WGS84)</h2>
                    <p className={cardCoordinatesDataStyle}>{toDDM(latitude)}, {toDDM(longitude)}</p>
                </div>

                <div className={cardCoordinatesGroupStyle}>
                    <h2 className={cardCoordinatesTitleStyle}>DMS(WGS84)</h2>
                    <p className={cardCoordinatesDataStyle}>{toDMS(latitude)}, {toDMS(longitude)}</p>
                </div>

                <div className={cardCoordinatesGroupStyle}>
                    <h2 className={cardCoordinatesTitleStyle}>UTM(WGS84)</h2>
                    <p className={cardCoordinatesDataStyle}>E: {easting.toFixed(0)}, N: {northing.toFixed(0)}</p>
                </div>

                <div className={cardCoordinatesGroupStyle}>
                    <h2 className={cardCoordinatesTitleStyle}>MGRS(WGS84)</h2>
                    <p className={cardCoordinatesDataStyle}>{mgrsCoord}</p>
                </div>

              </div>

            <div className="absolute flex flex-row top-0 right-0 h-16 w-24 bg-second rounded-b-xl">
                <div className="w-[40%] h-full flex justify-center items-end py-4">
                    <div className="w-4 h-4 rounded-full bg-600">
                        <div className="animate-pulse w-4 h-4 rounded-full bg-fifth"></div>
                    </div>
                </div>
                <div className="w-[60%] bg-background h-full border-b-8 border-b-second flex justify-end">
                    <div className="h-full w-[80%] bg-first rounded-t-xl flex flex-col justify-around items-center">
                        <div className="h-0.5 w-[35%] bg-1000"></div>
                        <div className="h-0.5 w-[35%] bg-1000"></div>
                        <div className="h-0.5 w-[35%] bg-1000"></div>
                        <div className="h-0.5 w-[35%] bg-1000"></div>
                        <div className="h-0.5 w-[35%] bg-1000"></div>
                        <div className="h-0.5 w-[35%] bg-1000"></div>
                        <div className="h-0.5 w-[35%] bg-1000"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardCoordinates;
