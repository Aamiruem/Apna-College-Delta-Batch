/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";


export default function InfoBox({ info }) {
    const INIT_URL =
        "https://images.unsplash.com/photo-1715276611617-21d4395134f1?w=620&auto=format&fit=crop&q=60&ixlib=rb-4.0.3";

    return (
        <div className="InfoBox">
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info?.icon ? `http://openweathermap.org/img/wn/${info.icon}@2x.png` : INIT_URL}
                        title="Weather Image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info?.city}, {info?.country}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <strong>Current Weather:</strong> {info?.weather}<br />
                            <strong>Temperature:</strong> {info?.temp}°C<br />
                            <strong>Feels Like:</strong> {info?.feelslike}°C<br />
                            <strong>Min Temp:</strong> {info?.tempMin}°C<br />
                            <strong>Max Temp:</strong> {info?.tempMax}°C<br />
                            <strong>Humidity:</strong> {info?.humidity}%<br />
                            <strong>Description:</strong> {info?.description}<br />
                            <strong>Sunrise:</strong> {info?.sunrise}<br />
                            <strong>Sunset:</strong> {info?.sunset}<br />
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>
                            <a
                                href={`https://www.weather-forecast.com/locations/${info?.city}/forecasts/latest`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <strong>More Details</strong>
                            </a>
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            size="small"
                            onClick={() =>
                                navigator.share?.({
                                    title: "Weather Info",
                                    text: `Check out the weather in ${info?.city}!`,
                                    url: window.location.href,
                                })
                            }
                        >
                            Share
                        </Button>
                        <Button
                            size="small"
                            href={`https://www.weather.com/weather/today/l/${info?.city}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    );
}
