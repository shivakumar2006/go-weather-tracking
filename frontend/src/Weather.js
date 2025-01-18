import React, { useState } from 'react'; 
import axios from 'axios';
import './Weather.css'; 

const Weather = () => {

    const [ city, setCity ] = useState('');
    const [ error, setError ] = useState('');
    const [ loading, setLoading ] = useState('');
    const [ weatherData, setWeatherData ] = useState('');

    const fetchWeather = async () => {
        if (!city) {
            setError("Enter a city name...");
            return 
        }
        setLoading(true);
        try {
            const response = await axios.get(`http://localhost:8080/weather/${city}`);
            setWeatherData(response.data);
            setError('');
        } catch (err) {
            setError("Unable to fetch weather data. Please check the city name...");
            setWeatherData(null);
        } finally {
            setLoading(false);
        };
    };

    return (
        <div className='container'>
            <h1>Weather App</h1>
            <div>
                <input
                    type='text'
                    placeholder='Enter City'
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button onClick={fetchWeather} >Get Weather</button>
            </div> 
            {loading && <p>Loading...</p>}
            {error && <p className="error">{error}</p>}
            {weatherData && (
                <div className='weather-info'>
                    <h2>{weatherData.name}</h2>
                    <p>Temperature: {}</p>
                    <p>Humidity: {}</p>
                    <p>Pressure: {}</p>
                    <p>Wind Speed: {}</p>
                    <p>Description: {}</p>
                </div>
            )}
        </div>
    )
}

export default Weather;