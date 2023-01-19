<div className='flex flex-wrap min-h-screen w-full content-center justify-center bg-gray-200 py-10'>
  <div className='flex shadow-md'>
    <div
      className='flex flex-wrap content-center justify-center rounded-l-md bg-white'
      style='width: 24rem; height: 32rem;'
    >
      <div className='w-72'>
        <h1 className='text-xl font-semibold'>Welcome back</h1>
        <small className='text-gray-400'>
          Welcome back! Please enter your details
        </small>

        <form className='mt-4' onSubmit={(e) => onSubmit(e)}>
          {/* USERNAME */}
          <div className='mb-3'>
            <label className='mb-2 block text-xs font-semibold'>Usernam</label>
            <input
              type='name'
              name='username'
              value={username}
              placeholder='Enter your username'
              className='block w-full rounded-md border border-gray-300 focus:border-red-700 focus:outline-none focus:ring-1 focus:ring-red-700 py-1 px-1.5 text-gray-500'
            />
          </div>

          {/* PASSWORD */}
          <div className='mb-3'>
            <label className='mb-2 block text-xs font-semibold'>Password</label>
            <input
              name='password'
              value={password}
              type='password'
              placeholder='*****'
              className='block w-full rounded-md border border-gray-300 focus:border-red-700 focus:outline-none focus:ring-1 focus:ring-red-700 py-1 px-1.5 text-gray-500'
            />
          </div>

          <div className='mb-3'>
            <button
              type='submit'
              className='mb-1.5 block w-full text-center text-white bg-red-700 hover:bg-red-900 px-2 py-1.5 rounded-md'
            >
              Sign in
            </button>
          </div>
        </form>

        {/* BUTTONS */}
        <div className='text-center'>
          <span className='text-xs text-gray-400 font-semibold'>
            Don't have account?
          </span>
          <a
            href='http://localhost:3000/register'
            className='text-xs font-semibold text-red-700'
          >
            Sign up
          </a>
        </div>
      </div>
    </div>

    <div className='flex flex-wrap content-center justify-center rounded-r-md bg-red-500 w-full h-full'></div>
  </div>
</div>;

{
  /* <h1 className='lock uppercase tracking-wide  text-black-500 text-4xl font-bold my-16 text-center'>
        Login
      </h1>
      <form
        onSubmit={(e) => onSubmit(e)}
        className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
      >
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='username'
          >
            Username
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='username'
            type='text'
            placeholder='Username'
            name='username'
            value={username}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='mb-6'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='password'
          >
            Password
          </label>
          <input
            className='shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
            id='password'
            type='password'
            placeholder='******************'
            name='password'
            value={password}
            onChange={(e) => onChange(e)}
          />
          <p className='text-red-500 text-xs italic'>
            Please choose a password.
          </p>
        </div>
        <div className='flex items-center justify-between'>
          <button
            className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type='submit'
          >
            Sign In
          </button>
          <a
            className='inline-block align-baseline font-bold text-sm text-red-500 hover:text-red-800'
            href='http://localhost:3000/register'
          >
            Register Here
          </a>
        </div>
      </form>
      <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full max-w-xs mx-auto'>
        <Link to='/'>Back to Home page</Link>
      </button> */
}
{
  /*  */
}
