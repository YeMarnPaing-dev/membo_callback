import React, { useCallback, useState } from 'react'
import Lists from './Lists'

const Callback = () => {
    const [item,setItems] = useState([
        'Wash dishes',
        'Fix Errors',
        'Do Exercises'
    ]);

    const [count,setCount]= useState(0)

    // const addNewItem = ()=> {
    //     setItems([...item,"New Items Add"])
    // }

    const addNewItem = useCallback(()=> {
        setItems([...item,"New Items Add"])
    },[item])

    
  return (
    <div>Callback
        <Lists items={item} addNewItem={addNewItem}/>

        <h1>{count}</h1>
       <button onClick={()=> setCount(count-1)}>-</button>
      <button onClick={()=> setCount(count+1)}>+</button>
    </div>
    
  )
}

export default Callback