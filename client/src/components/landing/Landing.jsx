import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { headerImg } from 'src/assets/debitcard.png';

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
    <div className='py-10 px-10'>
      {/* HERO SECTION */}
      <section className='flex gap-5'>
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
    </div>
  );
};

export default Landing;
