import { AddBox, PermIdentity } from '@mui/icons-material';
import React, { useState } from 'react';
import { useEffect } from 'react';

export default function ClientsWidget() {
  const [clients, setClients] = useState([]);

  const getClients = async () => {
    try {
      const response = await fetch('http://localhost:8000/allClients', {
        method: 'GET',
        headers: { Authorization: localStorage.getItem('token') },
      });

      const parseRes = await response.json();
      // console.log(parseRes);

      setClients(parseRes);
      console.log(clients);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getClients();
  }, []);

  console.log(clients.length);

  return (
    <div className='w-full'>
      {/* CLIENTS */}
      <div
        className='mt-5 p-8 rounded-xl border border-t-4 border-t-red-500 cursor-pointer hover:bg-red-500
        hover:text-white hover:text-base transition duration-150
        ease-in-out shadow-md'
      >
        <div className='flex justify-between items-center'>
          <span className='text-xl'>Borrowers</span>
        </div>
        <div className='my-3 '>
          <span className='text-3xl'>
            <PermIdentity fontSize='30px' /> {clients.length}
          </span>
        </div>
        <span className='text-base text-gray-500'>Total Clients Serviced</span>
      </div>
    </div>
  );
}
