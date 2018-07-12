import React from 'react';
import WeatherIcons from 'react-weathericons';

const stateToIconName = (weatherState)=>{
    switch (weatherState) {
        case 'cloud':            
            return "cloud";    
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