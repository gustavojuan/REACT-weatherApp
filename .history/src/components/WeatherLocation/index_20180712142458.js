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

const data2 = {
    temperature: 35,
    weatherState: WINDY,
    humidity: 50,
    wind: '65 m/s'

}


class WeatherLocation extends Component{

    handleUpdateClick = () =>{
        console.log("updated")

        this.data = data2
    }
    render = () => (
        <div className='weatherLocationCont'>
            <Location city={'Buenos Aires'} />
            <WeatherData data={data} />
            <button onClick={this.handleUpdateClick}>Actualizar</button>
        </div>
        
    )
}

export default WeatherLocation;