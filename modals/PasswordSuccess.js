import React from 'react';
import Link from 'next/link';

function PasswordSuccessModal({ showModal }) {
    return (
        <div
            className={`fixed modal-top w-full z-30 h-screen flex justify-center items-center ${
                showModal ? 'top-0' : '-top-full'
            } `}>
            <div className='bg-white flex flex-col items-center z-20 absolute w-2/6 px-12 py-6 rounded-sm text-center xs:w-full xs:px-2 2xs:w-full 2xs:px-6 md:w-4/6 md:px-8 lg:w-3/6'>
                <img src='/icons/success-icon.svg' alt='Success Icon' className='w-12 h-12' />

                <h2 className='text-primary-blue text-xl my-6 font-semibold'>Password is Successfully Reset</h2>
                <p className='text-sm leading-6 mb-6'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. At vel, ac natoque netus consectetur. Proin
                    facilisis vehicula urna urna, libero feugiat leo.
                </p>
                <Link href='/signin'>
                    <a className='text-sm text-white bg-primary-blue rounded-sm px-6 py-2'>Back to Login</a>
                </Link>
            </div>
            <button className=' absolute z-10 bg-gray-800 opacity-70 top-0 left-0 w-full h-full focus:outline-none' />
        </div>
    );
}

export default PasswordSuccessModal;
