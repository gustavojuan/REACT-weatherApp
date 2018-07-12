import React from 'react';
import WeatherTemperature from './WeatherTemperature'
import WeatherExtraInfo from './WeatherExtraInfo';
import {
   
    WINDY
} from './../constants/weathers';

const WeatherData = () => (
    <div>
        <WeatherTemperature temperature={10} weatherState={WINDY}></WeatherTemperature>
        <WeatherExtraInfo humidity={80} wind={'10m/s'}></WeatherExtraInfo>
    </div>
)

export default WeatherData;