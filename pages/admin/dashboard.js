import React, { useState } from 'react';

import AdminLayout from 'layouts/AdminLayout';
import { setTitle } from 'utils/setTitle';

const list = ['', '', '', '', '', '', '', '', '', ''];

function AdminHome() {
    return (
        <AdminLayout>
            {setTitle('Admin Home')}
            <div className='w-5/6 h-full flex flex-col xs:w-full 2xs:w-full sm:w-full md:w-full lg:w-3/4'>
                <div className='w-full h-16 px-10 flex items-center justify-between xs:pl-4 2xs:pl-4 sm:pl-4 xs:pr-16 2xs:pr-16 sm:pr-16 md:pr-16'>
                    <h2 className='text-xl text-primary-blue font-semibold'>Home</h2>
                    <div className='flex items-center'>
                        <img src='/img/user.png' alt='User Logo' className='w-10 h-10 rounded-full mr-2' />
                        <div>
                            <p className='text-base font-semibold'>Ayodele Tunde</p>
                            <p className='text-xs'>ayodele@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div className='flex-1 h-full px-10 py-2 overflow-y-auto xs:p-0 2xs:p-0 sm:p-0 md:px-4 lg:px-4'>
                    <div className='w-full bg-white px-4 py-2 rounded-sm mb-10'>
                        <h2 className='w-full my-4 text-primary-blue text-2xl border-solid border-dashboard-main border-b-2 pb-2'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </h2>
                        <p className='mt-4 text-primary-blue'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate diam nunc amet mattis.
                            Non est vulputate accumsan neque.v
                        </p>
                        <p className='px-4 py-1 w-1/4 border-solid border-dashboard-main border-2 rounded-md my-6 ml-auto xs:w-3/4 2xs:w-3/4 sm:w-2/4 md:w-2/4 lg:w-2/4'>
                            Feb 23, 2020 - Mar 4, 2021
                        </p>
                        <div className='flex justify-between py-4 mb-4 flex-wrap'>
                            <div className='rounded-md four-card text-primary-red bg-secondary-red p-4 flex flex-col justify-between h-32 xs:w-full 2xs:w-full sm:w-full md:w-two-card lg:w-two-card xs:mb-4 2xs:mb-4 sm:mb-5 md:mb-6 lg:mb-6'>
                                <div className='flex justify-between items-center'>
                                    <p className='text-lg'>ARTICLES</p>
                                    <img src='/icons/articles-red.svg' alt='Articles Icon' className='w-6 h-6' />
                                </div>
                                <p className='text-2xl font-semibold'>58</p>
                            </div>
                            <div className='rounded-md four-card text-primary-green bg-secondary-green p-4 flex flex-col justify-between h-32 xs:w-full 2xs:w-full sm:w-full md:w-two-card lg:w-two-card xs:mb-4 2xs:mb-4 sm:mb-5 md:mb-6 lg:mb-6'>
                                <div className='flex justify-between items-center'>
                                    <p className='text-lg'>USERS</p>
                                    <img src='/icons/users-green.svg' alt='Articles Icon' className='w-6 h-6' />
                                </div>
                                <p className='text-2xl font-semibold'>20</p>
                            </div>
                            <div className='rounded-md four-card text-primary-orange bg-secondary-orange p-4 flex flex-col justify-between h-32 xs:w-full 2xs:w-full sm:w-full md:w-two-card lg:w-two-card xs:mb-4 2xs:mb-4 sm:mb-5'>
                                <div className='flex justify-between items-center'>
                                    <p className='text-lg'>VOTES</p>
                                    <img src='/icons/votes-orange.svg' alt='Articles Icon' className='w-6 h-6' />
                                </div>
                                <p className='text-2xl font-semibold'>15</p>
                            </div>
                            <div className='rounded-md four-card text-new-blue bg-fainth-blue p-4 flex flex-col justify-between h-32 xs:w-full 2xs:w-full sm:w-full md:w-two-card lg:w-two-card'>
                                <div className='flex justify-between items-center'>
                                    <p className='text-lg'>PAYMENT</p>
                                    <img src='/icons/payment-blue.svg' alt='Articles Icon' className='w-6 h-6' />
                                </div>
                                <p className='text-2xl font-semibold flex items-center'>
                                    <img src='/icons/naira-blue.svg' alt='Naira Blue' className='w-6 h-6 mb-1' />{' '}
                                    15,000,000
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex justify-between mb-10 flex-wrap'>
                        <div className='w-full h-96 bg-white rounded-sm two-card flex flex-col xs:w-full 2xs:w-full sm:w-full xs:mb-10 2xs:mb-10 sm:mb-10'>
                            <div className='w-full h-16 border-solid border-dashboard-main border-b-2 flex justify-between items-center px-4'>
                                <h2 className='text-primary-blue text-xl font-semibold'>Recent Users</h2>
                                <button className='text-white px-10 py-1 rounded-md bg-primary-blue focus:outline-none'>
                                    View
                                </button>
                            </div>
                            <div className='w-full flex-1 overflow-y-auto text-left'>
                                <table className='w-full'>
                                    <thead className='w-full'>
                                        <tr className='w-full py-2 text-sm text-primary-blue border-solid border-dashboard-main border-b-2'>
                                            <th className='w-2/5 h-12 pl-4 pr-2'>DATE/TIME</th>
                                            <th className='w-3/5 h-12 pl-2 pr-4'>NAME</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {list.map((data, index) => (
                                            <tr
                                                key={index}
                                                className={`w-full h-12 text-gray-500 border-solid ${
                                                    list.length < index + 1 && 'border-dashboard-main'
                                                } border-b-2`}>
                                                <td className='w-2/5 h-10 pl-4 pr-2'>Dec 17, 2021 10am</td>
                                                <td className='w-3/5 h-10 pl-2 pr-4 leading-4'>
                                                    <img
                                                        src='/icons/user-blue.svg'
                                                        alt='User Icon'
                                                        className='w-6 h-6 mr-3 rounded-full inline-block'
                                                    />
                                                    Rilwan Ishola
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='w-full bg-white flex flex-col h-96 rounded-sm two-card xs:w-full 2xs:w-full sm:w-full'>
                            <div className='w-full h-16 border-solid border-dashboard-main border-b-2 flex items-center px-4'>
                                <h2 className='text-primary-blue text-xl font-semibold'>Recent Summary</h2>
                            </div>
                            <div className='w-full flex-1 overflow-y-auto text-left'>
                                <table className='w-full'>
                                    <thead className='w-full'>
                                        <tr className='w-full py-2 text-sm text-primary-blue border-solid border-dashboard-main border-b-2'>
                                            <th className='w-2/5 h-12 pl-4 pr-2'>DATE/TIME</th>
                                            <th className='w-3/5 h-12 pl-2 pr-4'>NAME</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {list.map((data, index) => (
                                            <tr
                                                key={index}
                                                className={`w-full h-12 text-gray-500 border-solid ${
                                                    list.length < index + 1 && 'border-dashboard-main'
                                                } border-b-2`}>
                                                <td className='w-2/5 h-10 pl-4 pr-2'>Dec 17, 2021 10am</td>
                                                <td className='w-3/5 h-10 pl-2 pr-4 leading-4'>
                                                    <img
                                                        src='/icons/user-blue.svg'
                                                        alt='User Icon'
                                                        className='w-6 h-6 mr-3 rounded-full inline-block'
                                                    />
                                                    Rilwan Ishola
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className='w-full bg-white flex flex-col h-96 rounded-sm mb-10'>
                        <div className='w-full h-16 border-solid border-dashboard-main border-b-2 flex items-center justify-between px-4'>
                            <h2 className='text-primary-blue text-xl font-semibold'>Expert Summary</h2>
                            <button className='text-white px-10 py-1 rounded-md bg-primary-blue focus:outline-none'>
                                View
                            </button>
                        </div>
                        <div className='w-full flex-1 overflow-y-auto text-left'>
                            <table className='w-full'>
                                <thead className='w-full'>
                                    <tr className='w-full py-2 text-sm text-primary-blue border-solid border-dashboard-main border-b-2 text-left'>
                                        <th className='w-1/5 h-12 pl-4 pr-2 xs:hidden 2xs:hidden sm:hidden'>
                                            DATE/TIME
                                        </th>
                                        <th className='w-1/5 h-12 pl-2 pr-2 xs:hidden 2xs:hidden sm:hidden'>
                                            EXPERT NAME
                                        </th>
                                        <th className='w-1/5 h-12 pl-2 pr-2'>USER'S NAME</th>
                                        <th className='w-2/5 h-12 pl-2 pr-4'>ARTICLE TITLE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {list.map((data, index) => (
                                        <tr
                                            key={index}
                                            className='w-full h-12 text-gray-500 border-solid border-dashboard-main border-b-2'>
                                            <td className='w-1/5 h-10 pl-4 pr-2 xs:hidden 2xs:hidden sm:hidden'>
                                                Dec 17, 2021 10am
                                            </td>
                                            <td className='w-1/5 h-10 pl-2 pr-2 xs:hidden 2xs:hidden sm:hidden'>
                                                <img
                                                    src='/icons/user-blue.svg'
                                                    alt='User Icon'
                                                    className='w-6 h-6 mr-3 rounded-full inline-block'
                                                />
                                                Rilwan Ishola
                                            </td>
                                            <td className='w-1/5 h-10 pl-2 pr-2'>
                                                <img
                                                    src='/icons/user-blue.svg'
                                                    alt='User Icon'
                                                    className='w-6 h-6 mr-3 rounded-full inline-block xs:hidden 2xs:hidden sm:hidden'
                                                />
                                                Rilwan Ishola
                                            </td>
                                            <td className='w-2/5 h-10 pl-2 pr-4 leading-4'>
                                                Perform Graphql Mutation And Query On The Same Screen/Page
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}

export default AdminHome;
