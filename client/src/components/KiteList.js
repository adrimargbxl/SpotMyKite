import React from 'react';
import KiteSpot from './KiteSpot';
import { Segment } from 'semantic-ui-react';


export default ({ spotLists }) => (
  <div className="ui container">

    <Segment compact>
      {spotLists.map(spot =>
        <KiteSpot
          key={spot.city.id}
          weather={spot} />)}
    </Segment>
  </div>
);