/* //////////////////////////////////////////////////
IMPORTS
////////////////////////////////////////////////// */
import { WeatherProvider } from "./context/weatherContext";
import { ForecastProvider } from "./context/forecastContext";
import Container from "./components/Container";
// import Card from "./components/Card";
import CardWeather from "./components/CardWeather";
import CardForecast from "./components/CardForecast";
import CardSatellite from "./components/CardSatellite";
import CardAir from "./components/CardAir";
import CardAurora from "./components/CardAurora";
import CardWebcam from "./components/CardWebcam";
import CardParticles from "./components/CardParticles";
import CardNightsky from "./components/CardNightsky";
import CardMoon from "./components/CardMoon";
import CardSun from "./components/CardSun";
import CardAllergy from "./components/CardAllergy";
import { AirProvider } from "./context/airContext";
import { AuroraProvider } from "./context/auroraContext";
import { NightskyProvider } from "./context/nightskyContext";

/* //////////////////////////////////////////////////
APP COMPONENT
////////////////////////////////////////////////// */
export default function App() {

  /* //////////////////////////////////////////////////
  JSX
  ////////////////////////////////////////////////// */
  return (
    <Container>
        <WeatherProvider>
          <CardWeather />
          <CardSun />
        </WeatherProvider>
        <ForecastProvider>
          <CardForecast />
        </ForecastProvider>
        <CardSatellite />
        <AirProvider>
          <CardAir />
          <CardParticles />
        </AirProvider>
        <AuroraProvider>
          <CardAurora />
        </AuroraProvider>
          <CardWebcam />
        <NightskyProvider>
          <CardNightsky />
        </NightskyProvider>
          <CardMoon />
          <CardAllergy />
      </Container>
  )
}

