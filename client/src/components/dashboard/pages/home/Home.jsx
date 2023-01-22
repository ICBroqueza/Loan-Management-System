import React, { useState } from 'react';
import { useEffect } from 'react';

import Sidebar from '../../../sidebar/Sidebar';
import BotWidget from './bottom/BotWidget';
import ClientsWidget from './top/ClientsWidget';
import TopWidget from './top/TopWidget';
import { Link } from 'react-router-dom';
import { Logout } from '@mui/icons-material';

export default function Home({ setAuth }) {
  const [name, setName] = useState();
  const getProfile = async () => {
    try {
      const response = await fetch('http://localhost:8000/profile', {
        method: 'GET',
        headers: { Authorization: localStorage.getItem('token') },
      });

      const parseRes = await response.json();
      // console.log(parseRes);

      setName(parseRes.firstname + ' ' + parseRes.lastname);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);
  return (
    <div className='flex h-[900px]'>
      <Sidebar />
      <div className='w-full px-8 py-8 pb-8 mb-4 bg-white border rounded shadow-md h-[900px] '>
        {/* HOME ITEMS */}
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
              <button
                className=''
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

        <TopWidget />
        <BotWidget />
      </div>
    </div>
  );
}
