import React from 'react';
import Sidebar from '../sidebar/Sidebar';

export default function Dashboard({ setAuth }) {
  return (
    <div className='py-10 px-10 rounded shadow-md'>
      <Sidebar setAuth={setAuth} />
    </div>
  );
}
