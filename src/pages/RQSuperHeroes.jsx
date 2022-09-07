import { useQuery } from 'react-query'
import axios from 'axios';


// () => {
//   return axios.get('http://localhost:4000/superheroes')
// }); it can replace the parameter in useQuery

const fetchData = () => {
  return axios.get('http://localhost:4000/superheroes')
}





const RQSuoerHeroesPage = () => {
  const { isLoading, data, isError, error, isFetching } = useQuery(
    'super-heroes',
    fetchData,
    {//refetch handle fetching of data manully 
      //cacheTime: 10000, //manually setup cache time,,, default cache time is 5 minutes and stale time for background data fetching 
      // refetchOnMount: true, //might be best 
      // refetchOnWindowFocus: true //by default it is true or we can use 'always'
    //  enabled: false, //enable fetching on onClick
    // success and error callback  pass on success and in error configurations

    }
  )
  console.log(isFetching, isLoading)
  if (isLoading) {
    return <h2>Loading...</h2>
  }
  if (isError) {
    return <h2>{error.message}</h2>
  }

  return (
    <>
      <h1>SuperHeroes</h1>
      {/* <button onClick={refetch}>Fetch Data</button> pass refetch tp usequery */}
      {data?.data.map((item) => {
        return <div key={item.id}>{item.name}</div>
      })}
    </>
  )
}

export default RQSuoerHeroesPage