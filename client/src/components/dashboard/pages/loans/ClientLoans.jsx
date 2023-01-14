import React, { useState } from 'react';
import { useEffect } from 'react';
import Sidebar from '../../../sidebar/Sidebar';
import GetAllLoans from './ClientsLoans.jsx.jsx';

const Loans = ({ setAuth }) => {
  const [loans, setLoans] = useState([]);

  const GetLoans = async () => {
    try {
      const response = await fetch('http://localhost:8000/allLoans/', {
        method: 'GET',
        headers: { Authorization: localStorage.getItem('token') },
      });

      const parseRes = await response.json();

      setLoans(parseRes);
      // console.log(parseRes);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    GetLoans();
  }, []);

  return (
    <div className='flex'>
      <div>
        <Sidebar />
      </div>

      <div className='w-full'>
        <GetAllLoans />
      </div>
    </div>
  );
};

export default Loans;
