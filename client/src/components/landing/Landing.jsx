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
    <div className=''>
      {/* NAVBAR */}
      <div className='sticky top-0 w-full bg-white'>
        <nav className='flex justify-between max-w-screen-xl px-4 py-5 mx-auto'>
          <div className='flex items-center'>
            <h3 className='text-xl font-extrabold tracking-tight text-red-500 '>
              Maogma<span className='text-gray-900'>.</span>
            </h3>
          </div>
          <div>
            <ul class='flex flex-col font-medium lg:flex-row lg:space-x-8 lg:mt-0 items-center'>
              {/* HOME */}
              <li>
                <a
                  href='#'
                  class='block py-2 pl-3 pr-4   rounded text-gray-700    lg:hover:text-white lg:hover:bg-red-500 font-light lg:text-x '
                >
                  Home
                </a>
              </li>

              {/* ABOUT */}
              <li>
                <a
                  href='#about'
                  class='block py-2 pl-3 pr-4   rounded text-gray-700    lg:hover:text-white lg:hover:bg-red-500 font-light lg:text-x '
                >
                  About
                </a>
              </li>
              {/* 
              <li>
                <a
                  href='#pricing'
                  class='block py-2 pl-3 pr-4   rounded text-gray-700    lg:hover:text-white lg:hover:bg-red-500 font-light lg:text-x '
                >
                  Pricing
                </a>
              </li> */}

              {/* CONTACT */}
              <li>
                <a
                  href='#contacts'
                  class='block py-2 pl-3 pr-4   rounded text-gray-700    lg:hover:text-white lg:hover:bg-red-500 font-light lg:text-x '
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      {/* HERO SECTION */}
      <section>
        <div className='grid max-w-screen-xl px-4 pt-32 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28'>
          <div className='mr-auto place-self-center lg:col-span-7'>
            <h1 className='max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl '>
              Simplify your <br /> Loan <br /> Management
            </h1>
            <p class='max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'>
              Easily track your loans, manage clients and make smart financial
              decisions with our user-friendly app.
            </p>

            {/* BUTTONS */}
            <div class='space-y-4 sm:flex sm:space-y-0 sm:space-x-4'>
              <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-5'>
                <Link to='/register'>Get Started</Link>
              </button>
              <button className='border border-gray-200 rounded sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100  font-bold py-2 px-4 focus:outline-none focus:shadow-outline mr-5'>
                <a href='#contacts'>Contact Us</a>
              </button>
            </div>
          </div>

          <div className='lg:mt-0 lg:col-span-5 lg:flex'>
            <img
              src='https://img.freepik.com/free-vector/revenue-concept-illustration_114360-1556.jpg?w=826&t=st=1673963777~exp=1673964377~hmac=ca7b707ad30a71107b485b530a4bb4f9620b6b0fdb6abfa61b0a5b3cabc1930e'
              alt=''
            />
          </div>
        </div>
      </section>

      {/* FEATURED SECTION */}
      <section id='featured' className='mb-20'>
        <div className='max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6'>
          {/* FEATURED TITLE */}
          <div className='flex flex-col my-20 py-10 w-1/2 mx-auto text-center'>
            <h2 class='mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 '>
              We Provide Quality Service
            </h2>
            <p class='mb-6 font-light text-gray-500  md:text-lg'>
              We will provide the best service to you so that you understand how
              to use and get to know the features that we provide
            </p>
          </div>

          {/* FEATURED ITEMS */}
          <div className='flex gap-10 justify-between'>
            {/* FEATURE 1 : LOAN MGT */}
            <div className='flex flex-col w-80 p-10  border rounded-xl hover:shadow-xl hover:bg-red-500 hover:text-white cursor-pointer'>
              <div className=''>
                <CreditScore className=' w-full text-red-500 rounded-full h-full text-2xl mb-2' />
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
                Offers client management plus managers can now email their
                clients to notify them.
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
                Avoid payment delays by notifying managers about their client's
                loan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BANNER SECTION */}
      <section className='max-w-screen-xl px-4 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6 bg-red-500 rounded-xl flex'>
        {/* TEXT */}
        <div className='text-gray-500 sm:text-lg text-center mx-auto'>
          {/* TITLE */}
          <h2 className='mb-5 text-3xl font-bold tracking-tight text-white'>
            We will never leave your side, <br /> but will leave you a smile.{' '}
          </h2>
          <button className='bg-gray-800 hover:bg-red-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-5'>
            <Link to='/register'>Get Started</Link>
          </button>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id='about'>
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
                    Loan management
                  </span>
                </li>
              </ul>

              {/* DESCRIPTION 2 */}
              <p class='mb-8 font-light lg:text-xl'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
                dicta aut, quasi ullam aliquid sed nostrum nesciunt iusto quae
                incidunt.
              </p>
            </div>

            {/* IMAGE */}
            <div>
              <img
                src='https://i.pinimg.com/564x/bd/4f/32/bd4f32d8958199060ad5e4c04e892bce.jpg'
                alt=''
              />
            </div>
          </div>

          {/* ITEM 2 */}
          <div class='items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16'>
            {/* IMAGE */}
            <img
              src='https://i.pinimg.com/564x/6f/e0/8f/6fe08f134f55d89ec81c0716c10c7ccf.jpg'
              alt=''
            />

            {/* TEXT */}
            <div class='text-gray-500 sm:text-lg'>
              {/* TITLE */}
              <h2 class='mb-4 text-3xl font-extrabold tracking-tight text-gray-900 '>
                Communicate with your clients through the app.
              </h2>

              {/* DESCRIPTION 1 */}
              <p class='mb-8 font-light lg:text-xl'>
                Instantly notify your clients with their upcoming loan payments.
                Update them with their balance or tell them that their loan has
                been approved and ready for disbursement.
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
                    Send Email
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
                    Notify clients
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
                    Send Loan Status / Approvals
                  </span>
                </li>
              </ul>

              {/* DESCRIPTION 2 */}
              <p class='font-light lg:text-xl'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Facilis repudiandae quis commodi odio excepturi exercitationem
                ipsum et sed nesciunt facere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      {/* <section id='pricing'>
        <div className='max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6'>
          <div class='max-w-screen-md mx-auto mb-8 text-center lg:mb-12'>
            <h2 class='mb-4 text-3xl font-extrabold tracking-tight text-gray-900 '>
              Designed for business teams like yours
            </h2>
            <p class='mb-5 font-light text-gray-500 sm:text-xl '>
              Here at Maogma we focus on markets where technology, financing,
              and capital can unlock long-term value and drive economic growth.
            </p>
          </div>

          <div className='space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0'>
            <div className='flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-200 rounded-lg shadow-md '>
              <h3 class='mb-4 text-2xl font-semibold'>Starter</h3>
              <p class='font-light text-gray-500 sm:text-lg dark:text-gray-400'>
                Best option for personal use & for your next project.
              </p>
              <div class='flex items-baseline justify-center my-8'>
                <span class='mr-2 text-5xl font-extrabold'>₱1,5k</span>
                <span class='text-gray-500 dark:text-gray-400'>/month</span>
              </div>
              <ul role='list' class='mb-8 space-y-4 text-left'>
                <li class='flex items-center space-x-3'>
                  <svg
                    class='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                  <span>Individual configuration</span>
                </li>
                <li class='flex items-center space-x-3'>
                  <svg
                    class='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                  <span>No setup, or hidden fees</span>
                </li>

                <li class='flex items-center space-x-3'>
                  <svg
                    class='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                  <span>
                    Premium support: <span class='font-semibold'>6 months</span>
                  </span>
                </li>
                <li class='flex items-center space-x-3'>
                  <svg
                    class='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                  <span>
                    Free updates: <span class='font-semibold'>6 months</span>
                  </span>
                </li>
              </ul>
              <a
                href='#'
                class='text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:ring-red-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center '
              >
                Get started
              </a>
            </div>

            <div className='flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-200 rounded-lg shadow-md '>
              <h3 class='mb-4 text-2xl font-semibold'>Company</h3>
              <p class='font-light text-gray-500 sm:text-lg dark:text-gray-400'>
                Relevant for multiple users, extended & premium support.
              </p>
              <div class='flex items-baseline justify-center my-8'>
                <span class='mr-2 text-5xl font-extrabold'>₱5.4k</span>
                <span class='text-gray-500 dark:text-gray-400'>/month</span>
              </div>
              <ul role='list' class='mb-8 space-y-4 text-left'>
                <li class='flex items-center space-x-3'>
                  <svg
                    class='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                  <span>Individual configuration</span>
                </li>
                <li class='flex items-center space-x-3'>
                  <svg
                    class='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                  <span>No setup, or hidden fees</span>
                </li>
                <li class='flex items-center space-x-3'>
                  <svg
                    class='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                  <span>
                    Premium support:{' '}
                    <span class='font-semibold'>24 months</span>
                  </span>
                </li>
                <li class='flex items-center space-x-3'>
                  <svg
                    class='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                  <span>
                    Free updates: <span class='font-semibold'>24 months</span>
                  </span>
                </li>
              </ul>
              <a
                href='#'
                class='text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:ring-red-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center '
              >
                Get started
              </a>
            </div>

            <div className='flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-200 rounded-lg shadow-md '>
              <h3 class='mb-4 text-2xl font-semibold'>Enterprise</h3>
              <p class='font-light text-gray-500 sm:text-lg dark:text-gray-400'>
                Best for large scale users and extended redistribution rights.
              </p>
              <div class='flex items-baseline justify-center my-8'>
                <span class='mr-2 text-5xl font-extrabold'>₱27.4k</span>
                <span class='text-gray-500 dark:text-gray-400'>/month</span>
              </div>
              <ul role='list' class='mb-8 space-y-4 text-left'>
                <li class='flex items-center space-x-3'>
                  <svg
                    class='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                  <span>Individual configuration</span>
                </li>
                <li class='flex items-center space-x-3'>
                  <svg
                    class='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                  <span>No setup, or hidden fees</span>
                </li>
                <li class='flex items-center space-x-3'>
                  <svg
                    class='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                  <span>
                    Premium support:{' '}
                    <span class='font-semibold'>36 months</span>
                  </span>
                </li>
                <li class='flex items-center space-x-3'>
                  <svg
                    class='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                  <span>
                    Free updates: <span class='font-semibold'>36 months</span>
                  </span>
                </li>
              </ul>
              <a
                href='#'
                class='text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:ring-red-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center '
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </section> */}

      {/* BANNER 2 */}
      <section className='max-w-screen-xl px-4 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6 bg-red-500 rounded-xl flex'>
        {/* TEXT */}
        <div className=' sm:text-lg text-center mx-auto'>
          {/* TITLE */}
          <h2 className='mb-4 text-3xl font-extrabold leading-tight tracking-tight text-white'>
            Start your free trial today
          </h2>
          <p class='mb-6 font-light text-white md:text-lg'>
            Try Maogma Platform for 30 days. No credit card required.
          </p>
          <button className='bg-gray-800 hover:bg-red-900 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-5'>
            <Link to='/register'>Free Trial for 30 days</Link>
          </button>
        </div>
      </section>

      {/* CONTACT */}
      <section id='contacts'>
        <div class='py-8 lg:py-16 px-4 mx-auto max-w-screen-md'>
          <h2 class='mb-4 text-3xl tracking-tight font-extrabold text-center text-gray-900 '>
            Contact Us
          </h2>
          <p class='mb-8 lg:mb-16 font-light text-center text-gray-500  sm:text-xl'>
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
          <form action='#' class='space-y-8'>
            <div>
              <label
                for='email'
                class='block mb-2 text-sm font-medium text-gray-900'
              >
                Your email
              </label>
              <input
                type='email'
                id='email'
                class='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5'
                placeholder='maogma@gmail.com'
                required
              />
            </div>
            <div>
              <label
                for='subject'
                class='block mb-2 text-sm font-medium text-gray-900 '
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
                class='block mb-2 text-sm font-medium text-gray-900 '
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
            <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-5'>
              Send
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div class='max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10'>
          <hr className='my-6 border-gray-200 sm:mx-auto  lg:my-8' />
          <div class='text-center'>
            <a
              href='#'
              class='flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 '
            >
              <img src='' class='h-6 mr-3 sm:h-9' alt='' />
              Maogma.
            </a>
            <span class='block text-sm text-center text-gray-500 '>
              © 2022-2023 Maogma™. All Rights Reserved.
            </span>
            <ul class='flex justify-center mt-5 space-x-5'>
              <li>
                <a href='#' class='text-gray-500 hover:text-red-500 '>
                  <svg
                    class='w-5 h-5'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                      clip-rule='evenodd'
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href='#' class='text-gray-500 hover:text-red-500  '>
                  <svg
                    class='w-5 h-5'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
                      clip-rule='evenodd'
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href='#' class='text-gray-500 hover:text-red-500  '>
                  <svg
                    class='w-5 h-5'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                  >
                    <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
                  </svg>
                </a>
              </li>
              <li>
                <a href='#' class='text-gray-500 hover:text-red-500  '>
                  <svg
                    class='w-5 h-5'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                      clip-rule='evenodd'
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
