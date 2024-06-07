
function Location({lat, lon}) {

    return (
        <div>
            <p>We are here {lat} / {lon} → <a href={`https://www.google.fr/maps/@${lat},${lon},14z`}>Google Map link</a></p>
        </div>
    );
}

export default Location;
