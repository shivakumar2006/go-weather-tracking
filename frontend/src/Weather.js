import React, { useState } from 'react'; 
import axios from 'axios';
import './Weather.css'; 

const Weather = () => {

    const [ city, setCity ] = useState('');
    const [ error, setError ] = useState('');
    const [ loading, setLoading ] = useState('');

    const fetchWeather = () => {
        if (!city) {
            setError("Enter a city name...");
            return 
        }
        setLoading(true);
        try

    }

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
        </div>
    )
}

export default Weather;