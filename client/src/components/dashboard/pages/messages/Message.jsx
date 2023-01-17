import React from 'react';
import Sidebar from '../../../sidebar/Sidebar';
import Account from '../borrowers/Account';
import GetBorrowers from './GetBorrowers';
import emailjs from 'emailjs-com';

export default function Message({ email }) {
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

  return (
    <div className='flex'>
      <div className='flex w-full'>
        <div class='w-full px-8  bg-white '>
          <div class=' py-2.5 '>
            <form onSubmit={sendEmail} class='space-y-8'>
              <div>
                <label
                  for='email'
                  class='block mb-2 text-sm font-medium text-gray-900 mt-5'
                >
                  Client Email
                </label>
                <input
                  type='email'
                  id='email'
                  value={email}
                  name='email'
                  class='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 '
                  placeholder='Choose Email'
                  required
                  // disabled
                />
              </div>
              <div>
                <label
                  for='subject'
                  class='block mb-2 text-sm font-medium text-gray-900'
                >
                  Subject
                </label>
                <input
                  type='text'
                  name='subject'
                  id='subject'
                  class='block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500'
                  placeholder='Type your subject here...'
                  required
                />
              </div>
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
                  rows='6'
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
