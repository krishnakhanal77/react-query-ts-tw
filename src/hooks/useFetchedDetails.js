import axios from "axios";
import { useQuery } from "react-query";


const fetchedDetails = (id) => {
  return axios.get(`http://localhost:4000/superheroes/${id}`)
}

export const useFetchedDetails = (id) => {
  return useQuery(['detail', id], () => fetchedDetails(id))
}