import config from '../config';

const myKey = config.REACT_APP_API_KEY;

export default {
  fetchRequest: (spotName) => {
    return fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${spotName}&units=metric&appid=${myKey}`
    )
      .then((res) => (res.status < 400 ? res : Promise.reject(res)))
      .then((res) => res.json())
      .catch((err) => {
        console.log(`${err.message}`);
      });
  },

  forecastRequest: (spotName) => {
    return fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${spotName}&units=metric&appid=${myKey}`
    )
      .then((res) => (res.status < 400 ? res : Promise.reject(res)))
      .then((res) => res.json())
      .catch((err) => {
        console.log(`${err.message}`);
      });
  },
};
