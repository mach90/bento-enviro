import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/mousewheel';
import 'swiper/css/scrollbar';
// import Accordion from './Accordion';

const questionsAnswers = [
    {
        question:`Why is pressure important ?`,
        answer:`Changes in atmospheric pressure are often associated with different weather patterns. High pressure typically brings fair weather, while low pressure is often associated with clouds, precipitation, and stormy conditions. By monitoring pressure trends, meteorologists can anticipate changes in weather conditions and issue forecasts accordingly.`,
    },
    {
        question:`What does wind direction indicate ?`,
        answer:`The wind direction is indicated by the angle from which the wind is coming, with 0° or 360° representing the North. For instance, a wind direction of 90° signifies a wind blowing from the East and heading towards the West.`,
    },
    {
        question:`What are wind gusts ?`,
        answer:`A wind gust is a sudden, brief increase in wind speed, typically lasting a few seconds. These bursts of wind are stronger than the average wind speed at a given location and can be caused by various atmospheric conditions, such as turbulence, weather fronts, thunderstorms, or other rapid changes in atmospheric pressure.`,
    },
    {
        question:`Sunrise, sunset, twilight, golden hour ?`,
        answer:`Astronomical Twilight is the period when the Sun is between 12 and 18 degrees below the horizon. During this time, the sky is dark enough for astronomers to observe celestial objects without interference from the Sun's light. 
        Nautical Twilight is the period when the Sun is between 6 and 12 degrees below the horizon. During this phase, the horizon is still visible at sea, which is useful for sailors to take readings of stars against the horizon. 
        Civil Twilight is the period when the Sun is just below the horizon and there is enough light for most outdoor activities. It begins in the morning, and ends at sunrise and begins in the evening at sunset and ends when the Sun reaches 6 degrees below the horizon. 
        Golden Hour is the period shortly after sunrise and just before sunset during which daylight is redder and softer compared to when the Sun is higher in the sky. It is considered ideal for photography and film.`,
        link: `https://sunrise-sunset.org/glossary`,
    },
    {
        question:`What is moon transit time ?`,
        answer:`The term "moon transit time" typically refers to the moment when the Moon passes over the observer's meridian, which is an imaginary line running from north to south directly overhead. In astronomy and celestial navigation, this event is significant because it marks the highest point the Moon reaches in the sky as it moves along its orbit. Moon age is the number of days since the last full moon (new moon).`,
    },
    {
        question:`What is moon age ?`,
        answer:`The moon age refers to the number of days that have passed since the last New Moon. It's a way of measuring the progression of the moon's phases in its approximately 29.5-day cycle around the Earth.Moon age is the number of days since the last full moon (new moon).`,
    },
    {
        question:`What is Sky Quality Meter (SQM) ?`,
        answer:`SQM stands for Sky Quality Meter. It's a small device that can measure sky quality ie. darkness. Measured values range from less than 18 (most light-polluted conditions) to 22 (natural sky brightness without artificial brightness). Is it equal to [log10((Total brightness)/108000000)/-0.4].`,
    },
    {
        question:`What is total brightness ?`,
        answer:`It is the sum of natural (sky) brightness and artificial brightness. A lower value closer to 0 indicates a darker sky.`,
    },
    {
        question:`What is the Ratio (artificial/natural brightnesses) ?`,
        answer:`It is the ratio of artificial and natural brightnesses. A lower value closer to 0 indicates a darker sky.`,
    },
    {
        question:`What is the bortle class ?`,
        answer:`The Bortle Class is a scale used to measure the brightness of the night sky, developed by amateur astronomer John E. Bortle. It ranges from Class 1, the darkest skies available on Earth, to Class 9, inner-city skies with significant light pollution.`,
        link: `https://www.handprint.com/ASTRO/bortle.html`,
    },
    {
        question:`What is the Kp-index ?`,
        answer:`The Kp-index measures disturbances in Earth's magnetic field from 0 (quiet) to 9 (extremely disturbed) due to solar activity. It is crucial for spotting auroras, as higher Kp values indicate stronger geomagnetic activity, increasing the likelihood and visibility of auroras, even at lower latitudes.`,
    },
    {
        question:`What factors influence the visibility of auroras besides the Kp-index ?`,
        answer:`In addition to the Kp-index (geomagnetic activity), several factors influence the chances of seeing auroras: cloud cover, which can obscure the view; the lunar phase, as a bright moon can increase sky brightness and make auroras harder to discern; light pollution, which hampers sky observation; and elevation, as being at a higher altitude reduces the effects of light pollution, thus enhancing aurora visibility.`,
    },
    {
        question:`What are the Air Quality Index (AQI) scores ?`,
        answer:`Air quality scores, measured by the Air Quality Index (AQI), range from 0 to 500. A score of 0-50 is considered good, 51-100 is moderate, 101-150 is unhealthy for sensitive groups, 151-200 is unhealthy, 201-300 is very unhealthy, and 301-500 is hazardous.`,
    },
    {
        question:`What influence the AQI score ?`,
        answer:`The air quality score is influenced by the concentration of various pollutants in the air, including particulate matter (PM2.5 and PM10), ground-level ozone (O3), carbon monoxide (CO), sulfur dioxide (SO2), and nitrogen dioxide (NO2). Factors such as industrial emissions, vehicle exhaust, wildfires, weather conditions, and natural events like volcanic eruptions also significantly impact air quality. Additionally, geographic and seasonal variations can influence pollutant levels and dispersion, further affecting the air quality score.`,
    },
]

