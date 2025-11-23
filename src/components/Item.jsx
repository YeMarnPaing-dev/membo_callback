import React from 'react'
import { useLocation, useParams } from 'react-router'

const Item = () => {
     const {name} = useParams('');
    
    //  const location = useLocation();
    //  console.log(location);
     
  return (
   
    
    <div>
        <h1>{name}</h1>
    </div>
  )
}

export default Item