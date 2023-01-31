import { ReceiptLong } from '@mui/icons-material';
import React, { useState } from 'react';
import { useEffect } from 'react';

export default function PaymentsWidget() {
  const [payments, setPayments] = useState([]);
  const [amounts, setAmounts] = useState([]);
  const [total, setTotal] = useState(0);

  const getPayments = async () => {
    try {
      const response = await fetch('http://localhost:8000/allPayments', {
        method: 'GET',
        headers: { Authorization: localStorage.getItem('token') },
      });

      const parseRes = await response.json();

      // console.log(parseRes);

      setPayments(parseRes);

      setAmounts(
        payments.map((payment) => {
          return Number(payment.amount);
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPayments();
    setTotal(amounts.reduce((acc, val) => acc + val, 0));
  }, [amounts]);

  return (
    <div className='w-full'>
      {/* Payments */}
      <div
        className='w-full  mt-5 p-8 rounded-xl cursor-pointer border border-t-4 border-t-red-500 hover:bg-red-500
        hover:text-white hover:text-base transition duration-150
        ease-in-out shadow-md'
      >
        <span className='text-xl '>Payments</span>
        <div className='my-3'>
          <span className='text-3xl'>
            <ReceiptLong className='mr-3' /> ₱
            {new Intl.NumberFormat().format(total)}
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
