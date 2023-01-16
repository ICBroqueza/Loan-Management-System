import { VisibilityOutlined } from '@mui/icons-material';
import React, { useState } from 'react';
import { useEffect } from 'react';

import { Edit } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function ApprovalWidget() {
  const [loans, setLoans] = useState([]);

  const getLoans = async () => {
    try {
      const response = await fetch('http://localhost:8000/allLoans', {
        method: 'GET',
        headers: { Authorization: localStorage.getItem('token') },
      });

      const parseRes = await response.json();
      // console.log(parseRes);

      setLoans(parseRes);
      console.log(loans);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getLoans();
  }, []);

  console.log(loans.sort((a, b) => a.maturity_date - b.maturity_date));

  return (
    <div className='w-full '>
      {/* CLIENTS */}
      <div className=' mt-5 p-8 rounded-xl border border-t-4 border-t-red-500 cursor-pointer shadow-md'>
        <div className='flex justify-between items-center'>
          <div className='w-full'>
            <h3 className='text-xl mb-5 border-b-2'>Loans For Approval</h3>
            <table className='table-fixed text-center w-full'>
              <thead>
                <tr className='w-full'>
                  <th className='w-1/1 px-1 py-2'>Gross Loan</th>
                  <th className='w-1/1 px-1 py-2'>Status</th>
                  <th className='w-1/6 px-1 py-2'>Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* {loans.map((loan, index) => {
                  <tr className='widgetLgTr'>
                    <td className='flex items-center font-semibold'>
                      <span className='widgetLgName'></span>
                    </td>
                    <td className='widgetLgDate'>{loan.maturity_date}</td>
                    <td className='widgetLgAmount'>{loan.balance}</td>
                    <td className='widgetLgStatus'>{loan.status}</td>
                  </tr>; */}
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
                    if (loan.status === 'Pending')
                      return (
                        <tr key={index}>
                          <td className='border px-4 py-2 bg-gray-50'>
                            ₱ {loan.gross_loan}
                          </td>
                          <td className='border px-4 py-2 bg-gray-50'>
                            <span className=' bg-yellow-300 text-white px-4 py-1 rounded-md'>
                              {loan.status}
                            </span>
                          </td>
                          <td className='border px-4 py-2'>
                            <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full '>
                              <Link to={`/editLoan/${loan.id}`}>
                                <VisibilityOutlined className='text-sm' />
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
        </div>
      </div>
    </div>
  );
}
