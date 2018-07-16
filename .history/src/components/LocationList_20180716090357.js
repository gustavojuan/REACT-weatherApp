import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';

const strToComponent = cities =>(
    cities.map(city => (<WeatherLocation city={city}></WeatherLocation>) )
);
const LocationList = ({cities}) =>(
    <div>
        {strToComponent()}
       
      
    </div>
);
LocationList.PropTypes = {
    cities : PropTypes.array.isRequired,
}
export default LocationList;