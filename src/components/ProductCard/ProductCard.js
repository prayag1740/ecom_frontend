import React from 'react'
import ReactStars from 'react-rating-stars-component'
import { Link } from 'react-router-dom'
import './ProductCard.css'



export const ProductCard = (props) => {

  const product = props.product

  const options = {
    "edit" : false,
    "color" : "rgba(20,20,20,0.1)",
    "activeColor" : "tomato",
    "size" : window.innerWidth < 600 ? 20 : 25,
    "value" : product.ratings,
    "isHalf" : true
  }

  return (
    <>
        <Link className='productcard' to={`/product/${product.id}`}>
            <img src={product.images[0].url} alt={product.name} />
            <p>{product.name}</p>
            <div>
                <ReactStars {...options} />
                <span> {product.num_of_reviews}  Reviews</span> 
            </div>
            <span> Rs {product.price}</span>
        </Link>
    </>
  )
}
