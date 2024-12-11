import { SquareArrowOutDownRight } from "lucide-react";

const cardSourcesContainerStyle = "bg-sixth relative flex flex-col p-4 justify-end items-end rounded-lg col-span-1 row-span-1";
const cardSourcesTitleStyle = "font-heading text-heading text-500 mb-2";
const cardSourcesLinkStyle = "font-exp text-exp text-500 hover:text-300";
const cardSourcesIconStyle = "absolute top-2 left-2 text-1000";

export default function CardSources() {
    return (
        <>
            <div className={cardSourcesContainerStyle}>
                <p className={cardSourcesTitleStyle}>APIs, Credits</p>
                <a href="https://openweathermap.org/" target="_blank" className={cardSourcesLinkStyle}>
                    <strong className="underline">Weather:</strong> <em>Open Weather Map</em>
                </a>
                <a href="https://sunrise-sunset.org/" target="_blank" className={cardSourcesLinkStyle}>
                    <strong className="underline">Sun:</strong> <em>Sunrise-sunset</em>
                </a>
                <a href="https://www.windy.com/" target="_blank" className={cardSourcesLinkStyle}>
                    <strong className="underline">Webcams:</strong> <em>Windy</em>
                </a>
                <a href="https://www.meteoblue.com/" target="_blank" className={cardSourcesLinkStyle}>
                    <strong className="underline">Moon:</strong> <em>Meteoblue</em>
                </a>
                <a href="https://djlorenz.github.io/astronomy/lp2022/" target="_blank" className={cardSourcesLinkStyle}>
                    <strong className="underline">Night sky:</strong> <em>David Lorenz</em>
                </a>
                <a href="https://www.swpc.noaa.gov/" target="_blank" className={cardSourcesLinkStyle}>
                    <strong className="underline">Aurora forecast:</strong> <em>NOAA SWPC</em>
                </a>
                <a href="https://waqi.info/" target="_blank" className={cardSourcesLinkStyle}>
                    <strong className="underline">Air quality:</strong> <em>WAQI</em>
                </a>
                <a href="https://nominatim.org/release-docs/develop/" target="_blank" className={cardSourcesLinkStyle}>
                    <strong className="underline">City search:</strong> <em>Nominatim OSM</em>
                </a>
                <a href="https://www.windy.com/" target="_blank" className={cardSourcesLinkStyle}>
                    <strong className="underline">Satellite:</strong> <em>Windy</em>
                </a>

                <p className={cardSourcesIconStyle}><SquareArrowOutDownRight size={32} /></p>
            </div>
        </>
    );
}