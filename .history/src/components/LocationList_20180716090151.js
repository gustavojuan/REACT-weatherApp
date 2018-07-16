import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';

const LocationList = ({cities}) =>(
    <div>

        {cities.map(el=>{
            <WeatherLocation city={el}></WeatherLocation>
        })}
      
    </div>
);
LocationList.PropTypes = {
    cities : PropTypes.array.isRequired,
}
export default LocationList;