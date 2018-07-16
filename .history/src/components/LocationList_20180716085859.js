import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';

const LocationList = ({cities}) =>(
    <div>
        <WeatherLocation city ={'Buenos Aires, ar'}></WeatherLocation>
        <WeatherLocation city={'Madrid, es'}></WeatherLocation>
        <WeatherLocation city={'Bogotá, col'}></WeatherLocation>
    </div>
);
LocationList.PropTypes = {
    cities : PropTypes.array,
}
export default LocationList;