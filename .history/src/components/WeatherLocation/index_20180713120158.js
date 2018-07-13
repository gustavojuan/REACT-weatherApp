import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData/index';
import transformWeather from './../../services/transformWeather';
import { WINDY, SNOW, SUN } from './../../constants/weathers';
import './styles.css';


const apikey = "a8789edde3a4b51f9d270d4710f105c0"
const location = "Potries,es"
const apiweather = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apikey}`;

const data1 = {
    temperature: 20,
    weatherState: SUN,
    humidity: 85,
    wind: '10 m/s'

}


class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            city: 'Buenos Aires',
            data: data1
        }
        console.log('constructor');
    }


    handleUpdateClick = () => {
        fetch(apiweather)
            .then(data => (data.json()))
            .then(weather_data => {
                const data = transformWeather(weather_data);
                this.setState({ data });             
            })
    }

    
    componentWillMount() {
        console.log('componentWillMount');
    }  
    
    

    render = () => {
        console.log('render');
        const { city, data } = this.state;
        return (
            <div className='weatherLocationCont'>
                <Location city={city} />
                <WeatherData data={data} />
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
        

    }
}

export default WeatherLocation;