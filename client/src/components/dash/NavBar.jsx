import React from 'react';

export default function NavBar() {
  return (
    <div className='container sticky top-0 z-[1020]'>
      <div className='flex flex-wrap -mx-3 '>
        <div className='w-full max-w-full px-3 flex-0'>
          <nav class='absolute top-0 left-0 right-0 z-30 flex flex-wrap items-center px-4 py-2 m-6 mb-0 shadow-sm rounded-xl bg-white/80 backdrop-blur-2xl backdrop-saturate-200 lg:flex-nowrap lg:justify-start border border-red-500'>
            <div class='flex items-center w-full p-0 px-6  flex-wrap-inherit '>
              <a
                class='py-1.75 text-sm mr-4 ml-4 whitespace-nowrap font-bold text-slate-700 lg:ml-0'
                href='https://demos.creative-tim.com/argon-dashboard-tailwind/pages/dashboard.html'
                target='_blank'
              >
                Maogma.
              </a>

              <div
                navbar-menu
                class='items-center flex-grow transition-all duration-500 lg-max:overflow-hidden ease lg-max:max-h-0 basis-full lg:flex lg:basis-auto'
              >
                <ul class='flex flex-col pl-0 mx-auto mb-0 list-none lg:flex-row xl:ml-auto'>
                  <li>
                    <a
                      class='flex items-center px-4 py-2 mr-2 font-normal transition-all ease-in-out lg-max:opacity-0 duration-250 text-sm text-slate-700 lg:px-2'
                      aria-current='page'
                      href='../pages/dashboard.html'
                    >
                      <i class='mr-1 fa fa-chart-pie opacity-60'></i>
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      class='block px-4 py-2 mr-2 font-normal transition-all ease-in-out lg-max:opacity-0 duration-250 text-sm text-slate-700 lg:px-2'
                      href='../pages/profile.html'
                    >
                      <i class='mr-1 fa fa-user opacity-60'></i>
                      Profile
                    </a>
                  </li>
                  <li>
                    <a
                      class='block px-4 py-2 mr-2 font-normal transition-all ease-in-out lg-max:opacity-0 duration-250 text-sm text-slate-700 lg:px-2'
                      href='../pages/sign-up.html'
                    >
                      <i class='mr-1 fas fa-user-circle opacity-60'></i>
                      Sign Up
                    </a>
                  </li>
                  <li>
                    <a
                      class='block px-4 py-2 mr-2 font-normal transition-all ease-in-out lg-max:opacity-0 duration-250 text-sm text-slate-700 lg:px-2'
                      href='../pages/sign-in.html'
                    >
                      <i class='mr-1 fas fa-key opacity-60'></i>
                      Sign In
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <a
                  href='#'
                  className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                >
                  Logout
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
