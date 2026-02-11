import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./SearchBox.css";

export default function SearchBox() {
    const [city, setCity] = useState(""); // Correct syntax for state initialization

    const API_URL = "https://api.openweathermap.org/data/2.5/weather"; // Corrected URL path
    const API_KEY = "6571c0d302a742e23d34353d91257bb9";

    const getWeatherInfo = async () => {
        try {
            const response = await fetch(
                `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
            );
            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }
            const jsonResponse = await response.json();
            console.log(jsonResponse);

            const result = {
                city: jsonResponse.city,
                country: jsonResponse.sys.country,
                timestamp: new Date(jsonResponse.dt * 1000).toLocaleString(),
                icon: jsonResponse.weather[0].icon,
                description: jsonResponse.weather[0].description,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelslike: jsonResponse.main.feels_like,
                descriptions: jsonResponse.weather[0].description,
                icons: jsonResponse.weather[0].icon,
                windSpeed: jsonResponse.wind.speed,
                countrys: jsonResponse.sys.country,
                sunrise: new Date(jsonResponse.sys.sunrise * 1000).toLocaleTimeString(),
                sunset: new Date(jsonResponse.sys.sunset * 1000).toLocaleTimeString(),
            };
            console.log(result);
            return result;
            // updateInfo(result);
        } catch (error) {
            console.error("Failed to fetch weather information:", error);
        }
    };

    const handleChange = async(event) => {
        setCity(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (city.trim()) {
            setCity(""); // Clear input field after submission
            await getWeatherInfo();


        } else {
            console.warn("City name cannot be empty.");
        }
    };

    return (
        <div className="SearchBox" style={{ textAlign: "center", color: "red" }}>
            <h3>Search for the Weather</h3>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="Enter City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                />
                <br />
                <br />
                <Button variant="contained" type="submit">
                    Search
                </Button>
            </form>
        </div>
    );
}
