import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import {link} from

const Landing = () => {
  return (
    <div className='w-full mx-auto px-10 py-10 mb-4 mt-5 bg-white shadow-md rounded'>
      <h1 className='text-2xl font-medium leading-6 text-red-500'>
        Welcome To Maogma
      </h1>
      <h4>Lending App for Filipinoes</h4>
      <br />
      <p>Sign In and choose your loan</p>
      <Link to='/login'>
        <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-auto mr-2'>
          Login
        </button>
      </Link>
      <Link to='/register'>
        <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
          Register
        </button>
      </Link>
    </div>
  );
};

export default Landing;
