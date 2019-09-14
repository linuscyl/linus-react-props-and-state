import React from 'react';
import './App.css';

import Son from './Son';
import HookCounter from './HookCounter';

function App() {

  return (
    <div className="App">
      <h2>Demonstration of Props</h2>
      <Son name={"Peter Parker"} age={27} />
      <hr />
      <h2>Demonstration of State</h2>
      <HookCounter />
    </div>
  );
}

export default App;

