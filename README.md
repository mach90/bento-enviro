# Bento Enviro

## What is it ?
Single Page Application aggregating diverse environmental data from multiple APIs and presenting it through a concise Bento-style UI.

## ⚙️ TECHNOLOGIES
React, Vite, TailwindCSS, Lucide, Swiper, Pako, proj4, DepartureMono, Recharts

## 🔗 SOURCES
- Weather: [Open Weather Map](https://openweathermap.org/)
- Sun: [Sunrise-sunset](https://sunrise-sunset.org/)
- Webcams: [Windy](https://www.windy.com/)
- Moon: [Meteoblue](https://www.meteoblue.com/) (4485 12/12, 10/06)
- Night sky: [David Lorenz](https://djlorenz.github.io/astronomy/lp2022/)
- Aurora forecast: [NOAA SWPC](https://www.swpc.noaa.gov/)
- Air quality: [WAQI](https://waqi.info/)
- City search: [Nominatim OSM](https://nominatim.org/)
- Satellite: [Windy](https://www.windy.com/)

## 🔧 TO FIX
- [x] CSS dynamic states 🟢
- [x] Sun Recharts doesn't work anymore for an unknown reason 🟢
- [x] Webcam Swiper w-full doesn't work anymore for an unknown reason 🟡
- [x] Text size and responsiveness 🟠 (1024x1366, 1440x900)
- [ ] Menu behavior 🔴

## 🔳 TO DO
### App
- [x] https://swiperjs.com/ 🟢
- [x] Metric/US units 🟢
- [x] Sun Card design 🟢
- [ ] No data/Error handling for each card 🔴
### Cards from APIs
- [x] Weather 🟢
- [x] Weather Forecast 🟢
- [x] Sun 🟢
- [x] Moon 🟢 _alternative https://github.com/andrmoel/astronomy-bundle-js_
- [x] Satellite Imagery 🟢 
- [x] Webcams 🟢
- [x] Air quality score and pollutant 🟢
- [x] Aurora forecast (Kp-index) 🟢
- [x] Light pollution and bortle 🟢
- [x] Coordinates GPS (different formats) 🟢
- [ ] Map viewer (terrain, vegetation, water, roads, buildings etc) 🔴
- [ ] Allergies pollutant level (grass, birch) 🔴
- [ ] Ecoregion, biome, climate 🔴
- [ ] Native/potential fauna, flora
- [ ] Soil and geology infos 🔴
- [ ] Altimeter 🔴
- [ ] Nearby water lake, river, ocean etc 🔴
- [ ] Marine tides, water temp etc 🔴
- [ ] Noise pollution level 🔴
- [ ] UV 🔴
- [ ] Disaster alert 🔴
- [ ] City info (population, density, currency etc.) 🔴
- [ ] Trends (infos, socials) 🔴

### Fetching/Caching
- [ ] Fetching improved 🔴
    - [ ] Limit fetch per user (limits and error handling) 🔴
    - [ ] Caching data 🔴

## LEGEND
🟢 100% done
🟡 75% done
🟠 50% done
🟤 25% done
🔴 0% done