/* ////////////////////////////////////////////////////////////////////////////////////////////////////
IMPORTS
//////////////////////////////////////////////////////////////////////////////////////////////////// */
import { useEffect, useState } from "react";

import { WeatherProvider } from "./context/weatherContext";
import { ForecastProvider } from "./context/forecastContext";
import { AirProvider } from "./context/airContext";
import { AuroraProvider } from "./context/auroraContext";
import { NightskyProvider } from "./context/nightskyContext";
// import { MoonProvider } from "./context/moonContext";
import { WebcamProvider } from "./context/webcamContext";
import { SunProvider } from "./context/sunContext";

import Container from "./components/Container";
import Questions from "./components/Questions";

import CardLogo from "./components/CardLogo";
import CardWeather from "./components/CardWeather";
import CardForecast from "./components/CardForecast";
import CardSatellite from "./components/CardSatellite";
import CardAir from "./components/CardAir";
import CardAurora from "./components/CardAurora";
import CardWebcam from "./components/CardWebcam";
import CardNightsky from "./components/CardNightsky";
// import CardMoon from "./components/CardMoon";
import CardSun from "./components/CardSun";
import CardWind from "./components/CardWind";
import CardRain from "./components/CardRain";
import CardAllergy from "./components/CardAllergy";

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
APP COMPONENT
//////////////////////////////////////////////////////////////////////////////////////////////////// */
export default function App() {

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
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

  }, [latitude, longitude]);

  /* //////////////////////////////////////////////////
  JSX
  ////////////////////////////////////////////////// */
  return (
    <Container>

        <CardLogo/>

        <WeatherProvider latitude={latitude} longitude={longitude}>
          <CardWeather />
          <CardWind />
        </WeatherProvider>

        <CardSatellite />

        <WeatherProvider latitude={latitude} longitude={longitude}>
          <CardRain />
        </WeatherProvider>

        <SunProvider latitude={latitude} longitude={longitude}>
          <CardSun/>
        </SunProvider>

        <WebcamProvider latitude={latitude} longitude={longitude}>
          <CardWebcam />
        </WebcamProvider>

        <ForecastProvider latitude={latitude} longitude={longitude}>
          <CardForecast />
        </ForecastProvider>

        {/* <MoonProvider latitude={latitude} longitude={longitude}>
          <CardMoon />
        </MoonProvider> */}


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
        
        <Questions />

      </Container>
  )
}

