import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Logout } from '@mui/icons-material';

import Sidebar from '../../../sidebar/Sidebar';
import AddPayments from './AddPayments';

const PaymentLoansInfo = ({ setAuth }) => {
  const [loans, setLoans] = useState([]);

  const location = useLocation();

  const clientId = location.pathname.split('/')[2];
  const loanId = location.pathname.split('/')[3];

  const GetLoans = async () => {
    try {
      const response = await fetch(`http://localhost:8000/loan/${loanId}`, {
        method: 'GET',
        headers: { Authorization: localStorage.getItem('token') },
      });

      const parseRes = await response.json();

      setLoans(parseRes);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    GetLoans();
  }, []);

  return (
    <div className='flex h-[900px]'>
      <Sidebar />

      <div className='w-full h-[900px] mx-auto px-8 py-8 mb-4 border bg-white shadow-md rounded'>
        {/* HEADER */}

        <div className='flex items-center justify-between px-4 py-5 sm:px-6 bg-red-500 rounded shadow-md '>
          {/* TITLE */}
          <div>
            <h3 className='text-lg font-medium leading-6 text-white'>
              Payment for Loan Voucher #{loanId}
            </h3>
            <p className='mt-1 max-w-2xl text-sm text-white'>
              Add a payment for a client
            </p>
          </div>

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

        {/* Loans Information */}
        <div className='mt-5 px-4 h-[180px] rounded border shadow-md border-t-4 border-t-red-500 '>
          <div className='flex items-center justify-between border-y-2 mt-5'>
            <h3 className='text-lg font-medium leading-6 text-gray my-2  px-1 py-2 '>
              Client's Loan
            </h3>
          </div>
          <table className='table-fixed text-center '>
            <thead>
              <tr>
                <th className='w-1/1 px-1 py-2 text-gray-600'>Voucher</th>
                <th className='w-1/6 px-4 py-2 text-gray-600'>Gross Loan</th>
                <th className='w-1/6 px-4 py-2 text-gray-600'>
                  Outstanding Balance
                </th>
                <th className='w-1/6 px-4 py-2 text-gray-600'>Amortization</th>
                <th className='w-1/6 px-4 py-2 text-gray-600'>Terms</th>
                <th className='w-1/6 px-4 py-2 text-gray-600'>Date Released</th>
                <th className='w-1/6 px-4 py-2 text-gray-600'>Status</th>
              </tr>
            </thead>
            <tbody>
              {loans.length <= 0 ? (
                <tr className='border px-4 py-2 bg-red-50'>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className='px-4 py-2 bg-red-50'>No Loan Data</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              ) : (
                <tr>
                  <td className='border px-4 py-2 bg-gray-50'>{loans.id}</td>
                  <td className='border px-4 py-2 '>₱ {loans.gross_loan}</td>
                  <td className='border px-4 py-2 '>₱ {loans.balance}</td>
                  <td className='border px-4 py-2 bg-gray-50'>
                    ₱ {loans.amort}
                  </td>
                  <td className='border px-4 py-2 '>{loans.terms} month/s</td>
                  <td className='border px-4 py-2 bg-gray-50'>
                    {new Date(loans.date_released).toDateString()}
                  </td>
                  <td className='border px-4 py-2 '>
                    {loans.status === 'Approved' ||
                    loans.status === 'Fully Paid' ? (
                      <span className=' bg-green-500 text-white px-4 py-1 rounded-md'>
                        {loans.status}
                      </span>
                    ) : loans.status === 'Declined' ? (
                      <span className=' bg-red-400 text-white px-4 py-1 rounded-md'>
                        {loans.status}
                      </span>
                    ) : loans.status === 'Pending' ? (
                      <span className=' bg-yellow-300 text-white px-4 py-1 rounded-md'>
                        {loans.status}
                      </span>
                    ) : (
                      <span className=' bg-orange-300 text-white px-4 py-1 rounded-md'>
                        {loans.status}
                      </span>
                    )}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Payment Form */}
        <AddPayments
          loanId={loanId}
          balance={loans.balance}
          clientId={clientId}
        />
      </div>
    </div>
  );
};

export default PaymentLoansInfo;
