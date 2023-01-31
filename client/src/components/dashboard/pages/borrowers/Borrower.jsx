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
import Sidebar from '../../../sidebar/Sidebar';
import LoanInfo from '../loans/Loan';

export default function Borrower({ setAuth }) {
  const [name, setName] = useState('');
  const [contactnumber, setContactNumber] = useState();
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');

  const location = useLocation();

  const clientId = location.pathname.split('/')[2];

  const getClient = async () => {
    try {
      const response = await fetch(`http://localhost:8000/client/${clientId}`, {
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
    getClient();
  }, []);

  return (
    <div className='h-[900px] flex'>
      <Sidebar />

      <div className='w-full h-[900px] mx-auto px-8 py-8 mb-4 border bg-white shadow-md rounded '>
        {/* BORROWER INFO */}
        {/* HEADER */}
        <div className='flex items-center justify-between px-4 py-5 sm:px-6 bg-red-500 rounded shadow-md '>
          {/* TITLE */}
          <div>
            <h3 className='text-lg font-medium leading-6 text-white'>
              Borrower Info
            </h3>
            <p className='mt-1 max-w-2xl text-sm text-white'>
              All client's information
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

        {/* BORROWER ITEMS */}
        <div className='flex'>
          {/* ACCOUNT INFO */}
          <div className='w-1/4 h-[720px] mt-5 border rounded shadow-md border-t-4 border-t-red-500'>
            <div className='py-5 px-5 '>
              <div className='flex flex-col justify-between items-center py-5 px-5 '>
                <img
                  src='https://cdn3.iconfinder.com/data/icons/red-icons-1/512/Male-profile-icon-512.png'
                  alt=''
                  className='w-full h-full'
                />
                {/* USER INFO */}
                <div className=''>
                  <div className='flex items-center my-5'>
                    <PermIdentity className='text-lg' />
                    <span className='ml-2.5'>{name}</span>
                  </div>
                  <div className='flex items-center my-5'>
                    <MailOutline className='text-lg ' />
                    <span className='ml-2.5'>{email}</span>
                  </div>
                  <div className='flex items-center my-5'>
                    <PhoneAndroid className='text-lg ' />
                    <span className='ml-2.5'>{contactnumber}</span>
                  </div>
                  <div className='flex items-center my-5'>
                    <LocationOnOutlined className='text-lg ' />
                    <span className='ml-2.5'>{address}</span>
                  </div>
                  <div className='flex items-center my-5'>
                    <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full '>
                      <Link to={`/editBorrower/${clientId}`}>
                        UPDATE CLIENT
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* LOAN INFO */}
          <LoanInfo />
        </div>
      </div>
    </div>
  );
}
