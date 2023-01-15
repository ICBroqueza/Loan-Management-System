import { ReceiptLong } from '@mui/icons-material';
import React, { useState } from 'react';
import { useEffect } from 'react';

export default function PaymentsWidget() {
  const [payments, setPayments] = useState([]);

  const getPayments = async () => {
    try {
      const response = await fetch('http://localhost:8000/allPayments', {
        method: 'GET',
        headers: { Authorization: localStorage.getItem('token') },
      });

      const parseRes = await response.json();
      // console.log(parseRes);

      setPayments(parseRes);
      console.log(payments);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPayments();
  }, []);

  // console.log(payments.length);

  return (
    <div className=''>
      {/* Payments */}
      <div
        className='w-full  mt-5 p-8 rounded-xl cursor-pointer border border-l-4 border-l-red-500 hover:bg-red-500
        hover:text-white hover:text-base transition duration-150
        ease-in-out'
      >
        <span className='text-xl'>Payments</span>
        <div className='my-3'>
          <span className='text-3xl'>
            <ReceiptLong className='mr-3' />
            {payments.length}
          </span>
        </div>
        <span className='text-base text-gray-500'>
          Total Payments Collected
        </span>
      </div>
      {/*  */}
    </div>
  );
}
