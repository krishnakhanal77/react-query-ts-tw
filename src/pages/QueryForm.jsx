import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useFetchedData, useFormPost } from '../hooks/useQueryHooks'

const QueryForm = () => {



  const [name, setName] = useState('')
  const [alterEgo, setAlterEgo] = useState('')


  const { mutate: addData } = useFormPost()

  const handleAddData = (e) => {
    e.preventDefault();
    const userData = { name, alterEgo }
    addData(userData)
    console.log(userData)
  }


  const handleSuccess = () => {
    console.log("this is success message ")
  }

  const handleError = () => {
    console.log("this is error message ")
  }

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
      <div>QueryForm</div>
      <div>
        <form>
          <input
            type="text"
            className=" block px-4 py-2 text-xl font-normal m-2 text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleFormControlInput2"
            placeholder="Email address"
            value={name}
            required
            onChange={e => setName(e.target.value)}
          />
          <input
            type="text"
            className=" block px-4 py-2 mx-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleFormControlInput2"
            placeholder="Email address"
            value={alterEgo}
            required
            onChange={e => setAlterEgo(e.target.value)} />
          <button onClick={handleAddData} className='border-solid border-2 border-indigo-600 rounded-md px-2 m-2'>Add</button>
        </form>
      </div>
      <div>list</div>

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
    </>
  )
}

export default QueryForm