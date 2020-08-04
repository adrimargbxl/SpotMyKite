import React from 'react';
import KiteSpot from './KiteSpot';
import { Segment, Icon, Header, Container, Button } from 'semantic-ui-react';

export default ({ spotLists, formData, myClick, sortList }) => (
  <Segment
    style={{ backgroundColor: 'rgb(255,255,255,0.7)', marginLeft: '2vw' }}
  >
    <Header as="h2">
      <Icon className="far fa-sun" style={{ color: 'orange' }}>
        {console.log(myClick)}
      </Icon>
      weather
    </Header>
    <Button onClick={() => sortList()}>where's the wind</Button>
    <Container style={{ overflow: 'auto', maxHeight: '80vh' }}>
      {spotLists.map((spot) => (
        <KiteSpot
          key={spot.id}
          formData={formData}
          weather={spot}
          myClick={myClick}
        />
      ))}
    </Container>
  </Segment>
);
