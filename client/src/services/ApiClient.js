export default {
  fetchRequest: (spotName) => {
    return fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${ spotName }&units=metric&appid=1daaa79ec9fc6f1f398a40c9939c5238`)
      .then((res) => (res.status < 400 ? res : Promise.reject(res)))
      .then(res => res.json())
      .catch((err) => {
        console.log(`${ err.message }`)
      })
  }
}
