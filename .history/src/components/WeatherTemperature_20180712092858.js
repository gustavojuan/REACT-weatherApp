import React from 'react';
import WeatherIcons from 'react-weathericons';
const getWeatherIcon = (weatherState)=>{
    switch (weatherState) {
        case value:
            return (<WeatherIcons name="sleet" size="2x" />)           
    
        default:
            return (<WeatherIcons name="sleet" size="2x" />)
            break;
    }
};
const WeatherTemperature = ({temperature,weatherState}) => (
    <div>
        {getWeatherIcon(weatherState)}       
        <span>{`${temperature}ºC`}</span>
    </div>
);

export default WeatherTemperature