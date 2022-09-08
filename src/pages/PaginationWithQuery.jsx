import axios from 'axios'
import { useState } from 'react'
import { useQuery } from 'react-query'
import Button from '../components/Button'

const PaginationWithQuery = () => {

  const [pageNumber, setPageNumber] = useState(1)

  const fetchColor = (pageNumber) => {
    return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageNumber}`)
  }
  const { loading, error, data } = useQuery(['pagination', pageNumber], () =>
    fetchColor(pageNumber),
    {
      keepPreviousData: true,
    }
  )
  console.log(data)
  if (loading) {
    return <p>Loading</p>
  };
  if (error) {
    return <p>{error.message}</p>
  };


  return (
    <>
      <div>PaginationWithQuery</div>
      {
        data?.data.map((colors) => {
          return <p key={colors.id}>{colors.label}</p>
        })
      }
      <div>
        <button onClick={() => setPageNumber((page) => page - 1)} disabled={pageNumber === 1} >Previous</button>
        <button onClick={() => setPageNumber((page) => page + 1)} disabled={pageNumber === 4} >Previous</button>
      </div>
    </>
  )
}

export default PaginationWithQuery;