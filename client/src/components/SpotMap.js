import * as React from 'react';
import { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { Segment, Icon } from 'semantic-ui-react';

export default ({ spotLists }) => {
  const [viewport, setViewport] = useState({
    width: 850,
    height: 550,
    latitude: 51.2,
    longitude: 2.9,
    zoom: 9
  });

  function clickEvent () {
    console.log("hello")
  }

  const markers = spotLists.map(spot => <Marker key={spot.city.id} latitude={spot.city.coord.lat} longitude={spot.city.coord.lon} ><Icon onClick={clickEvent} className="map marker alternate huge link icon" style={{ color: "#E7555D" }}></Icon></Marker>);

  return (
    <Segment compact>

      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={`pk.eyJ1IjoiYWRyaW1hcmdieGwiLCJhIjoiY2tkOG1ia3I2MGVkODJycGNnNDRweTg3ZSJ9.7NJ4e2L0KL7KmD7-iTpVZw`}
        onViewportChange={nextViewport => setViewport(nextViewport)}
        mapStyle="mapbox://styles/adrimargbxl/ckd92iirk1aso1iqb8n126g5a"
      >
        <div>
          {markers}
        </div>
      </ReactMapGL>
    </Segment>
  );
}