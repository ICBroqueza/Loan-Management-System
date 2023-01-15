import {
  AddBox,
  PermIdentity,
  VisibilityOutlined,
  MailOutline,
} from '@mui/icons-material';
import React, { useState } from 'react';
import { useEffect } from 'react';

import { Edit } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function DatesWidget() {
  const [dates, setDates] = useState([]);

  const getDates = async () => {
    try {
      const response = await fetch('http://localhost:8000/allLoans', {
        method: 'GET',
        headers: { Authorization: localStorage.getItem('token') },
      });

      const parseRes = await response.json();
      // console.log(parseRes);

      setDates(parseRes);
      console.log(dates);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDates();
  }, []);

  console.log(dates.sort((a, b) => a.maturity_date - b.maturity_date));

  return (
    <div className=''>
      {/* CLIENTS */}
      <div className='w-full  mt-5 p-8 rounded-xl border border-l-4 border-l-red-500 cursor-pointer'>
        <div className='flex justify-between items-center'>
          <div className=''>
            <h3 className='text-xl'>Maturity Date</h3>
            <table className='w-full border-spacing-5'>
              <thead>
                <tr className='widgetLgTr'>
                  <th className='text-left'>Customer</th>
                  <th className='text-left'>Date</th>
                  <th className='text-left'>Balance</th>
                  <th className='text-left'>Email</th>
                </tr>
              </thead>
              <tbody>
                {/* {dates.map((date, index) => {
                  <tr className='widgetLgTr'>
                    <td className='flex items-center font-semibold'>
                      <span className='widgetLgName'></span>
                    </td>
                    <td className='widgetLgDate'>{date.maturity_date}</td>
                    <td className='widgetLgAmount'>{date.balance}</td>
                    <td className='widgetLgStatus'>{date.status}</td>
                  </tr>; */}
                {dates.length <= 0 ? (
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
                  dates.map((date, index) => {
                    return (
                      <tr key={index}>
                        <td className='border px-4 py-2'>
                          {date.firstname + ' ' + date.lastname}
                        </td>

                        <td className='border px-4 py-2 bg-gray-50'>
                          {new Date(date.maturity_date).toDateString()}
                        </td>
                        <td className='border px-4 py-2 bg-gray-50'>
                          ₱ {date.balance}
                        </td>
                        <td className='border px-4 py-2'>
                          <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full '>
                            <Link to={`/emailClient`}>
                              <MailOutline className='text-sm' />
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
