// /* eslint-disable react/prop-types */
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import "./InfoBox.css";


// export default function InfoBox({ info }) {
//     const INIT_URL =
//         "https://images.unsplash.com/photo-1715276611617-21d4395134f1?w=620&auto=format&fit=crop&q=60&ixlib=rb-4.0.3";

//     return (
//         <div className="InfoBox">
//             <div className="cardContainer">
//                 <Card sx={{ maxWidth: 345 }}>
//                     <CardMedia
//                         sx={{ height: 140 }}
//                         image={info?.icon ? `http://openweathermap.org/img/wn/${info.icon}@2x.png` : INIT_URL}
//                         title="Weather Image"
//                     />
//                     <CardContent>
//                         <Typography gutterBottom variant="h5" component="div">
//                             {info?.city}, {info?.country}
//                         </Typography>
//                         <Typography variant="body2" color="text.secondary">
//                             <strong>Current Weather:</strong> {info?.weather}<br />
//                             <strong>Temperature:</strong> {info?.temp}°C<br />
//                             <strong>Feels Like:</strong> {info?.feelslike}°C<br />
//                             <strong>Min Temp:</strong> {info?.tempMin}°C<br />
//                             <strong>Max Temp:</strong> {info?.tempMax}°C<br />
//                             <strong>Humidity:</strong> {info?.humidity}%<br />
//                             <strong>Description:</strong> {info?.description}<br />
//                             <strong>Sunrise:</strong> {info?.sunrise}<br />
//                             <strong>Sunset:</strong> {info?.sunset}<br />
//                         </Typography>
//                         <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>
//                             <a
//                                 href={`https://www.weather-forecast.com/locations/${info?.city}/forecasts/latest`}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                             >
//                                 <strong>More Details</strong>
//                             </a>
//                         </Typography>
//                     </CardContent>
//                     <CardActions>
//                         <Button
//                             size="small"
//                             onClick={() =>
//                                 navigator.share?.({
//                                     title: "Weather Info",
//                                     text: `Check out the weather in ${info?.city}!`,
//                                     url: window.location.href,
//                                 })
//                             }
//                         >
//                             Share
//                         </Button>
//                         <Button
//                             size="small"
//                             href={`https://www.weather.com/weather/today/l/${info?.city}`}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                         >
//                             Learn More
//                         </Button>
//                     </CardActions>
//                 </Card>
//             </div>
//         </div>
//     );
// }






import PropTypes from "prop-types";
import { Card, CardContent, Typography, Grid, Box, Chip, Divider } from "@mui/material";
import {
    WbSunny, AcUnit, Cloud, Opacity, Air, 
    Thermostat, Schedule, LocationOn
} from "@mui/icons-material";

