import React from 'react';
import App from '../App';

const Weather = () => {
    return (
    <div className="container">
        <div className="cards">

            <h1>New York</h1>
            <h1 className="py-4">
            <i className="wi wi-day-sleet display-1"></i>

            </h1>
            <h1 className="py-2">25&deg;</h1>
            {/** show max and min temps here */}
            {minmaxTemp(24, 19)}


            <h4 className = "py-3">Raining</h4>
        </div>
    </div>
    );
}


function minmaxTemp(min,max){
    return (
        <h3>
        <span className="px-4">{min}&deg;</span>
        <span className="px-4">{max}&deg;</span>
        </h3>
    );
}


export default Weather;