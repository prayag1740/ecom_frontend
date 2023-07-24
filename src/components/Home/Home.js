import React from 'react'
import { CgMouse } from "react-icons/cg"
import { ProductCard } from '../ProductCard/ProductCard'

import "./Home.css"

const product = {
    name : "Blue Tshirt",
    images : [{"url" : "https://picsum.photos/200/300"}],
    price : "2000",
    _id : "12"
}

export const Home = () => {
  return (
   <>
   <div className='banner'>
    <p>Welcome to Ecommerce</p>
    <h1>Find Amazing Products Below</h1>

    <a href='#container'>
        <button>
            Scroll <CgMouse />
        </button>
    </a>
    </div>

    <h2 className='home_heading'>
        Featured Products
    </h2>

    <div className='container' id='container'>
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />

        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
    </div>    

   </>
  )
}
