import React from 'react'
import { Icon, Image, Modal } from 'semantic-ui-react';

const webcamId = {
  Oostduinkerke: "https://images-webcams.windy.com/63/1183493763/current/full/1183493763.jpg",
  Zeebrugge: "https://images-webcams.windy.com/53/1524959853/current/full/1524959853.jpg",
  Bredene: "https://images-webcams.windy.com/90/1477612790/current/full/1477612790.jpg",
  "Koksijde-Bad": "https://images-webcams.windy.com/94/1183494194/current/full/1183494194.jpg",
  Blankenberge: "https://images-webcams.windy.com/60/1171052360/current/full/1171052360.jpg",
  Groenendijk: "https://images-webcams.windy.com/63/1183493763/current/full/1183493763.jpg",
  "De Panne": "https://images-webcams.windy.com/16/1454667016/current/full/1454667016.jpg"
}
//Work in Progerss
const LocationModal = ({ spot }) => (
  <Modal trigger={<Icon className="map marker alternate huge link icon" style={{ color: "#E7555D" }}></Icon>} centered={false}>
    <Modal.Header>About</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src={webcamId[spot.city.name]} />
      <Modal.Description>
        <p>
          <h1>{spot.city.name}</h1>
          We've found the following gravatar image associated with your e-mail
          address.
        </p>
        <p>Is it okay to use this photo?</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default LocationModal

