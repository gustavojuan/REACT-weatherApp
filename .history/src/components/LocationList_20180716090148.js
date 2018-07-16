import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';

const LocationList = ({cities}) =>(
    <div>

        {cities.map(el=>{
            <WeatherLocation city={el}></WeatherLocation>
        })}
        <WeatherLocation city ={'Buenos Aires, ar'}></WeatherLocation>
        <WeatherLocation city={'Madrid, es'}></WeatherLocation>
        <WeatherLocation city={'Bogotá, col'}></WeatherLocation>
    </div>
);
LocationList.PropTypes = {
    cities : PropTypes.array.isRequired,
}
export default LocationList;