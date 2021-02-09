import React from 'react';
import "./App.css"
import Weather from './app_component/weather.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';


//api call to specific link needed to get information
const API_key="c12ba781ca76939ae9fa68cf7955c162";


//api call to specific link needed to get information

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      faren: undefined,
      temp_max: null,
      temp_min: null,
      description: "",
      error: false
    };

    this.getWeather();

    this.weatherIcon = {
      Thunderstorm: "wi-thunderstorm",
     
    };
  }

  calcFaren(temp) {
    let cell = Math.floor(temp-240.94);
    return cell;
  }

  
  getWeather = async () => {
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Ithaca,us&appid=${API_key}`);
    //translate all data we fetched into json format
    const response = await api_call.json();
  

  //print out values
  console.log(response);

  this.setState({
    city: response.name,
    country: response.sys.country,
    faren : this.calcFaren(response.main.temp),
    temp_max : this.calcFaren(response.main.temp_max),
    temp_min : this.calcFaren(response.main.temp_min)
    
  });
};
  render(){
  return (
  <div className="App">
    <Weather
    city={this.state.city}
    country={this.state.country} 
    weatherIcon={this.state.icon}
    temp_faren={this.state.faren}
    temp_max={this.state.temp_max}
    temp_min={this.state.temp_min}
    description={this.state.description}
    />
  </div>
  );
}

} 

export default App;
