import React from 'react';
import './App.css';

import Son from './Son';

function App() {

  return (
    <div className="App">
      <h2>This is Parent Wording</h2>
      <Son name={"Peter Parker"} age={27} />
    </div>
  );
}

export default App;
