import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Logout } from '@mui/icons-material';
import { ToastContainer, toast } from 'react-toastify';

import Sidebar from '../../../sidebar/Sidebar';

const AddLoans = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    client_id: '',
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
    client_id,
    status,
    type,
    gross_loan,
    balance,
    amort,
    terms,
    date_released,
    maturity_date,
  } = inputs;

  const navigate = useNavigate();
  const addSuccessful = () => {
    toast.promise(
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, 1000);
      }),
      {
        pending: 'Adding Loan...',
        success: 'Added Succesfully!',
        error: 'Error!',
      },
      {
        autoClose: 1000,
      }
    );
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = {
        client_id,
        type,
        status,
        gross_loan,
        balance,
        amort,
        terms,
        date_released,
        maturity_date,
      };

      const response = await fetch(`http://localhost:8000/loans`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          Authorization: localStorage.getItem('token'),
        },
        body: JSON.stringify(body),
      });

      const parseRes = await response.json();

      addSuccessful();

      setTimeout(() => {
        navigate(`/Borrower/${client_id}`);
      }, 3000);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className='h-[900px] flex'>
      <Sidebar />
      <ToastContainer />
      <div className='w-full h-[900px] mx-auto px-8 py-8 mb-4 border bg-white shadow-md rounded '>
        {/* HEADER */}
        <div className='flex items-center justify-between px-4 py-5 sm:px-6 bg-red-500 rounded shadow-md  '>
          <div>
            <h3 className='text-lg font-medium leading-6 text-white'>
              Add New Loan
            </h3>
            <p className='mt-1 max-w-2xl text-sm text-white'>
              Add a loan for a client
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
          className='mt-5 p-8 rounded border shadow-md grid grid-cols-2 border-t-4 border-t-red-500 '
          onSubmit={onSubmit}
        >
          {/* CLIENT ID */}
          <div>
            <label htmlFor='client_id'>Client ID:</label>
            <input
              type='number'
              className='block border border-grey-500 w-10/12 p-3 rounded mb-4'
              placeholder='Client ID'
              name='client_id'
              value={client_id}
              onChange={(e) => onChange(e)}
            />
          </div>

          {/* TYPE  */}
          <div>
            <label htmlFor='type'>Type of Loan:</label>
            <select
              className='block border border-grey-500 w-10/12 p-3 rounded mb-4'
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
              className='block border border-grey-500 w-10/12 p-3 rounded mb-4'
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
              className='block border border-grey-500 w-10/12 p-3 rounded mb-4'
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
              className='block border border-grey-500 w-10/12 p-3 rounded mb-4'
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
              className='block border border-grey-500 w-10/12 p-3 rounded mb-4'
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
              className='block border border-grey-500 w-10/12 p-3 rounded mb-4'
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
              className='block border border-grey-500 w-10/12 p-3 rounded mb-4'
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
              className='block border border-grey-500 w-10/12 p-3 rounded mb-4'
              placeholder='Maturity Date'
              name='maturity_date'
              value={maturity_date}
              onChange={(e) => onChange(e)}
            />
          </div>

          {/* BUTTONS */}
          <div className='mt-10'>
            <button
              className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-auto ml-auto '
              type='submit'
            >
              Add New Loan
            </button>
            <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-1/5 ml-10'>
              <Link to={`/loans`}>Cancel</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddLoans;
