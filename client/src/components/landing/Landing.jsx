import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { headerImg } from 'src/assets/debitcard.png';

import {
  PermIdentity,
  CreditScore,
  ReceiptLong,
  MailOutline,
  Home,
} from '@mui/icons-material';

const Landing = () => {
  return (
    // <div className='w-full mx-auto px-10 py-10 mb-4 mt-5 bg-white shadow-md rounded'>
    //   <h1 className='text-2xl font-medium leading-6 text-red-500'>
    //     Welcome To Maogma
    //   </h1>
    //   <h4>Lending App for Filipinoes</h4>
    //   <br />
    //   <p>Sign In and choose your loan</p>
    //   <Link to='/login'>
    //     <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-auto mr-2'>
    //       Login
    //     </button>
    //   </Link>
    //   <Link to='/register'>
    //     <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
    //       Register
    //     </button>
    //   </Link>
    // </div>
    <div className='py-20 px-20'>
      {/* HERO SECTION */}
      <section className='flex gap-5 container py-10 px-10 mx-auto'>
        {/* HEADER */}
        <div className='flex flex-col w-1/2 border border-red-500 py-5 px-5 gap-5 '>
          {/* TITLE */}
          <div>
            <h1 className='mb-4 text-7xl font-extrabold tracking-tight text-gray-900 '>
              Simplify your <br /> <span>Loan Management</span>{' '}
            </h1>
            <p>
              Easily track your loans, manage clients and make smart financial
              decisions with our user-friendly app.
            </p>
          </div>
          {/* Buttons */}
          <div>
            <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-5'>
              Get Started
            </button>
            <button className=' hover:bg-red-700 hover:text-white  py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
              How it Works
            </button>
          </div>
        </div>
        {/* HEADER IMG */}
        <div className=''>
          <img src='src/assets/debitcard.png' alt='' />
          image here
        </div>
      </section>

      {/* FEATURED SECTION */}
      <section className='mb-20'>
        <div className=''>
          {/* FEATURED TITLE */}
          <div className='flex flex-col my-20 py-10 w-1/2 mx-auto text-center'>
            <h3 className='mb-4 text-3xl font-extrabold tracking-tight text-gray-900'>
              We Provide Quality Service
            </h3>
            <p className=''>
              We will provide the best service to you so that you understand how
              to use and get to know the features that we provide
            </p>
          </div>

          {/* FEATURED ITEMS */}
          <div className='flex gap-10 justify-center'>
            {/* FEATURE 1 : LOAN MGT */}
            <div className='flex flex-col w-80 p-10  border rounded-xl hover:shadow-xl hover:bg-red-500 hover:text-white cursor-pointer'>
              <div className=''>
                <CreditScore className=' w-full text-red-500 rounded-full h-full text-2xl mb-2 ' />
              </div>
              <h4 className='text-md font-semibold mb-1'>Loan Management</h4>
              <p>
                We will provide management for your loan so that you can track
                them easily
              </p>
            </div>

            {/* FEATURE 2 : CLIENT MGT */}
            <div className='flex flex-col w-80 p-10 rounded-xl border hover:shadow-xl hover:bg-red-500 hover:text-white cursor-pointer'>
              <div className=''>
                <PermIdentity className=' w-full text-red-500 rounded-full h-full text-2xl mb-2' />
              </div>
              <h4 className='text-md font-semibold mb-1'>Client Management</h4>
              <p>
                We will provide management for your loan so that you can track
                them easily
              </p>
            </div>

            {/* FEATURE 3 : PAYMENT MGT */}
            <div className='flex flex-col w-80 p-10 rounded-xl border hover:shadow-xl hover:bg-red-500 hover:text-white cursor-pointer '>
              <div className=''>
                <ReceiptLong className=' w-full text-red-500 rounded-full h-full text-2xl mb-2 ' />
              </div>
              <h4 className='text-md font-semibold mb-1'>
                Payments Management
              </h4>
              <p>
                We will provide management for your loan so that you can track
                them easily
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BANNER SECTION */}
      <section className='max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6 bg-red-500 rounded-xl flex'>
        {/* BANNER TITLE */}
        <div className='flex flex-col w-1/2 px-10 '>
          <h4 className='text-2xl font-semibold text-white mb-16'>
            We will never leave your side, <br /> but will leave you a <br />{' '}
            smile.{' '}
          </h4>
          <div>
            <button className='bg-gray-800 hover:bg-red-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-5'>
              Get Started
            </button>
          </div>
        </div>

        {/* BANNER IMAGE */}
        <div>IMAGE HERE</div>
      </section>

      {/* ABOUT SECTION */}
      <section>
        <div className='max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6'>
          {/* ITEM 1 */}
          <div className='items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16'>
            {/* TEXT */}
            <div className='text-gray-500 sm:text-lg'>
              {/* TITLE */}
              <h2 className='mb-4 text-3xl font-extrabold tracking-tight text-gray-900'>
                With Maogma, see how loans are released and Succeed.
              </h2>

              {/* DESCRIPTION 1 */}
              <p className='mb-8 font-light lg:text-xl'>
                You can create loans, update their amounts and approve pending
                loans.
              </p>

              {/* FEATS */}
              <ul
                role='list'
                class='pt-8 space-y-5 border-t border-gray-200 my-7'
              >
                <li class='flex space-x-3'>
                  <svg
                    class='flex-shrink-0 w-5 h-5 text-red-500 e-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                  <span class='text-base font-medium leading-tight text-gray-900 '>
                    Continuous integration and deployment
                  </span>
                </li>
                <li class='flex space-x-3'>
                  <svg
                    class='flex-shrink-0 w-5 h-5 text-red-500 e-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                  <span class='text-base font-medium leading-tight text-gray-900 '>
                    Development workflow
                  </span>
                </li>
                <li class='flex space-x-3'>
                  <svg
                    class='flex-shrink-0 w-5 h-5 text-red-500 e-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                  <span class='text-base font-medium leading-tight text-gray-900 '>
                    Knowledge management
                  </span>
                </li>
              </ul>

              {/* DESCRIPTION 2 */}
              <p class='mb-8 font-light lg:text-xl'>
                Deliver great service experiences fast - without the complexity
                of traditional ITSM solutions.
              </p>

              {/* IMAGE */}
              <img src='' alt='' />
            </div>
          </div>

          {/* ITEM 2 */}
          <div class='items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16'>
            {/* IMAGE */}
            <img src='' alt='' />

            {/* TEXT */}
            <div class='text-gray-500 sm:text-lg'>
              {/* TITLE */}
              <h2 class='mb-4 text-3xl font-extrabold tracking-tight text-gray-900 '>
                Communicate with your clients through the app.
              </h2>

              {/* DESCRIPTION 1 */}
              <p class='mb-8 font-light lg:text-xl'>
                Deliver great service experiences fast - without the complexity
                of traditional ITSM solutions. Accelerate critical development
                work, eliminate toil, and deploy changes with ease.
              </p>

              {/* FEATURES */}
              <ul
                role='list'
                class='pt-8 space-y-5 border-t border-gray-200 my-7 '
              >
                <li class='flex space-x-3'>
                  <svg
                    class='flex-shrink-0 w-5 h-5 text-red-500 '
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                  <span class='text-base font-medium leading-tight text-gray-900 '>
                    Dynamic reports and dashboards
                  </span>
                </li>
                <li class='flex space-x-3'>
                  <svg
                    class='flex-shrink-0 w-5 h-5 text-red-500 '
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                  <span class='text-base font-medium leading-tight text-gray-900 '>
                    Templates for everyone
                  </span>
                </li>
                <li class='flex space-x-3'>
                  <svg
                    class='flex-shrink-0 w-5 h-5 text-red-500 '
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                  <span class='text-base font-medium leading-tight text-gray-900 '>
                    Development workflow
                  </span>
                </li>
              </ul>

              {/* DESCRIPTION 2 */}
              <p class='font-light lg:text-xl'>
                Deliver great service experiences fast - without the complexity
                of traditional ITSM solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
