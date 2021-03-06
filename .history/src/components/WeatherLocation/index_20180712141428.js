import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData/index';
import './styles.css';
import {    WINDY,    SNOW } from './../../constants/weathers';
const data = {
    temperature: 20,
    weatherState: 'SNOW',
    humidity: 85,
    wind:'10 m/s'

}
const WeatherLocation = () => (
    <div className='weatherLocationCont'>
        <Location city={'Buenos Aires'}/>
        <WeatherData data={data} />
    </div>
)
export default WeatherLocation;