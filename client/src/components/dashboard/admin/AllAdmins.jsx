import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DeleteForever, VisibilityOutlined, Logout } from '@mui/icons-material';

const Admins = ({ setAuth }) => {
  const [admins, setAdmins] = useState([]);

  const getAdmins = async () => {
    try {
      const response = await fetch('http://localhost:8000/allAdmins', {
        method: 'GET',
        headers: { Authorization: localStorage.getItem('token') },
      });

      const parseRes = await response.json();
      // console.log(parseRes);

      setAdmins(parseRes);
      // setUser(parseRes.firstname);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(admins);

  // Delete CLIENT Function
  async function deleteClient(id) {
    try {
      await fetch(`http://localhost:8000/admins/${id}`, {
        method: 'DELETE',
        headers: { Authorization: localStorage.getItem('token') },
      });

      setAdmins(admins.filter((loan) => loan.id !== id));
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getAdmins();
  }, []);

  return (
    <div className='w-full h-[720px] border bg-white shadow-md rounded mt-5  border-t-4 border-t-red-500'>
      <div className='py-5 px-5'>
        {/* TITLE */}
        <div className='flex items-center justify-between border-b-2'>
          <h3 className='text-lg font-medium  text-gray   px-1 '>
            Manage Admins
          </h3>
          <button
            className='border hover:bg-red-700 bg-red-500 text-white font-bold py-2 px-4 mb-2 rounded focus:outline-none focus:shadow-outline mr-5'
            // onClick={() => deleteLoan(loan.id)}
          >
            <Link to='/register'>Add Admin</Link>
          </button>
        </div>
        {/* INFO */}
        <div className='w-full h-[600px] px-4   mt-5 overflow-auto hover:overflow-scroll border rounded shadow-md '>
          <table className='table-fixed text-center mb-2'>
            <thead className=' mt-5'>
              <tr className=' mt-10'>
                <th className='w-1/1 px-1 py-2 text-gray-600'>ID</th>
                <th className='w-1/4 px-1 py-2 text-gray-600'>Full Name</th>
                <th className='w-1/4 px-1 py-2 text-gray-600'>
                  Contact Number
                </th>
                <th className='w-1/4 px-4 py-2 text-gray-600'>Address</th>
                <th className='w-1/4 px-1 py-2 text-gray-600'>Email</th>
                <th className='w-1/1 px-1 py-2 text-gray-600'>Delete</th>
              </tr>
            </thead>
            <tbody>
              {admins.length <= 0 ? (
                <tr className='border px-4 py-2 bg-red-50'>
                  <td></td>
                  <td></td>
                  <td className='px-4 py-2 bg-red-50'>No Client Data</td>
                  <td></td>
                  <td></td>
                </tr>
              ) : (
                admins.map((client, index) => {
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
                        {/* <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full '>
                          <Link to={`/Borrower/${client.id}`}>
                            <VisibilityOutlined className='text-sm' />
                          </Link>
                          <Borrower clientId={client.id} />
                        </button> */}
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

export default Admins;
