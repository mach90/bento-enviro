import React, { useEffect } from 'react';
import pako from 'pako';

export default function CardNightsky() {

    useEffect(() => {
        getInfoFromLonLat({ lat: 63.4345, lng: -20.2670 }, 2022);
    }, []);

    function getInfoFromLonLat(elatlng, year) {
        let xhr;

        // Figure out which tile has binary data. Each tile is 600 x 600 points (1/120 degree resolution)
        const lonFromDateLine = (((elatlng.lng + 180.0) % 360.0) + 360.0) % 360.0;
        const latFromStart = elatlng.lat + 65.0;
        const tilex = Math.floor(lonFromDateLine / 5.0) + 1;
        const tiley = Math.floor(latFromStart / 5.0) + 1;
        // console.log(lonFromDateLine, latFromStart, tilex, tiley)

        function LpAtlasInBounds() {
            const data_array = new Int8Array(pako.ungzip(xhr.response));
            // Lower left corner is 2 byte actual value. Afterwards content is 1-byte change relative to adjacent value (for compression)
            const first_number = 128 * Number(data_array[0]) + Number(data_array[1]);
            // Loop through the changes in latitude
            let change = 0.0;
            // Start at i = 1 because first corner is actual compressed value rather than change
            for (let i = 1; i < iy; i++) {
                // + 1 instead of +0 because first point is 2 bytes in my compression scheme
                change += Number(data_array[600 * i + 1]);
            }
            // Now add up changes in longitude, start at 1. This time because first value is change in latitude
            for (let i = 1; i < ix; i++) {
                // + 1 instead of +0 because first point is 2 bytes in my compression scheme
                change += Number(data_array[600 * (iy - 1) + 1 + i]);
            }
            // Now have compressed value
            const compressed = first_number + change;
            const brightnessRatio = (5.0 / 195.0) * (Math.exp(0.0195 * compressed) - 1.0);
            const mpsas = 22.0 - 5.0 * Math.log(1.0 + brightnessRatio) / Math.log(100.0);

            // Brightness:
            console.log(mpsas.toFixed(2));
        }

        if (tiley >= 1 && tiley <= 28) {
            const url = `../binary_tiles/${year}/binary_tile_${tilex}_${tiley}.dat.gz`;
            console.log(url);

            // Figure out location of nearest grid point in tile
            const ix = Math.round(120.0 * (lonFromDateLine - 5.0 * (tilex - 1) + 1 / 240.0));
            const iy = Math.round(120.0 * (latFromStart - 5.0 * (tiley - 1) + 1 / 240.0));

            xhr = new XMLHttpRequest();
            xhr.responseType = 'arraybuffer';
            xhr.onload = LpAtlasInBounds;
            xhr.open('GET', url, true);
            xhr.send();
        } else {
            console.log('out of bound');
        }
    }

    return (
        <div className="card card-nightsky">
            <em>SQM Sky quality meter (mag./arc sec2): higher = darker sky, max 22 </em>
            <em>Total Brightness (mcd/m²): total light pollution from sky + artificial, lower = darker sky </em>
            <em>Artif. bright. (μcd/m²): artificial light pollution, lower = darker sky</em>
            <em>Ratio: This ratio compares the artificial brightness to the natural sky brightness. It shows how much brighter the sky is due to artificial lighting. lower = darker sky</em>
            <em>Bortle class: visibility of objects, lower = most objects visible</em>
            <em>Elevation: higher = darker sky</em>
        </div>
    );
}
