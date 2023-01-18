import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import NavBar from './NavBar';

export default function Dash() {
  return (
    // <div className='m-0 font-sans text-base antialiased font-normal leading-default bg-gray-50 text-slate-500 border'>
    //   <aside class='fixed inset-y-0 flex-wrap items-center justify-between block w-full p-0 my-4 overflow-y-auto antialiased transition-transform duration-200 -translate-x-full bg-white border-0 shadow-xl xl:ml-6 max-w-64 ease-nav-brand z-990 rounded-2xl xl:left-0 xl:translate-x-0   border-red-500'>
    //     <div class='h-19'>
    //       <a
    //         class='block px-8 py-6 m-0 text-sm whitespace-nowrap text-slate-700 border-red-500'
    //         href='https://demos.creative-tim.com/argon-dashboard-tailwind/pages/dashboard.html'
    //         target='_blank'
    //       >
    //         <span class='ml-1 font-semibold transition-all duration-200 ease-nav-brand'>
    //           Maogma.
    //         </span>
    //       </a>
    //     </div>

    //     <hr class='h-px mt-0 bg-transparent bg-gradient-to-r from-transparent ' />

    //     <div class='items-center block w-auto max-h-screen overflow-auto h-[calc(100%_-_360px)] grow basis-full border border-red-500'>
    //       <ul class='flex flex-col pl-0 mb-0'>
    //         <li class='mt-0.5 w-full'>
    //           <a
    //             class='py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors'
    //             href='../pages/dashboard.html'
    //           >
    //             <div class='mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5'>
    //               <i class='relative top-0 text-sm leading-normal text-blue-500 ni ni-tv-2'></i>
    //             </div>
    //             <span class='ml-1 duration-300 opacity-100 pointer-events-none ease'>
    //               Dashboard
    //             </span>
    //           </a>
    //         </li>

    //         <li class='mt-0.5 w-full'>
    //           <a
    //             class='py-2.7 bg-blue-500/13  text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 font-semibold text-slate-700 transition-colors '
    //             href='../pages/tables.html'
    //           >
    //             <div class='mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5'>
    //               <i class='relative top-0 text-sm leading-normal text-orange-500 ni ni-calendar-grid-58'></i>
    //             </div>
    //             <span class='ml-1 duration-300 opacity-100 pointer-events-none ease'>
    //               Tables
    //             </span>
    //           </a>
    //         </li>

    //         <li class='mt-0.5 w-full'>
    //           <a
    //             class='py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors '
    //             href='../pages/billing.html'
    //           >
    //             <div class='mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center fill-current stroke-0 text-center xl:p-2.5'>
    //               <i class='relative top-0 text-sm leading-normal text-emerald-500 ni ni-credit-card'></i>
    //             </div>
    //             <span class='ml-1 duration-300 opacity-100 pointer-events-none ease'>
    //               Billing
    //             </span>
    //           </a>
    //         </li>

    //         <li class='mt-0.5 w-full'>
    //           <a
    //             class='py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors '
    //             href='../pages/virtual-reality.html'
    //           >
    //             <div class='mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5'>
    //               <i class='relative top-0 text-sm leading-normal text-cyan-500 ni ni-app'></i>
    //             </div>
    //             <span class='ml-1 duration-300 opacity-100 pointer-events-none ease'>
    //               Virtual Reality
    //             </span>
    //           </a>
    //         </li>

    //         <li class='mt-0.5 w-full'>
    //           <a
    //             class='py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors'
    //             href='../pages/rtl.html'
    //           >
    //             <div class='mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5'>
    //               <i class='relative top-0 text-sm leading-normal text-red-600 ni ni-world-2'></i>
    //             </div>
    //             <span class='ml-1 duration-300 opacity-100 pointer-events-none ease'>
    //               RTL
    //             </span>
    //           </a>
    //         </li>

    //         <li class='w-full mt-4'>
    //           <h6 class='pl-6 ml-2 text-xs font-bold leading-tight uppercase  opacity-60'>
    //             Account pages
    //           </h6>
    //         </li>

    //         <li class='mt-0.5 w-full'>
    //           <a
    //             class='py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors '
    //             href='../pages/profile.html'
    //           >
    //             <div class='mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5'>
    //               <i class='relative top-0 text-sm leading-normal text-slate-700 ni ni-single-02'></i>
    //             </div>
    //             <span class='ml-1 duration-300 opacity-100 pointer-events-none ease'>
    //               Profile
    //             </span>
    //           </a>
    //         </li>

    //         <li class='mt-0.5 w-full'>
    //           <a
    //             class='py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors '
    //             href='../pages/sign-in.html'
    //           >
    //             <div class='mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5'>
    //               <i class='relative top-0 text-sm leading-normal text-orange-500 ni ni-single-copy-04'></i>
    //             </div>
    //             <span class='ml-1 duration-300 opacity-100 pointer-events-none ease'>
    //               Sign In
    //             </span>
    //           </a>
    //         </li>

    //         <li class='mt-0.5 w-full'>
    //           <a
    //             class='py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors '
    //             href='../pages/sign-up.html'
    //           >
    //             <div class='mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5'>
    //               <i class='relative top-0 text-sm leading-normal text-cyan-500 ni ni-collection'></i>
    //             </div>
    //             <span class='ml-1 duration-300 opacity-100 pointer-events-none ease'>
    //               Sign Up
    //             </span>
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </aside>
    // </div>
    <div className='flex'>
      <Sidebar />
      <NavBar />
    </div>
  );
}
