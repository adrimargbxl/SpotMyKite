import * as React from 'react';
import { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

export default ({ spotLists }) => {
  const [viewport, setViewport] = useState({
    width: 800,
    height: 500,
    latitude: 51.2,
    longitude: 3.06,
    zoom: 8
  });

  const markers = spotLists.map(spot => <Marker latitude={spot.city.coord.lat} longitude={spot.city.coord.lon}><i className="map marker alternate icon"></i></Marker>);

  return (
    <div className="ui container">

      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={`pk.eyJ1IjoiYWRyaW1hcmdieGwiLCJhIjoiY2tkOG1ia3I2MGVkODJycGNnNDRweTg3ZSJ9.7NJ4e2L0KL7KmD7-iTpVZw`}
        onViewportChange={nextViewport => setViewport(nextViewport)}
        mapStyle="mapbox://styles/adrimargbxl/ckd8pm8h20g1w1inxm8wubibd"
      >
        <div>
          {markers}
        </div>
      </ReactMapGL>
    </div>
  );
}