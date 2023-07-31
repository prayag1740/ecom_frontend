import React, { useEffect } from 'react'
import Carousel from 'react-material-ui-carousel'
import './ProductDetails.css'
import { useSelector, useDispatch  } from 'react-redux';
import { getProductDetail } from '../../actions/productAction'
import { useParams } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';

const ProductDetails = () => {

  const dispatch = useDispatch() ;
  const {product, loading, error} = useSelector( (state) => state.productDetail)
  console.log(product, loading, error)
  const { id } = useParams() ;

  const options = {
    "edit" : false,
    "color" : "rgba(20,20,20,0.1)",
    "activeColor" : "tomato",
    "size" : window.innerWidth < 600 ? 20 : 25,
    "value" : product.ratings,
    "isHalf" : true
  }

  useEffect(() => {

    dispatch(getProductDetail(id))

  }, [dispatch])

   return (
    <>
        <div className='ProductDetails'>
            <div>
                <Carousel className='carousel'>
                    {product.images && 
                    product.images.map( (item, i) => (
                        <img
                         className='CarouselImage'
                         key={item.url}
                         src={item.url}
                         alt={`${i} Slide`}
                         />
                    ))}
                </Carousel>
            </div>
            
            <div>
            <div className='detailsBlock1'>
                <h2>{product.name}</h2>
                <p>Product # {product.id}</p>
            </div>
            <div className='detailsBlock2'>
               <ReactStars {...options} />
               <span>{product.num_of_reviews}  Reviews</span> 
            </div>
            <div className='detailsBlock3'>
              <h1>Rs {product.price}</h1>
                <div className='detailsBlock3-1'>
                    <div className='detailsBlock3-1-1'>
                        <button>-</button>
                        <input value='1' type='number' />
                        <button>+</button>
                    </div> {" "}
                    <button>Add to Cart</button>
                </div>
                
                <p>
                    Status : {" "}
                    <b className={product.stock < 1 ? "redColor" : "greenColor"}>
                        {product.stock < 1 ? "Out of Stock" : "In Stock"}
                    </b>
                </p>

            </div>

            <div className='detailsBlock4'>
                Description : <p>{product.description}</p>
            </div>

            <button className='submitReview'>Submit Review</button>
            </div>
        </div>
    </>
  )
}

export default ProductDetails