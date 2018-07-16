import React from 'react';
import WeatherLocation from './WeatherLocation';

const LocationList = () =>(
    <div>
        <WeatherLocation city ={'Buenos Aires, ar'}></WeatherLocation>
        <WeatherLocation city={'Madrid, es'}></WeatherLocation>
        <WeatherLocation city={'Bogotá, col'}></WeatherLocation>
    </div>
);

export default LocationList;