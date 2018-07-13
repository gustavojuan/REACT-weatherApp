import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData/index';
import './styles.css';
import { WINDY, SNOW, SUN } from './../../constants/weathers';

const data = {
    temperature: 20,
    weatherState: SUN,
    humidity: 85,
    wind: '10 m/s'

}
class WeatherLocation extends Component{


    render = () => (
        <div className='weatherLocationCont'>
            <Location city={'Buenos Aires'} />
            <WeatherData data={data} />
            <button>Actulizar</button>
        </div>
        
    )
}

export default WeatherLocation;