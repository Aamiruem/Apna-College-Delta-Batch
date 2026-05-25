// import SearchBox from "./SearchBox";
// import InfoBox from "./InfoBox";
// import { useState } from "react";
// export default function WeatherApp() {
//     let [weatherInfo, setWeatherInfo] = useState({
//         city: "Delhi",
//         feelslike: 24.84,
//         temp: 25.05,
//         tempMin: 25.05,
//         tempMax: 25.05,
//         humidity: 47,
//         weather: "haze",
//         country: "India ",
//         description: "Cloudy",
//         icon: "04d",
//         sunrise: "16:20",
//     });

//     let updateInfo = (newInfo) => {
//         setWeatherInfo(newInfo);
//     }

//     return (
//         <div className="WeatherApp" style={{ color: "red", textAlign: "center" }}>
//             <h2>Weather App</h2>
//             <SearchBox updateInfo={updateInfo} />
//             <InfoBox info={weatherInfo} />
            


    
//         </div>
//     )
// }



// import SearchBox from "./SearchBox";
// import InfoBox from "./InfoBox";
// import { useState } from "react";
// import { Container, Typography, Paper, Alert, Snackbar, Box, CircularProgress } from "@mui/material";
// import WbSunnyIcon from '@mui/icons-material/WbSunny';

// export default function WeatherApp() {
//     const [weatherInfo, setWeatherInfo] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
//     const [darkMode, setDarkMode] = useState(false);
//     const [lastUpdated, setLastUpdated] = useState(null);

//     const fetchWeather = async (city) => {
//         if (!city.trim()) {
//             setError("Please enter a city name");
//             return;
//         }

//         setLoading(true);
//         setError(null);
        
//         // Get API key from environment variables
//         const API_KEY = import.meta.env.caaeed468989db714caabdfe82cb00a2;
//         // const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
        
//         // Check if API key is available
//         if (!API_KEY) {
//             setError("API key is missing. Please check your .env file");
//             setLoading(false);
//             return;
//         }

//         // Build URL - support both city name and coordinates
//         let URL;
//         if (city.includes(',')) {
//             // Handle coordinates (latitude,longitude)
//             const [lat, lon] = city.split(',');
//             URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
//         } else {
//             // Handle city name
//             URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
//         }

//         try {
//             const response = await fetch(URL);
//             if (!response.ok) {
//                 if (response.status === 404) {
//                     throw new Error(`City "${city}" not found. Please check the city name and try again.`);
//                 } else if (response.status === 401) {
//                     throw new Error("Invalid API key. Please check your API key.");
//                 } else {
//                     throw new Error(`Error: ${response.status} - ${response.statusText}`);
//                 }
//             }
//             const data = await response.json();
            
//             const newInfo = {
//                 city: data.name,
//                 feelslike: Math.round(data.main.feels_like),
//                 temp: Math.round(data.main.temp),
//                 tempMin: Math.round(data.main.temp_min),
//                 tempMax: Math.round(data.main.temp_max),
//                 humidity: data.main.humidity,
//                 weather: data.weather[0].main,
//                 country: data.sys.country,
//                 description: data.weather[0].description,
//                 icon: data.weather[0].icon,
//                 sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString(),
//                 sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString(),
//                 windSpeed: data.wind.speed,
//                 pressure: data.main.pressure,
//             };
            
//             setWeatherInfo(newInfo);
//             setLastUpdated(new Date().toLocaleTimeString());
            
//             // Save to localStorage for offline access
//             localStorage.setItem('lastWeatherData', JSON.stringify(newInfo));
//             localStorage.setItem('lastCity', city);
//         } catch (err) {
//             console.error("Error fetching weather:", err);
//             setError(err.message);
            
//             // Load from localStorage if available
//             const savedData = localStorage.getItem('lastWeatherData');
//             if (savedData && !weatherInfo) {
//                 setWeatherInfo(JSON.parse(savedData));
//                 setError("Using cached data - " + err.message);
//             }
//         } finally {
//             setLoading(false);
//         }
//     };

//     const updateInfo = (newInfo) => {
//         fetchWeather(newInfo.city);
//     };

//     const handleCloseError = () => {
//         setError(null);
//     };

//     const toggleDarkMode = () => {
//         setDarkMode(!darkMode);
//     };

//     if (loading && !weatherInfo) {
//         return (
//             <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
//                 <CircularProgress size={60} thickness={4} />
//             </Box>
//         );
//     }

//     return (
//         <Box
//             sx={{
//                 minHeight: "100vh",
//                 background: darkMode
//                     ? "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)"
//                     : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//                 py: 4,
//                 transition: "all 0.3s ease"
//             }}
//         >
//             <Container maxWidth="md">
//                 <Paper
//                     elevation={24}
//                     sx={{
//                         borderRadius: 4,
//                         overflow: "hidden",
//                         background: darkMode ? "rgba(0,0,0,0.85)" : "rgba(255,255,255,0.95)",
//                         backdropFilter: "blur(10px)",
//                         transition: "all 0.3s ease"
//                     }}
//                 >
//                     <Box sx={{ p: 4 }}>
//                         {/* Header */}
//                         <Box display="flex" justifyContent="space-between" alignItems="center" mb={3} flexWrap="wrap">
//                             <Box display="flex" alignItems="center" gap={2}>
//                                 <WbSunnyIcon sx={{ fontSize: 40, color: "#ffa726" }} />
//                                 <Typography variant="h3" component="h1" fontWeight="bold"
//                                     sx={{
//                                         background: "linear-gradient(45deg, #667eea 30%, #764ba2 90%)",
//                                         backgroundClip: "text",
//                                         textFillColor: "transparent",
//                                         WebkitBackgroundClip: "text",
//                                         fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" }
//                                     }}
//                                 >
//                                     Weather App
//                                 </Typography>
//                             </Box>
//                             <Box display="flex" alignItems="center" gap={1}>
//                                 <Typography variant="button" sx={{ color: darkMode ? "#fff" : "#333" }}>
//                                     🌙 Dark Mode
//                                 </Typography>
//                                 <input
//                                     type="checkbox"
//                                     checked={darkMode}
//                                     onChange={toggleDarkMode}
//                                     style={{ transform: "scale(1.2)", cursor: "pointer" }}
//                                 />
//                             </Box>
//                         </Box>

