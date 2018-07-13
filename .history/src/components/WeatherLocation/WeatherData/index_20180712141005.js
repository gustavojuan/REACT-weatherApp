import React from 'react';
import Proptypes from 'prop-types';
import WeatherTemperature from './WeatherTemperature'
import WeatherExtraInfo from './WeatherExtraInfo';
import './styles.css';

const WeatherData = ({data}) => {

    const { temperature , weatherState, humidity, wind } = data;
    
    return (
        <div className='weatherDataCont'>
            <WeatherTemperature temperature={temperature} weatherState={weatherState}></WeatherTemperature>
            <WeatherExtraInfo humidity={humidity} wind={wind}></WeatherExtraInfo>
        </div>
    );
}

WeatherData.Proptypes

export default WeatherData;