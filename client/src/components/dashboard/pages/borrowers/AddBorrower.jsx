import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Sidebar from '../../../sidebar/Sidebar';

const AddBorrower = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    firstname: '',
    lastname: '',
    email: '',
    address: '',
    username: '',
    password: '',
  });

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const {
    firstname,
    lastname,
    contactNumber,
    address,
    email,
    username,
    password,
  } = inputs;

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = {
        firstname,
        lastname,
        contactNumber,
        address,
        email,
        username,
        password,
      };

      const response = await fetch('http://localhost:8000/register', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      const parseRes = await response.json();

      if (parseRes.token) {
        localStorage.setItem('token', parseRes.token);
        console.log(parseRes.token);
        setAuth(true);
      } else {
        setAuth(false);
        console.log('Something wrong');
      }

      setInputs({
        firstname: '',
        lastname: '',
        contactNumber: '',
        address: '',
        email: '',
        username: '',
        password: '',
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className='flex '>
      <div>
        <Sidebar />
      </div>

      <div className='w-full'>
        <div className='container ml-10 flex flex-col px-2'>
          <h1 className='text-xl my-5'>Add Client</h1>
          <form
            onSubmit={(e) => {
              onSubmit(e);
            }}
          >
            <input
              type='text'
              className='block border border-grey-500 w-full p-3 rounded mb-4'
              name='firstname'
              value={firstname}
              onChange={(e) => {
                onChange(e);
              }}
              placeholder='First Name'
              required
            />
            <input
              type='text'
              className='block border border-grey-500 w-full p-3 rounded mb-4'
              name='lastname'
              value={lastname}
              onChange={(e) => {
                onChange(e);
              }}
              placeholder='Last Name'
              required
            />
            <input
              type='number'
              className='block border border-grey-500t w-full p-3 rounded mb-4'
              name='contactNumber'
              value={contactNumber}
              onChange={(e) => {
                onChange(e);
              }}
              placeholder='Contact Number'
              required
            />
            <input
              type='text'
              className='block border border-grey-500t w-full p-3 rounded mb-4'
              name='address'
              value={address}
              onChange={(e) => {
                onChange(e);
              }}
              placeholder='Address'
              required
            />
            <input
              type='email'
              className='block border border-grey-500t w-full p-3 rounded mb-4'
              name='email'
              value={email}
              onChange={(e) => {
                onChange(e);
              }}
              placeholder='Email'
              required
            />
            <input
              type='text'
              className='block border border-grey-500t w-full p-3 rounded mb-4'
              name='username'
              value={username}
              onChange={(e) => {
                onChange(e);
              }}
              placeholder='Username'
              required
            />
            <input
              type='password'
              className='block border border-grey-500t w-full p-3 rounded mb-4'
              name='password'
              value={password}
              onChange={(e) => {
                onChange(e);
              }}
              placeholder='Password'
              required
            />

            <button
              type='submit'
              className=' bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-1/6'
            >
              Save
            </button>
            <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-1/6 ml-10'>
              {/* <Navigate to='/borrowers'>Cancel</Navigate> */}
              <Link to='/borrowers'>Cancel</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBorrower;
