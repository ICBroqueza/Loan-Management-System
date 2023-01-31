import {
  DeleteForever,
  Edit,
  Money,
  Payments,
  Update,
} from '@mui/icons-material';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import PaymentsInfo from '../payments/ListPayments';

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
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteNotif = () => {
    toast.promise(
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, 2000);
      }),
      {
        pending: 'Deleting Loan...',
        success: 'Deleted Succesfully!',
        error: 'Error!',
      },
      {
        autoClose: 2000,
      }
    );
  };
  // Delete loan Function
  async function deleteLoan(id) {
    try {
      await fetch(`http://localhost:8000/loans/${id}`, {
        method: 'DELETE',
        headers: { Authorization: localStorage.getItem('token') },
      });
      deleteNotif();
      setTimeout(() => {
        setLoans(loans.filter((loan) => loan.id !== id));
      }, 2000);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    GetLoans();
  }, []);

  return (
    <div className=''>
      <ToastContainer />
      {/* Loans Information */}
      <div className='flex flex-col w-full mx-auto pl-8 py-4 mb-4 bg-white gap-5 '>
        {/* Active Loans */}
        <div className='h-[350px] overflow-hidden hover:overflow-scroll border rounded shadow-md px-8 py-8 border-t-4 border-t-red-500'>
          <div className='flex items-center justify-between border-y-2'>
            <h3 className='text-lg font-medium leading-6 text-gray my-2  px-1 py-2 '>
              Loan Transactions
            </h3>
            <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mb-2 rounded focus:outline-none focus:shadow-outline w-auto mt-2'>
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

                      <td className='border px-4 py-2 flex'>
                        <button
                          className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-3 mb-2 rounded focus:outline-none focus:shadow-outline w-full text-sm'
                          onClick={() => deleteLoan(loan.id)}
                        >
                          <DeleteForever className='text-lg' />
                        </button>
                        <button className='bg-red-500 hover:bg-red-700 text-white px-3 rounded focus:outline-none focus:shadow-outline h-10 ml-2 mr-2'>
                          <Link to={`/editLoan/${loan.id}`}>
                            <Edit className='text-sm' />
                          </Link>
                        </button>
                        <button className='bg-red-500 hover:bg-red-700 text-white font-bold h-10 px-4 rounded focus:outline-none focus:shadow-outline w-full '>
                          <Link to={`/payment/${loan.client_id}/${loan.id}`}>
                            ₱
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
        <PaymentsInfo />
      </div>
    </div>
  );
};

export default LoanInfo;
