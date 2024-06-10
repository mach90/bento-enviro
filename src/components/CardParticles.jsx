import { useAir } from "../context/airContext";

export default function CardParticles() {
    const {co, no2, o3, pm10, pm25, so2} = useAir();

    return (
        <div className="bg-yellow-500">
            <p>Carbon monoxide (co): {co ? co : "No data"}</p>
            <p>Nitrogen dioxide (no2): {no2 ? no2 : "No data"}</p>
            <p>Ozone (o3): {o3 ? o3 : "No data"}</p>
            <p>Particles 10um (10pm): {pm10 ? pm10 : "No data"}</p>
            <p>Particles 2.5um (25pm): {pm25 ? pm25 : "No data"}</p>
            <p>Sulfure dioxide (so2): {so2 ? so2 : "No data"}</p>
            {/* <p>High temperature influences the rate of chemical reactions in the atmosphere, can accelerate the formation of ozone and other pollutants.</p>
            <p>Higher dew points indicate higher humidity, which can affect the dispersion and concentration of pollutants.</p>
            <p>Atmospheric pressure influences weather patterns and the movement of air masses. High-pressure systems can lead to stagnant air conditions, trapping pollutants close to the ground and leading to higher pollution levels.</p>
            <p>Humidity affects the chemical reactions in the atmosphere, such as the formation of secondary pollutants like ozone and sulfate aerosols.</p> */}
        </div>
    );
}
