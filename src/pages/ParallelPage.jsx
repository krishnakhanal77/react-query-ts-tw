import axios from 'axios'
import { useQuery } from 'react-query'


const ParallelPage = () => {

  const fetchData = () => {
    return axios.get('http://localhost:4000/superheroes')
  }
  
  const fetchFriends = () =>{
    return axios.get('http://localhost:4000/friends')
  }

  //to render the data in jsx
  const { data: superHeroes } = useQuery('super-heroes', fetchData)
  const { data: friends } = useQuery('friends', fetchFriends)

console.log(friends, superHeroes)
  return (
    <>
      this is parallemdfagasdgfs
    </>
  )
}

export default ParallelPage