//                         {/* Search Section */}
//                         <Box mb={4}>
//                             <SearchBox updateInfo={updateInfo} loading={loading} />
//                         </Box>

//                         {/* Error Alert */}
//                         <Snackbar open={!!error} autoHideDuration={6000} onClose={handleCloseError}>
//                             <Alert onClose={handleCloseError} severity="error" sx={{ width: '100%' }}>
//                                 {error}
//                             </Alert>
//                         </Snackbar>

//                         {/* Weather Info */}
//                         {weatherInfo && (
//                             <>
//                                 {lastUpdated && (
//                                     <Typography variant="caption" display="block" textAlign="right" color="text.secondary" mb={2}>
//                                         Last updated: {lastUpdated}
//                                     </Typography>
//                                 )}
//                                 <InfoBox info={weatherInfo} darkMode={darkMode} />
//                             </>
//                         )}

//                         {/* Footer */}
//                         <Box mt={4} pt={2} borderTop={1} borderColor="divider" textAlign="center">
//                             <Typography variant="body2" color="text.secondary">
//                                 Powered by OpenWeatherMap API | Real-time weather data
//                             </Typography>
//                         </Box>
//                     </Box>
//                 </Paper>
//             </Container>
//         </Box>
//     );
// }





import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import { Container, Typography, Paper, Alert, Snackbar, Box } from "@mui/material";
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState(null);
    const [error, setError] = useState(null);
    const [darkMode, setDarkMode] = useState(false);
    const [lastUpdated, setLastUpdated] = useState(null);

    const updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
        setLastUpdated(new Date().toLocaleTimeString());
        setError(null);
    };

    const handleCloseError = () => {
        setError(null);
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <Box 
            sx={{ 
                minHeight: "100vh",
                background: darkMode 
                    ? "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)"
                    : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                py: 4,
                transition: "all 0.3s ease"
            }}
        >
            <Container maxWidth="md">
                <Paper 
                    elevation={24} 
                    sx={{ 
                        borderRadius: 4,
                        overflow: "hidden",
                        background: darkMode ? "rgba(0,0,0,0.85)" : "rgba(255,255,255,0.95)",
                        backdropFilter: "blur(10px)",
                        transition: "all 0.3s ease"
                    }}
                >
                    <Box sx={{ p: 4 }}>
                        {/* Header */}
                        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3} flexWrap="wrap">
                            <Box display="flex" alignItems="center" gap={2}>
                                <WbSunnyIcon sx={{ fontSize: 40, color: "#ffa726" }} />
                                <Typography variant="h3" component="h1" fontWeight="bold" 
                                    sx={{ 
                                        background: "linear-gradient(45deg, #667eea 30%, #764ba2 90%)",
                                        backgroundClip: "text",
                                        textFillColor: "transparent",
                                        WebkitBackgroundClip: "text",
                                        fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" }
                                    }}
                                >
                                    Weather App
                                </Typography>
                            </Box>
                            <Box display="flex" alignItems="center" gap={1}>
                                <Typography variant="button" sx={{ color: darkMode ? "#fff" : "#333" }}>
                                    🌙 Dark Mode
                                </Typography>
                                <input
                                    type="checkbox"
                                    checked={darkMode}
                                    onChange={toggleDarkMode}
                                    style={{ transform: "scale(1.2)", cursor: "pointer" }}
                                />
                            </Box>
                        </Box>

                        {/* Search Section */}
                        <Box mb={4}>
                            <SearchBox updateInfo={updateInfo} />
                        </Box>

                        {/* Error Alert */}
                        <Snackbar open={!!error} autoHideDuration={6000} onClose={handleCloseError}>
                            <Alert onClose={handleCloseError} severity="error" sx={{ width: '100%' }}>
                                {error}
                            </Alert>
                        </Snackbar>

                        {/* Weather Info */}
                        {weatherInfo && (
                            <>
                                {lastUpdated && (
                                    <Typography variant="caption" display="block" textAlign="right" color="text.secondary" mb={2}>
                                        Last updated: {lastUpdated}
                                    </Typography>
                                )}
                                <InfoBox info={weatherInfo} darkMode={darkMode} />
                            </>
                        )}

                        {/* Footer */}
                        <Box mt={4} pt={2} borderTop={1} borderColor="divider" textAlign="center">
                            <Typography variant="body2" color="text.secondary">
                                Powered by OpenWeatherMap API | Real-time weather data
                            </Typography>
                        </Box>
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
}
