import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LocationOnOutlined,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
  Logout,
} from '@mui/icons-material';

import Sidebar from '../../sidebar/Sidebar';
import Admins from './AllAdmins';

export default function AdminPage({ setAuth }) {
  const [name, setName] = useState('');
  const [contactnumber, setContactNumber] = useState();
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');

  const getAdmin = async () => {
    try {
      const response = await fetch(`http://localhost:8000/profile`, {
        method: 'GET',
        headers: { Authorization: localStorage.getItem('token') },
      });

      const parseRes = await response.json();
      console.log(parseRes);

      setName(parseRes.firstname + ' ' + parseRes.lastname);
      setContactNumber(parseRes.contactnumber);
      setAddress(parseRes.address);
      setEmail(parseRes.email);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAdmin();
  }, []);

  return (
    <div className='flex h-[900px]'>
      <Sidebar />
      <div className='w-full px-8 py-8 pb-8 mb-4 bg-white border rounded shadow-md h-[900px]'>
        {/* HEADER */}
        <div className='px-4 py-5 sm:px-6 rounded shadow-md bg-red-500 flex justify-between items-center'>
          <div>
            <h3 className='text-xl font-medium leading-6 text-white'>
              WELCOME {name}
            </h3>
            <span className='text-md font-medium leading-6 text-white'>
              Logged in: {new Date().toLocaleTimeString()}
            </span>
          </div>

          <div>
            {/* LOGOUT BUTTON */}
            <div className='text-white float-right '>
              {/* ADMIN PAGE */}
              <button className='hover:-translate-y-0.5'>
                <Link to='/admin'>
                  <PermIdentity />
                </Link>
              </button>

              {/* LOGOUT */}
              <button
                className='ml-2 hover:-translate-y-0.5'
                onClick={(e) => {
                  setAuth(false);
                }}
              >
                <Link to='/login'>
                  <Logout />
                </Link>
              </button>
            </div>
            <span className='mr-10 text-lg font-medium leading-6 text-white'>
              {new Date().toLocaleString('en-US', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              }) + ''}
            </span>
          </div>
        </div>
        <div className='flex gap-10'>
          {/* ACCOUNT INFO */}
          <div className='w-1/4 h-[720px] mt-5 border rounded shadow-md border-t-4 border-t-red-500'>
            <div className='py-5 px-5 '>
              <h3 className='text-xl mb-5 border-b-2'>Account Details</h3>
              <div className='flex flex-col justify-between items-center py-5 px-5 '>
                <img
                  src='https://cdn3.iconfinder.com/data/icons/red-icons-1/512/Male-profile-icon-512.png'
                  alt=''
                  className='w-full h-full'
                />
                {/* USER INFO */}
                <div className=''>
                  <div>
                    <div className='flex items-center my-5'>
                      <PermIdentity className='text-lg' />
                      <span className='ml-2.5'>{name}</span>
                    </div>
                    <div className='flex items-center my-5'>
                      <LocationOnOutlined className='text-lg ' />
                      <span className='ml-2.5'>{address}</span>
                    </div>
                  </div>
                  <div className='flex items-center my-5'>
                    <MailOutline className='text-lg ' />
                    <span className='ml-2.5'>{email}</span>
                  </div>
                  <div className='flex items-center my-5'>
                    <PhoneAndroid className='text-lg ' />
                    <span className='ml-2.5'>{contactnumber}</span>
                  </div>
                  <div className='flex items-center my-5'></div>
                </div>
              </div>
            </div>
          </div>

          {/* OTHER ADMIN */}
          <Admins />
        </div>
      </div>
    </div>
  );
}
