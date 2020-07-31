import React, { useState, useEffect } from 'react';
import ApiClient from './services/ApiClient';
import KiteList from './components/KiteList';
import SpotMap from './components/SpotMap';
import FormExample from './components/FormExample';



export default () => {

  const [spotLists, setSpotLists] = useState([]);
  const [formData, setFormData] = useState([]);
  console.log(formData);


  const belgianKiteSpots = ["Oostduinkerke", "Zeebrugge", "Bredene", "Koksijde-Bad", "Blankenberge", "Groenendijk", "De Panne"];


  useEffect(() => {
    for (let spot of belgianKiteSpots) {
      ApiClient.fetchRequest(spot)
        .then(data => setSpotLists((spotLists) => [...spotLists, data]));
    }
  }, []);

  return (
    <>
      <FormExample onChange={(value1, value2) => setFormData([value1, value2])} />
      <KiteList spotLists={spotLists} />
      <SpotMap spotLists={spotLists} />

    </>
  )
}





