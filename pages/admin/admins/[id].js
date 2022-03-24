import React from 'react';

import AdminLayout from 'layouts/AdminLayout';
import { setTitle } from 'utils/setTitle';

function ViewAdmin() {
    return (
        <AdminLayout>
            {setTitle('View Admin')}

            <div className='flex-1 h-full flex flex-col xs:w-full 2xs:w-full sm:w-full md:w-full'>
                <div className='w-full h-16 px-4 flex items-center justify-between xs:pl-4 2xs:pl-4 sm:pl-4 xs:pr-16 2xs:pr-16 sm:pr-16 md:pr-16'>
                    <h2 className='text-xl text-primary-blue font-semibold'>Profile</h2>
                    <div className='flex items-center'>
                        <img src='/img/user.png' alt='User Logo' className='w-10 h-10 rounded-full mr-2' />
                        <div>
                            <p className='text-base font-semibold'>Ayodele Tunde</p>
                            <p className='text-xs'>ayodele@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div className='flex-1 h-full px-4 py-2 overflow-y-auto xs:p-0 2xs:p-0'>
                    <div className='mb-6 w-full text-center bg-white px-6 py-12'>
                        <div className='w-32 h-32 rounded-full mx-auto mb-4 relative'>
                            <img
                                src='/icons/user-blue.svg'
                                alt='User'
                                className='w-full h-full rounded-full absolute'
                            />
                            <img src='/icons/camera.svg' alt='User' className='w-8 h-8 absolute bottom-4 left-0' />
                        </div>
                        <p className='text-secondary-blue inline-block text-lg cursor-pointer'>Edit</p>
                    </div>
                    <div className='w-full'>
                        <h2 className='text-2xl px-4 text-primary-blue py-2 border-solid border-highlight border-b-2'>
                            Personal Information
                        </h2>
                        <div className='py-2 px-4 border-solid border-highlight border-b-2 flex'>
                            <p className='w-40 text-primary-blue'>Name:</p>
                            <p className='flex-1 text-gray-400'>Emmanuel Obagunwa</p>
                        </div>
                        <div className='py-2 px-4 border-solid border-highlight border-b-2 flex'>
                            <p className='w-40 text-primary-blue'>Email:</p>
                            <p className='flex-1 text-gray-400'>emmanuelaccess@gmsil.com</p>
                        </div>
                        <div className='py-2 px-4 border-solid border-highlight border-b-2 flex'>
                            <p className='w-40 text-primary-blue'>Phone no:</p>
                            <p className='flex-1 text-gray-400'>08023459778</p>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}

export default ViewAdmin;
