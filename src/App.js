import React, { useState } from 'react'

const App = () => {
  const [color,setColor] = useState("red")
  const [count,setCount] = useState(0)
  return (
    <div>App
      <h3 style={{'color': color}}>useState Test</h3>

      <button type='button' onClick={()=> color=="red" ? setColor('blue') : setColor('brown')}>Change Color</button>

      <hr/>
      <h1> {count} </h1>

      <button onClick={()=> setCount(count-1)}>-</button>
      <button onClick={()=> setCount(count+1)}>+</button>


    </div>
    
  )
}

export default App