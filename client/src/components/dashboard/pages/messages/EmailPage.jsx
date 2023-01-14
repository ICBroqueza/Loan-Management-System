import React from 'react';
import Sidebar from '../../../sidebar/Sidebar';
import GetBorrowers from './GetBorrowers';

export default function EmailPage() {
  return (
    <div className='flex'>
      <Sidebar />

      <div className='w-full'>
        <GetBorrowers />
      </div>
    </div>
  );
}
