export default {
  fetchRequest: (spotName) => {
    return fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${spotName}&units=metric&appid=8c0c94ba5706edfd81e975741cdf63d2`
    )
      .then((res) => (res.status < 400 ? res : Promise.reject(res)))
      .then((res) => res.json())
      .catch((err) => {
        console.log(`${err.message}`);
      });
  },

  forecastRequest: (spotName) => {
    return fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${spotName}&units=metric&appid=8c0c94ba5706edfd81e975741cdf63d2`
    )
      .then((res) => (res.status < 400 ? res : Promise.reject(res)))
      .then((res) => res.json())
      .catch((err) => {
        console.log(`${err.message}`);
      });
  },
};
