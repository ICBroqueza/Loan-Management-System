import React from 'react';
import { Link } from 'react-router-dom';

import {
  PermIdentity,
  CreditScore,
  ReceiptLong,
  MailOutline,
  Home,
} from '@mui/icons-material';

export default function Sidebar() {
  return (
    <div className='md:block px-5 py-5 md:w-60 lg:w-60  transition-transform duration-300 ease-in-out border shadow-lg rounded-md'>
      {/* LOGO */}
      <div className='my-10'>
        <h3 className='text-center text-2xl'>Maogma</h3>
        <p className='text-center text-sm'>Lending Application</p>
      </div>

      {/* MENU */}
      <div className='my-10'>
        <ul>
          <li className='text-sm font-medium text-gray-700 py-2 px-2 hover:bg-red-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out cursor-pointer'>
            <Home />
            <Link to='/home' className='ml-2.5'>
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
    </div>
  );
}
