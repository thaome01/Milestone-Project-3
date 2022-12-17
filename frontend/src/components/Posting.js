import React from 'react'

function Posting(props) {
  return (
    <div>
        <h6>{props.data.title}</h6>
        <img src={props.data.image} alt="pokemon"></img>
        <h6>{props.data.name}</h6>
    </div>
  )
}

export default Posting