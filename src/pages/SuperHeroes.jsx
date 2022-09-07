import axios from 'axios';
import React, { useState, useEffect } from 'react'

const SuperHeroes = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([]);
const [error, setError] = useState('')

  console.log(data)
  useEffect(() => {
    axios.get('http://localhost:4000/superheroes').then((res) => {
      setData(res.data)
      setIsLoading(false)
    })
    .catch((error)=>{
      setError(error.message)
      setIsLoading(false)
    })
  }, [])

  if (isLoading) {
    return <h2>Loading...</h2>
  }
  if(error){
    return <h2>{error}</h2>
  }

  return (
    <>
      <h1>Super Heroes:</h1>
      {
        data.map((heros) => {
          return <div key={heros.id}>{heros.name}</div>
        })
      }
    </>
  )
}

export default SuperHeroes