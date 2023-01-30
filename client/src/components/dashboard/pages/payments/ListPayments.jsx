import { DeleteForever, Edit, Update } from '@mui/icons-material';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const PaymentsInfo = () => {
  const [payments, setPayments] = useState([]);
  // const [payment, setPayment] = useState([]);

  const location = useLocation();

  const clientId = location.pathname.split('/')[2];

  const GetPayments = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/payments/${clientId}`,
        {
          method: 'GET',
          headers: { Authorization: localStorage.getItem('token') },
        }
      );

      const parseRes = await response.json();

      setPayments(parseRes);
      // console.log(parseRes);
    } catch (error) {
      console.log(error.message);
    }
  };
  console.log(payments);

  const deleteNotif = () => {
    toast.promise(
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, 2000);
      }),
      {
        pending: 'Deleting Payment...',
        success: 'Deleted Succesfully!',
        error: 'Error!',
      },
      {
        autoClose: 2000,
      }
    );
  };
  // Delete loan Function
  async function deletePayment(id) {
    try {
      await fetch(`http://localhost:8000/payment/${id}`, {
        method: 'DELETE',
        headers: { Authorization: localStorage.getItem('token') },
      });
      deleteNotif();
      setTimeout(() => {
        setPayments(payments.filter((payment) => payment.id !== id));
      }, 2000);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    GetPayments();
  }, []);

  return (
    <div className='h-[350px] overflow-hidden hover:overflow-scroll border rounded shadow-md px-8 py-8 border-t-4 border-t-red-500'>
      <ToastContainer />

      {/* Payment History */}
      <div className='flex items-center justify-between border-y-2 '>
        <h3 className='text-lg font-medium leading-6 text-gray my-2  px-1 py-2 '>
          Payment History
        </h3>
      </div>
      <div>{/* {payments.map} */}</div>
      <table className='table-fixed text-center '>
        <thead>
          <tr>
            <th className='w-1/1 px-1 py-2 text-gray-600'>Voucher</th>
            <th className='w-1/5 px-1 py-2 text-gray-600'>Amount</th>
            <th className='w-1/5 px-4 py-2 text-gray-600'>Collection Date</th>
            <th className='w-1/5 px-1 py-2 text-gray-600'>New Balance</th>
            <th className='w-1/5 px-4 py-2 text-gray-600'>Collected By:</th>
            <th className='w-1/5 px-4 py-2 text-gray-600'>Method</th>
            <th className='w-1/5 px-4 py-2 text-gray-600'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {payments.length <= 0 ? (
            <tr className='border px-4 py-2 bg-red-50'>
              <td></td>
              <td></td>
              <td></td>
              <td className='px-4 py-2 bg-red-50'>No Payment Data</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          ) : (
            payments.map((payment, index) => {
              return (
                <tr key={index}>
                  <td className='border px-4 py-2 bg-gray-50'>
                    {payment.loan_id}
                  </td>
                  <td className='border px-4 py-2 '>₱ {payment.amount}</td>
                  <td className='border px-4 py-2 bg-gray-50'>
                    {new Date(payment.collection_date).toDateString()}
                  </td>
                  <td className='border px-4 py-2'>₱ {payment.new_balance}</td>
                  <td className='border px-4 py-2 bg-gray-50'>
                    {payment.collected_by}
                  </td>
                  {/* <td className='border px-4 py-2 bg-gray-50'>
                      {payment.method}
                    </td> */}
                  <td className='border px-4 py-2 '>
                    {payment.method === 'ATM' ? (
                      <span className=' bg-green-500 text-white px-4 py-1 rounded-md'>
                        {payment.method}
                      </span>
                    ) : payment.method === 'OTC' ? (
                      <span className=' bg-yellow-300 text-white px-4 py-1 rounded-md'>
                        {payment.method}
                      </span>
                    ) : payment.method === 'ONLINE BANK' ? (
                      <span className=' bg-orange-300 text-white px-4 py-1 rounded-md'>
                        {payment.method}
                      </span>
                    ) : (
                      <span className=' bg-blue-500 text-white px-4 py-1 rounded-md'>
                        {payment.method}
                      </span>
                    )}
                  </td>
                  <td>
                    {' '}
                    <button
                      className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-3 mb-2 rounded focus:outline-none focus:shadow-outline  text-sm'
                      onClick={() => deletePayment(payment.id)}
                    >
                      <DeleteForever className='text-lg' />
                    </button>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentsInfo;
