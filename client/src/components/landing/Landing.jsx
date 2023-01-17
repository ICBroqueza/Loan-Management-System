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
      <section className='flex gap-5 '>
        {/* HEADER */}
        <div className='flex flex-col w-1/2 border border-red-500 py-5 px-5 gap-5'>
          {/* TITLE */}
          <div>
            <h1 className='text-3xl font-bold mb-5 '>
              Simplify <br /> your <br /> <span>Loan Management</span>{' '}
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
      <section>
        <div className=''>
          {/* FEATURED TITLE */}
          <div className='flex flex-col my-20 py-10 w-1/2 mx-auto text-center'>
            <h3 className='text-2xl font-bold mb-5'>
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
    </div>
  );
};

export default Landing;
