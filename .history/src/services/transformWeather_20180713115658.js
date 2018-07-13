import React, { Component } from 'react';
import convert from 'convert-units';
import { SUN } from './../constants/weathers';


const getTemp = (kelvin) => {
    return Number(convert(kelvin).from('K').to('C').toFixed(1));
}

const getWeatherState = (weather) => {
    return SUN;
}

const transformWeather = (weather_data) => {
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState = getWeatherState(this.weather);
    const temperature = temp;

    const data = {
        humidity,
        temperature: getTemp(temp),
        weatherState,
        wind: `${speed} m/s`
    }
    return data;
}

export  default transformWeather;