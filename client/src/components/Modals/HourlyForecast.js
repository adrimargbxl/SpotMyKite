import React, { useState, useEffect } from 'react';
import ApiClient from '../../services/ApiClient';
import { Button, Modal, Segment, Container } from 'semantic-ui-react';

function HourlyForecast({ spotName }) {
  const [open, setOpen] = React.useState(false);
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    ApiClient.forecastRequest(spotName).then((data) =>
      setForecast((forecast) => [...forecast, data])
    );
  });

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button mini>see today's forecast</Button>}
    >
      <Modal.Header>
        {forecast.length ? forecast[0].city.name : null}
      </Modal.Header>
      <Container
        horizontal
        style={{ display: 'flex', overflow: 'auto', maxWidth: '100vh' }}
      >
        {forecast.length
          ? forecast[0].list.slice(0, 7).map((hour) => (
              <Segment compact>
                <div style={{ padding: '2px' }}>
                  <div style={{ display: 'flex' }}>
                    <img
                      src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}
                      alt="weather img"
                    />
                    <h2>{Math.round(hour.main.temp)} °C</h2>
                  </div>
                  <h3></h3>
                </div>
              </Segment>
            ))
          : null}
      </Container>
    </Modal>
  );
}

export default HourlyForecast;
