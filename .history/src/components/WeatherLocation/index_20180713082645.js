import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData/index';
import './styles.css';
import { WINDY, SNOW, SUN } from './../../constants/weathers';

const apikey = "a8789edde3a4b51f9d270d4710f105c0"
const location = "Gandia,es"
const apiweather = `https://samples.openweathermap.org/data/2.5/weather?q=${location}&appid=${apikey}`;

const data1 = {
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


class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            city: 'Buenos Aires',
            data: data1
        }
    }

    handleUpdateClick = () => {
        fetch(apiweather).then(data=>{
            console.log(data);
            debugger;
        })
            
        /*   
          this.setState({           
              data: data2
          }); */
    }

    render = () => {

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