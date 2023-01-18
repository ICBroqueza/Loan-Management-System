import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DeleteForever, VisibilityOutlined, Logout } from '@mui/icons-material';
import Sidebar from '../../../sidebar/Sidebar';

const Borrowers = ({ setAuth }) => {
  const [clients, setClients] = useState([]);

  const getClients = async () => {
    try {
      const response = await fetch('http://localhost:8000/allClients', {
        method: 'GET',
        headers: { Authorization: localStorage.getItem('token') },
      });

      const parseRes = await response.json();
      // console.log(parseRes);

      setClients(parseRes);
      // setUser(parseRes.firstname);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(clients);

  // Delete CLIENT Function
  async function deleteClient(id) {
    try {
      await fetch(`http://localhost:8000/clients/${id}`, {
        method: 'DELETE',
        headers: { Authorization: localStorage.getItem('token') },
      });

      setClients(clients.filter((loan) => loan.id !== id));
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getClients();
  }, []);

  return (
    <div className='text-gray-900 h-[900px] flex'>
      <Sidebar />
      {/* Clients */}
      <div className='w-full h-[900px] mx-auto px-8 py-8 mb-4 border bg-white shadow-md rounded '>
        {/* HEADER */}
        <div className='flex items-center justify-between px-4 py-5 sm:px-6 bg-red-500 rounded shadow-md '>
          <div>
            <h3 className='text-lg font-medium leading-6 text-white'>
              Borrowers
            </h3>
            <p className='mt-1 max-w-2xl text-sm text-white'>
              All clients registered
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

        {/* TITLE */}
        <div className='flex items-center justify-between border-y-2 mt-5'>
          <h3 className='text-lg font-medium leading-6 text-gray my-2  px-1 py-2 '>
            Borrowers' List
          </h3>
          <button
            className='border hover:bg-red-700 bg-red-500 text-white font-bold py-2 px-4 mb-2 rounded focus:outline-none focus:shadow-outline w-auto mt-2 mr-5'
            // onClick={() => deleteLoan(loan.id)}
          >
            <Link to='/addBorrower'>Add Borrower</Link>
          </button>
        </div>

        {/* INFO */}
        <div className='w-full h-[640px] px-4   mt-5 overflow-auto hover:overflow-scroll border rounded shadow-md border-t-4 border-t-red-500 '>
          <table className='table-fixed text-center'>
            <thead className=' mt-5'>
              <tr className=' mt-10'>
                <th className='w-1/1 px-1 py-2 text-gray-600'>ID</th>
                <th className='w-1/4 px-1 py-2 text-gray-600'>Full Name</th>
                <th className='w-1/4 px-1 py-2 text-gray-600'>
                  Contact Number
                </th>
                <th className='w-1/4 px-4 py-2 text-gray-600'>Address</th>
                <th className='w-1/4 px-1 py-2 text-gray-600'>Email</th>
                <th className='w-1/1 px-1 py-2 text-gray-600'>Action</th>
              </tr>
            </thead>
            <tbody>
              {clients.length <= 0 ? (
                <tr className='border px-4 py-2 bg-red-50'>
                  <td></td>
                  <td></td>
                  <td className='px-4 py-2 bg-red-50'>No Client Data</td>
                  <td></td>
                  <td></td>
                </tr>
              ) : (
                clients.map((client, index) => {
                  return (
                    <tr key={index}>
                      <td className='border px-4 py-2 bg-gray-50'>
                        {client.id}
                      </td>
                      <td className='border px-4 py-2 '>
                        {client.firstname + ' ' + client.lastname}{' '}
                      </td>
                      <td className='border px-4 py-2 bg-gray-50'>
                        {client.contactnumber}
                      </td>
                      <td className='border px-4 py-2'>{client.address}</td>
                      <td className='border px-4 py-2 bg-gray-50'>
                        {client.email}
                      </td>
                      <td className='border px-4 py-2'>
                        <button
                          className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mb-2 rounded focus:outline-none focus:shadow-outline w-full text-sm'
                          onClick={() => deleteClient(client.id)}
                        >
                          <DeleteForever className='text-lg' />
                        </button>
                        <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full '>
                          <Link to={`/Borrower/${client.id}`}>
                            <VisibilityOutlined className='text-sm' />
                          </Link>
                          {/* <Borrower clientId={client.id} /> */}
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
  );
};

export default Borrowers;
