import React from 'react';
import Sidebar from '../../../sidebar/Sidebar';
import GetBorrowers from './GetBorrowers';

export default function EmailPage() {
  return (
    <div className='flex h-[900px]'>
      <Sidebar />

      <div className='w-full h-[900px] mx-auto px-8 py-8 mb-4 border bg-white shadow-md rounded'>
        <GetBorrowers />
      </div>
    </div>
  );
}
