import React from 'react';
import WeatherTemperature from './WeatherTemperature'
import WeatherExtraInfo from './WeatherExtraInfo';

const WeatherData = () => (
    <div>
        <WeatherTemperature></WeatherTemperature>
        <WeatherExtraInfo humidity={80} wind={'10m/s'}></WeatherExtraInfo>
    </div>
)

export default WeatherData;