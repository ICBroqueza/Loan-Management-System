import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import Sidebar from '../../../sidebar/Sidebar';

const EditBorrower = () => {
  const [inputs, setInputs] = useState({
    firstname: '',
    lastname: '',
    email: '',
    address: '',
  });

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const { firstname, lastname, contactNumber, address, email } = inputs;

  const location = useLocation();

  const clientId = location.pathname.split('/')[2];

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = {
        firstname,
        lastname,
        contactNumber,
        address,
        email,
      };

      const response = await fetch(
        `http://localhost:8000/clients/${clientId}`,
        {
          method: 'PATCH',
          headers: {
            'Content-type': 'application/json',
            Authorization: localStorage.getItem('token'),
          },
          body: JSON.stringify(body),
        }
      );

      const parseRes = await response.json();

      console.log(parseRes);

      setInputs({
        firstname: '',
        lastname: '',
        contactNumber: '',
        address: '',
        email: '',
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
          <h1 className='text-xl my-5'>Update Client</h1>
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
            <button
              type='submit'
              className=' text-center py-3 rounded bg-red-500 text-white hover:bg-red-700 focus:outline-none my-1 w-1/5'
            >
              Update
            </button>
            <button className=' ml-5 text-center py-3 rounded bg-red-500 text-white hover:bg-red-700 focus:outline-none my-1 w-1/5'>
              {/* <Navigate to='/borrowers'>Cancel</Navigate> */}
              <Link to={`/borrower/${clientId}`}>Cancel</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditBorrower;
