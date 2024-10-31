import { SquareArrowOutDownRight } from "lucide-react";

const cardSourcesContainerStyle = "bg-cardThird relative flex flex-col p-4 text-sm justify-end items-end rounded-lg shadow-md col-span-1 row-span-1";
const cardSourcesTitleStyle = "font-heading text-lg text-textThird mb-2";
const cardSourcesLinkStyle = "font-body text-textThirdVariant hover:text-textThird";
const cardSourcesIconStyle = "absolute top-1 left-1 text-textThird";

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

                <p className={cardSourcesIconStyle}><SquareArrowOutDownRight size={32} /></p>
            </div>
        </>
    );
}