import React from 'react';


export default ({ weather }) => (
  <div className="ui card">
    <div className="ui container">
      <h3>{weather.city.name}</h3>
    </div>
    <div className="ui container">
      <img src={`http://openweathermap.org/img/wn/${ weather.list[0].weather[0].icon }@2x.png`} alt="weather img" />
      <h4>{weather.list[0].main.temp} °C</h4>
    </div>
    <div className="ui container">
      <h4>{weather.list[0].wind.deg}</h4>
      <h4>{weather.list[0].wind.speed}</h4>
    </div>


  </div>
);