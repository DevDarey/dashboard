import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import Router from 'next/router';

import AdminLayout from 'layouts/AdminLayout';
import { setTitle } from 'utils/setTitle';

function AdminArticleSummaryPage() {
    return (
        <AdminLayout>
            {setTitle('Admin Article Summary Page')}
            <div className='flex-1 h-full flex flex-col xs:w-full 2xs:w-full sm:w-full md:w-full'>
                <div className='w-full h-16 px-4 flex items-center justify-between xs:pl-4 2xs:pl-4 sm:pl-4 xs:pr-16 2xs:pr-16 sm:pr-16 md:pr-16'>
                    <h2 className='text-xl text-primary-blue font-semibold'>Article</h2>
                    <div className='flex items-center'>
                        <img src='/img/user.png' alt='User Logo' className='w-10 h-10 rounded-full mr-2' />
                        <div>
                            <p className='text-base font-semibold'>Ayodele Tunde</p>
                            <p className='text-xs'>ayodele@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div className='flex-1 h-full px-4 py-2 overflow-y-auto xs:p-0 2xs:p-0 sm:p-0'>
                    <div className='mb-6 bg-white px-16 py-6 xs:px-2 2xs:px-3 sm:px-4 md:px-6 lg:px-6'>
                        <h2 className='text-3xl mb-3 text-primary-blue font-semibold xs:text-lg 2xs:text-xl sm:text-xl md:text-2xl lg:text-2xl'>
                            Summary for Perform Graphql Mutation And Query On The Same <br /> Screen/Page
                        </h2>

                        <div className='w-full mt-6 mb-10 flex justify-between flex-wrap'>
                            <div className='two-card bg-dashboard-main rounded-sm text-gray-800 xs:w-full 2xs:w-full sm:w-full xs:mb-6 2xs:mb-6 sm:mb-6'>
                                <div className='w-full py-3 text-xl px-6 border-solid border-highlight border-b-2'>
                                    User's Profile
                                </div>
                                <div className='w-full h-40 flex items-center pl-6 pr-3'>
                                    <img
                                        src='/icons/user-blue.svg'
                                        alt='User'
                                        className='w-16 h-16 rounded-full mr-2'
                                    />
                                    <div className='flex-1 py-4 px-2'>
                                        <p className='mb-3'>Name: Ayodele Tunde</p>
                                        <p className='mb-3'>Email: ridwan2123@gmail.com</p>
                                        <p className='mb-3'>Phone No: 08102345676</p>
                                    </div>
                                </div>
                            </div>
                            <div className='two-card bg-dashboard-main rounded-sm text-gray-800 xs:w-full 2xs:w-full sm:w-full'>
                                <div className='w-full py-3 text-xl px-6 border-solid border-highlight border-b-2'>
                                    Expert's Profile
                                </div>
                                <div className='w-full h-40 flex items-center pl-6 pr-3'>
                                    <img
                                        src='/icons/user-blue.svg'
                                        alt='User'
                                        className='w-16 h-16 rounded-full mr-2'
                                    />
                                    <div className='flex-1 py-4 px-2'>
                                        <p className='mb-3'>Name: Ayodele Tunde</p>
                                        <p className='mb-3'>Email: ridwan2123@gmail.com</p>
                                        <p className='mb-3'>Phone No: 08102345676</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='w-full rounded-sm'>
                            <h2 className='text-primary-blue text-2xl mb-4'>Summary</h2>
                            <p className='text-gray-800 leading-7'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget nisl ut massa blandit.
                                Turpis senectus convallis auctor pulvinar lorem sit. Sed amet venenatis mattis mattis.
                                Vitae ut varius dolor adipiscing. Egestas potenti cras lobortis elementum nam iaculis.
                                Velit nulla ipsum fringilla egestas neque mattis eros magna velit. Magna mattis dui, cum
                                sapien eget sapien ante. Praesent nulla quis leo ut elit. Senectus pellentesque egestas
                                elit mattis. Gravida scelerisque morbi enim platea dignissim tellus nisl. Felis at sed
                                cras in. Lectus tortor consectetur egestas hendrerit ullamcorper pellentesque ut felis.
                            </p>
                            <p className='text-lg text-primary-blue mt-2 font-medium'>
                                Submission date: 12 - 03 - 2021
                            </p>
                        </div>
                        <div className='w-full mt-5'>
                            <h2 className='text-primary-blue text-xl font-semibold'>Score</h2>
                            <div className='w-full mt-6 bg-dashboard-main rounded-sm px-8 py-2 xs:px-2 2xs:px-2 sm:px-3'>
                                <h3 className='text-primary-blue text-lg border-solid border-highlight border-b-2'>
                                    Break Down
                                </h3>
                                <div className='w-full h-full flex justify-between flex-wrap my-6'>
                                    <div className='text-primary-red two-card h-36 bg-secondary-red px-6 py-4 rounded-md flex flex-col justify-between mb-10 xs:w-full 2xs:w-full sm:w-full'>
                                        <div className='flex items-center justify-between'>
                                            <p className='text-xl'>Plagiarism</p>
                                            <img src='/icons/plagiarism.svg' alt='Plagiarism' className='w-6 h-6' />
                                        </div>
                                        <p className='text-3xl font-semibold'>25%</p>
                                    </div>
                                    <div className='text-primary-green two-card h-36 bg-secondary-green px-6 py-4 rounded-md flex flex-col justify-between mb-10 xs:w-full 2xs:w-full sm:w-full'>
                                        <div className='flex items-center justify-between'>
                                            <p className='text-xl'>Grammar</p>
                                            <img src='/icons/grammar.svg' alt='Grammar' className='w-6 h-6' />
                                        </div>
                                        <p className='text-3xl font-semibold'>25%</p>
                                    </div>
                                    <div className='text-new-blue two-card h-36 bg-fainth-blue px-6 py-4 rounded-md flex flex-col justify-between xs:w-full 2xs:w-full sm:w-full xs:mb-10 2xs:mb-10 sm:mb-10'>
                                        <div className='flex items-center justify-between'>
                                            <p className='text-xl'>Expert</p>
                                            <img src='/icons/expert.svg' alt='Expert' className='w-6 h-6' />
                                        </div>
                                        <p className='text-3xl font-semibold'>25%</p>
                                    </div>
                                    <div className='text-primary-orange two-card h-36 bg-secondary-orange px-6 py-4 rounded-md flex flex-col justify-between xs:w-full 2xs:w-full sm:w-full'>
                                        <div className='flex items-center justify-between'>
                                            <p className='text-xl'>Votes</p>
                                            <img src='/icons/votes.svg' alt='Votes' className='w-6 h-6' />
                                        </div>
                                        <p className='text-3xl font-semibold'>25%</p>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full h-16 bg-primary-blue text-white px-6 text-xl font-semibold flex items-center justify-between mt-6'>
                                <p>Total</p>
                                <p>85%</p>
                            </div>
                            <h2 className='text-2xl text-primary-blue mt-12 mb-6'>Actions</h2>
                            <button className='bg-primary-blue text-white px-10 py-2 rounded-md focus:outline-none'>
                                Remove Article
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}

export default AdminArticleSummaryPage;
