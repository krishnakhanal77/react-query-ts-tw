import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../components/Button'
import { useForm, SubmitHandler } from "react-hook-form";

type FormTypes = {
  password: string;
  email: string;
};

const Login = () => {

  const { register, handleSubmit, reset, formState: { errors }, } = useForm<FormTypes>();
  const [userInfo, setUserInfo] = useState<FormTypes>()
  const onSubmit: SubmitHandler<FormTypes> = (data) => {
    setUserInfo(data);
    reset();
  }


console.log(userInfo)
  return (
    <>
      <div className="px-6 h-full text-gray-800">
        <div
          className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
        >
          <div
            className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="w-full"
              alt="Sample"
            />
          </div>

          <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0 shadow-lg p-5">

            <div className="flex justify-center w-full ">
              <p className="text-lg mb-4 mr-4 text-center">Enter your login info</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-6">
                <input
                  {...register("email", {required: "email is required"})}
                  type="text"
                  className=" block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder="Email address"
                  name='email'
                  required
                />
              </div>

              <div className="mb-6">
                <input
                  {...register("password", {required: "required field", minLength:{
                    value: 6,
                    message: 'min length is 6'
                  }})}
                  type="password"
                  className=" block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder="Password"
                  required
                  name='password'
                />
                <p>{errors.password?.message}</p>
              </div>

              <div className="flex justify-between items-center mb-6">
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    id="exampleCheck2"
                  />
                  <label className="form-check-label inline-block text-gray-800"
                  >Remember me</label
                  >
                </div>
                <NavLink to="#!" className="text-gray-800">Forgot password?</NavLink>
              </div>
              <div className="text-center lg:text-left">
                <Button>Login</Button>
              </div>
            </form>
            <div className="text-center lg:text-left">
              <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                Don't have an account?
                <NavLink
                  to="#!"
                  className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                >Register</NavLink>
              </p>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default Login