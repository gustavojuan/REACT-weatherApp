import React, { Component } from 'react';
import convert from 'convert-units';
import { WINDY, SNOW, SUN } from './../../constants/weathers';


getTemp = (kelvin) => {
    return convert(kelvin).from('K').to('C').toFixed(1);
}

getWeatherState = (weather) => {
    return SUN;
}

getData = (weather_data) => {
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState = this.getWeatherState(this.weather);
    const temperature = temp;

    const data = {
        humidity,
        temperature: this.getTemp(temp),
        weatherState,
        wind: `${speed} m/s`
    }
    return data;
}