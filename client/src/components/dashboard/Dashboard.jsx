import React from 'react';
import Sidebar from '../sidebar/Sidebar';

export default function Dashboard({ setAuth }) {
  return (
    <div>
      <Sidebar setAuth={setAuth} />
    </div>
  );
}
