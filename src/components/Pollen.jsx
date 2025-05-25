const cardPollenContainerStyle = "flex flex-col gap-0.5 w-full py-2 px-4";
const cardPollenTitleStyle = "font-body text-body text-800 mb-2 flex flex-row gap-2 justify-between items-center";
const cardPollenSectionTitleStyle = "font-body w-full py-0.25 px-1 bg-700 text-200";
const cardPollerDataGroupStyle = "w-full flex flex-row gap-3 items-baseline text-sm font-body text-1000";
const cardPollenSeasonTagStyle = "w-max bg-yellow-600/50 text-yellow-900 text-[10px] rounded-md px-1 uppercase font-medium";
const cardPollenCategoryStyle = "px-1 rounded-sm text-[11px] font-medium w-16 text-center";

export default function Pollen({forecast}) {
    const pollenStyles = [
        "bg-stone-100/50 text-stone-900",       
        "bg-green-200/50 text-green-900",       
        "bg-lime-200/50 text-lime-900",         
        "bg-yellow-200/50 text-yellow-900",     
        "bg-orange-200/50 text-orange-900",     
        "bg-red-200/50 text-red-900"            
    ];


    function getPollenLevelStyle(value) {
        return pollenStyles[value] || "bg-gray-200 text-gray-800";
    }

    return (
        <div className={cardPollenContainerStyle}>
            <h3 className={cardPollenTitleStyle}><span>Pollen Forecast</span> <span className="text-xs">{forecast.date?.day}/{forecast.date?.month}/{forecast.date?.year}</span></h3>
            <h3 className={cardPollenSectionTitleStyle}>Plants</h3>
            {forecast.plantInfo?.map((plant, i) => {
                return (
                    <div key={i} className={cardPollerDataGroupStyle}>
                        <p className={`${cardPollenCategoryStyle} ${getPollenLevelStyle(plant.indexInfo?.value)}`}>{plant?.indexInfo?.category}</p>
                        <p>{plant?.displayName} {plant?.inSeason && <span className={cardPollenSeasonTagStyle}>Season</span>}</p>
                    </div>
                )
            })}
            <h3 className={cardPollenSectionTitleStyle}>Pollens</h3>
            {forecast.pollenTypeInfo?.map((pollen, i) => {
                return (
                    <div key={i} className={cardPollerDataGroupStyle}>
                        <p className={`${cardPollenCategoryStyle} ${getPollenLevelStyle(pollen.indexInfo?.value)}`}>{pollen?.indexInfo?.category}</p>
                        <p>{pollen?.displayName} {pollen?.inSeason && <span className={cardPollenSeasonTagStyle}>Season</span>}</p>
                    </div>
                )
            })}
        </div>
    );
}