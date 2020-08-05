import React, { useState, useEffect } from 'react';
import ApiClient from '../../services/ApiClient';
import { Button, Modal, Container, Icon } from 'semantic-ui-react';
import moment from 'moment';

function HourlyForecast({ spotName }) {
  const [open, setOpen] = React.useState(false);
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    ApiClient.forecastRequest(spotName).then((data) =>
      setForecast((forecast) => [...forecast, data])
    );
  }, []);

  const windDirectionArrow = (windDegree) => {
    return (
      <Icon
        style={{ color: 'orange' }}
        className="long arrow alternate down huge"
        style={{ transform: `rotate(${windDegree}deg)` }}
      ></Icon>
    );
  };

  const forecasted = forecast.length
    ? forecast[0].list.slice(0, 7).map((hour) => (
        <Container>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              margin: '15px',
            }}
          >
            <div style={{ marginBottom: '5px', display: 'flex' }}>
              <img
                src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}
                alt="weather img"
              />
              <h2>{Math.round(hour.main.temp)} °C</h2>
            </div>
            <div
              style={{
                marginBottom: '5px',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              {windDirectionArrow(hour.wind.deg)}
              <h4>
                {Math.round((hour.wind.speed * 1.943844 * 100) / 100)} knots
              </h4>
            </div>
            <h3>{moment.unix(hour.dt).format('dddd h:mm a')}</h3>
          </div>
        </Container>
      ))
    : null;

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button mini>see today's forecast</Button>}
      style={{ width: '70vw', height: '35vh' }}
    >
      <Modal.Header>
        {forecast.length ? forecast[0].city.name : null}
      </Modal.Header>

      <Container
        horizontal
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {forecasted}
      </Container>
    </Modal>
  );
}

export default HourlyForecast;
