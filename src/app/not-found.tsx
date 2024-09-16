import React from 'react';
import Link from 'next/link';
import pageStyles from './components/page.module.css'

const Custom404: React.FC = () => {
  return (
    <div className={'space-y-5 min-h-screen flex flex-col items-center justify-center w-full text-my-yellow ' + pageStyles.bg_gradient}>
      <h1 className='text-2xl text-red-500 font-bold'>404 - Page Not Found</h1>
      <p className='text-base'>Oops! The page you’re looking for doesn’t exist.</p>
      <Link
        className='text-lg'
        href="/">
        Go back to the <span className='underline text-green-500'>homepage</span>
      </Link>
    </div>
  );
};

export default Custom404;
