import { DeleteForever, Edit, Update } from '@mui/icons-material';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PaymentsInfo from '../payments/ListPayments';

const PaymentLoansInfo = () => {
  const [loans, setLoans] = useState([]);
  const [loanId, setLoanId] = useState();

  const location = useLocation();

  const clientId = location.pathname.split('/')[2];

  const GetLoans = async () => {
    try {
      const response = await fetch(`http://localhost:8000/loans/${clientId}`, {
        method: 'GET',
        headers: { Authorization: localStorage.getItem('token') },
      });

      const parseRes = await response.json();

      setLoans(parseRes);
      console.log(loans);
      console.log(loanId);
    } catch (error) {
      console.log(error.message);
    }
  };
  // console.log(loanId);

  useEffect(() => {
    GetLoans();
  }, []);

  return (
    <div>
      {/* Loans Information */}
      <div className='w-full  pb-8 mb-4 bg-white shadow-md rounded '>
        {/* Active Loans */}
        <div>
          <div className='flex items-center justify-between border-y-2 mt-5'>
            <h3 className='text-lg font-medium leading-6 text-gray my-2  px-1 py-2 '>
              Loan Transactions
            </h3>
          </div>
          <table className='table-fixed text-center '>
            <thead>
              <tr>
                <th className='w-1/1 px-1 py-2 text-gray-600'>Voucher</th>
                <th className='w-1/6 px-1 py-2 text-gray-600'>Loan Type</th>
                <th className='w-1/6 px-4 py-2 text-gray-600'>Gross Loan</th>
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
                loans.map((loan, index) => {
                  return (
                    <tr key={index}>
                      <td className='border px-4 py-2 bg-gray-50'>{loan.id}</td>
                      <td className='border px-4 py-2'>{loan.type}</td>
                      <td className='border px-4 py-2 '>₱ {loan.gross_loan}</td>
                      <td className='border px-4 py-2 bg-gray-50'>
                        ₱ {loan.amort}
                      </td>
                      <td className='border px-4 py-2 '>
                        {loan.terms} month/s
                      </td>
                      <td className='border px-4 py-2 bg-gray-50'>
                        {new Date(loan.date_released).toDateString()}
                      </td>
                      <td className='border px-4 py-2 '>
                        {loan.status === 'Approved' ||
                        loan.status === 'Fully Paid' ? (
                          <span className=' bg-green-500 text-white px-4 py-1 rounded-md'>
                            {loan.status}
                          </span>
                        ) : loan.status === 'Declined' ? (
                          <span className=' bg-red-400 text-white px-4 py-1 rounded-md'>
                            {loan.status}
                          </span>
                        ) : loan.status === 'Pending' ? (
                          <span className=' bg-yellow-300 text-white px-4 py-1 rounded-md'>
                            {loan.status}
                          </span>
                        ) : (
                          <span className=' bg-orange-300 text-white px-4 py-1 rounded-md'>
                            {loan.status}
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentLoansInfo;
