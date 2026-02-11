const mapToken = 'YOUR_MAPBOX_ACCESS_TOKEN'; // replace with your Mapbox access token
const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 9, // starting zoom
});

const marker1 = new mapboxgl.Marker({ color: 'red' })
    .setLngLat(listing.geometry.coordinates)
    .setPopup(new mapboxgl.Popup({ offset: 25 })
        .setHTML(`<h4>${listing.location}</h4><p>Exact Location provided after booking</p>`))
    .addTo(map);
