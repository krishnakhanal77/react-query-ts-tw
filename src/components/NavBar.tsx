import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Button from './Button';

const NavBar = () => {

  let Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className='shadow-md w-full sticky top-0 left-0'>
        <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
          <div className='cursor-pointer flex items-center'>
            <span className='text-xl font-sans font-medium text-blue-700'> TailWind</span>
          </div>

          <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
            <div >{open ? "opt" : "crs"} </div>
          </div>

          <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
            {
              Links?.map((link) => (
                <li key={link.name} className='md:mr-8 text-lg md:my-0 my-7'>
                  <NavLink to={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</NavLink>
                </li>
              ))
            }
            <Button> <NavLink to='/login'>
              Login
            </NavLink>
            </Button>
          </ul>
        </div>
      </div>
    </>
  )
}

export default NavBar