import React from 'react'
import '../style/posting.css'

function Posting(props) {
  return (
    <div className="products">
      <div className="cards">
      <div className="product-title">
        <h6>{props.data.title}</h6>
        </div>
        <div className="product-name">
        <h6>{props.data.name}</h6>
        </div>
        <div className="product-images">
        <img src={props.data.image} alt="pokemon"></img>
        </div>
        </div> 
    </div>
  )
}

export default Posting