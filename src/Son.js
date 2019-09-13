import React from 'react';
import './App.css';


function Son(props) {

  console.log('All Props: ', props)
  console.log('Name Props: ', props.name)

  return (
    <div className="App">
      <h3>This is Sun Component</h3>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}

export default Son;