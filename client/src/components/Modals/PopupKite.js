import React from 'react';
import { Button, Popup, Image } from 'semantic-ui-react';
import KiteSize from '../../images/KiteSizeWind.png';

const PopupKite = () => (
  <Popup
    style={{ backgroundColor: 'rgb(255,255,255,0.7)' }}
    content={
      <Image style={{ width: '30vw' }} wrapped large src={KiteSize}></Image>
    }
    on="click"
    trigger={<Button circular size="mini" icon="info" />}
  />
);

export default PopupKite;
