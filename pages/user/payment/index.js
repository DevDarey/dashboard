import React, { useState, Fragment } from 'react';

import UserLayout from 'layouts/UserLayout';
import { setTitle } from 'utils/setTitle';
import { SubscriptionModal } from 'modals';

function UserSubscription() {
    const [subscription, setSubscription] = useState(true);
    const [showModal, setShowModal] = useState(false);

    return (
        <Fragment>
            {setTitle('Subscription')}
            <UserLayout>
                <div className='w-5/6 h-full flex flex-col xs:w-full 2xs:w-full sm:w-full md:w-full lg:w-3/4'>
                    <div className='w-full h-16 px-8 flex items-center justify-between xs:pl-4 2xs:pl-4 sm:pl-4 xs:pr-16 2xs:pr-16 sm:pr-16 md:pr-16'>
                        <h2 className='text-xl text-primary-blue font-semibold'>Subscription</h2>
                        <div className='flex items-center'>
                            <img src='/img/user.png' alt='User Logo' className='w-10 h-10 rounded-full mr-2' />
                            <div>
                                <p className='text-base font-semibold'>Ayodele Tunde</p>
                                <p className='text-xs'>ayodele@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex-1 h-full px-8 pb-6 pt-2 overflow-y-auto xs:p-0 2xs:p-0 sm:p-0'>
                        {subscription ? (
                            <div className='w-full min-h-full bg-white pt-12 pb-4 rounded-sm px-16 xs:px-2 2xs:px-3 sm:px-4'>
                                <h2 className='text-2xl text-primary-blue font-medium mb-8'>Active Subscription</h2>
                                <div className='w-2/6 my-6 xs:w-full 2xs:w-full sm:w-full md:w-4/6 lg:w-4/6'>
                                    <div className='w-full py-2 pr-4 flex justify-between border-solid border-dashboard-main border-t-2 border-b-2'>
                                        <h3 className='text-base text-primary-blue font-semibold'>Type:</h3>
                                        <p className='text-base text-gray-400'>Yearly</p>
                                    </div>
                                    <div className='w-full py-2 pr-4 flex justify-between border-solid border-dashboard-main border-b-2'>
                                        <h3 className='text-base text-primary-blue font-semibold'>Durations:</h3>
                                        <p className='text-base text-gray-400'>1 Year</p>
                                    </div>
                                    <div className='w-full py-2 pr-4 flex justify-between border-solid border-dashboard-main border-b-2'>
                                        <h3 className='text-base text-primary-blue font-semibold'>Start Date:</h3>
                                        <p className='text-base text-gray-400'>27 Feb, 2021</p>
                                    </div>
                                    <div className='w-full py-2 pr-4 flex justify-between border-solid border-dashboard-main border-b-2'>
                                        <h3 className='text-base text-primary-blue font-semibold'>End Date:</h3>
                                        <p className='text-base text-gray-400'>27 Feb, 2022</p>
                                    </div>
                                </div>
                                <button
                                    className='bg-primary-blue px-10 py-2 rounded-sm text-white focus:outline-none'
                                    onClick={() => setShowModal(true)}>
                                    Subscribe
                                </button>
                            </div>
                        ) : (
                            <div className='w-full min-h-full bg-white pt-12 pb-4 rounded-sm flex flex-col items-center  xs:p-2 2xs:p-2 sm:p-2 md:px-3 lg:p-3'>
                                <img src='/icons/note-icon.svg' alt='Notice Icon' className='w-24 h-24 my-8' />
                                <h2 className='text-lg font-semibold mb-4'>No active subscription</h2>
                                <p className='w-2/5 leading-6 mb-6 text-center xs:w-full 2xs:w-full sm:w-full md:w-3/5 lg:w-3/5'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie vulputate bibendum
                                    in vel posuere. Facilisis bibendum lectus nunc est sed risus.
                                </p>
                                <button
                                    className='px-16 py-2 rounded-sm bg-primary-blue text-white focus:outline-none'
                                    onClick={() => setShowModal(true)}>
                                    Subscribe
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </UserLayout>
            <SubscriptionModal showModal={showModal} setShowModal={setShowModal} />
        </Fragment>
    );
}

export default UserSubscription;
