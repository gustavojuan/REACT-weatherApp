import React from 'react';
import WeatherIcons from 'react-weathericons';

const WeatherTemperature = ({temperature,weatherState}) => (
    <div>
        <WeatherIcons name={weatherState} size="2x" />
        <span>{`${temperature}ºC`}</span>
    </div>
)

export default WeatherTemperature