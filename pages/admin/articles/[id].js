import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import Router from 'next/router';

import AdminLayout from 'layouts/AdminLayout';
import { setTitle } from 'utils/setTitle';

const list = [
    { name: 'Idris', qty: '97', image: '/img/video-player.png' },
    { name: 'Oluwafemi', qty: '86', image: '/img/video-player.png' },
    { name: 'Emmanuel', qty: '75', image: '/img/video-player.png' },
    { name: 'Ridwan', qty: '67', image: '/img/video-player.png' },
];

const names = ['', '', '', '', '', '', '', '', '', '', '', ''];

function AdminArticlePage() {
    const [showScores, setShowScores] = useState(false);

    return (
        <AdminLayout notice={true}>
            {setTitle('Admin Article Page')}
            <div className='flex-1 h-full flex flex-col xs:w-full 2xs:w-full sm:w-full'>
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

                <div className='flex-1 h-full px-4 py-2 overflow-y-auto xs:px-2 2xs:px-2 sm:px-2 xs:py-0 2xs:py-0 sm:py-0'>
                    <div className='mb-6 bg-white p-6 xs:px-2 2xs:px-2 sm:px-3'>
                        <h2 className='text-3xl text-primary-blue font-semibold xs:text-lg 2xs:text-xl sm:text-xl md:text-2xl lg:text-2xl'>
                            Perform Graphql Mutation And Query <br />
                            On The Same Screen/Page
                        </h2>
                        <div className='flex py-6 xs:flex-col 2xs:flex-col sm:flex-col'>
                            <p className='text-base text-secondary-blue mr-10 flex'>
                                <img src='/icons/history-secondary.svg' alt='History Icon' className='w-6 h-6 mr-2' />{' '}
                                Posted on: Feb 2, 2021
                            </p>
                            <p className='text-base text-primary-blue flex'>
                                <img src='/icons/history-primary.svg' alt='History Icon' className='w-6 h-6 mr-2' />{' '}
                                Deadline: Feb 7, 2021
                            </p>
                        </div>
                        <div className='w-full rounded-sm'>
                            <p className='text-gray-800 leading-7'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget nisl ut massa blandit.
                                Turpis senectus convallis auctor pulvinar lorem sit. Sed amet venenatis mattis mattis.
                                Vitae ut varius dolor adipiscing. Egestas potenti cras lobortis elementum nam iaculis.
                                Velit nulla ipsum fringilla egestas neque mattis eros magna velit. Magna mattis dui, cum
                                sapien eget sapien ante. Praesent nulla quis leo ut elit. Senectus pellentesque egestas
                                elit mattis. Gravida scelerisque morbi enim platea dignissim tellus nisl. Felis at sed
                                cras in. Lectus tortor consectetur egestas hendrerit ullamcorper pellentesque ut felis.
                            </p>
                            <button className='text-white bg-primary-blue px-16 py-2 focus:outline-none rounded-md mt-16 xs:w-full 2xs:w-full xs:text-center 2xs:text-center'>
                                Edit Article
                            </button>
                        </div>
                    </div>
                    <div className='w-full my-8 bg-white rounded-sm'>
                        <h2 className='text-xl text-primary-blue w-full border-solid border-highlight border-b-2 py-2 px-4 xs:px 2xs:px-2'>
                            Summary
                        </h2>
                        <table className='w-full'>
                            <thead className='w-full text-left'>
                                <tr className='w-full text-primary-blue'>
                                    <th className='w-1/5 h-10 pl-4 pr-2 border-solid border-highlight border-b-2 xs:hidden 2xs:hidden sm:hidden md:hidden lg:hidden'>
                                        DATE/TIME
                                    </th>
                                    <th className='w-2/5 h-10 px-2 border-solid border-highlight border-b-2 xs:pr-1 2xs:pr-1 sm:pr-1'>
                                        NAME
                                    </th>
                                    <th className='w-1/5 h-10 px-2 border-solid border-highlight border-b-2 xs:px-1 2xs:px-1'>
                                        STATUS
                                    </th>
                                    <th className='w-1/5 h-10 pl-2 pr-4 border-solid border-highlight border-b-2 xs:pl-1 2xs:pl-1 xs:pr-2 2xs:pr-2 sm:pr-2 md:pr-2 lg:pr-2'>
                                        ACTION
                                    </th>
                                </tr>
                            </thead>
                            <tbody className='w-full text-left'>
                                {names.map((name, index) => (
                                    <tr key={index} className='w-full text-gray-800'>
                                        <td className='w-1/5 h-10 pl-4 pr-2 border-solid border-highlight border-b-2 xs:hidden 2xs:hidden sm:hidden md:hidden lg:hidden'>
                                            Dec 17, 2021 10am
                                        </td>
                                        <td className='w-2/5 h-10 px-2 border-solid border-highlight border-b-2 xs:pl-2 2xs:pl-2 xs:pr-1 2xs:pr-1'>
                                            <img
                                                src='/icons/user-blue.svg'
                                                alt='User'
                                                className='w-4 h-4 rounded-full mr-2 inline-block xs:hidden 2xs:hidden sm:hidden'
                                            />
                                            Rilwan Ishola
                                        </td>
                                        <td className='w-1/5 h-10 px-2 border-solid border-highlight border-b-2 text-secondary-blue xs:px-1 2xs:px-1'>
                                            {index % 2 === 0 ? 'Reviewed' : 'Not-Reviewed'}
                                        </td>
                                        <td className='w-1/5 h-10 pl-2 pr-4 border-solid border-highlight border-b-2 xs:pl-1 2xs:pl-1 xs:pr-2 2xs:pr-2 sm:pr-2 md:pr-2 lg:pr-2'>
                                            <button
                                                className='px-8 py-1 rounded-md bg-primary-blue text-white focus:outline-none text-sm xs:px-3 2xs:px-4'
                                                onClick={() => Router.push('/admin/articles/summary/' + (index + 1))}>
                                                View
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <button
                        className='w-full hidden my-6  justify-center text-white bg-primary-blue py-2 rounded-md focus:outline-none xs:flex 2xs:flex sm:flex'
                        onClick={() => setShowScores(true)}>
                        View Scores
                    </button>
                </div>
            </div>
            <div
                className={`w-scores z-50 h-full px-4 py-4 text-white text-sm bg-primary-blue overflow-x-auto xs:absolute 2xs:absolute sm:absolute xs:w-full 2xs:w-full sm:w-full scores-top md:relative md:top-0 md:left-0 md:z-10 ${
                    showScores ? 'xs:w-full 2xs:w-full sm:w-full top-0' : '-top-full'
                }`}>
                <button
                    className='text-4xl hidden xs:block 2xs:block sm:block text-white focus:outline-none mr-2 ml-auto mb-3'
                    onClick={() => setShowScores(false)}>
                    x
                </button>
                <h2 className='text-2xl font-medium'>Leader’s Board</h2>
                <div className='w-full mt-6'>
                    {list.map((data, index) => (
                        <div className='w-full h-12 text-base flex items-center' key={index}>
                            <img src={data.image} alt={data.name} className='w-8 h-8 rounded-full mr-2' />
                            <div className='flex flex-1 justify-between'>
                                <p className='flex-1 mr-1'>{data.name}</p>
                                <p>{data.qty}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='w-full mt-6'>
                    <h3 className='mb-2 text-xl font-medium'>Instructions</h3>
                    <p className='leading-6'>
                        Nunc, pellentesque a, id nisl proin nisl, commodo. Porttitor a nulla blandit suspendisse id
                        sagittis. Quisque convallis aliquet mattis commodo. Aliquam ultricies sapien in sit in egestas
                        non aenean. Tristique tincidunt egestas porttitor quisque placerat morbi ornare.
                    </p>
                </div>
                <div className='w-full mt-6'>
                    <h3 className='mb-2 text-xl font-medium'>Prize</h3>
                    <p className='leading-6'>
                        Nunc, pellentesque a, id nisl proin nisl, commodo. Porttitor a nulla blandit suspendisse id
                        sagittis. Quisque convallis aliquet mattis commodo. Aliquam ultricies sapien in sit in egestas
                        non aenean. Tristique tincidunt egestas porttitor quisque placerat morbi ornare.
                    </p>
                </div>
            </div>
        </AdminLayout>
    );
}

export default AdminArticlePage;
