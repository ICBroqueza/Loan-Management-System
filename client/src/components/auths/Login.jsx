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
    <div className='w-full max-w-xs mx-auto'>
      <h1 className='lock uppercase tracking-wide  text-black-500 text-4xl font-bold my-16 text-center'>
        Login
      </h1>
      <form
        onSubmit={(e) => onSubmit(e)}
        className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
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
            Please choose a password.
          </p>
        </div>
        <div className='flex items-center justify-between'>
          <button
            className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type='submit'
          >
            Sign In
          </button>
          <a
            className='inline-block align-baseline font-bold text-sm text-red-500 hover:text-red-800'
            href='http://localhost:3000/register'
          >
            Register Here
          </a>
        </div>
      </form>

      <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full max-w-xs mx-auto'>
        <Link to='/'>Back to Home page</Link>
      </button>
    </div>
  );
};

export default Login;
