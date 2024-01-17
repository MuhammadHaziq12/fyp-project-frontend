// 'use client'


// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// const Home = () => {
//   const [jokes, setJokes] = useState([])

//   useEffect(() => {
//     console.log('Fetching jokes...');
//     axios.get('/api/jokes')
//       .then((response) => {
//         console.log('Jokes response:', response);
//         setJokes(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching jokes:', error);
//       });
//   }, []);
  


//   return (
//     <>
//       <h1>our jokes</h1>
//       <p>JOKES: {jokes.length}</p>

//       {
//         jokes.map((joke, index) => (
//           <div key={joke.id}>
//             <p>{joke.title}</p>
//           </div>
//         ))
//       }
//     </>
//   )
// }

// export default Home

import React from 'react'

const Home = () => {
  return (
    <div>Home</div>
  )
}

export default Home