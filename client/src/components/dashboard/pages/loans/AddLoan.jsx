import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Sidebar from '../../../sidebar/Sidebar';
import { Logout } from '@mui/icons-material';

const AddLoan = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    status: '',
    type: '',
    gross_loan: '',
    balance: '',
    amort: '',
    terms: '',
    date_released: '',
    maturity_date: '',
  });

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const {
    status,
    type,
    gross_loan,
    balance,
    amort,
    terms,
    date_released,
    maturity_date,
  } = inputs;

  const location = useLocation();

  const clientId = location.pathname.split('/')[2];

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = {
        type,
        status,
        gross_loan,
        balance,
        amort,
        terms,
        date_released,
        maturity_date,
      };

      const response = await fetch(`http://localhost:8000/loans/${clientId}`, {
        method: 'POST',
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
        status: '',
        gross_loan: '',
        balance: '',
        amort: '',
        terms: '',
        date_released: '',
        maturity_date: '',
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className='flex h-[900px]'>
      <Sidebar />
      {/* Add Loan */}
      <div className='w-full h-[900px] mx-auto px-8 py-8 mb-4 border bg-white shadow-md rounded'>
        {/* TITLE */}
        <div className='flex items-center justify-between px-4 py-5 sm:px-6 bg-red-500 rounded shadow-md '>
          <div>
            <h3 className='text-lg font-medium leading-6 text-white'>
              Add Loan for Client #{clientId}
            </h3>
            <p className='mt-1 max-w-2xl text-sm text-white'>
              Fill all the required fields.
            </p>
          </div>
          {/* <ToastContainer /> */}

          {/* BUTTON */}

          <div className='text-white'>
            <button
              className=''
              onClick={(e) => {
                setAuth(false);
              }}
            >
              <Link to='/login'>
                <Logout />
              </Link>
            </button>
          </div>
        </div>

        {/* FORM */}
        <form
          className='grid grid-cols-2 mt-5 p-8 h-[650px] rounded border shadow-md border-t-4 border-t-red-500 '
          onSubmit={onSubmit}
        >
          {/* TYPE */}
          <div>
            <label htmlFor='type'>Type of Loan:</label>
            <select
              className='block border border-grey-500 w-10/12 p-3 rounded'
              name='type'
              id='type'
              value={type}
              onChange={(e) => {
                onChange(e);
              }}
            >
              <option value='Personal Loan'>Personal Loan</option>
              <option value='Salary Loan'>Salary Loan</option>
              <option value='Business Loan'>Business Loan</option>
            </select>
          </div>

          {/* STATUS */}
          <div>
            <label htmlFor='maturity_date'>Status:</label>
            <select
              className='block border border-grey-500 w-10/12 p-3 rounded'
              name='status'
              id='status'
              value={status}
              onChange={(e) => {
                onChange(e);
              }}
            >
              <option value='Approved'>Approved</option>
              <option value='Fully Paid'>Fully Paid</option>
              <option value='Disbursed'>Disbursed</option>
              <option value='Pending'>Pending</option>
              <option value='Declined'>Declined</option>
            </select>
          </div>

          {/* GROSS LOAN */}
          <div>
            <label htmlFor='gross_loan'>Gross Loan:</label>
            <input
              type='number'
              className='block border border-grey-500 w-10/12 p-3 rounded'
              placeholder='Gross Loan'
              name='gross_loan'
              value={gross_loan}
              onChange={(e) => onChange(e)}
            />
          </div>

          {/* BALANCE */}
          <div>
            <label htmlFor='gross_loan'>Balance:</label>
            <input
              type='number'
              className='block border border-grey-500 w-10/12 p-3 rounded'
              placeholder='Balance'
              name='balance'
              value={balance}
              onChange={(e) => onChange(e)}
            />
          </div>

          {/* AMORTIZATION */}
          <div>
            <label htmlFor='amort'>Amortization:</label>
            <input
              type='number'
              className='block border border-grey-500 w-10/12 p-3 rounded '
              placeholder='Amortization'
              name='amort'
              value={amort}
              onChange={(e) => onChange(e)}
            />
          </div>

          {/* TERMS */}
          <div>
            <label htmlFor='terms'>Terms:</label>
            <select
              className='block border border-grey-500 w-10/12 p-3 rounded '
              name='terms'
              id='terms'
              value={terms}
              onChange={(e) => {
                onChange(e);
              }}
            >
              <option value='1'>1 Month</option>
              <option value='2'>2 Months</option>
              <option value='3'>3 Months</option>
              <option value='4'>4 Months</option>
              <option value='5'>5 Months</option>
              <option value='6'>6 Months</option>
              <option value='12'>12 Months</option>
            </select>
          </div>

          {/* DATE RELEASED */}
          <div>
            <label htmlFor='date_released'>Date Released:</label>
            <input
              type='date'
              className='block border border-grey-500 w-10/12 p-3 rounded '
              placeholder='Date Released'
              name='date_released'
              value={date_released}
              onChange={(e) => onChange(e)}
            />
          </div>

          {/* MATURITY DATE */}
          <div>
            <label htmlFor='maturity_date'>Maturity Date:</label>
            <input
              type='date'
              className='block border border-grey-500 w-10/12 p-3 rounded '
              placeholder='Maturity Date'
              name='maturity_date'
              value={maturity_date}
              onChange={(e) => onChange(e)}
            />
          </div>

          {/* BUTTONS */}
          <div>
            <button
              className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-auto ml-auto '
              type='submit'
            >
              Add New Loan
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

export default AddLoan;
