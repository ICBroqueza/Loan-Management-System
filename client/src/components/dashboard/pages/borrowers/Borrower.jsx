import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

// import EditBorrower from './EditBorrower';

import {
  LocationOnOutlined,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from '@mui/icons-material';
import Sidebar from '../../../sidebar/Sidebar';
import LoanInfo from '../loans/Loan';
import Account from './Account';

export default function Borrower({ setAuth }) {
  const [id, setId] = useState();
  const [name, setName] = useState('');
  const [contactnumber, setContactNumber] = useState();
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');

  // const [clientInfo, setClientInfo] = useState([]);

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

      // setClientInfo(parseRes[0]);
      // setId(parseRes);
      setName(parseRes.firstname + ' ' + parseRes.lastname);
      setContactNumber(parseRes.contactnumber);
      setAddress(parseRes.address);
      setUsername(parseRes.username);
      setEmail(parseRes.email);
      // console.log(name);
    } catch (error) {
      console.log(error);
    }
  };
  // const id = clientInfo[0].id;
  // const fullname = clientInfo[0].firstname + ' ' + clientInfo[0].lastname;
  // const email = clientInfo[0].email;
  // const contactnumber = clientInfo[0].contactnumber;
  // const address = clientInfo[0].address;
  // const username = clientInfo[0].username;
  // const password = clientInfo[0].password;

  // console.log(fullname);
  useEffect(() => {
    getClient();
  }, []);

  return (
    <div className='flex flex-1 flex-column w-screen'>
      {/* <h1>{name}</h1> */}
      <Sidebar />

      {/* BORROWER INFO */}
      <div className='py-5 px-5 w-full'>
        <div className='px-4 py-5 sm:px-6 bg-red-500'>
          <h3 className='text-lg font-medium leading-6 text-white'>
            Borrower Info
          </h3>
          <p className='mt-1 max-w-2xl text-sm text-white'>
            All clients personal information
          </p>
        </div>

        {/* ACCOUNT INFO */}
        <div className='flex container mt-5 w-full shadow-md mb-5 rounded'>
          <div className='py-5 px-5 '>
            <div className='flex items-center  py-5 px-5'>
              {/* <img
                src='https://cdn3.iconfinder.com/data/icons/red-icons-1/512/Male-profile-icon-512.png'
                alt=''
                className='w-2/5 h-2/5'
              /> */}
              <div></div>
              <div className='ml-20 w-96'>
                <span className='text-base font-semibold mt-10 text-gray-500 '>
                  Account Details
                </span>

                <div className='flex items-center my-5'>
                  <PermIdentity className='text-lg' />
                  <span className='ml-2.5'>{name}</span>
                </div>
                <div className='flex items-center my-5'>
                  <MailOutline className='text-lg ' />
                  <span className='ml-2.5'>{email}</span>
                </div>
                <div className='flex items-center my-5'>
                  <LocationOnOutlined className='text-lg ' />
                  <span className='ml-2.5'>{address}</span>
                </div>
                <div className='flex items-center my-5'>
                  <PhoneAndroid className='text-lg ' />
                  <span className='ml-2.5'>{contactnumber}</span>
                </div>

                {/* {clientInfo.map((c) => {
                  <div className='flex items-center my-5'>
                    <PermIdentity className='text-lg' />
                    <span className='ml-2.5'>ID: {c.id}</span>
                  </div>;
                })} */}

                <div className='flex items-center my-5'>
                  <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline '>
                    <Link to={`/editBorrower/${clientId}`}>UPDATE CLIENT</Link>
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
  );
}
