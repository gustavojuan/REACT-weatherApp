import React from 'react';
import propTypes from 'prop-types';
import './styles.css';

const Location = ({city})=>(<div className='locationCont'><h1>{city}</h1></div>);

Location.propTypes = {
    city:propTypes.string.isRequired,
}

export default Location;