import React, { useRef, useState } from 'react';
// @ts-ignore
import ReactBingMap, {Pushpin, Polyline, Infobox} from '@3acaga/react-bing-maps';

import './App.css';
import bingMapsKey from './bing-maps-key.js';

function App() {

  const [pins, setPins] = useState([{latitude: -1, longitude: -1, label: "Atlantis"}])
  const [newPin, setNewPin] = useState({latitude: "-1", longitude: "-100", label: "Atlantis"});

  return (
    <div style={{ height: 800, width: 1100}} className='App'>
      <ReactBingMap apiKey={bingMapsKey}>

        {
          pins.map((pin) => {
            const location = {latitude: pin.latitude, longitude: pin.longitude};
            return <div>
                <Infobox location={location}>
                  {pin.label}
                </Infobox>
                <Pushpin location={location} />
              </div>
          })
        }
      </ReactBingMap>
      <div className='ToolMenu'>
        Lat: <input id='lat-input' onChange={(event) => {
          const pin = newPin;
          pin.latitude = event.target.value;
          setNewPin(pin);
        }} />
        Long: <input id='long-input' onChange={(event) => {
          const pin = newPin;
          pin.longitude = event.target.value;
          setNewPin(pin);
        }} />
        Text: <input id='label-input' onChange={(event) => {
          const pin = newPin;
          pin.label = event.target.value;
          setNewPin(pin);
        }} />

        <button onClick={() => {
          const longitude = parseFloat(newPin.longitude);
          const latitude = parseFloat(newPin.latitude);
          if(isNaN(latitude) || isNaN(longitude) || newPin.label === "") {
            alert("Invalid pin: " +  newPin.toString());
            return;
          }
          const mutablePins = pins.slice();
          mutablePins.push({latitude: latitude, longitude: longitude, label: newPin.label});
          setPins(mutablePins);
          console.log(pins);
        }}>
          Add pin
        </button>
        {
          pins.map((pin) => {
            return <div>
              {pin.label}, {pin.latitude}, {pin.longitude}
            </div>
          })
        }
      </div>
    </div>
  );
}

export default App;
