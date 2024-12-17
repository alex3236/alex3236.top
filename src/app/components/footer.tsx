import React from 'react';
import { FaGithub } from 'react-icons/fa';

export default function Footer() {
    return (
        <div
            id='icp'
            className="fixed mt-6 bottom-0 w-full  lg:w-fit lg:bottom-4 lg:left-4 bg-opacity-55 justify-center items-center flex align-middle text-white bg-gray-700"
        >
            <a href="https://icp.gov.moe/?keyword=20233236" className='drop-shadow-sm deop-shadow-black mx-2 my-1'>萌ICP备20233236</a> |
            <a href="https://github.com/alex3236/alex3236.top" className='drop-shadow-sm deop-shadow-black mx-2 my-1'><FaGithub /></a>
        </div>
    );
};
