import React from 'react';
import ApprovalWidget from './ApprovalWidget';
import DatesWidget from './DatesWidget';

export default function BotWidget() {
  return (
    <div className='flex justify-between w-full p-5 gap-10'>
      <DatesWidget />
      <ApprovalWidget />
    </div>
  );
}
