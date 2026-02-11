import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp() {
    let [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelslike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze",
        country: "India ",
        description: "Cloudy",
        icon: "04d",
        sunrise: "16:20",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div className="WeatherApp" style={{ color: "red", textAlign: "center" }}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
            


    
        </div>
    )
}
