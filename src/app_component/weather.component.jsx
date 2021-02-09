import React from 'react';


const Weather = props => {
    return (
    <div className="container">
        <div className="cards">

            <h1>
            {props.city}, {props.country}
            </h1>
            <h1 className="py-4">
            <i className="wi wi-day-sleet display-1"></i>

            </h1>
            <h1 className="py-2">{props.temp_faren};</h1>
            {/** show max and min temps here */}
            {minmaxTemp(props.temp_min, props.temp_max)}


            <h4 className = "py-3">{props.description}</h4>
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