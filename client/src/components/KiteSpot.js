import React from 'react';
import { Segment, Icon, Grid, Image } from 'semantic-ui-react';
import KiteImage from "../images/7mKite.jpeg"
const d2d = require('degrees-to-direction');


export default ({ weather, formData }) => {
  console.log(formData);


  const windDirection = d2d(weather.list[0].wind.deg);
  const windSpeed = Math.round(((weather.list[0].wind.speed) * 1.943844) * 100 / 100);

  const windDirectionArrow = (windDegree) => {
    return <Icon className="long arrow alternate down big" style={{ transform: `rotate(${ windDegree }deg)` }}></Icon>
  }

  const recommendedKiteSize = () => {
    let weight = formData[0];
    let wind = windSpeed;
    console.log(weight);
    return Math.round((weight / wind) * 2.2);
  }

  const kiteImage = () => {
    return <Image src={KiteImage}></Image>
  }

  return (
    <Segment inverted style={{ backgroundColor: "rgb(231,85,93,0.8)" }}>
      <h3>{weather.city.name}</h3>

      <Grid columns={3} divided>
        <Grid.Row stretched>
          <Grid.Column>
            <Segment compact>
              <div style={{ display: "flex", justifyContent: "center", alignSelf: "center" }}>
                <div>
                  <img src={`http://openweathermap.org/img/wn/${ weather.list[0].weather[0].icon }@2x.png`} alt="weather img" />
                  <h2>{weather.list[0].main.temp} °C</h2>
                </div>
              </div>
              <h3 style={{ display: "flex", justifyContent: "center", alignSelf: "center" }}>{weather.list[0].weather[0].description}</h3>
            </Segment>
          </Grid.Column>

          <Grid.Column>
            <Segment compact>
              <div style={{ display: "flex", justifyContent: "center", alignSelf: "center" }}>
                <div>
                  {windDirectionArrow(weather.list[0].wind.deg)}
                </div>
                <h2>{windDirection}</h2>
              </div>

              <h3 style={{ display: "flex", justifyContent: "center", alignSelf: "center" }}><i class="fas fa-wind"></i> {windSpeed} knots</h3>
            </Segment>
          </Grid.Column>

          <Grid.Column>
            <Segment compact>
              <h3>
                Recommended Size: {recommendedKiteSize() ? `${ recommendedKiteSize() }m` : "-"}
              </h3>
              {kiteImage()}
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
};

