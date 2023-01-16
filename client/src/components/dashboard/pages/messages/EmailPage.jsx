import React from 'react';
import Sidebar from '../../../sidebar/Sidebar';
import GetBorrowers from './GetBorrowers';

export default function EmailPage() {
  return (
    <div className='flex border-l-2'>
      <Sidebar />

      <div className='w-full px-8 pt-6 pb-8 mb-4 bg-white rounded'>
        <GetBorrowers />
      </div>
    </div>
  );
}
