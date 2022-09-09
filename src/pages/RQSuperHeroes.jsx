import { useState } from 'react';
import { useQuery } from 'react-query'
import axios from 'axios';
import { useFetchedData } from '../hooks/useQueryHooks'
import { NavLink, useParams } from 'react-router-dom';
// () => {
//   return axios.get('http://localhost:4000/superheroes')
// }); it can replace the parameter in useQuery


const RQSuoerHeroesPage = () => {
  const handleSuccess = () => {
    console.log("this is success message ")
  }

  const handleError = () => {
    console.log("this is error message ")
  }

  // const [time, setTime] = useState(3000)
  // if(data?.data.length === 4) {
  //   setTime(0) 
  // }

  const { isLoading, data, isError, error, isFetching } = useFetchedData(handleSuccess, handleError)

  // console.log(isFetching, isLoading)
  if (isLoading) {
    return <h2>Loading...</h2>
  }
  if (isError) {
    return <h2>{error.message}</h2>
  }

  return (
    <>
      <h1>SuperHeroes</h1>
      {/* {data.map((item) => {
        return <div key={item.id}>{item.name}</div>
      })} */}
      {data?.data.map((item) => {
        return <div key={item.id} >
          <NavLink to={`/query/${item.id}`}>
            <p>{item.name}</p>
          </NavLink>
        </div>
      })}
      {console.log(data)}
    </>
  )
}

export default RQSuoerHeroesPage