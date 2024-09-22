import { SquareArrowOutDownRight } from 'lucide-react';

export default function CardSources() {
    return (
        <>
            <div className='relative flex flex-col p-4 border border-colorBorder text-sm justify-end items-end'>
                <p className='font-custom1 text-lg text-colorTextLight mb-2'>APIs, Credits</p>
                <a href="https://openweathermap.org/" target='_blank' className='font-custom2 text-colorTextMedium hover:text-colorTextLight'>
                    <strong className='underline'>Weather:</strong> <em>Open Weather Map</em>
                </a>
                <a href="https://sunrise-sunset.org/" target='_blank' className='font-custom2 text-colorTextMedium hover:text-colorTextLight'>
                    <strong className='underline'>Sun:</strong> <em>Sunrise-sunset</em>
                </a>
                <a href="https://www.windy.com/" target='_blank' className='font-custom2 text-colorTextMedium hover:text-colorTextLight'>
                    <strong className='underline'>Webcams:</strong> <em>Windy</em>
                </a>
                <a href="https://www.meteoblue.com/" target='_blank' className='font-custom2 text-colorTextMedium hover:text-colorTextLight'>
                    <strong className='underline'>Moon:</strong> <em>Meteoblue</em>
                </a>
                <a href="https://djlorenz.github.io/astronomy/lp2022/" target='_blank' className='font-custom2 text-colorTextMedium hover:text-colorTextLight'>
                    <strong className='underline'>Night sky:</strong> <em>David Lorenz</em>
                </a>
                <a href="https://www.swpc.noaa.gov/" target='_blank' className='font-custom2 text-colorTextMedium hover:text-colorTextLight'>
                    <strong className='underline'>Aurora forecast:</strong> <em>NOAA SWPC</em>
                </a>
                <a href="https://waqi.info/" target='_blank' className='font-custom2 text-colorTextMedium hover:text-colorTextLight'>
                    <strong className='underline'>Air quality:</strong> <em>WAQI</em>
                </a>
                <a href="https://nominatim.org/release-docs/develop/" target='_blank' className='font-custom2 text-colorTextMedium hover:text-colorTextLight'>
                    <strong className='underline'>City search:</strong> <em>Nominatim OSM</em>
                </a>

                <p className='absolute top-1 left-1 text-colorTextMedium'><SquareArrowOutDownRight size={32} /></p>
            </div>
        </>
    );
}