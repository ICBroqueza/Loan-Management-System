import React from 'react';
import Sidebar from '../../../sidebar/Sidebar';
import GetBorrowers from './GetBorrowers';
import { Link } from 'react-router-dom';
import { Logout } from '@mui/icons-material';

export default function EmailPage({ setAuth }) {
  return (
    <div className='flex h-[900px]'>
      <Sidebar />

      <div className='w-full h-[900px] mx-auto px-8 py-8 mb-4 border bg-white shadow-md rounded'>
        {/* HEADER */}
        <div className='flex items-center justify-between px-4 py-5 sm:px-6 bg-red-500 rounded shadow-md '>
          {/* TITLE */}
          <div>
            <h3 className='text-lg font-medium leading-6 text-white'>
              Send Email
            </h3>
            <p className='mt-1 max-w-2xl text-sm text-white'>
              Update your client with their loan.
            </p>
          </div>

          {/* BUTTON */}

          <div className='text-white'>
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
        </div>
        <GetBorrowers />
      </div>
    </div>
  );
}
