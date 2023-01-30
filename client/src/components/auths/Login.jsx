import React, { useState } from 'react';

import { ArrowBackIosNew } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Login = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  });

  //setting the inputs
  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const loginSuccessful = () => {
    toast.promise(
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
          // navigate('/borrowers', { replace: true });
        }, 1000);
      }),
      {
        pending: 'Logging in...',
        success: 'Logged in Succesfully!',
        error: 'Error!',
      },
      {
        autoClose: 1000,
      }
    );
  };

  const { username, password } = inputs;

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { username, password };

      const response = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      const parseRes = await response.json();

      if (parseRes.token) {
        localStorage.setItem('token', parseRes.token);
        loginSuccessful();
        setTimeout(() => {
          setAuth(true);
        }, 3000);
      } else {
        console.log('Something wrong');
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className='flex flex-col h-auto w-[620px] border rounded-md shadow-md  mx-auto my-52 justify-center flex-wrap border-t-4 border-t-red-500 '>
      <ToastContainer />
      <div className=''>
        <div className='flex justify-between items-center px-8 pt-6 pb-2'>
          {/* GREETINGS */}
          <div>
            <h1 className='text-xl font-semibold '>Welcome back</h1>
            <small className='text-gray-400'>
              Welcome back! Please enter your details
            </small>
          </div>

          {/* BACK ARROW */}
          <div className='ml-8'>
            <Link to='/'>
              <ArrowBackIosNew />
            </Link>
          </div>
        </div>

        <form
          onSubmit={(e) => onSubmit(e)}
          className='bg-white px-8 pt-6 pb-8 '
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
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
              id='password'
              type='password'
              placeholder='******************'
              name='password'
              value={password}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className='flex flex-col items-center justify-between gap-5'>
            <button
              className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full'
              type='submit'
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
