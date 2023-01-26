import React from 'react';
import { useEffect, useState } from 'react';

import Sidebar from '../../../sidebar/Sidebar';
import Account from '../borrowers/Account';
import GetBorrowers from './GetBorrowers';
import emailjs from 'emailjs-com';

export default function Message({ email }) {
  console.log(email);
  const [fullname, setFullname] = useState('');

  const getClient = async () => {
    try {
      const response = await fetch(`http://localhost:8000/email/${email}`, {
        method: 'GET',
        headers: { Authorization: localStorage.getItem('token') },
      });

      const parseRes = await response.json();
      console.log(parseRes);
      setFullname(parseRes.firstname + parseRes.lastname);
      // setClients(parseRes);
      // setUser(parseRes.firstname);
    } catch (error) {
      console.log(error);
    }
  };
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_2kyejr4',
        'Loan_Approval',
        e.target,
        'mDqAo3YVF6cq60oy7'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  useEffect(() => {
    getClient();
  }, [fullname]);

  return (
    <div className='flex'>
      <div className='w-full h-[650px] px-4 mt-5 border rounded shadow-md border-t-4 border-t-red-500 '>
        <div class='w-full px-8  bg-white '>
          <div class=' py-2.5 '>
            <form onSubmit={sendEmail} class='space-y-8'>
              {/* NAME EMAIL */}
              <div className='flex w-full gap-5'>
                {/* FIRSTNAME */}
                <div className='w-full'>
                  <label
                    className='block text-gray-700 text-sm font-bold mb-2'
                    htmlFor='fullname'
                  >
                    Full Name:
                  </label>
                  <input
                    type='text'
                    className='block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500'
                    name='fullname'
                    value={fullname}
                    placeholder='Choose a borrower'
                  />
                </div>

                {/* EMAIL */}
                <div className='w-full'>
                  <label
                    className='block text-gray-700 text-sm font-bold mb-2'
                    htmlFor='email'
                  >
                    Email:
                  </label>
                  <input
                    type='email'
                    className='block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500'
                    name='email'
                    value={email}
                  />
                </div>
              </div>

              {/* SUBJECT */}
              <div>
                <label
                  for='subject'
                  class='block mb-2 text-sm font-medium text-gray-900'
                >
                  Subject
                </label>
                <select
                  class='block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500'
                  name='subject'
                  id='subject'
                >
                  <option value='Loan Approval'>Loan Approval</option>
                  <option value='Loan Denied'>Loan Denied</option>
                  <option value='Loan Disbursed'>Loan Disbursed</option>
                </select>
              </div>

              {/* MESSAGE */}
              <div class='sm:col-span-2'>
                <label
                  for='message'
                  class='block mb-2 text-sm font-medium text-gray-900'
                >
                  Your message
                </label>
                <textarea
                  name='message'
                  id='message'
                  rows='12'
                  class='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500'
                  placeholder='Write your message...'
                ></textarea>
              </div>
              <button
                type='submit'
                class='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline '
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
