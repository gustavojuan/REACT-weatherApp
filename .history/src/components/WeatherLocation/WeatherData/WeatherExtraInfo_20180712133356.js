import React from 'react';
import propTypes from 'prop-types';
import './styles.css';

const WeatherExtraInfo = ({ humidity, wind }) => (
    <div className='weatherExtraInfoCont'>   
        <span className='extraInfoText' >{`${humidity}% | `} </span>
        <span className='extraInfoText'>{`${wind} wind `} </span>
    </div>
);

WeatherExtraInfo.propTypes = {
    humidity: propTypes.number.isRequired,
    wind: propTypes.string.isRequired,
}
export default WeatherExtraInfo;