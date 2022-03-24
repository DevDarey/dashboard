import React from 'react';
import Router from 'next/router';

import UserLayout from 'layouts/UserLayout';
import { setTitle } from 'utils/setTitle';

function SubscriptionSuccess() {
    return (
        <UserLayout>
            {setTitle('Subscription Success')}
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
                    <div className='w-full min-h-full bg-white pt-12 pb-4 rounded-sm flex flex-col items-center xs:px-3 2xs:px-3 sm:px-4'>
                        <img src='/icons/success-icon.svg' alt='Success Icon' className='w-24 h-24 my-8' />
                        <h2 className='text-lg font-semibold mb-4'>Payment is Successful</h2>
                        <p className='w-2/5 leading-6 mb-6 text-center xs:w-full 2xs:w-full sm:w-full md:w-3/6 lg:w-3/6'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie vulputate bibendum in vel
                            posuere. Facilisis bibendum lectus nunc est sed risus.
                        </p>
                        <button
                            className='px-10 py-2 rounded-sm bg-primary-blue text-white focus:outline-none'
                            onClick={() => Router.push('/user/payment')}>
                            Ok
                        </button>
                    </div>
                </div>
            </div>
        </UserLayout>
    );
}

export default SubscriptionSuccess;
