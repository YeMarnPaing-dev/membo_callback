import React, { useMemo, useState } from 'react'

const App = () => {
  const [color,setColor] = useState("red")
  const [count,setCount] = useState(0)

  const delayCall = (num)=> {
    console.log('delay time runnging....');
    for(let i = 0; i<10000000;i++){
       num++;
    }
    return num;    
  }
  // delayCall()

  useMemo(()=> delayCall(count),[color])
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