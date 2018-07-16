import React from 'react';
import WeatherIcons from 'react-weathericons';
import propTypes from 'prop-types';
import { CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY, THUNDER, DRIZZLE } from './../../../constants/weathers';
import './styles.css';

const stateToIconName = (weatherState)=>{
    switch (weatherState) {
        case CLOUD:            
            return "cloud";  
        case CLOUDY:
            return "cloudy";  
        case SUN:
            return "day-sunny";   
        case RAIN:
            return "rain";  
        case SNOW:
            return "snow";   
        case WINDY:
            return "windy";   
        default:
            return "day-sunny";          
    }
}

const getWeatherIcon = weatherState=>{
    return (<WeatherIcons className ="wicon" name={stateToIconName(weatherState)} size="4x" />)  ;
};

const WeatherTemperature = ({temperature,weatherState}) => (
    <div className='weatherTemperatureCont'>
        {getWeatherIcon(weatherState)}       
        <span className='temperature'>{`${temperature}`}</span>
        <span className='temperaturetype'>ºC</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: propTypes.number.isRequired,
    weatherState: propTypes.string,
}

export default WeatherTemperature