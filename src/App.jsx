/* ████████████████████████████████████████████████████████████████████████████████████████████████████
IMPORTS
████████████████████████████████████████████████████████████████████████████████████████████████████ */
/* //////////////////////////////////////////////////
DEPENDENCIES
////////////////////////////////////////////////// */
import { useEffect, useRef, useState } from "react";
/* //////////////////////////////////////////////////
STYLES
////////////////////////////////////////////////// */
import './index.css';
const searchPositionCardStyle = "p-2 flex flex-col md:flex-row gap-4 w-full h-full bg-second z-10 col-span-1 row-span-1 md:col-span-2 lg:col-span-4 xl:col-span-3";

const searchPositionContainerStyle = "relative flex flex-row md:flex-row gap-2 items-center h-full w-full";

const geolocationButtonStyle = "bg-1000 hover:brightness-125 flex flex-row gap-1 p-2 justify-center items-center text-500 h-full";

const searchPositionFormStyle = "flex flex-row gap-2 formRoot w-full h-full";
const searchBarStyle = "bg-second border-2 border-1000 p-2 justify-start items-center text-100 font-body text-body placeholder-1000 w-full h-full";
const searchButtonStyle = "bg-1000 hover:brightness-125 flex flex-row p-2 justify-center items-center text-500 h-full";

