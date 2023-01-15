import React from 'react';
import ClientsWidget from './ClientsWidget';
import LoansWidget from './LoansWidget';
import PaymentsWidget from './PaymentsWidget';

export default function TopWidget() {
  return (
    <div className='flex justify-between w-full p-5 gap-10'>
      <ClientsWidget />
      <LoansWidget />
      <PaymentsWidget />
    </div>
  );
}
