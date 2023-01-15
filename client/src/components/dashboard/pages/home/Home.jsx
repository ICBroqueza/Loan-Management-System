import React from 'react';
import Sidebar from '../../../sidebar/Sidebar';
import BotWidget from './bottom/BotWidget';
import ClientsWidget from './top/ClientsWidget';
import TopWidget from './top/TopWidget';

export default function Home() {
  return (
    <div className='flex'>
      <Sidebar />
      <div>
        <TopWidget />
        <BotWidget />
      </div>
    </div>
  );
}
