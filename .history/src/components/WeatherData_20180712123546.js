import React from 'react';
import WeatherTemperature from './WeatherTemperature'
import WeatherExtraInfo from './WeatherExtraInfo';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY
} from './../constants/weathers';

const WeatherData = () => (
    <div>
        <WeatherTemperature temperature={10} weatherState={20}></WeatherTemperature>
        <WeatherExtraInfo humidity={80} wind={'10m/s'}></WeatherExtraInfo>
    </div>
)

export default WeatherData;