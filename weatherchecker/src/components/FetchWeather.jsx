import React, { useState } from 'react';
import './FetchWeather.css';
import { WiThermometer, WiThermometerExterior, WiStrongWind, WiHumidity, WiRaindrops, WiFog } from 'react-icons/wi';

function FetchWeather() {
  const [temp, setTemp] = useState(null);
  const [windSpeed, setWindSpeed] = useState(null);
  const [dewPoint, setDewPoint] = useState(null);
  const [feelsLike, setFeelsLike] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [precipitation, setPrecipitation] = useState(null);
  const [city, setCity] = useState('');

  const fetchingData = async () => {
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '95c394624amsha4a5cc1d82aa4f8p1edaa9jsnb4989dac6ad9',
        'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      
      // Setting values if the result is successful
      if (result.current) {
        setTemp(result.current.temp_c);
        setFeelsLike(result.current.feelslike_c);
        setWindSpeed(result.current.wind_mph);
        setHumidity(result.current.humidity);
        setPrecipitation(result.current.precip_mm);
        setDewPoint(result.current.dewpoint_c);
      } else {
        alert("No data available for this location.");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to fetch data.");
    }
  };

  return (
    <div className='main'>
      <h3>Search your desired location weather</h3>
      <div className="search">
        <input 
          type="text" 
          placeholder='Enter city name' 
          value={city} 
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchingData}>Search</button>
      </div>

      <ul className="weather-info">
        <li>
          <WiThermometer />
          <span>Temperature</span>
          <div>{temp !== null ? `${temp} °C` : '--'}</div>
        </li>
        <li>
          <WiThermometerExterior />
          <span>Feels Like</span>
          <div>{feelsLike !== null ? `${feelsLike} °C` : '--'}</div>
        </li>
        <li>
          <WiStrongWind />
          <span>Wind Speed</span>
          <div>{windSpeed !== null ? `${windSpeed} mph` : '--'}</div>
        </li>
        <li>
          <WiHumidity />
          <span>Humidity</span>
          <div>{humidity !== null ? `${humidity}%` : '--'}</div>
        </li>
        <li>
          <WiRaindrops />
          <span>Precipitation</span>
          <div>{precipitation !== null ? `${precipitation} mm` : '--'}</div>
        </li>
        <li>
          <WiFog />
          <span>Dew Point</span>
          <div>{dewPoint !== null ? `${dewPoint} °C` : '--'}</div>
        </li>
      </ul>
    </div>
  );
}

export default FetchWeather;
