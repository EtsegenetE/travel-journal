import marker from "./image/marker.png";


function Entry(props) {
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img 
                    className="main-image"
                    src={props.img.src}
                    alt={props.img.alt}
                />
            </div>
            <div className="info-container">
                <img 
                    className="marker"
                    src={marker}
                    alt="map marker icon"
                />
                <span className="country">{props.country}</span>
                <a href={props.googleMapsLink}>view on Google map</a>
                <h2 className="entry-title">{props.title}</h2>
                <p className="entry-dates">{props.dates}</p>
                <p className="entry-text">{props.text}</p>
            </div>
        </article>
    );
}

export default Entry;