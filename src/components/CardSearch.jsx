import { useEffect, useState } from "react";
import { Search, MapPin, Locate } from "lucide-react";

function CardSearch({onGeolocation}) {
    const [cityQuery, setCityQuery] = useState(null);
    const [data, setData] = useState(null);
    const [cityQueryLat, setCityQueryLat] = useState(null);
    const [cityQueryLon, setCityQueryLon] = useState(null);
    
    /* //////////////////////////////////////////////////
    CITY QUERY INPUT SUBMIT
    ////////////////////////////////////////////////// */
    function handleSubmit(e) {
        e.preventDefault();
        const cityQueryInputFormatted = e.target.cityQueryInput.value;
        setCityQuery(cityQueryInputFormatted);
    }

    function handleSelectedCity(e, city) {
        setCityQueryLat(Number(city.lat));
        setCityQueryLon(Number(city.lon));
        setCityQuery(null);
        setData(null);
        const formRoot = document.querySelector('.formRoot')
        formRoot.cityQueryInput.value = "";
    }

    /* //////////////////////////////////////////////////
    FETCH TEST
    ////////////////////////////////////////////////// */
    useEffect(() => {
    const searchCity = async () => {
        if(cityQuery) try {
            const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${cityQuery}`);
            if (!response.ok) {
                throw new Error('❌❌❌ Thrown Error');
            }
            const data = await response.json();
            setData(data);
            console.log(data)

        } catch (error) {
            console.log(`❌❌❌❌❌❌ ${error}`);
        }
    };

    searchCity();
    }, [cityQuery]);

    return (
        <div className="p-4 border border-colorBorder col-span-full xl:col-span-3 flex flex-col md:flex-row gap-4 w-full bg-gradient-to-br from-colorAccent1t to-transparent">

            <div className="relative flex flex-row md:flex-row gap-3 items-center h-full w-full">

                <button 
                    className="bg-colorAccent2 hover:bg-colorAccent2hover rounded-xl flex flex-row gap-1 p-2 justify-center items-center text-custom1 text-sm text-colorTextLight"
                    onClick={onGeolocation}    
                ><Locate /></button>

                <form onSubmit={(e) => handleSubmit(e)} className="flex flex-row gap-2 formRoot w-full">
                    <input 
                        id="cityQueryInput" 
                        type="text" 
                        placeholder="Search for a city_" 
                        className="bg-colorBackground border border-colorBorder p-2 text-custom1 text-sm justify-start items-center text-colorTextMedium w-full">
                    </input>
                    <button 
                        id="submitForm" 
                        type="submit" 
                        className="bg-colorAccent1 hover:bg-colorAccent1hover rounded-xl flex flex-row p-2 justify-center items-center text-custom1 text-sm text-colorTextLight">
                        <Search />
                    </button>
                </form>

                {data && cityQuery && <div className="absolute top-0 left-0 bg-colorAccent1 text-colorTextLight border border-colorBorder p-2 flex flex-col gap-2 text-xs w-full mt-16">
                    {data.map(city => 
                        <button key={city.place_id} className="p-1 bg-gradient-to-r from-colorBackground to-transparent flex flex-row gap-2 items-center" onClick={(e) => handleSelectedCity(e, city)}>
                            <MapPin /> {city.display_name}
                        </button>
                    )}
                </div>}
                
            </div>
        </div>
    );
}

export default CardSearch;