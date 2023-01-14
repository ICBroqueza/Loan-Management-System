// async function updateLoan(id) {
//   try {
//     await fetch(`http://localhost:8000/updateBalance/${id}`, {
//       method: 'PATCH',
//       headers: { Authorization: localStorage.getItem('token') },
//     });

//     // setInputs({
//     //   amount: '',
//     //   collection_date: '',
//     //   collected_by: '',
//     //   new_balance: '',
//     //   method: '',
//     //   loan_id: '',
//     // });
//   } catch (error) {
//     console.log(error.message);
//   }
// }

import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Sidebar from '../../../sidebar/Sidebar';
import LoanInfo from '../loans/Loan';
import PaymentLoansInfo from './PaymentLoanInfo';

const UpdateBalance = ({ amount, loan_id, change }) => {
  const [loans, setLoans] = useState([]);
  const [loanId, setLoanId] = useState();

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
      // console.log(loans);
    } catch (error) {
      console.log(error.message);
    }
  };

  console.log(50);
  // console.log(loans[Number(loan_id)]);
  console.log(loans[0].id);

  useEffect(() => {
    GetLoans();
  }, []);

  // async function updateLoan(id) {
  //   try {
  //     await fetch(`http://localhost:8000/updateBalance/${loan_id}`, {
  //       method: 'PATCH',
  //       headers: { Authorization: localStorage.getItem('token') },
  //     });
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }
  return (
    <div>
      <div>
        <label htmlFor='outstanding_balance'>Outstanding Balance:</label>
        <input
          type='number'
          className='block border border-grey-500 w-10/12 p-3 rounded mb-4'
          value={50000}
          disabled
        />

        <label htmlFor='new_balance'>New Balance:</label>
        <input
          type='number'
          className='block border border-grey-500 w-10/12 p-3 rounded mb-4'
          disabled
          name='new_balance'
          value={0 - amount}
          onChange={change}
        />
      </div>
    </div>
  );
};

export default UpdateBalance;
