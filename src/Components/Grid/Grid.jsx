import React from 'react'
import sign from "../../assets/Sign up.png";
import search from "../../assets/Search.png"
import cart from "../../assets/cart2.png"
import './Grid.css'


const Grid = () => {
  return (
    <div className='grid-layer'>
        {/* Header */}
      <div className='header'>
        <h1>How to get started</h1>
        <p>Easy steps to start using Trade Mart</p>
      </div>
      {/* Grids */}
      <div className='grids'>
        {/* Grid Column 1 */}
        <div className='grid'>
            <img src={sign} />
            <h2>Sign up or Login</h2>
            <p>Create an account using
            your email or social media,
            or log in if you already have
            one.</p>
        </div>
        {/* Grid Column 2 */}
        <div className='grid g-c'>
            <img src={search} />
            <h2>Browse Products</h2>
            <p>Explore categories or use the 
            search bar to find what you 
            need.</p>
        </div>
        {/* Grid Column 3 */}
        <div className='grid'>
            <img src={cart} />
            <h2>Add to Cart & Checkout</h2>
            <p>Add items to your cart, then 
            proceed to payment and delivery
            details to complete your order.</p>
        </div>
      </div>
    </div>
  )
}

export default Grid
