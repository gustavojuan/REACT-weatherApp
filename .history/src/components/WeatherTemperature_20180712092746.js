import React from 'react';
import WeatherIcons from 'react-weathericons';
const getWeatherIcon = (weatherState)=>{
    switch (weatherState) {
        case value:
            
            break;
    
        default:
            break;
    }
};
const WeatherTemperature = ({temperature,weatherState}) => (
    <div>
        {getWeatherIcon(weatherState)}
        <WeatherIcons name={weatherState} size="2x" />
        <span>{`${temperature}ºC`}</span>
    </div>
);

export default WeatherTemperature