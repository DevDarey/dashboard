import React from 'react';

import AdminLayout from 'layouts/AdminLayout';
import { setTitle } from 'utils/setTitle';

const list = ['', '', '', '', '', '', '', '', ''];

function AdminExpertSummary() {
    return (
        <AdminLayout>
            {setTitle('Admin Expert Summary')}

            <div className='flex-1 h-full flex flex-col xs:w-full 2xs:w-full sm:w-full md:w-full'>
                <div className='w-full h-16 px-4 flex items-center justify-between xs:pl-4 2xs:pl-4 sm:pl-4 xs:pr-16 2xs:pr-16 sm:pr-16 md:pr-16'>
                    <h2 className='text-xl text-primary-blue font-semibold'>Expert Summary</h2>
                    <div className='flex items-center'>
                        <img src='/img/user.png' alt='User Logo' className='w-10 h-10 rounded-full mr-2' />
                        <div>
                            <p className='text-base font-semibold'>Ayodele Tunde</p>
                            <p className='text-xs'>ayodele@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div className='flex-1 h-full px-4 py-2 overflow-y-auto xs:p-0 2xs:p-0'>
                    {list.length ? (
                        <div className='mb-6 w-full min-h-full bg-white px-6 py-6 xs:px-0 2xs:px-0 sm:px-2'>
                            <table className='w-full px-4'>
                                <thead className='w-full'>
                                    <tr className='w-full text-left uppercase'>
                                        <th className='w-1/5 h-10 pl-4 pr-2 border-solid border-highlight border-b-2 xs:hidden 2xs:hidden sm:hidden md:hidden lg:hidden'>
                                            Date/Time
                                        </th>
                                        <th className='w-1/5 h-10 px-2 border-solid border-highlight border-b-2 xs:pl-2 2xs:pl-2 sm:pl-2 xs:pr-1 2xs:pr-1 sm:pr-1 xs:w-2/5 2xs:w-2/5 sm:w-2/5 md:w-2/5 lg:w-2/5'>
                                            Expert Name
                                        </th>
                                        <th className='w-1/5 h-10 px-2 border-solid border-highlight border-b-2 xs:hidden 2xs:hidden sm:hidden md:hidden lg:hidden'>
                                            User's Name
                                        </th>
                                        <th className='w-2/5 h-10 pl-2 pr-4 border-solid border-highlight border-b-2 xs:pl-1 2xs:pl-1 sm:pl-1 xs:pr-2 2xs:pr-2 sm:pr-2 xs:w-3/5 2xs:w-3/5 sm:w-3/5 md:w-3/5 lg:w-3/5'>
                                            Article Title
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {list.map((summary, index) => (
                                        <tr className='w-full text-left' key={index}>
                                            <td className='w-1/5 h-10 pl-4 pr-2 border-solid border-highlight border-b-2 xs:hidden 2xs:hidden sm:hidden md:hidden lg:hidden'>
                                                Dec 17, 2021 10am
                                            </td>
                                            <td className='w-1/5 h-10 px-2 border-solid border-highlight border-b-2 xs:pl-2 2xs:pl-2 sm:pl-2 xs:pr-1 2xs:pr-1 sm:pr-1 xs:w-2/5 2xs:w-2/5 sm:w-2/5 md:w-2/5 lg:w-2/5'>
                                                <img
                                                    src='/icons/user-blue.svg'
                                                    alt='User'
                                                    className='w-6 h-6 inline-block mr-2 xs:hidden 2xs:hidden'
                                                />
                                                Rilwan Ishola
                                            </td>
                                            <td className='w-1/5 h-10 px-2 border-solid border-highlight border-b-2 xs:hidden 2xs:hidden sm:hidden md:hidden lg:hidden'>
                                                <img
                                                    src='/icons/user-blue.svg'
                                                    alt='User'
                                                    className='w-6 h-6 inline-block mr-2'
                                                />
                                                Rilwan Ishola
                                            </td>
                                            <td className='w-2/5 h-10 pl-2 pr-4 border-solid border-highlight border-b-2 leading-4 xs:pl-1 2xs:pl-1 sm:pl-1 xs:pr-2 2xs:pr-2 sm:pr-2 xs:w-3/5 2xs:w-3/5 sm:w-3/5 md:w-3/5 lg:w-3/5'>
                                                Perform Graphql Mutation And Query On The Same Screen/Page
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className='mb-6 w-full min-h-full bg-white flex flex-col justify-center items-center py-6'>
                            <img src='/img/empty-logo.png' alt='Empty Logo' className='w-24 h-24 mb-6' />
                            <p className='text-gray-400 text-xl mb-10'>NO EXPERT SUMMARY</p>
                        </div>
                    )}
                </div>
            </div>
        </AdminLayout>
    );
}

export default AdminExpertSummary;
