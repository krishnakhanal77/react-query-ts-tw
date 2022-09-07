import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addUser, deleteUser, updateUser } from '../features/Users'


const UserCRUD = () => {

  const userList = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('')
  //console.log(userList)

  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
 // const [updateName, setUpdatName] = useState('')
  const [updateUsername, setUpdateUsername] = useState('')
  return (
    <>

      <div className="flex mt-5 justify-center">
        <input
          onChange={(e) => setName(e.target.value)}
          className="shadow appearance-none border rounded m-3 p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Username" />
        <input
          onChange={(e) => setUsername(e.target.value)}
          className="shadow appearance-none border rounded m-3 p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Username" />
        <button
          onClick={() => {
            dispatch(
              addUser({ id: userList[userList.length].id + 1, name, username })
            )
          }}
          className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white h-11 mt-3  px-4 rounded" >Add User</button>
      </div>
      {
        userList.map((users) => {
          return (
            <div key={users.id} className="flex justify-center mt-2">
              <div className="block p-6 rounded-lg shadow-lg bg-white min-w-[50%]">
                <p>{users.name}</p>
                <p>{users.username}</p>
                <button onClick={togglePopup} >Update</button>
                <button onClick={() => dispatch(deleteUser({ id: users.id }))}>Delete</button>
                <hr />
              </div>
            </div>
          )
        })
      }
      <div className='relative h-8'></div>
      {isOpen && <div className='absolute flex flex-col justify-center items-center  h-6 w-10 top-[40%] right-[50%]'>
        <div sticky>
          <input
            onChange={(e) => setUpdateUsername(e.target.value)}
            className="shadow appearance-none border rounded mb-3 p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Username" />
          <button onClick={() => dispatch(updateUser({ id: userList.id, username: updateUsername }))}>Save</button>
          {console.log(userList)}
        </div>
      </div>

      }
      {/* <div className="flex justify-center">
        <div className="block p-6 rounded-lg shadow-lg bg-white min-w-[50%]">
          <p>gfdsfg</p>
          <hr />
        </div>
      </div> */}
    </>
  )
}

export default UserCRUD