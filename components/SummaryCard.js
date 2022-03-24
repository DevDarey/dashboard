import React from 'react';
import Router from 'next/router';

function SummaryCard({ image, name, email, status, id }) {
    return (
        <div
            className='two-card summary-card flex flex-col xs:items-center 2xs:items-center sm:items-center xs:w-full 2xs:w-full sm:w-full xs:mr-0 2xs:mr-0 sm:mr-0 xs:px-2 2xs:px-2 sm:px-2 md:px-2 lg:px-2'
            onClick={() => Router.push('/expert/dashboard/summary/' + id)}>
            <img src={image} alt='User Image' className='w-16 h-16 rounded-full mx-auto mt-4 mb-8' />
            <p className='text-gray-800 my-3'>
                <span className='font-semibold mr-3'>Name:</span> {name}
            </p>
            <p className='text-gray-800 my-3'>
                <span className='font-semibold mr-3'>Email:</span>
                {email}
            </p>
            <p className='text-secondary-blue my-3'>
                <span className='font-semibold mr-3'>Status:</span>
                {status}
            </p>
        </div>
    );
}

export default SummaryCard;
