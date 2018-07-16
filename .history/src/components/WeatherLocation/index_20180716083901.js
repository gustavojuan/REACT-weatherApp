import React, { Component } from 'react';

import CircularProgress from 'material-ui/CircularProgress'
import PropTypes from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData/index';
import transformWeather from './../../services/transformWeather';
import './styles.css';

const url = "https://api.openweathermap.org/data/2.5/weather"
const apikey = "a8789edde3a4b51f9d270d4710f105c0"
const city = "Potries,es"
const apiweather = `${url}?q=${city}&appid=${apikey}`;




class WeatherLocation extends Component {

    constructor({city}) {
        super();
        this.state = {
            city,
            data: null
        }
        
    }


    handleUpdateClick = () => {
        fetch(apiweather)
            .then(data => (data.json()))
            .then(weather_data => {
                const data = transformWeather(weather_data);
                this.setState({ data:data });             
            })
    }

    
    componentWillMount() {
        this.handleUpdateClick();
    }    
    

    render = () => {        
        const { city, data } = this.state;
        return (
            <div className='weatherLocationCont'>
                <Location city={city} />
                {data ? <WeatherData data={data} /> : <CircularProgress  /> }                
            </div>
        );
        

    }
}

WeatherLocation.propTypes = {
    city:PropTypes.string,
}
export default WeatherLocation;