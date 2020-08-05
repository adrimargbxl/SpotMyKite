import React from 'react';
import KiteSpot from './KiteSpot';
import { Segment, Icon, Header, Container, Button } from 'semantic-ui-react';

export default ({ spotLists, formData, myClick, sortList, lat, lon }) => (
  <Segment
    style={{ backgroundColor: 'rgb(255,255,255,0.7)', marginLeft: '3.5vw' }}
  >
    <div
      style={{
        marginTop: '10px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Header as="h2">
        <Icon className="far fa-sun" style={{ color: 'orange' }}>
          {console.log(myClick)}
        </Icon>
        weather
      </Header>
      <Button onClick={() => sortList()}>
        <i class="fas fa-fan"></i> where's the wind
      </Button>
    </div>
    <Container style={{ overflow: 'auto', maxHeight: '80vh' }}>
      {spotLists.map((spot) => (
        <KiteSpot
          key={spot.id}
          formData={formData}
          weather={spot}
          myClick={myClick}
          lat={lat}
          lon={lon}
        />
      ))}
    </Container>
  </Segment>
);
