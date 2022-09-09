import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetchedDetails } from '../hooks/useQueryHooks'

const SuperHeroDetail = () => {

  const { id } = useParams()

  const { isLoading, error, data, isError } = useFetchedDetails(id)

  if (isLoading) {
    return <h2>Loading</h2>
  }
  if (isError) {
    return <h2>{error.message}</h2>
  }


  return (
    <>
      <div>
        {data?.data.name} - {data?.data.alterEgo}

      </div>
    </>
  )
}

export default SuperHeroDetail