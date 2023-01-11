import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
  LocationOnOutlined,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from '@mui/icons-material';

export default function Account({ clientID }) {
  const [id, setId] = useState();
  const [name, setName] = useState('');
  const [contactnumber, setContactNumber] = useState();
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');

  // const [client, setClient] = useState([]);

  const getProfile = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/client/:${clientID}`,
        {
          method: 'GET',
          headers: { Authorization: localStorage.getItem('token') },
        }
      );

      const parseRes = await response.json();
      console.log(parseRes);

      setId(parseRes.id);
      setName(parseRes.firstname + ' ' + parseRes.lastname);
      setContactNumber(parseRes.contactnumber);
      setAddress(parseRes.address);
      setUsername(parseRes.username);
      setEmail(parseRes.email);

      // console.log(parseRes.id);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);
  return (
    <div>
      {/* ACCOUNT INFO */}
      <div className='flex container mt-5 w-full shadow-md'>
        <div className='py-5 px-5 '>
          <div className='flex items-center  py-5 px-5'>
            <img
              src='https://cdn3.iconfinder.com/data/icons/red-icons-1/512/Male-profile-icon-512.png'
              alt=''
              className='w-2/5 h-2/5'
            />
            <div className='ml-20 w-96'>
              <span className='text-base font-semibold mt-10 text-gray-500 '>
                Account Details
              </span>

              {/* DETAILS */}
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

              {/* UPDATE BUTTON */}
              <div className='flex items-center my-5'>
                <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline '>
                  <Link to={`/editBorrower/`}>UPDATE CLIENT</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
