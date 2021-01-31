import logo from './logo.svg';
import React from 'react';
import Weather from './app_components/weather.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';




function App() {
  return (
    <div className="App">
      <Weather/>
    </div>
  );
}

export default App;
