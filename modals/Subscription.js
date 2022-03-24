import React, { useState } from 'react';
import Router from 'next/router';

function SubscriptionModal({ showModal, setShowModal }) {
    const [confirmation, setConfirmation] = useState(false);

    const handleConfirmation = () => {
        setConfirmation(true);
    };

    const closeModal = () => {
        setConfirmation(false);
        setShowModal(false);
    };

    return (
        <div
            className={`fixed modal-top w-full h-screen flex justify-center items-center ${
                showModal ? 'top-0' : '-top-full'
            } `}>
            {confirmation ? (
                <div className='bg-dashboard-main flex flex-col items-center z-20 absolute w-2/6 h-64 rounded-sm text-center xs:w-full 2xs:w-full sm:w-full md:w-3/6 lg:w-3/6'>
                    <div className='flex-1 text-base relative w-full px-4 py-6 flex flex-col items-center'>
                        <img src='/icons/note-icon.svg' alt='Notice Icon' className='w-12 h-12' />
                        <p className='text-gray-500 mb-3'>You are about to subscribe to the plane</p>
                        <p className='text-gray-500 mb-1'>
                            <span className='text-primary-blue font-semibold mr-2'>Type:</span> Yearly
                        </p>
                        <p className='text-gray-500 mb-1'>
                            <span className='text-primary-blue font-semibold mr-2'>Amount:</span> 50,000
                        </p>
                        <button
                            className='text-base text-gray-500 px-2 rounded-full bg-transparent border-solid border-gray-300 border-2 focus:outline-none absolute top-2 right-2'
                            onClick={() => setConfirmation(false)}>
                            X
                        </button>
                    </div>
                    <div className='w-full h-16 px-6 flex bg-highlight justify-between items-center'>
                        <button
                            className='px-8 py-2 bg-white text-sm rounded-md text-primary-blue focus:outline-none'
                            onClick={() => setConfirmation(false)}>
                            Cancel
                        </button>
                        <button
                            className='px-8 py-2 text-sm bg-primary-blue rounded-md text-white focus:outline-none'
                            onClick={() => Router.push('/user/payment/success')}>
                            Proceed
                        </button>
                    </div>
                </div>
            ) : (
                <div className='bg-dashboard-main flex z-20 absolute px-16 py-8 rounded-sm overflow-y-auto max-h-screen xs:min-w-full 2xs:min-w-full sm:min-w-full xs:flex-col 2xs:flex-col sm:flex-col xs:items-center 2xs:items-center sm:items-center'>
                    <div className='rounded-md bg-dashboard-main mr-4 w-56 h-64 flex flex-col border-solid border-highlight border-2 xs:mb-6 2xs:mb-6 sm:mb-6 xs:mr-0 2xs:mr-0 sm:mr-0'>
                        <div className='w-full h-12 flex items-center px-4 text-lg font-medium'>Monthly</div>
                        <div className='bg-white flex flex-1 justify-center items-center text-xl font-medium'>
                            <img src='/icons/naira.svg' alt='Naira Icon' className='w-4 h-4 mr-1' />
                            1,500
                        </div>
                        <div className='w-full h-12 flex items-center justify-center'>
                            <button
                                className='px-6 py-2 text-sm text-primary-blue font-medium rounded-md bg-white focus:outline-none'
                                onClick={handleConfirmation}>
                                Subscribe
                            </button>
                        </div>
                    </div>
                    <div className='rounded-md bg-dashboard-main mr-4 w-56 h-64 flex flex-col border-solid border-highlight border-2 xs:mb-6 2xs:mb-6 sm:mb-6 xs:mr-0 2xs:mr-0 sm:mr-0'>
                        <div className='w-full h-12 flex items-center px-4'>Yearly</div>
                        <div className='bg-white flex flex-1 justify-center items-center text-xl font-medium'>
                            <img src='/icons/naira.svg' alt='Naira Icon' className='w-4 h-4 mr-1' />
                            15,000
                        </div>
                        <div className='w-full h-12 flex items-center justify-center'>
                            <button
                                className='px-6 py-2 text-sm text-primary-blue font-medium rounded-md bg-white focus:outline-none'
                                onClick={handleConfirmation}>
                                Subscribe
                            </button>
                        </div>
                    </div>
                    <div className='rounded-md bg-dashboard-main mr-4 w-56 h-64 flex flex-col border-solid border-highlight border-2 xs:mr-0 2xs:mr-0 sm:mr-0'>
                        <div className='w-full h-12 flex items-center px-4'>Life time</div>
                        <div className='bg-white flex flex-1 justify-center items-center text-xl font-medium'>
                            <img src='/icons/naira.svg' alt='Naira Icon' className='w-4 h-4 mr-1' />
                            50,000
                        </div>
                        <div className='w-full h-12 flex items-center justify-center'>
                            <button
                                className='px-6 py-2 text-sm text-primary-blue font-medium rounded-md bg-white focus:outline-none'
                                onClick={handleConfirmation}>
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <button
                className=' absolute z-10 bg-gray-800 opacity-70 top-0 left-0 w-full h-full focus:outline-none'
                onClick={closeModal}
            />
        </div>
    );
}

export default SubscriptionModal;
