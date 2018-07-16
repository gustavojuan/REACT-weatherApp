import React from 'react';
import propTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';

const strToComponent = cities =>(
    cities.map(city => (<WeatherLocation city={city}></WeatherLocation>) )
);
const LocationList = ({cities}) =>(
    <div>
        {strToComponent(cities)}      
    </div>
);
LocationList.propTypes = {
    cities: propTypes.array.isRequired,
}
export default LocationList;