export default function InfoBox({ info, darkMode }) {
    const getWeatherIcon = (weather) => {
        switch(weather?.toLowerCase()) {
            case "clear": return <WbSunny sx={{ fontSize: 80, color: "#ffa726" }} />;
            case "clouds": return <Cloud sx={{ fontSize: 80, color: "#78909c" }} />;
            case "rain": return <Opacity sx={{ fontSize: 80, color: "#42a5f5" }} />;
            case "snow": return <AcUnit sx={{ fontSize: 80, color: "#90caf9" }} />;
            case "haze": return <Cloud sx={{ fontSize: 80, color: "#b0bec5" }} />;
            case "mist": return <Cloud sx={{ fontSize: 80, color: "#b0bec5" }} />;
            default: return <WbSunny sx={{ fontSize: 80, color: "#ffa726" }} />;
        }
    };

    // Default values if info is not available
    if (!info) {
        return (
            <Card elevation={0} sx={{ borderRadius: 4, p: 3 }}>
                <Typography textAlign="center">No weather data available</Typography>
            </Card>
        );
    }

    return (
        <Card 
            elevation={0}
            sx={{ 
                borderRadius: 4,
                background: darkMode ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.9)",
                backdropFilter: "blur(10px)",
                transition: "all 0.3s ease"
            }}
        >
            <CardContent>
                {/* Location Header */}
                <Box display="flex" alignItems="center" justifyContent="space-between" mb={3} flexWrap="wrap">
                    <Box display="flex" alignItems="center" gap={1}>
                        <LocationOn color="primary" />
                        <Typography variant="h4" component="h2" fontWeight="bold">
                            {info.city}, {info.country}
                        </Typography>
                    </Box>
                    <Chip 
                        label={info.weather} 
                        color="primary" 
                        variant="outlined"
                        sx={{ fontWeight: "bold" }}
                    />
                </Box>

                <Divider sx={{ my: 2 }} />

                {/* Main Weather Display */}
                <Grid container spacing={3} alignItems="center" mb={4}>
                    <Grid item xs={12} md={4} textAlign="center">
                        <Box display="flex" flexDirection="column" alignItems="center">
                            {getWeatherIcon(info.weather)}
                            <Typography variant="h6" sx={{ mt: 1, textTransform: "capitalize" }}>
                                {info.description}
                            </Typography>
                        </Box>
                    </Grid>
                    
                    <Grid item xs={12} md={4} textAlign="center">
                        <Typography variant="h1" component="div" fontWeight="bold" sx={{ fontSize: { xs: 64, md: 80 } }}>
                            {info.temp}°
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            Feels like {info.feelslike}°
                        </Typography>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Box display="flex" justifyContent="space-around">
                            <Box textAlign="center">
                                <Typography variant="body2" color="text.secondary">Min</Typography>
                                <Typography variant="h6" fontWeight="bold">{info.tempMin}°</Typography>
                            </Box>
                            <Box textAlign="center">
                                <Typography variant="body2" color="text.secondary">Max</Typography>
                                <Typography variant="h6" fontWeight="bold">{info.tempMax}°</Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                <Divider sx={{ my: 2 }} />

                {/* Weather Details Grid */}
                <Grid container spacing={2}>
                    <Grid item xs={6} sm={3}>
                        <Box textAlign="center">
                            <Opacity sx={{ color: "#42a5f5", mb: 1 }} />
                            <Typography variant="body2" color="text.secondary">Humidity</Typography>
                            <Typography variant="h6" fontWeight="bold">{info.humidity}%</Typography>
                        </Box>
                    </Grid>
                    
                    <Grid item xs={6} sm={3}>
                        <Box textAlign="center">
                            <Air sx={{ color: "#66bb6a", mb: 1 }} />
                            <Typography variant="body2" color="text.secondary">Wind Speed</Typography>
                            <Typography variant="h6" fontWeight="bold">{info.windSpeed} km/h</Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={6} sm={3}>
                        <Box textAlign="center">
                            <Thermostat sx={{ color: "#ef5350", mb: 1 }} />
                            <Typography variant="body2" color="text.secondary">Pressure</Typography>
                            <Typography variant="h6" fontWeight="bold">{info.pressure} hPa</Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={6} sm={3}>
                        <Box textAlign="center">
                            <Schedule sx={{ color: "#ffa726", mb: 1 }} />
                            <Typography variant="body2" color="text.secondary">Sunrise</Typography>
                            <Typography variant="h6" fontWeight="bold">{info.sunrise}</Typography>
                        </Box>
                    </Grid>
                </Grid>

                {/* Additional Info */}
                {info.sunset && (
                    <Box mt={2} textAlign="center">
                        <Typography variant="caption" color="text.secondary">
                            Sunset: {info.sunset}
                        </Typography>
                    </Box>
                )}
            </CardContent>
        </Card>
    );
}

// PropTypes for type checking
InfoBox.propTypes = {
    info: PropTypes.shape({
        city: PropTypes.string,
        country: PropTypes.string,
        weather: PropTypes.string,
        temp: PropTypes.number,
        feelslike: PropTypes.number,
        tempMin: PropTypes.number,
        tempMax: PropTypes.number,
        humidity: PropTypes.number,
        description: PropTypes.string,
        sunrise: PropTypes.string,
        sunset: PropTypes.string,
        windSpeed: PropTypes.number,
        pressure: PropTypes.number,
    }),
    darkMode: PropTypes.bool,
};

InfoBox.defaultProps = {
    darkMode: false,
};