const searchListContainerStyle = "absolute top-0 left-0 bg-first p-2 flex flex-col gap-2 font-exp text-exp w-full h-max mt-16 border-2 border-300";
const searchListItemStyle = "p-1 text-300 hover:bg-fourth hover:text-1000 flex flex-row gap-2 items-center";
/* //////////////////////////////////////////////////
CONTEXT
////////////////////////////////////////////////// */
import { WeatherProvider } from "./context/weatherContext";
import { ForecastProvider } from "./context/forecastContext";
import { AirProvider } from "./context/airContext";
import { AuroraProvider } from "./context/auroraContext";
import { NightskyProvider } from "./context/nightskyContext";
import { MoonProvider } from "./context/moonContext";
import { WebcamProvider } from "./context/webcamContext";
import { SunProvider } from "./context/sunContext";
/* //////////////////////////////////////////////////
COMPONENTS
////////////////////////////////////////////////// */
import Container from "./components/Container";
import CardLogo from "./components/CardLogo";
import CardLocation from "./components/CardLocation";
import CardWeather from "./components/CardWeather";
import CardForecast from "./components/CardForecast";
import CardSatellite from "./components/CardSatellite";
import CardAir from "./components/CardAir";
import CardAurora from "./components/CardAurora";
import CardWebcam from "./components/CardWebcam";
import CardNightsky from "./components/CardNightsky";
import CardMoon from "./components/CardMoon";
import CardSun from "./components/CardSun";
import CardWind from "./components/CardWind";
import CardRain from "./components/CardRain";
import CardAllergy from "./components/CardAllergy";
import CardSources from "./components/CardSources";
import CardFAQ from "./components/CardFAQ";
/* //////////////////////////////////////////////////
ICONS
////////////////////////////////////////////////// */
import { Search, MapPin, Locate } from "lucide-react";

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
APP COMPONENT
████████████████████████████████████████████████████████████████████████████████████████████████████ */
export default function App() {
  /* //////////////////////////////////////////////////
  STATE
  ////////////////////////////////////////////////// */
  const [cityQuery, setCityQuery] = useState(null);
  const [data, setData] = useState(null);
  const [latitude, setLatitude] = useState(() => {
    const storedLatitude = localStorage.getItem('latitude');
    return storedLatitude ? JSON.parse(storedLatitude) : 43.6;
  });
  const [longitude, setLongitude] = useState(() => {
    const storedLongitude = localStorage.getItem('longitude');
    return storedLongitude ? JSON.parse(storedLongitude) : 1.44;
  });
  const [isFocused, setIsFocused] = useState(false);
  const [unit, setUnit] = useState("metric");

  /* //////////////////////////////////////////////////
  REF
  ////////////////////////////////////////////////// */
  const inputRef = useRef(null);

  /* //////////////////////////////////////////////////
  GEOLOCATION API
  ////////////////////////////////////////////////// */
  function getGeolocation(){
    if (navigator.geolocation) { //if browser has geolocation feature
      navigator.geolocation.getCurrentPosition(
          function(position) {
              const {latitude} = position.coords;
              const {longitude} = position.coords;
              setLatitude(latitude);
              setLongitude(longitude);
          },
          function() {
              alert("Could not get your position");
          }
      );
    }
  }

  /* //////////////////////////////////////////////////
  CITY QUERY INPUT SUBMIT
  ////////////////////////////////////////////////// */
  function handleSubmit(e) {
    e.preventDefault();
    setCityQuery(e.target.cityQueryInput.value);
    inputRef.current.focus();
  }

  function handleSelectedCity(city) {
    setLatitude(Number(city.lat));
    setLongitude(Number(city.lon));
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
      } catch (error) {
          console.error(`❌❌❌❌❌❌ ${error}`);
      }
    };

    searchCity();
  }, [cityQuery]);

  /* //////////////////////////////////////////////////
  LOCAL STORAGE
  ////////////////////////////////////////////////// */
  useEffect(() => {
    localStorage.setItem('latitude', JSON.stringify(latitude));
  }, [latitude]);

  useEffect(()=> {
    localStorage.setItem('longitude', JSON.stringify(longitude));
  }, [longitude]);

  /* //////////////////////////////////////////////////
  UNIT
  ////////////////////////////////////////////////// */
  function handleUnit(unit) {
    setUnit(unit);
  }
  /* ////////////////////////////////////////////////////////////////////////////////////////////////////
  JSX
  //////////////////////////////////////////////////////////////////////////////////////////////////// */
  return (
    <Container>

      <CardLogo/>

      <WeatherProvider latitude={latitude} longitude={longitude}>
        <CardLocation />
      </WeatherProvider>

      <div className={searchPositionCardStyle}>
        <div className={searchPositionContainerStyle}>

        <button className={geolocationButtonStyle} onClick={getGeolocation}><Locate /></button>

        <form onSubmit={(e) => handleSubmit(e)} className={searchPositionFormStyle}>
          <input id="cityQueryInput" type="text" placeholder="Search for a city or an address_" onFocus={() => setIsFocused(true)}onBlur={() => setIsFocused(false)} ref={inputRef} className={searchBarStyle}></input>
          <button id="submitForm" type="submit" className={searchButtonStyle}><Search /></button>
        </form>

        {data && cityQuery && <div className={searchListContainerStyle}>
        {data.map(city => 
        <button key={city.place_id} className={searchListItemStyle} onClick={() => handleSelectedCity(city)}>
        <MapPin /> {city.display_name}
        </button>
        )}
        </div>}
        </div>
      </div>

      <WeatherProvider latitude={latitude} longitude={longitude}>
        <CardWeather unit={unit} handleUnit={handleUnit} />
      </WeatherProvider>

      <ForecastProvider latitude={latitude} longitude={longitude}>
        <CardForecast unit={unit} />
      </ForecastProvider>

      <WeatherProvider latitude={latitude} longitude={longitude}>
        <CardWind unit={unit} />
      </WeatherProvider>

      <WeatherProvider latitude={latitude} longitude={longitude}>
        <CardRain unit={unit} />
      </WeatherProvider>

      <SunProvider latitude={latitude} longitude={longitude}>
        <CardSun/>
      </SunProvider>

      <WebcamProvider latitude={latitude} longitude={longitude}>
        <CardWebcam />
      </WebcamProvider>

      <CardSatellite latitude={latitude} longitude={longitude}/>

      <MoonProvider latitude={latitude} longitude={longitude}>
        <CardMoon />
      </MoonProvider>

      <NightskyProvider latitude={latitude} longitude={longitude}>
        <CardNightsky />
      </NightskyProvider>

      <AuroraProvider latitude={latitude} longitude={longitude}>
        <CardAurora latitude={latitude} />
      </AuroraProvider>

      <AirProvider latitude={latitude} longitude={longitude}>
        <CardAir />
      </AirProvider>

      <CardAllergy />
      
      <CardSources />

      <CardFAQ />

    </Container>
  )
}

