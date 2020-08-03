import React from 'react';
import { Segment, Icon, Grid, Image, Header } from 'semantic-ui-react';
import KiteImage from '../images/7mKite.jpeg';
const d2d = require('degrees-to-direction');

export default ({ weather, formData }) => {
  const windDirection = d2d(weather.wind.deg);
  const windSpeed = Math.round((weather.wind.speed * 1.943844 * 100) / 100);

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
    return Math.round((weight / wind) * 2.2);
  };

  const kiteImage = () => {
    return <Image src={KiteImage}></Image>;
  };

  return (
    <Segment inverted style={{ backgroundColor: 'rgb(231,85,93,0.8)' }}>
      <h3>{weather.name}</h3>

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
                <h2>{windDirection}</h2>
              </div>

              <h3
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}
              >
                {' '}
                <i class="fas fa-wind"></i> {windSpeed} knots{' '}
              </h3>
            </Segment>
          </Grid.Column>

          <Grid.Column>
            <Segment compact>
              <h3>
                Recommended Size:{' '}
                {recommendedKiteSize() ? `${recommendedKiteSize()}m` : '-'}
              </h3>
              {kiteImage()}
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Icon className="info"></Icon>
              </div>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};
