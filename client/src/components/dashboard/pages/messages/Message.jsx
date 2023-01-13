import React from 'react';
import Sidebar from '../../../sidebar/Sidebar';
import Account from '../borrowers/Account';
import GetBorrowers from './GetBorrowers';

export default function Message() {
  return (
    <div className='flex'>
      <div>
        <Sidebar />
      </div>

      <div className='flex w-full'>
        <div class='w-full px-8  bg-white shadow-md rounded'>
          <div class=' py-5 px-5'>
            <div className='px-4 py-5 sm:px-6 bg-red-500'>
              <h3 className='text-lg font-medium leading-6 text-white'>
                Send Email
              </h3>
              <p className='mt-1 max-w-2xl text-sm text-white'>
                Update your client with their loan.
              </p>
            </div>

            <GetBorrowers />
            <form action='#' class='space-y-8'>
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
                  class='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 '
                  placeholder='Choose Email'
                  required
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
                  id='subject'
                  class='block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500'
                  placeholder='Let us know how we can help you'
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
                  id='message'
                  rows='6'
                  class='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500'
                  placeholder='Leave a comment...'
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
