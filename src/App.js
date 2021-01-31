import React from 'react';
import "./App.css"
import Weather from './app_component/weather.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';


//api call to specific link needed to get information
const API_key="c12ba781ca76939ae9fa68cf7955c162";


class App extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.getWeather();
  }
  
  getWeather = async () => {
    const api_call = await fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_key}');
    //translate all data we fetched into json format
    const response = await api_call.json();
  

  //print out values
  console.log(response);
};
  render(){
  return (
  <div className="App">
    <Weather/>
  </div>
  );
}

}

export default App;
