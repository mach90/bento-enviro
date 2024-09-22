/* ////////////////////////////////////////////////////////////////////////////////////////////////////
IMPORTS
//////////////////////////////////////////////////////////////////////////////////////////////////// */
import { useEffect, useRef, useState } from "react";

import { WeatherProvider } from "./context/weatherContext";
import { ForecastProvider } from "./context/forecastContext";
import { AirProvider } from "./context/airContext";
import { AuroraProvider } from "./context/auroraContext";
import { NightskyProvider } from "./context/nightskyContext";
import { MoonProvider } from "./context/moonContext";
import { WebcamProvider } from "./context/webcamContext";
import { SunProvider } from "./context/sunContext";

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

import { Search, MapPin, Locate } from "lucide-react";

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
APP COMPONENT
//////////////////////////////////////////////////////////////////////////////////////////////////// */
export default function App() {
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
  const inputRef = useRef(null);


  /* //////////////////////////////////////////////////
  GET GEOLOCATION
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
  JSX
  ////////////////////////////////////////////////// */
  return (
    <Container>

      <CardLogo/>

      <WeatherProvider latitude={latitude} longitude={longitude}>
        <CardLocation />
      </WeatherProvider>

      <div className="p-4 border border-colorBorder col-span-full xl:col-span-3 flex flex-col md:flex-row gap-4 w-full bg-gradient-to-br from-colorAccent1t to-transparent z-10">
        <div className="relative flex flex-row md:flex-row gap-3 items-center h-full w-full">

        <button className="bg-colorAccent2 hover:bg-colorAccent2hover rounded-xl flex flex-row gap-1 p-2 justify-center items-center text-custom1 text-sm text-colorTextLight" onClick={getGeolocation}><Locate /></button>

        <form onSubmit={(e) => handleSubmit(e)} className="flex flex-row gap-2 formRoot w-full">
          <input id="cityQueryInput" type="text" placeholder="Search for a city or an address_" onFocus={() => setIsFocused(true)}onBlur={() => setIsFocused(false)} ref={inputRef} className="bg-colorBackground border border-colorBorder p-2 text-custom1 text-sm justify-start items-center text-colorTextMedium w-full"></input>
          <button id="submitForm" type="submit" className="bg-colorAccent1 hover:bg-colorAccent1hover rounded-xl flex flex-row p-2 justify-center items-center text-custom1 text-sm text-colorTextLight"><Search /></button>
        </form>

        {data && cityQuery && <div className="absolute top-0 left-0 bg-colorAccent1 text-colorTextLight border border-colorBorder p-2 flex flex-col gap-2 text-xs w-full mt-16">
        {data.map(city => 
        <button key={city.place_id} className="p-1 bg-gradient-to-r from-colorBackground to-transparent flex flex-row gap-2 items-center" onClick={() => handleSelectedCity(city)}>
        <MapPin /> {city.display_name}
        </button>
        )}
        </div>}
        </div>
      </div>

      <WeatherProvider latitude={latitude} longitude={longitude}>
        <CardWeather />
      </WeatherProvider>

      <WeatherProvider latitude={latitude} longitude={longitude}>
        <CardWind />
      </WeatherProvider>

      <WeatherProvider latitude={latitude} longitude={longitude}>
        <CardRain />
      </WeatherProvider>

      <SunProvider latitude={latitude} longitude={longitude}>
        <CardSun/>
      </SunProvider>

      <CardSatellite />

      <WebcamProvider latitude={latitude} longitude={longitude}>
        <CardWebcam />
      </WebcamProvider>

      <ForecastProvider latitude={latitude} longitude={longitude}>
        <CardForecast />
      </ForecastProvider>

      <MoonProvider latitude={latitude} longitude={longitude}>
        <CardMoon />
      </MoonProvider>

      <NightskyProvider latitude={latitude} longitude={longitude}>
        <CardNightsky />
      </NightskyProvider>

      <AuroraProvider latitude={latitude} longitude={longitude}>
        <CardAurora />
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

