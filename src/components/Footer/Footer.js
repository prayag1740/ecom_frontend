import React from 'react'
import playstore from '../../images/playstore.png'
import Appstore from '../../images/Appstore.png'
import './Footer.css'

export const Footer = () => {
  return (
    <>
    <footer id="footer">
        <div className='left_footer'>
            <h4>Download our App</h4>
            <p>Download app for android and iOS mobile phones</p>
            <img src={playstore} alt='playstore' />
            <img src={Appstore} alt='appstore' />
        </div>
        <div className='mid_footer'>
            <h1>Ecommerce App</h1>
            <p>We are the best Ecommerce App in the world</p>
            <p>CopyRights 2023 &copy; Prayag740 </p>
        </div>
        <div className='right_footer'>
            <h4>Follow Us</h4>
            <a href='#'>Instagram</a>
            <a href='#'>Facebook</a>
        </div>
    </footer>
    </>
  )
}
