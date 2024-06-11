/* //////////////////////////////////////////////////
IMPORTS
////////////////////////////////////////////////// */
import { WeatherProvider } from "./context/weatherContext";
import { ForecastProvider } from "./context/forecastContext";
import { AirProvider } from "./context/airContext";
import { AuroraProvider } from "./context/auroraContext";
import { NightskyProvider } from "./context/nightskyContext";
import { MoonProvider } from "./context/moonContext";
import { WebcamProvider } from "./context/webcamContext";

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
import CardMoon from "./components/CardMoon";
import CardSun from "./components/CardSun";
// import CardAllergy from "./components/CardAllergy";
import CardWind from "./components/CardWind";
import CardRain from "./components/CardRain";

/* //////////////////////////////////////////////////
APP COMPONENT
////////////////////////////////////////////////// */
export default function App() {

  /* //////////////////////////////////////////////////
  JSX
  ////////////////////////////////////////////////// */
  return (
    <Container>

        <CardLogo/>

        <WeatherProvider>
          <CardWeather />
        </WeatherProvider>

        <WeatherProvider>
          <CardWind />
        </WeatherProvider>

        <CardSatellite />

        <WeatherProvider>
          <CardRain />
        </WeatherProvider>

        <WeatherProvider>
          <CardSun />
        </WeatherProvider>

        <WebcamProvider>
          <CardWebcam />
        </WebcamProvider>

        <ForecastProvider>
          <CardForecast />
        </ForecastProvider>

        <MoonProvider>
          <CardMoon />
        </MoonProvider>

        <NightskyProvider>
          <CardNightsky />
        </NightskyProvider>

        <AuroraProvider>
          <CardAurora />
        </AuroraProvider>

        <AirProvider>
          <CardAir />
        </AirProvider>

        {/* <CardAllergy /> */}
        
        <Questions />

      </Container>
  )
}

