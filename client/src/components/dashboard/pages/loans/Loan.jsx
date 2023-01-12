import { DeleteForever, Edit, Update } from '@mui/icons-material';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const LoanInfo = () => {
  const [loans, setLoans] = useState([]);

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
    GetLoans();
  }, []);

  return (
    <div>
      {/* Loans Information */}
      <div className='w-full mx-auto px-8 pt-6 pb-8 mb-4 bg-white shadow-md rounded '>
        <div className='px-4 py-5 sm:px-6 bg-red-500'>
          <h3 className='text-lg font-medium leading-6 text-white'>
            Loan Information
          </h3>
          <p className='mt-1 max-w-2xl text-sm text-white'>
            Loan transactions and payments.
          </p>
        </div>

        {/* Active Loans */}
        <div>
          <div className='flex items-center justify-between border-y-2 mt-5'>
            <h3 className='text-lg font-medium leading-6 text-gray my-2  px-1 py-2 '>
              Loan Transactions
            </h3>
            <button
              className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mb-2 rounded focus:outline-none focus:shadow-outline w-auto mt-2'
              // onClick={() => deleteLoan(loan.id)}
            >
              <Link to={`/addLoan/${clientId}`}>Add Loan</Link>
            </button>
          </div>
          <table className='table-fixed text-center '>
            <thead>
              <tr>
                <th className='w-1/1 px-1 py-2 text-gray-600'>Voucher</th>
                <th className='w-1/6 px-1 py-2 text-gray-600'>Loan Type</th>
                <th className='w-1/6 px-1 py-2 text-gray-600'>
                  Outstanding Balance
                </th>
                <th className='w-1/6 px-4 py-2 text-gray-600'>Gross Loan</th>
                <th className='w-1/6 px-4 py-2 text-gray-600'>Amortization</th>
                <th className='w-1/6 px-4 py-2 text-gray-600'>Terms</th>
                <th className='w-1/6 px-4 py-2 text-gray-600'>Date Released</th>
                <th className='w-1/6 px-4 py-2 text-gray-600'>Status</th>
                <th className='w-1/1 px-4 py-2 text-gray-600'>Actions</th>
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
                      <td className='border px-4 py-2 bg-gray-50'>
                        ₱ {loan.balance}
                      </td>
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

                      <td className='border px-4 py-2'>
                        <button
                          className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mb-2 rounded focus:outline-none focus:shadow-outline w-full text-sm'
                          onClick={() => deleteLoan(loan.id)}
                        >
                          <DeleteForever className='text-lg' />
                        </button>
                        <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full '>
                          <Link to={`/editLoan/${loan.id}`}>
                            <Edit className='text-sm' />
                          </Link>
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Payment History */}
        <div>
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
        </div>
      </div>
    </div>
  );
};

export default LoanInfo;
