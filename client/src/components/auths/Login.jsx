import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  });

  //setting the inputs
  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  //deconstructing the username and password variable from the inputs
  const { username, password } = inputs;

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      //making a body object from the values of username and password
      const body = { username, password };

      //fetch api for POST method
      const response = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      const parseRes = await response.json();

      if (parseRes.token) {
        //localstorage
        localStorage.setItem('token', parseRes.token);
        setAuth(true);
      } else {
        console.log('Something wrong');
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className='flex flex-col h-[700px] w-[1200px] border rounded-md shadow-md  mx-auto my-20 justify-center flex-wrap'>
      <div className='w-1/2'>
        <div className='px-8 pt-6 pb-2'>
          <h1 className='text-xl font-semibold '>Welcome back</h1>
          <small className='text-gray-400'>
            Welcome back! Please enter your details
          </small>
        </div>

        <form
          onSubmit={(e) => onSubmit(e)}
          className='bg-white px-8 pt-6 pb-8 mb-4'
        >
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='username'
            >
              Username
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='username'
              type='text'
              placeholder='Username'
              name='username'
              value={username}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className='mb-6'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='password'
            >
              Password
            </label>
            <input
              className='shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
              id='password'
              type='password'
              placeholder='******************'
              name='password'
              value={password}
              onChange={(e) => onChange(e)}
            />
            <p className='text-red-500 text-xs italic'>
              Please enter your password.
            </p>
          </div>
          <div className='flex flex-col items-center justify-between gap-5'>
            <button
              className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full'
              type='submit'
            >
              Sign In
            </button>
            <div className='text-center'>
              <span className='text-xs text-gray-400 font-semibold'>
                Don't have account?
              </span>
              <a
                href='http://localhost:3000/register'
                className='text-xs font-semibold text-red-700'
              >
                Sign up
              </a>
            </div>
          </div>
        </form>
      </div>
      <div className='bg-red-500 h-full rounded-md w-1/2 py-20 px-20'></div>
    </div>
  );
};

export default Login;
