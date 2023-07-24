import React from 'react'
import ReactStars from 'react-rating-stars-component'
import { Link } from 'react-router-dom'
import './ProductCard.css'

const options = {
    "edit" : false,
    "color" : "rgba(20,20,20,0.1)",
    "activeColor" : "tomato",
    "size" : window.innerWidth < 600 ? 20 : 25,
    "value" : 2.5,
    "isHalf" : true
}

export const ProductCard = (props) => {
  const product = props.product
  return (
    <>
        <Link className='productcard' to={product._id}>
            <img src={product.images[0].url} alt={product.name} />
            <p>{product.name}</p>
            <div>
                <ReactStars {...options} />
                <span> 256  Reviews</span> 
            </div>
            <span> Rs {product.price}</span>
        </Link>
    </>
  )
}
