import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Check,
  DeleteForever,
  Edit,
  EmailOutlined,
  PreviewOutlined,
  VisibilityOutlined,
} from '@mui/icons-material';
import Sidebar from '../../../sidebar/Sidebar';
import Message from './Message';

const GetBorrowers = ({ setAuth }) => {
  const [clients, setClients] = useState([]);
  const [emails, setEmail] = useState('');

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
  // console.log(clients[0].email);
  // setEmail(clients.em)

  // Select EMAIL CLIENT Function
  async function selectClient(email) {
    try {
      await fetch(`http://localhost:8000/email/${email}`, {
        method: 'GET',
        headers: { Authorization: localStorage.getItem('token') },
      });

      setEmail(clients.map((client) => email));
      console.log(emails[0]);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getClients();
  }, []);

  return (
    <div className='text-gray-900 border-y-2 mt-5'>
      <div className='px-4 py-5 sm:px-6 bg-red-500'>
        <h3 className='text-lg font-medium leading-6 text-white'>Send Email</h3>
        <p className='mt-1 max-w-2xl text-sm text-white'>
          Update your client with their loan.
        </p>
      </div>
      {/* INFO */}
      <h3 className='text-lg font-medium leading-6 text-gray my-2 px-1 py-2 border-y-2 mt-5'>
        Clients Contact Info
      </h3>
      <table className='table-fixed text-center'>
        <thead className='border-y-2 mt-5'>
          <tr className='border-y-2 mt-10'>
            <th className='w-1/1 px-1 py-2 text-gray-600'>ID</th>
            <th className='w-1/4 px-1 py-2 text-gray-600'>Full Name</th>
            <th className='w-1/4 px-1 py-2 text-gray-600'>Contact Number</th>
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
                  <td className='border px-4 py-2 bg-gray-50'>{client.id}</td>
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
                    {/* <button onClick={() => deleteClient(client.id)}>
                        <DeleteOutlined />
                      </button>
                      <button className=''>
                        <Link to={'/borrower/' + client.id}>
                          <Create />
                        </Link>
                      </button> */}

                    <div className='flex'>
                      <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mr-2 '>
                        <Link to={`/Borrower/${client.id}`}>
                          <VisibilityOutlined className='text-sm' />
                        </Link>
                        {/* <Borrower clientId={client.id} /> */}
                      </button>
                      <button
                        className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full '
                        onClick={() => selectClient(client.email)}
                      >
                        <Check />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>

      <h3 className='text-lg font-medium leading-6 text-gray my-2 px-1 py-2 border-y-2 mt-5'>
        Email Form
      </h3>
      <Message email={emails[0]} />
    </div>
  );
};

export default GetBorrowers;
