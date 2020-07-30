import React from 'react';
import KiteSpot from './KiteSpot';

export default ({ spotLists }) => (
  <div className="ui container">

    <div className="ui container">
      {spotLists.map(spot =>
        <KiteSpot
          key={spot.city.id}
          weather={spot} />)}
    </div>
  </div>
);