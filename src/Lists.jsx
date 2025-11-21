import React, { memo } from 'react'

const Lists = ({items,addNewItem}) => {
    console.log('Hi This is Loading');
      
        
  return (
    <div>
        <ul>
            {
                items.map((item, index) => (
                <li key={index}>{item}</li>
                ))
            }
        </ul>

        <button type='buttone' onClick={()=>addNewItem()}> Click to Add new Item</button>
    </div>
  )
}

export default memo(Lists)