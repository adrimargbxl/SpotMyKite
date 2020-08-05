import * as React from 'react';
import { useState } from 'react';
import PopupCam from './Modals/PopupCam';
import ReactMapGL, { Marker } from 'react-map-gl';
import { Segment } from 'semantic-ui-react';

export default ({ spotLists }) => {
  const [viewport, setViewport] = useState({
    width: '44.5vw',
    height: '58.7vh',
    latitude: 51.2,
    longitude: 2.9,
    zoom: 9,
  });

  const markers = spotLists.map((spot) => (
    <Marker key={spot.id} latitude={spot.coord.lat} longitude={spot.coord.lon}>
      <PopupCam spot={spot} />
    </Marker>
  ));

  return (
    <Segment compact style={{ backgroundColor: 'rgb(255,255,255,0.7)' }}>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={`pk.eyJ1IjoiYWRyaW1hcmdieGwiLCJhIjoiY2tkOG1ia3I2MGVkODJycGNnNDRweTg3ZSJ9.7NJ4e2L0KL7KmD7-iTpVZw`}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        mapStyle="mapbox://styles/adrimargbxl/ckd92iirk1aso1iqb8n126g5a"
      >
        <div>{markers}</div>
      </ReactMapGL>
    </Segment>
  );
};
