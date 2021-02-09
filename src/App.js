import React from 'react';
import "./App.css"
import Weather from './app_component/weather.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';
import Form from './app_component/form.component.jsx';


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
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog"
    };
     
  
  }

  calcFaren(temp) {
    let cell = Math.floor(temp-240.94);
    return cell;
  }


  getWeatherIcon(icons, rangeNum){

    if(rangeNum >= 200 && rangeNum <=232){
      this.setState({icon:this.icons.Thunderstorm})
    }
    if(rangeNum >= 300 && rangeNum <= 321){
      this.setState({icon:this.icons.Drizzle})
    }
    if(rangeNum >= 500 && rangeNum <=521){
      this.setState({icon:this.icons.Rain})

    }
    if(rangeNum >= 600 && rangeNum <=622){
      this.setState({icon:this.icons.Snow})
    }
    if(rangeNum >= 600 && rangeNum <=622){
      this.setState({icon:this.icons.Snow})
    }
    if(rangeNum === 800){
      this.setState({icon:this.icons.Atmosphere})
    }
    if(rangeNum >= 801 && rangeNum <=804){
      this.setState({icon:this.icons.Clear})
    }
    else{
      this.setState({icon:this.icons.Clouds})
    }
};
  
  getWeather = async () => {
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Ithaca,us&appid=${API_key}`);
    //translate all data we fetched into json format
    const response = await api_call.json();
  

  //print out values
  

  this.setState({
    city: response.name,
    country: response.sys.country,
    faren : this.calcFaren(response.main.temp),
    temp_max : this.calcFaren(response.main.temp_max),
    temp_min : this.calcFaren(response.main.temp_min),
    description: response.weather[0].description,    
    error : false
  }); 

  //this.getWeatherIcon(this.weatherIcon, response.weather[0].id),


  console.log(response);

};
  render(){
  return (
  <div className="App">
    <Form />
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
