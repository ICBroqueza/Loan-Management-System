import React, { useState } from 'react';
import { useEffect } from 'react';

import Sidebar from '../../../sidebar/Sidebar';
import BotWidget from './bottom/BotWidget';
import ClientsWidget from './top/ClientsWidget';
import TopWidget from './top/TopWidget';

export default function Home() {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='w-full px-8 pt-6 pb-8 mb-4 bg-white'>
        <div className='px-4 py-5 sm:px-6 bg-red-500 flex justify-between items-center'>
          <div>
            <h3 className='text-xl font-medium leading-6 text-white'>
              WELCOME Admin
            </h3>
            <span className='text-md font-medium leading-6 text-white'>
              Logged in: {new Date().toLocaleTimeString()}
            </span>
          </div>
          <span className='text-lg font-medium leading-6 text-white'>
            {new Date().toLocaleString('en-US', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            }) + ''}
          </span>
        </div>
        <TopWidget />
        <BotWidget />
      </div>
    </div>
  );
}
