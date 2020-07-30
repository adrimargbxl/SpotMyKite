import React, { useState, useEffect } from 'react';
import ApiClient from './services/ApiClient';
import KiteList from './components/KiteList';
import SpotMap from './components/SpotMap';


export default () => {

  const [spotLists, setSpotLists] = useState([]);


  const belgianKiteSpots = ["Oostduinkerke", "Zeebrugge", "Bredene", "Koksijde-Bad", "Blankenberge", "Groenendijk"];


  useEffect(() => {
    for (let spot of belgianKiteSpots) {
      ApiClient.fetchRequest(spot)
        .then(data => setSpotLists((spotLists) => [...spotLists, data]));
    }
  }, []);

  return (
    <>
      <KiteList spotLists={spotLists} />
      <SpotMap spotLists={spotLists} />
    </>
  )
}





