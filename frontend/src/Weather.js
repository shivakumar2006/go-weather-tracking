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
            console.log(response.data)
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
                    <p>Temperature: {weatherData.main?.temp ? weatherData.main.temp.toFixed(2): 'No data'}°C</p>
                    <p>Humidity: {weatherData.main?.humidity ?? 'No data'}%</p>
                    <p>Pressure: {weatherData.main?.pressure ?? 'No data'} hPa</p>
                    <p>Wind Speed: {weatherData.wind?.speed ?? 'No data'} m/s</p>
                    <p>Description: {weatherData.weather?.[0]?.description ?? 'No description available'}</p>
                </div>
            )}
        </div>
    )
}

export default Weather;