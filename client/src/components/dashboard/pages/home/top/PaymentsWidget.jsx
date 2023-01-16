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

  // console.log(total);
  //   In this example, we have an array state that is initially set to [1, 2, 3, 4, 5], and a sum state that is initially set to 0. We use the useEffect hook to listen for changes to the array state, and whenever the array state changes, we calculate the new sum by using the reduce method to iterate through the array and add up all the values. The calculated sum is then set to the sum state using the setSum function.

  // In the return we are displaying the array and sum value in JSX.

  // function getTotalPayments(payments) {
  //   let total = 0;
  //   payments.map()

  // }

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     getPayments();
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  // console.log(
  //   payments.forEach((payment) => {
  //     payment.reduce(function (a, b) {
  //       return a + b;
  //     });
  //   })
  // );

  // const allPayments = payments.map((payment) => {
  //   return Number(payment.amount);
  // });

  // const total = allPayments.reduce(function (a, b) {
  //   return a + b;
  // });

  // setTotal(
  //   allPayments.reduce(function (a, b) {
  //     return a + b;
  //   })
  // );

  // console.log(
  //   allPayments.reduce(function (a, b) {
  //     return a + b;
  //   })
  // );

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
            {/* {payments.length} */}
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
