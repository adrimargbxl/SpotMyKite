import React from 'react';
import { Segment, Icon } from 'semantic-ui-react';
const d2d = require('degrees-to-direction');


export default ({ weather }) => {

  const windDirection = d2d(weather.list[0].wind.deg);
  const windSpeed = Math.round(((weather.list[0].wind.speed) * 1.943844) * 100 / 100);

  const windDirectionArrow = (windDirection) => {
    if (windDirection === "SE") return <Icon className="long arrow alternate up big" data-fa-transform="rotate-270"></Icon>;
    else return <Icon className="long arrow alternate right big"></Icon>
  }

  return (
    <Segment>
      <div className="ui horizontal list compact">
        <h3>{weather.city.name}</h3>
        <div className="item">
          <Segment compact>
            <div>
              <img src={`http://openweathermap.org/img/wn/${ weather.list[0].weather[0].icon }@2x.png`} alt="weather img" />
            </div>
            <h4>{weather.list[0].main.temp} °C</h4>
          </Segment>

        </div>
        <div className="item">
          <Segment compact>
            <div>
              {windDirectionArrow(windDirection)}
            </div>
            <h4>Wind Direction: {windDirection}</h4>
            <h4>Wind Speed: {windSpeed}</h4>
          </Segment>
        </div>
      </div>
    </Segment>
  )
};

