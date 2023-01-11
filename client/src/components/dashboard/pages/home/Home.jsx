import React from 'react';
import Sidebar from '../../../sidebar/Sidebar';

export default function Home() {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex-4'>Home</div>
    </div>
  );
}
