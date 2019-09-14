import React, { useState } from 'react'

function HookCounter() {

  // step of add state:
  // import {userState}
  // Assign default value to useState
  // Assign variable to array disstructing

  const [count, setCount] = useState(0)
  const [isBoy, setGender] = useState(true)
  console.log('count: ', count)
  console.log('isBoy: ', isBoy)

  return (
    <div>
      <h3>Count: {count}</h3>
      {/* setXXX(YYY), YYY is the final status expected */}
      <div>
        <button onClick={() => setCount(count + 1)}>Press to +1 </button>
        <button onClick={() => setCount(0)}>Reset Count</button>
      </div>
      <h3>Change Boolean: {isBoy.toString()}</h3>
      <button onClick={() => setGender(!isBoy)}>Change Boolean </button>
    </div>
  )
}

export default HookCounter
