import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Sidebar from '../../../sidebar/Sidebar';

const AddLoan = () => {
  const [inputs, setInputs] = useState({
    type: '',
    gross_loan: '',
    amort: '',
    terms: '',
    date_released: '',
    maturity_date: '',
  });

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const { type, gross_loan, amort, terms, date_released, maturity_date } =
    inputs;

  const location = useLocation();

  const clientId = location.pathname.split('/')[2];

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = {
        type,
        gross_loan,
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
        gross_loan: '',
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
    <div className='flex'>
      <div>
        <Sidebar />
      </div>
      {/* Add Loan */}
      <div className='container ml-10 py-2 flex-1 flex flex-col px-2'>
        {/* TITLE */}
        <div className='px-4 py-5 sm:px-6 bg-red-500 mb-5'>
          <h3 className='text-lg font-medium leading-6 text-white'>
            New Loan for Client #{clientId}
          </h3>
          <p className='mt-1 max-w-2xl text-sm text-white'>
            Add a loan for a client
          </p>
        </div>

        {/* FORM */}
        <form className='d-flex' onSubmit={onSubmit}>
          {/* TYPE */}
          <label htmlFor='type'>Type of Loan:</label>
          <select
            className='block border border-grey-500 w-1/2 p-3 rounded mb-4'
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

          {/* GROSS LOAN */}
          <label htmlFor='gross_loan'>Gross Loan:</label>
          <input
            type='number'
            className='block border border-grey-500 w-1/2 p-3 rounded mb-4'
            placeholder='Gross Loan'
            name='gross_loan'
            value={gross_loan}
            onChange={(e) => onChange(e)}
          />

          {/* AMORTIZATION */}
          <label htmlFor='amort'>Amortization:</label>
          <input
            type='number'
            className='block border border-grey-500 w-1/2 p-3 rounded mb-4'
            placeholder='Amortization'
            name='amort'
            value={amort}
            onChange={(e) => onChange(e)}
          />

          {/* TERMS */}
          <label htmlFor='terms'>Terms:</label>
          <select
            className='block border border-grey-500 w-1/2 p-3 rounded mb-4'
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

          {/* DATE RELEASED */}
          <label htmlFor='date_released'>Date Released:</label>
          <input
            type='date'
            className='block border border-grey-500 w-1/2 p-3 rounded mb-4'
            placeholder='Date Released'
            name='date_released'
            value={date_released}
            onChange={(e) => onChange(e)}
          />

          {/* MATURITY DATE */}
          <label htmlFor='maturity_date'>Maturity Date:</label>
          <input
            type='date'
            className='block border border-grey-500 w-1/2 p-3 rounded mb-4'
            placeholder='Maturity Date'
            name='maturity_date'
            value={maturity_date}
            onChange={(e) => onChange(e)}
          />
          <br />

          <button
            className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-1/6 ml-auto '
            type='submit'
          >
            Add New Loan
          </button>

          <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-1/6 ml-10'>
            <Link to={`/borrower/${clientId}`}>Cancel</Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddLoan;
