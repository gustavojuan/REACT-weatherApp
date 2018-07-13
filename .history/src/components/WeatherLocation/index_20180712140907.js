import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData/index';
import './styles.css';
import {
    WINDY,
    SNOW
} from './../../constants/weathers';

const WeatherLocation = () => (
    <div className='weatherLocationCont'>
        <Location city={'Buenos Aires'}/>
        <WeatherData />
    </div>
)
export default WeatherLocation;