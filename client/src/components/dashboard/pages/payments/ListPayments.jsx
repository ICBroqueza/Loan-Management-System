import { DeleteForever, Edit, Update } from '@mui/icons-material';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const PaymentsInfo = ({ loanId }) => {
  const [payments, setPayments] = useState([]);

  const location = useLocation();

  const clientId = location.pathname.split('/')[2];

  const GetPayments = async () => {
    try {
      const response = await fetch(`http://localhost:8000/payments/${loanId}`, {
        method: 'GET',
        headers: { Authorization: localStorage.getItem('token') },
      });

      const parseRes = await response.json();

      setLoans(parseRes);
      console.log(loans);
      // console.log(parseRes);
    } catch (error) {
      console.log(error.message);
    }
  };

  // Delete loan Function
  async function deleteLoan(id) {
    try {
      await fetch(`http://localhost:8000/loans/${id}`, {
        method: 'DELETE',
        headers: { Authorization: localStorage.getItem('token') },
      });

      setLoans(loans.filter((loan) => loan.id !== id));
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    GetPayments();
  }, []);

  return (
    <div>
      {/* Payment History */}
      {/* <div>
        <div className='flex items-center justify-between border-y-2 mt-5'>
          <h3 className='text-lg font-medium leading-6 text-gray my-2  px-1 py-2 '>
            Payment History
          </h3>
          <button
            className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mb-2 rounded focus:outline-none focus:shadow-outline w-auto mt-2'
            // onClick={() => deleteLoan(loan.id)}
          >
            Add Payment
          </button>
        </div>
        <table className='table-fixed text-center '>
          <thead>
            <tr>
              <th className='w-1/1 px-1 py-2 text-gray-600'>Voucher</th>
              <th className='w-1/4 px-1 py-2 text-gray-600'>
                Outstanding Balance
              </th>
              <th className='w-1/4 px-4 py-2 text-gray-600'>Amortization</th>
              <th className='w-1/4 px-1 py-2 text-gray-600'>Payment</th>
              <th className='w-1/4 px-4 py-2 text-gray-600'>
                Date of Transaction
              </th>
            </tr>
          </thead>
          <tbody>
            {loans.length <= 0 ? (
              <tr className='border px-4 py-2 bg-red-50'>
                <td></td>
                <td></td>
                <td className='px-4 py-2 bg-red-50'>No Loan Data</td>
                <td></td>
                <td></td>
              </tr>
            ) : (
              loans.map((loan, index) => {
                return (
                  <tr key={index}>
                    <td className='border px-4 py-2 bg-gray-50'>{loan.id}</td>
                    <td className='border px-4 py-2 '>₱ {loan.gross_loan}</td>
                    <td className='border px-4 py-2 bg-gray-50'>
                      ₱ {loan.amort}
                    </td>
                    <td className='border px-4 py-2'>₱ 0</td>
                    <td className='border px-4 py-2 bg-gray-50'>
                      {new Date(loan.date_released).toDateString()}
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div> */}
    </div>
  );
};

export default PaymentsInfo;
