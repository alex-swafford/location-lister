import React from 'react';
import BingMapsReact from 'bingmaps-react';

import './App.css';
import bingMapsKey from './bing-maps-key.js';

function App() {

  return (
    <div className="App">
      {bingMapsKey}
      <BingMapsReact
      bingMapsKey={bingMapsKey}
      height="500px"
      mapOptions={{
        navigationBarMode: "square",
      }}
      width="500px"
      viewOptions={{
        center: { latitude: 42.360081, longitude: -71.058884 },
        mapTypeId: "grayscale",
      }}
    />
    </div>
  );
}

export default App;
