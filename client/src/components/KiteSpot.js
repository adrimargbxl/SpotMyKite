import React, { useState, useEffect } from 'react';
import { Segment, Icon, Grid, Image, Button } from 'semantic-ui-react';
import PopupKite from './Modals/PopupKite';
import KiteImage7 from '../images/7mKite.jpeg';
import KiteImage8 from '../images/8mKite.jpeg';
import KiteImage9 from '../images/9mKite.jpeg';
import KiteImage10 from '../images/10mKite.jpeg';
import KiteImage11 from '../images/11mKite.jpeg';
import KiteImage12 from '../images/12mKite.jpeg';
import KiteImageGeneric from '../images/genericKite.jpeg';
import HourlyForecast from './Modals/HourlyForecast';
const d2d = require('degrees-to-direction');

export default ({ weather, formData, myClick, lat, lon }) => {
  const windDirection = d2d(weather.wind.deg);
  const windSpeed = Math.round((weather.wind.speed * 1.943844 * 100) / 100);

  function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
  }

  const windDirectionArrow = (windDegree) => {
    return (
      <Icon
        style={{ color: 'orange' }}
        className="long arrow alternate down huge"
        style={{ transform: `rotate(${windDegree}deg)` }}
      ></Icon>
    );
  };

  //incomplete algo
  const recommendedKiteSize = () => {
    let weight = formData[0];
    let wind = windSpeed;
    let result = Math.round((weight / wind) * 2.2);
    if (result > 17) return <h3> not windy enough to kite ! </h3>;
    if (wind < 9) return <h3> not windy enough to kite ! </h3>;
    if (wind > 36) return <h3>'too windy to kite!'</h3>;
    if (result < 7 || result > 12)
      return (
        <div>
          <div>
            <Image src={KiteImageGeneric} />
          </div>
          <h3>{result} m</h3>
        </div>
      );
    if (result === 7)
      return (
        <div>
          <div>
            <Image src={KiteImage7} />
          </div>
          <h3>{result} m</h3>
        </div>
      );
    if (result === 8)
      return (
        <div>
          <div>
            <Image src={KiteImage8} />
          </div>
          <h3>{result} m</h3>
        </div>
      );
    if (result === 9)
      return (
        <div>
          <div>
            <Image src={KiteImage9} />
          </div>
          <h3>{result} m</h3>
        </div>
      );
    if (result === 10)
      return (
        <div>
          <div>
            <Image src={KiteImage10} />
          </div>
          <h3>{result} m</h3>
        </div>
      );
    if (result === 11)
      return (
        <div>
          <div>
            <Image src={KiteImage11} />
          </div>
          <h3>{result} m</h3>
        </div>
      );
    if (result === 12)
      return (
        <div>
          <div>
            <Image src={KiteImage12} />
          </div>
          <h3>{result} m</h3>
        </div>
      );
  };

  return (
    <Segment inverted style={{ backgroundColor: 'rgb(231,85,93,0.8)' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '7px',
        }}
      >
        <h3>{weather.name}</h3>
        <Button
          size="medium"
          value={weather.name}
          circular
          icon="close"
          style={{ backgroundColor: 'rgb(255,255,255,0)' }}
          onClick={(e) => {
            e.preventDefault();
            let value = weather.name;
            myClick(value);
          }}
        />
      </div>
      <Grid columns={3} divided>
        <Grid.Row stretched>
          <Grid.Column>
            <Segment compact>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}
              >
                <div style={{ display: 'flex' }}>
                  <img
                    src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                    alt="weather img"
                  />
                  <h2>{Math.round(weather.main.temp)} °C</h2>
                </div>
              </div>
              <h3
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}
              >
                {weather.weather[0].description}
              </h3>
            </Segment>
          </Grid.Column>

          <Grid.Column>
            <Segment compact>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}
              >
                <div>{windDirectionArrow(weather.wind.deg)}</div>
                <div>
                  <h2>{windDirection}</h2>
                </div>
              </div>
              <h3
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}
              >
                <i class="fas fa-wind"></i> {windSpeed} knots
              </h3>
            </Segment>
          </Grid.Column>

          <Grid.Column>
            <Segment compact>
              <h3>Recommended Size:</h3>
              {recommendedKiteSize() ? (
                recommendedKiteSize()
              ) : (
                <h3>please fill-out form</h3>
              )}
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <PopupKite />
              </div>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <div
        style={{
          marginTop: '10px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <HourlyForecast spotName={weather.name} />
        <Button>
          <Icon
            className="map outline"
            onClick={(e) => {
              e.preventDefault();
              openInNewTab(
                `https://www.google.com/maps/dir/${lat[0]},${lon[0]}/${weather.coord.lat},${weather.coord.lon}/`
              );
            }}
          ></Icon>
        </Button>
      </div>
    </Segment>
  );
};
