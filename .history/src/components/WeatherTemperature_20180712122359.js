import React from 'react';
import WeatherIcons from 'react-weathericons';
import {
    CLOUD
CLOUDY
SUN
RAIN
SNOW
WINDY
} from '../constants/weathers';

const stateToIconName = (weatherState)=>{
    switch (weatherState) {
        case 'cloud':            
            return "cloud";  
        case 'cloudy':
            return "cloudy";  
        case 'sun':
            return "day-sunny";   
        case 'rain':
            return "rain";  
        case 'snow':
            return "snow";   
        case 'windy':
            return "windy";   
        default:
            return "day-sunny";          
    }
}
const getWeatherIcon = weatherState=>{
    return (<WeatherIcons name={stateToIconName(weatherState)} size="2x" />)  ;
};
const WeatherTemperature = ({temperature,weatherState}) => (
    <div>
        {getWeatherIcon(weatherState)}       
        <span>{`${temperature}ºC`}</span>
    </div>
);

export default WeatherTemperature