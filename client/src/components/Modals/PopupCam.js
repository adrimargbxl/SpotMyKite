import React from 'react';
import { Popup, Image, Header, Icon } from 'semantic-ui-react';

const webcamId = {
  Oostduinkerke:
    'https://images-webcams.windy.com/63/1183493763/current/full/1183493763.jpg',
  Zeebrugge:
    'https://images-webcams.windy.com/53/1524959853/current/full/1524959853.jpg',
  Bredene:
    'https://images-webcams.windy.com/90/1477612790/current/full/1477612790.jpg',
  'Koksijde-Bad':
    'https://images-webcams.windy.com/94/1183494194/current/full/1183494194.jpg',
  Blankenberge:
    'https://images-webcams.windy.com/60/1171052360/current/full/1171052360.jpg',
  Groenendijk:
    'https://images-webcams.windy.com/63/1183493763/current/full/1183493763.jpg',
  'De Panne':
    'https://images-webcams.windy.com/16/1454667016/current/full/1454667016.jpg',
};

const PopupCam = ({ spot }) => (
  <Popup
    style={{ backgroundColor: 'rgb(255,255,255,0.7)' }}
    content={
      <>
        <Header as="h3">{spot.name}</Header>
        <Image wrapped size="large" src={webcamId[spot.name]} />
      </>
    }
    trigger={
      <Icon
        className="map marker alternate huge link icon"
        style={{ color: '#E7555D' }}
      />
    }
  />
);

export default PopupCam;
