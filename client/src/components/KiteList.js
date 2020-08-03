import React from 'react';
import KiteSpot from './KiteSpot';
import { Segment, Icon, Header, Container } from 'semantic-ui-react';


export default ({ spotLists, formData }) => (

  <Segment style={{ backgroundColor: "rgb(255,255,255,0.7)", marginLeft: "2vw" }} >
    <Header as="h2"><Icon className="far fa-sun" style={{ color: "orange" }}></Icon>weather</Header>
    <Container style={{ overflow: 'auto', maxHeight: "80vh" }}>
      {spotLists.map(spot =>
        <KiteSpot
          key={spot.id}
          formData={formData}
          weather={spot} />)}
    </Container>
  </Segment>

);