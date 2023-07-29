import React, { useEffect } from 'react'
import { CgMouse } from "react-icons/cg"
import { getProduct } from '../../actions/productAction'
import  Metadata from "../MetaData"
import Loader from '../Loader/Loader'
import { ProductCard } from '../ProductCard/ProductCard'
import { useDispatch, useSelector } from 'react-redux' ;
import { useAlert } from 'react-alert'

import "./Home.css"

// usedispatch hook calls the store to getproduct from the store; ie sends a message to store to change it's state
// in useffect we have used [dispatch] ; so effectis triggered only when the dispatch function changes
// dispatch is a stable reference , effect is run only once.

export const Home = () => {

    const alert = useAlert() ;
    const dispatch = useDispatch() ;
    const { loading, error, products, productsCount } = useSelector( (state) => state.product ) ;
    
    useEffect(() => {
        if (error) {
            return alert.error(error.error);
        }
        dispatch(getProduct());
    }, [dispatch, error]) ;

  return (
   <>
   {loading ? <Loader /> :
   <>
   <Metadata title="Ecommerce" />
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
    { products && products.map( (product) => <ProductCard product={product} key={product.id} />) }
    </div>    

   </>}
   </>
  )
}