// const cardFaqContainerStyle = "flex flex-col justify-center items-center gap-2  col-span-full md:col-span-full rounded-lg p-4 w-full";
// const cardFaqTitleStyle = "font-heading text-heading text-500";
const cardFaqContainerStyle = "bg-sixth col-span-1 md:col-span-full xl:col-span-4 w-full h-max md:h-96 p-8 rounded-xl flex flex-col md:flex-row gap-4";
const cardFaqSwiperStyle = "w-full md:w-[30%] h-64 md:h-full border-8 border-first bg-first rounded-lg";
const cardFaqSlideStyle = "flex h-full bg-second items-center p-2 ml-6 font-exp text-exp text-200 border-2 border-500 cursor-pointer hover:brightness-125";
const cardFaqDisplayStyle = "bg-first flex flex-row gap-4 rounded-lg shadow-inner shadow-stone-950 w-full md:w-[70%] h-96 md:h-full p-4";
const cardFaqDisplayIconStyle = "flex items-center justify-center h-full w-12 bg-600 font-heading text-heading font-800 text-first";
const cardFaqDisplayTextContainerStyle = "w-full";
const cardFaqQuestionStyle = "font-body text-body text-300";
const cardFaqAnswerStyle = "font-exp text-exp text-500";

function CardFAQ() {
    const [activeQuestion, setActiveQuestion] = useState(0);

    return (
        // <div className={cardFaqContainerStyle}>
        //         <p className={cardFaqTitleStyle}>FAQ</p>
        //         {questionsAnswers.map(entry => <Accordion key={entry.question} question={entry.question} answer={entry.answer} link={entry.link} />)}
        // </div>
        <div className={cardFaqContainerStyle}>
            <Swiper 
                direction={"vertical"}
                slidesPerView={4}
                spaceBetween={4}
                mousewheel={true}
                scrollbar={{
                    hide: false,
                    color: "red",
                }}
                modules={[Mousewheel, Scrollbar]}
                className={cardFaqSwiperStyle}
                style = {
                    {
                        '--swiper-scrollbar-bg-color': '#53595f',
                        '--swiper-scrollbar-drag-bg-color': '#aeaeae',
                        '--swiper-scrollbar-size': '12px',
                        '--swiper-scrollbar-border-radius': 'none',
                        '--swiper-scrollbar-sides-offset': '0px',
                        '--swiper-scrollbar-left': '2px',
                    }
                }
            >
            {questionsAnswers && questionsAnswers.map((question, i) => (
                <SwiperSlide key={i} onClick={() => setActiveQuestion(i)}>
                    {/* <Accordion key={question.i} question={question.question} answer={question.answer} link={question.link} /> */}
                    <div className={cardFaqSlideStyle}>{question.question}</div>
                </SwiperSlide>
            ))}
            </Swiper>
            <div className={cardFaqDisplayStyle}>
                <div className={cardFaqDisplayIconStyle}>?</div>
                <div className={cardFaqDisplayTextContainerStyle}>
                    <h2 className={cardFaqQuestionStyle}>{questionsAnswers[activeQuestion].question}</h2>
                    <p className={cardFaqAnswerStyle}>{questionsAnswers[activeQuestion].answer}</p>
                </div>
            </div>
        </div>
    );
}

export default CardFAQ;
