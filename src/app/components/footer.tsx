import React from 'react';
import { FaGithub } from 'react-icons/fa';

interface AProps {
  ariaLabel?: string;
  href: string;
  children: React.ReactNode;
}

const A: React.FC<AProps> = ({ ariaLabel = '', href, children }) => {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className='drop-shadow-sm deop-shadow-black mx-2 my-1 hover:text-sky-200'
    >
      {children}
    </a>
  );
};

export default function Footer() {
  return (
    <div
      id='icp'
      className='z-20 fixed mt-6 bottom-0 px-2 w-full h-fit lg:w-fit lg:top-0 lg:right-4 lg:rounded-full bg-opacity-65 justify-center items-center flex align-middle text-white bg-gray-600'
    >
      <A href='https://icp.gov.moe/?keyword=20233236'>萌ICP备20233236</A> |
      <A
        ariaLabel='此项目的 Github 页面'
        href='https://github.com/alex3236/alex3236.top'
      >
        <FaGithub />
      </A>
    </div>
  );
}
