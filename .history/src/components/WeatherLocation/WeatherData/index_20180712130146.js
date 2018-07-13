import React from 'react';
import WeatherTemperature from './WeatherTemperature'
import WeatherExtraInfo from './WeatherExtraInfo';
import {   
    WINDY
} from './../../../constants/weathers';
import './styles.css';

const WeatherData = () => (
    <div className='weatherDataCont'>
        <WeatherTemperature temperature={10} weatherState={WINDY}></WeatherTemperature>
        <WeatherExtraInfo humidity={80} wind={'10m/s'}></WeatherExtraInfo>
    </div>
)

export default WeatherData;