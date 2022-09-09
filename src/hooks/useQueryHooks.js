import axios from "axios"
import { useMutation, useQuery } from "react-query"

const fetchData = () => {
  return axios.get('http://localhost:4000/superheroes')
}

export const useFetchedData = (handleSuccess, handleError) => {
 return useQuery(
    'super-heroes',
    fetchData,
    {//refetch handle fetching of data manully 
      //cacheTime: 10000, //manually setup cache time,,, default cache time is 5 minutes and stale time for background data fetching 
      // refetchOnMount: true, //might be best 
      // refetchOnWindowFocus: true //by default it is true or we can use 'always'
      //  enabled: false, //enable fetching on onClick
      // success and error callback  pass on success and in error configurations
      //refetchInterval: 3000,
      onSuccess: handleSuccess,
      onError: handleError,
      //dataTransformation 
      // select: (data) => {
      //   const dataList = data.data.map((datas) => datas.name)
      //   return dataList;
      // }
    }
  )
}

const fetchedDetails = (id) => {
  return axios.get(`http://localhost:4000/superheroes/${id}`)
}

export const useFetchedDetails = (id) => {
  return useQuery(['detail', id], () => fetchedDetails(id))
}

const addData = (addData) =>{
  return axios.post('http://localhost:4000/superheroes', addData)
}

export const useFormPost = () =>{
return useMutation(addData)
}