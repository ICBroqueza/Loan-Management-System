import React from 'react';
import { Link } from 'react-router-dom';

import {
  PermIdentity,
  CreditScore,
  ReceiptLong,
  MailOutline,
  Home,
} from '@mui/icons-material';

export default function Sidebar({ setAuth }) {
  return (
    <div className='flex'>
      <div className='bg-white md:block px-5 py-5  w-30 md:w-60 lg:w-60 overflow-x-hidden transition-transform duration-300 ease-in-out flex justify-between items-center '>
        {/* MENU */}
        <div className=''>
          <h3>Dashboard</h3>
          <ul>
            <li className='text-sm font-medium text-gray-700 py-2 px-2 hover:bg-red-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out cursor-pointer'>
              <Home />
              <Link to='/home' className='ml-2.5 '>
                Home
              </Link>
            </li>

            <li className='text-sm font-medium text-gray-700 py-2 px-2 hover:bg-red-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out'>
              <PermIdentity />
              <Link to='/borrowers' className='ml-2.5'>
                Borrowers
              </Link>
            </li>

            <li className='text-sm font-medium text-gray-700 py-2 px-2 hover:bg-red-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out'>
              <CreditScore />
              <Link to='/loans' className='ml-2.5'>
                Loans
              </Link>
            </li>

            <li className='text-sm font-medium text-gray-700 py-2 px-2 hover:bg-red-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out'>
              <ReceiptLong />
              <Link to='/payments' className='ml-2.5'>
                Payments
              </Link>
            </li>

            <li className='text-sm font-medium text-gray-700 py-2 px-2 hover:bg-red-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out'>
              <MailOutline />
              <Link to='/emailClient' className='ml-2.5'>
                Email
              </Link>
            </li>
          </ul>
        </div>

        {/* BUTTONS */}
        <div className='flex gap-2 justify-center mt-10'>
          <Link to='/login'>
            <button
              className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline '
              type='submit'
              onClick={(e) => {
                setAuth(false);
              }}
            >
              Log Out
            </button>
          </Link>

          <Link to='/'>
            <button
              className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              onClick={(e) => {
                setAuth(false);
              }}
            >
              Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
