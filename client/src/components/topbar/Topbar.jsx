import React from 'react';
import { Link } from 'react-router-dom';

export default function Topbar() {
  return (
    <div className='w-full h-12 border-b border-gray-200 px-2 top-0 z-50'>
      {/* WRAPPER */}
      <div className='flex justify-between items-center min-h-full px-5'>
        {/* LEFT */}
        <div className='left'>
          <div>
            {/* <span className='font-bold text-red-500 cursor-pointer'>
              Maogma
            </span> */}
            <Link to='/home' className='font-bold text-red-500 cursor-pointer'>
              Maogma
            </Link>
          </div>
        </div>

        {/* RIGHT */}
        <div className='right flex items-center cursor-pointer'>
          <span>Admin</span>
          <Link to='/login'>
            <img
              src='https://cdn3.iconfinder.com/data/icons/red-icons-1/512/Male-profile-icon-512.png'
              alt=''
              className='h-10 cursor-pointer ml-1'
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
