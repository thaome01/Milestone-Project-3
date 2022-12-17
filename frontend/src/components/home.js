import React from 'react'
import Posting from './Posting'

function home(props) {
    
  return (
    <div>
      <h5>Latest Pokemon Sets</h5>
      {props.myData.map((data) => {
                return <Posting data={data} />
            })}
    </div>
  )
}

export default home




// import React,{useEffect, useState} from 'react'

// function Home(props) {
//     useEffect(() => { 
//         fetch("https://pokeapi.co/api/v2/pokemon")
//         .then(res => res.json())
//         .then(data => console.log(data))
//     }, [])
//   return (
//     <div></div>
//   )
// }

// export default Home