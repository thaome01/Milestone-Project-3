import React from 'react'

function home() {
  return (
    <div>
        <h1>Hello</h1>
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