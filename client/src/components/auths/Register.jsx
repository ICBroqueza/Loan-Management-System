import React, { useState } from 'react';

const Register = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    firstname: '',
    lastname: '',
    email: '',
    address: '',
    username: '',
    password: '',
  });

  const {
    firstname,
    lastname,
    contactNumber,
    address,
    email,
    username,
    password,
  } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = {
        firstname,
        lastname,
        contactNumber,
        address,
        email,
        username,
        password,
      };

      const response = await fetch('http://localhost:8000/register', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      const parseRes = await response.json();

      if (parseRes.token) {
        localStorage.setItem('token', parseRes.token);
        console.log(parseRes.token);
        setAuth(true);
      } else {
        setAuth(false);
        console.log('Something wrong');
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className='bg-grey-lighter min-h-screen flex flex-col'>
      <div className='container max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-2'>
        <div className='bg-white px-6 py-8 rounded shadow-md text-black w-full'>
          <h1 className='lock uppercase tracking-wide  text-black-500 text-3xl font-bold my-16 text-center'>
            Welcome to <span className='text-red-500'>Maogma</span>
          </h1>
          <form
            onSubmit={(e) => {
              onSubmit(e);
            }}
          >
            <input
              type='text'
              className='block border border-grey-500 w-full p-3 rounded mb-4'
              name='firstname'
              value={firstname}
              onChange={(e) => {
                onChange(e);
              }}
              placeholder='First Name'
            />

            <input
              type='text'
              className='block border border-grey-500 w-full p-3 rounded mb-4'
              name='lastname'
              value={lastname}
              onChange={(e) => {
                onChange(e);
              }}
              placeholder='Last Name'
            />
            <input
              type='number'
              className='block border border-grey-500t w-full p-3 rounded mb-4'
              name='contactNumber'
              value={contactNumber}
              onChange={(e) => {
                onChange(e);
              }}
              placeholder='Contact Number'
            />
            <input
              type='text'
              className='block border border-grey-500t w-full p-3 rounded mb-4'
              name='address'
              value={address}
              onChange={(e) => {
                onChange(e);
              }}
              placeholder='Address'
            />
            <input
              type='email'
              className='block border border-grey-500t w-full p-3 rounded mb-4'
              name='email'
              value={email}
              onChange={(e) => {
                onChange(e);
              }}
              placeholder='Email'
            />

            <input
              type='text'
              className='block border border-grey-500t w-full p-3 rounded mb-4'
              name='username'
              value={username}
              onChange={(e) => {
                onChange(e);
              }}
              placeholder='Username'
            />
            <input
              type='password'
              className='block border border-grey-500t w-full p-3 rounded mb-4'
              name='password'
              value={password}
              onChange={(e) => {
                onChange(e);
              }}
              placeholder='Password'
            />
            <button
              type='submit'
              className='w-full text-center py-3 rounded bg-red-500 text-white hover:bg-red-700 focus:outline-none my-1'
            >
              Create Account
            </button>
          </form>

          <div className='text-center text-sm text-grey-500 mt-4'>
            By signing up, you agree to the
            <a
              className='no-underline border-b border-grey-500 text-grey-500'
              href='#'
            >
              Terms of Service
            </a>{' '}
            and
            <a
              className='no-underline border-b border-grey-500 text-grey-500'
              href='#'
            >
              Privacy Policy
            </a>
          </div>
        </div>

        <div className='text-grey-dark mt-6'>
          Already have an account?
          <a
            className='no-underline border-b border-blue text-blue'
            href='../login/'
          >
            Log in
          </a>
          .
        </div>
      </div>
    </div>
  );
};

export default Register;
