// import { useState } from "react";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import "./SearchBox.css";

// export default function SearchBox() {
//     const [city, setCity] = useState(""); // Correct syntax for state initialization

//     const API_URL = "https://api.openweathermap.org/data/2.5/weather"; // Corrected URL path
//     const API_KEY = "6571c0d302a742e23d34353d91257bb9";

//     const getWeatherInfo = async () => {
//         try {
//             const response = await fetch(
//                 `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
//             );
//             if (!response.ok) {
//                 throw new Error(`Error: ${response.status} - ${response.statusText}`);
//             }
//             const jsonResponse = await response.json();
//             console.log(jsonResponse);

//             const result = {
//                 city: jsonResponse.city,
//                 country: jsonResponse.sys.country,
//                 timestamp: new Date(jsonResponse.dt * 1000).toLocaleString(),
//                 icon: jsonResponse.weather[0].icon,
//                 description: jsonResponse.weather[0].description,
//                 temp: jsonResponse.main.temp,
//                 tempMin: jsonResponse.main.temp_min,
//                 tempMax: jsonResponse.main.temp_max,
//                 humidity: jsonResponse.main.humidity,
//                 feelslike: jsonResponse.main.feels_like,
//                 descriptions: jsonResponse.weather[0].description,
//                 icons: jsonResponse.weather[0].icon,
//                 windSpeed: jsonResponse.wind.speed,
//                 countrys: jsonResponse.sys.country,
//                 sunrise: new Date(jsonResponse.sys.sunrise * 1000).toLocaleTimeString(),
//                 sunset: new Date(jsonResponse.sys.sunset * 1000).toLocaleTimeString(),
//             };
//             console.log(result);
//             return result;
//             // updateInfo(result);
//         } catch (error) {
//             console.error("Failed to fetch weather information:", error);
//         }
//     };

