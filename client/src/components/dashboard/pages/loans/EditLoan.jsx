import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../../../sidebar/Sidebar';

const EditLoan = () => {
  const [inputs, setInputs] = useState({
    type: '',
    balance: '',
    gross_loan: '',
    amort: '',
    terms: '',
    status: '',
    date_released: '',
    maturity_date: '',
  });

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const {
    type,
    balance,
    gross_loan,
    amort,
    terms,
    status,
    date_released,
    maturity_date,
  } = inputs;

  const location = useLocation();

  const loanId = location.pathname.split('/')[2];

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = {
        type,
        balance,
        gross_loan,
        amort,
        terms,
        date_released,
        status,
        maturity_date,
      };

      const response = await fetch(`http://localhost:8000/loans/${loanId}`, {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json',
          Authorization: localStorage.getItem('token'),
        },
        body: JSON.stringify(body),
      });

      const parseRes = await response.json();

      console.log(parseRes);

      setInputs({
        type: '',
        balance: '',
        gross_loan: '',
        amort: '',
        terms: '',
        status: '',
        date_released: '',
        maturity_date: '',
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className='flex '>
      <div>
        <Sidebar />
      </div>

      <div className='w-full'>
        <div className='container ml-10 flex flex-col px-2'>
          <h1 className='text-xl my-5'>Update Loan Voucher #{loanId}</h1>
          <form
            onSubmit={(e) => {
              onSubmit(e);
            }}
          >
            <input
              type='number'
              className='block border border-grey-500 w-full p-3 rounded mb-4'
              name='gross_loan'
              value={gross_loan}
              onChange={(e) => {
                onChange(e);
              }}
              placeholder='Gross Loan'
            />
            <input
              type='number'
              className='block border border-grey-500 w-full p-3 rounded mb-4'
              name='balance'
              value={balance}
              onChange={(e) => {
                onChange(e);
              }}
              placeholder='Balance'
            />
            <input
              type='number'
              className='block border border-grey-500t w-full p-3 rounded mb-4'
              name='amort'
              value={amort}
              onChange={(e) => {
                onChange(e);
              }}
              placeholder='Monthly Amortization'
            />
            <input
              type='number'
              className='block border border-grey-500t w-full p-3 rounded mb-4'
              name='terms'
              value={terms}
              onChange={(e) => {
                onChange(e);
              }}
              placeholder='Terms'
            />
            <input
              type='date'
              className='block border border-grey-500t w-full p-3 rounded mb-4'
              name='date_released'
              value={date_released}
              onChange={(e) => {
                onChange(e);
              }}
              placeholder='Date Released'
            />
            <input
              type='date'
              className='block border border-grey-500t w-full p-3 rounded mb-4'
              name='maturity_date'
              value={maturity_date}
              onChange={(e) => {
                onChange(e);
              }}
              placeholder='Maturity Date'
            />
            <button
              type='submit'
              className=' text-center py-3 rounded bg-red-500 text-white hover:bg-red-700 focus:outline-none my-1 w-1/5'
            >
              Update
            </button>
            <button
              type='submit'
              className=' ml-5 text-center py-3 rounded bg-red-500 text-white hover:bg-red-700 focus:outline-none my-1 w-1/5'
            >
              Undo
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditLoan;
