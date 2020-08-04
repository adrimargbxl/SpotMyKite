/* eslint-disable max-len */

import React from 'react';
import { Container, Header, List, Segment } from 'semantic-ui-react';

const Info = () => (
  <Segment style={{ backgroundColor: 'rgb(255,255,255,0.7)' }}>
    <Header as="h2">Kitesurfing in Belgium</Header>

    <p>
      Belgium has been developing more and more each year as the kitesurfing
      scene grows. New spots and schools are emerging as the locals and visitors
      begin coming to kite. and more schools emerge.
    </p>

    <p>
      Belgium is an easy country to access due to its affordable international
      airport in Brussels. Once you are in Belgium you can visit the different
      cities, explore its rich culture, learn about its medieval history and
      taste their foods. If you want a mix of kitesurfing and city exploration -
      Belgium is a great location.
    </p>

    <List bulleted>
      <List.Item>Capital: Brussels</List.Item>
      <List.Item>Currency: Euro</List.Item>
      <List.Item>Winds: 8-23 knots</List.Item>
      <List.Item>Kites Needed: Small 9m-11m / Big 12m-17m</List.Item>
      <List.Item>Waves: 0-1.5m</List.Item>
      <List.Item>Flat Water Spots: Yes</List.Item>
    </List>
  </Segment>
);

export default Info;