//     const handleChange = async(event) => {
//         setCity(event.target.value);
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         if (city.trim()) {
//             setCity(""); // Clear input field after submission
//             await getWeatherInfo();


//         } else {
//             console.warn("City name cannot be empty.");
//         }
//     };

//     return (
//         <div className="SearchBox" style={{ textAlign: "center", color: "red" }}>
//             <h3>Search for the Weather</h3>
//             <form onSubmit={handleSubmit}>
//                 <TextField
//                     id="city"
//                     label="Enter City Name"
//                     variant="outlined"
//                     required
//                     value={city}
//                     onChange={handleChange}
//                 />
//                 <br />
//                 <br />
//                 <Button variant="contained" type="submit">
//                     Search
//                 </Button>
//             </form>
//         </div>
//     );
// }















import { useState } from "react";
import PropTypes from 'prop-types';
import { TextField, Button, Box, CircularProgress, Alert, Snackbar } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import MyLocationIcon from '@mui/icons-material/MyLocation';

export default function SearchBox({ updateInfo, loading: externalLoading }) {
    const [city, setCity] = useState("");
    const [error, setError] = useState("");
    const [locationError, setLocationError] = useState("");
    const [internalLoading, setInternalLoading] = useState(false);

    // Use external loading if provided, otherwise use internal
    const loading = externalLoading !== undefined ? externalLoading : internalLoading;

    // API configuration
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    // const API_KEY = "6571c0d302a742e23d34353d91257bb9";
    const API_KEY = "caaeed468989db714caabdfe82cb00a2";

    const getWeatherInfo = async (searchCity) => {
        try {
            const response = await fetch(
                `${API_URL}?q=${searchCity}&appid=${API_KEY}&units=metric`
            );
            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }
            const jsonResponse = await response.json();
            
            const result = {
                city: jsonResponse.name,
                country: jsonResponse.sys.country,
                feelslike: Math.round(jsonResponse.main.feels_like),
                temp: Math.round(jsonResponse.main.temp),
                tempMin: Math.round(jsonResponse.main.temp_min),
                tempMax: Math.round(jsonResponse.main.temp_max),
                humidity: jsonResponse.main.humidity,
                weather: jsonResponse.weather[0].main,
                description: jsonResponse.weather[0].description,
                icon: jsonResponse.weather[0].icon,
                windSpeed: jsonResponse.wind.speed,
                pressure: jsonResponse.main.pressure,
                sunrise: new Date(jsonResponse.sys.sunrise * 1000).toLocaleTimeString(),
                sunset: new Date(jsonResponse.sys.sunset * 1000).toLocaleTimeString(),
            };
            
            return result;
        } catch (error) {
            console.error("Failed to fetch weather information:", error);
            throw error;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!city.trim()) {
            setError("Please enter a city name");
            return;
        }
        
        setError("");
        setInternalLoading(true);
        
        try {
            const weatherData = await getWeatherInfo(city.trim());
            updateInfo(weatherData);
            setCity(""); // Clear input after successful search
        // eslint-disable-next-line no-unused-vars
        } catch (error) {
            setError("Failed to fetch weather data. Please check the city name.");
        } finally {
            setInternalLoading(false);
        }
    };

    const getCurrentLocation = () => {
        setLocationError("");
        
        if (!navigator.geolocation) {
            setLocationError("Geolocation is not supported by your browser");
            return;
        }

        setInternalLoading(true);
        
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;
                try {
                    // Fetch weather using coordinates
                    const response = await fetch(
                        `${API_URL}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
                    );
                    if (!response.ok) {
                        throw new Error("Failed to fetch weather data");
                    }
                    const jsonResponse = await response.json();
                    
                    const result = {
                        city: jsonResponse.name,
                        country: jsonResponse.sys.country,
                        feelslike: Math.round(jsonResponse.main.feels_like),
                        temp: Math.round(jsonResponse.main.temp),
                        tempMin: Math.round(jsonResponse.main.temp_min),
                        tempMax: Math.round(jsonResponse.main.temp_max),
                        humidity: jsonResponse.main.humidity,
                        weather: jsonResponse.weather[0].main,
                        description: jsonResponse.weather[0].description,
                        icon: jsonResponse.weather[0].icon,
                        windSpeed: jsonResponse.wind.speed,
                        pressure: jsonResponse.main.pressure,
                        sunrise: new Date(jsonResponse.sys.sunrise * 1000).toLocaleTimeString(),
                        sunset: new Date(jsonResponse.sys.sunset * 1000).toLocaleTimeString(),
                    };
                    
                    updateInfo(result);
                } catch (error) {
                    console.error("Failed to get weather for location:", error);
                    setLocationError("Failed to get weather for your location");
                } finally {
                    setInternalLoading(false);
                }
            },
            (error) => {
                let errorMessage = "Unable to get your location.";
                switch(error.code) {
                    case error.PERMISSION_DENIED:
                        errorMessage = "Location permission denied. Please allow location access.";
                        break;
                    case error.POSITION_UNAVAILABLE:
                        errorMessage = "Location information is unavailable.";
                        break;
                    case error.TIMEOUT:
                        errorMessage = "Location request timed out.";
                        break;
                }
                setLocationError(errorMessage);
                setInternalLoading(false);
                setTimeout(() => setLocationError(""), 5000);
            },
            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 0
            }
        );
    };

    const handleCloseLocationError = () => {
        setLocationError("");
    };

    return (
        <>
            <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
                <Box display="flex" gap={2} flexDirection={{ xs: 'column', sm: 'row' }}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Enter city name"
                        placeholder="e.g., New York, London, Tokyo, Delhi"
                        value={city}
                        onChange={(e) => {
                            setCity(e.target.value);
                            if (error) setError("");
                        }}
                        error={!!error}
                        helperText={error}
                        disabled={loading}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                borderRadius: 2,
                                '&:hover fieldset': {
                                    borderColor: '#764ba2',
                                },
                            },
                        }}
                    />
                    <Button 
                        type="submit" 
                        variant="contained" 
                        disabled={loading}
                        startIcon={loading ? <CircularProgress size={20} /> : <SearchIcon />}
                        sx={{ 
                            borderRadius: 2,
                            px: 4,
                            minWidth: 120,
                            background: "linear-gradient(45deg, #667eea 30%, #764ba2 90%)",
                            '&:hover': {
                                background: "linear-gradient(45deg, #764ba2 30%, #667eea 90%)",
                            },
                            '&:disabled': {
                                background: "#ccc",
                            }
                        }}
                    >
                        {loading ? "Loading..." : "Search"}
                    </Button>
                    <Button 
                        variant="outlined" 
                        onClick={getCurrentLocation}
                        disabled={loading}
                        startIcon={<MyLocationIcon />}
                        sx={{ 
                            borderRadius: 2, 
                            minWidth: 120,
                            borderColor: '#764ba2',
                            color: '#764ba2',
                            '&:hover': {
                                borderColor: '#667eea',
                                backgroundColor: 'rgba(102, 126, 234, 0.04)',
                            }
                        }}
                    >
                        Current
                    </Button>
                </Box>
            </Box>

            {/* Location Error Snackbar */}
            <Snackbar 
                open={!!locationError} 
                autoHideDuration={6000} 
                onClose={handleCloseLocationError}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert onClose={handleCloseLocationError} severity="warning" sx={{ width: '100%' }}>
                    {locationError}
                </Alert>
            </Snackbar>
        </>
    );
}

// PropTypes validation
SearchBox.propTypes = {
    updateInfo: PropTypes.func.isRequired,
    loading: PropTypes.bool,
};

SearchBox.defaultProps = {
    loading: false,
};
