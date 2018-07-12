import React from 'react';
import WeatherIcons from 'react-weathericons';

const stateToIconName = (weatherState)=>{
    switch (key) {
        case value:
            
            break;
    
        default:
        return "day-sunny";
            break;
    }
}
const getWeatherIcon = weatherState=>{
    switch (weatherState) {
        case "cloud":
            return (<WeatherIcons name="cloud" size="2x" />)    
        default:
            return (<WeatherIcons name="sleet" size="2x" />)            
    }
};
const WeatherTemperature = ({temperature,weatherState}) => (
    <div>
        {getWeatherIcon(weatherState)}       
        <span>{`${temperature}ºC`}</span>
    </div>
);

export default WeatherTemperature