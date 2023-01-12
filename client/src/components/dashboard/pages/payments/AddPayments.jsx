import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Sidebar from '../../../sidebar/Sidebar';
import LoanInfo from '../loans/Loan';
import PaymentLoansInfo from './ViewLoans';

const AddPayments = () => {
  const [inputs, setInputs] = useState({
    amount: '',
    collection_date: '',
    collected_by: '',
    new_balance: '',
    method: '',
    loan_id: '',
  });

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const {
    amount,
    collection_date,
    collected_by,
    new_balance,
    method,
    loan_id,
  } = inputs;

  const location = useLocation();

  const clientId = location.pathname.split('/')[2];

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = {
        amount,
        collection_date,
        collected_by,
        new_balance,
        method,
        loan_id,
      };

      const response = await fetch(
        `http://localhost:8000/payments/${clientId}`,
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
            Authorization: localStorage.getItem('token'),
          },
          body: JSON.stringify(body),
        }
      );

      const parseRes = await response.json();

      console.log(parseRes);

      setInputs({
        amount: '',
        collection_date: '',
        collected_by: '',
        new_balance: '',
        method: '',
        loan_id: '',
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  console.log();
  return (
    <div className='flex'>
      <div>
        <Sidebar />
      </div>
      {/* Add Loan */}
      <div className='container ml-10 py-2 flex-1 flex flex-col px-2'>
        {/* TITLE */}
        <div className='px-4 py-5 sm:px-6 bg-red-500 mb-5'>
          <h3 className='text-lg font-medium leading-6 text-white'>
            Payment for Client #{clientId}
          </h3>
          <p className='mt-1 max-w-2xl text-sm text-white'>
            Add a payment for a client
          </p>
        </div>

        {/* LOANS INFO */}
        <PaymentLoansInfo />

        <div className='flex items-center justify-between border-y-2 mt-5'>
          <h3 className='text-lg font-medium leading-6 text-gray my-2  px-1 py-2 '>
            Loan Payment
          </h3>
        </div>

        {/* FORM */}
        <form className='grid grid-cols-2 p-2 mt-2zz' onSubmit={onSubmit}>
          {/* VOUCHER */}
          <div>
            <label htmlFor='amount'>Voucher:</label>
            <input
              type='number'
              className='block border border-grey-500 w-10/12 p-3 rounded mb-4'
              placeholder='Voucher #'
              name='loan_id'
              value={loan_id}
              onChange={(e) => onChange(e)}
            />
          </div>

          {/* AMOUNT */}
          <div>
            <label htmlFor='amount'>Amount:</label>
            <input
              type='number'
              className='block border border-grey-500 w-10/12 p-3 rounded mb-4'
              placeholder='Amount'
              name='amount'
              value={amount}
              onChange={(e) => onChange(e)}
            />
          </div>

          {/* COLLECTION DATE */}
          <div>
            <label htmlFor='collection_date'>Collection Date:</label>
            <input
              type='date'
              className='block border border-grey-500 w-10/12 p-3 rounded mb-4'
              placeholder='Collection Date'
              name='collection_date'
              value={collection_date}
              onChange={(e) => onChange(e)}
            />
          </div>

          {/* COLLECTED BY */}
          <div>
            <label htmlFor='collected_by'>Collected By:</label>
            <input
              type='text'
              className='block border border-grey-500 w-10/12 p-3 rounded mb-4'
              placeholder='Collected by'
              name='collected_by'
              value={collected_by}
              onChange={(e) => onChange(e)}
            />
          </div>

          {/* NEW BALANCE */}
          <div>
            <label htmlFor='gross_loan'>New Balance:</label>
            <input
              type='number'
              className='block border border-grey-500 w-10/12 p-3 rounded mb-4'
              placeholder='New Balance'
              name='new_balance'
              value={new_balance}
              onChange={(e) => onChange(e)}
            />
          </div>

          {/* METHOD */}
          <div>
            <label htmlFor='terms'>Method:</label>
            <select
              className='block border border-grey-500 w-10/12 p-3 rounded mb-4'
              name='method'
              id='method'
              value={method}
              onChange={(e) => {
                onChange(e);
              }}
            >
              <option value='ATM'>ATM</option>
              <option value='OTC'>OTC</option>
              <option value='ONLINE BANK'>ONLINE BANK</option>
              <option value='GCASH'>GCASH</option>
            </select>
          </div>

          {/* BUTTONS */}
          <div>
            <button
              className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-auto ml-auto '
              type='submit'
            >
              Add Payment
            </button>
            <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-1/5 ml-10'>
              <Link to={`/borrower/${clientId}`}>Cancel</Link>
            </button>
          </div>

          {/*  */}
        </form>
      </div>
    </div>
  );
};

export default AddPayments;
