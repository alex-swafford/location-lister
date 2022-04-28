import React from 'react';
// @ts-ignore
import {ReactBingmaps} from 'react-bingmaps-vnext';

import './App.css';
import bingMapsKey from './bing-maps-key.js';

function App() {

  return (
      <ReactBingmaps
      bingmapKey={bingMapsKey}
      height="500px"
      className="map"
      mapOptions={{
        navigationBarMode: "square",
      }}
      width="500px"
      viewOptions={{
        center: { latitude: 42.360081, longitude: -71.058884 },
        mapTypeId: "grayscale",
      }}
    />
  );
}

export default App;
