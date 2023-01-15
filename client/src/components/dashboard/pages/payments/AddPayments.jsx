import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Sidebar from '../../../sidebar/Sidebar';
import LoanInfo from '../loans/Loan';
import UpdateBalance from './UpdateBalance';
import PaymentLoansInfo from './PaymentLoanInfo';

const AddPayments = ({ loanId, balance, clientId }) => {
  console.log(loanId);
  console.log(balance);
  console.log(clientId);
  const [inputs, setInputs] = useState({
    amount: '',
    collection_date: '',
    collected_by: '',
    new_balance: '',
    method: '',
    client_id: clientId,
    loan_id: loanId,
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
    client_id,
    loan_id,
  } = inputs;

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = {
        amount,
        collection_date,
        collected_by,
        new_balance,
        method,
        client_id,
        loan_id,
      };

      const response = await fetch(`http://localhost:8000/payments/${loanId}`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          Authorization: localStorage.getItem('token'),
        },
        body: JSON.stringify(body),
      });

      const parseRes = await response.json();

      console.log(parseRes);
    } catch (error) {
      console.log(error.message);
    }
  };

  console.log(clientId);
  console.log(client_id);
  const n_balance = balance - amount;
  console.log(n_balance);

  return (
    <div className='flex'>
      {/* Add Loan */}
      <div className='  py-2 flex-1 flex flex-col px-2'>
        {/* LOANS INFO */}
        {/* <PaymentLoansInfo /> */}

        <div className='flex items-center justify-between border-y-2 mt-5'>
          <h3 className='text-lg font-medium leading-6 text-gray my-2  px-1 py-2 '>
            Loan Payment
          </h3>
        </div>

        {/* FORM */}
        <form className='grid grid-cols-2 p-2 mt-2' onSubmit={onSubmit}>
          <div className='flex w-full '>
            {/* CLIENT ID */}

            <div className='w-auto'>
              <label htmlFor='client_id'>Client ID:</label>
              <input
                type='number'
                className='block border border-grey-500 p-3 rounded mb-4 mr-5'
                name='client_id'
                value={clientId}
                disabled
              />
            </div>

            {/* VOUCHER */}
            <div className='w-auto'>
              <label htmlFor='loan_id'>Voucher:</label>
              <input
                type='number'
                className='block border border-grey-500 p-3 rounded mb-4'
                placeholder='Voucher #'
                name='loan_id'
                value={loanId}
                disabled
                onChange={(e) => onChange(e)}
              />
            </div>
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
            <label htmlFor='new_balance'>New Balances:</label>
            <input
              type='number'
              className='block border border-grey-500 w-10/12 p-3 rounded mb-4'
              name='new_balance'
              value={balance - amount}
              onChange={(e) => onChange(e)}
            />
          </div>

          {/* <UpdateBalance
            amount={1600 - amount}
            loan_id={loan_id}
            change={(e) => onChange(e)}
          /> */}

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
            {/* <UpdateBalance balance={new_balance} loan_id={loan_id} /> */}
            <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-1/5 ml-10'>
              <Link to={`/borrowers`}>Cancel</Link>
            </button>
            {/* <button
              className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-1/5 ml-10'
              onClick={() => updateLoan(loan_id)}
            >
              Update Balance
            </button> */}
          </div>

          {/*  */}
        </form>
      </div>
    </div>
  );
};

export default AddPayments;
