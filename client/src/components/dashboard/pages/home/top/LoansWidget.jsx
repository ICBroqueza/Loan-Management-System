import { CreditScore } from '@mui/icons-material';
import React, { useState } from 'react';
import { useEffect } from 'react';

export default function LoansWidget() {
  const [loans, setLoans] = useState([]);

  const getLoans = async () => {
    try {
      const response = await fetch('http://localhost:8000/allLoans', {
        method: 'GET',
        headers: { Authorization: localStorage.getItem('token') },
      });

      const parseRes = await response.json();
      // console.log(parseRes);

      setLoans(parseRes);
      console.log(loans);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getLoans();
  }, []);

  // console.log(loans.length);
  return (
    <div className=''>
      {/* Loans */}
      <div
        className='w-full  mt-5 p-8 rounded-xl cursor-pointer border border-l-4 border-l-red-500 hover:bg-red-500
        hover:text-white hover:text-base transition duration-150
        ease-in-out'
      >
        <span className='text-xl'>Loans</span>
        <div className='my-3'>
          <span className='text-3xl'>
            <CreditScore className='mr-3' />
            {loans.length}
          </span>
        </div>
        <span className='text-base text-gray-500'>
          Total Loans Transactions
        </span>
      </div>
      {/*  */}
    </div>
  );
}
