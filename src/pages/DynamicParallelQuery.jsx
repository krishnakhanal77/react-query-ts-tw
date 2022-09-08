import axios from 'axios'
import React from 'react'
import { useQueries } from 'react-query'

const DynamicParallelQuery = ({ ids }) => {

  const fetchedDetails = (id) => {
    return axios.get(`http://localhost:4000/superheroes/${id}`)
  }


  const queryResult = useQueries(
    ids.map(id => {
      return {
        queryKey: ['key-id', id],
        queryFn: () => fetchedDetails(id),
      }
    })
  )
console.log(queryResult)
  return (
    <div>DynamicParallelQuery

    </div>
  )
}

export default DynamicParallelQuery