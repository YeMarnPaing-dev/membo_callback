import React from 'react'
import { Link } from 'react-router'

const Product = () => {
  return (
    <div>
        <Link to="/product/yemarn">
    YeMarn
        </Link>
        <br />

        <Link to="/product/myint myat san">
        MyintMyatSawn
        </Link>
         <br />

        <Link to="/product/shunnLae">
        ShunnLae
        </Link>
         <br />

        <Link to="/product/thiri">
        Thiri
        </Link>
    </div>
  )
}

export default Product