import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';

import UserLayout from 'layouts/UserLayout';
import { setTitle } from 'utils/setTitle';
import { EvaluationCard } from 'components';

const list = [
    { name: 'Idris', qty: '97', image: '/img/video-player.png' },
    { name: 'Oluwafemi', qty: '86', image: '/img/video-player.png' },
    { name: 'Emmanuel', qty: '75', image: '/img/video-player.png' },
    { name: 'Ridwan', qty: '67', image: '/img/video-player.png' },
];

function UserSingleEvaluation() {
    const [showScores, setShowScores] = useState(false);

    return (
        <UserLayout notice={true}>
            {setTitle('My Articles')}
            <div className='flex-1 h-full flex flex-col'>
                <div className='w-full h-16 px-4 flex items-center justify-between xs:pl-4 2xs:pl-4 sm:pl-4 xs:pr-16 2xs:pr-16 sm:pr-16 md:pr-16'>
                    <h2 className='text-xl text-primary-blue font-semibold'>Evaluation</h2>
                    <div className='flex items-center'>
                        <img src='/img/user.png' alt='User Logo' className='w-10 h-10 rounded-full mr-2' />
                        <div>
                            <p className='text-base font-semibold'>Ayodele Tunde</p>
                            <p className='text-xs'>ayodele@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div className='flex-1 h-full px-4 py-2 overflow-y-auto'>
                    <div className='mb-6'>
                        <h2 className='text-xl text-primary-blue font-semibold'>Rhoncus arcu massa.</h2>
                        <p className='text-gray-800 text-base leading-6'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac convallis non
                            pharetra. Pretium tincidunt nunc proin pharetra, posuere blandit quam imperdiet. Nisl ipsum
                            mollis ut nulla lorem. Magna lorem vel at dignissim viverra pharetra. Egestas libero tellus
                            tempus, enim neque. Lobortis non vitae libero, ut. Ut blandit aliquet nunc, molestie
                            imperdiet porttitor sit. Gravida pulvinar bibendum proin ut tincidunt quis leo, pretium,
                            tellus.
                        </p>
                    </div>
                    <div className='w-full bg-white p-6 rounded-sm'>
                        <h4 className='text-lg text-primary-blue font-semibold pb-2 border-solid border-dashboard-main border-b-2 mb-6'>
                            Break Down
                        </h4>
                        <div className='w-full h-full flex justify-between flex-wrap'>
                            <div className='text-primary-red two-card xs:w-full 2xs:w-full sm:w-full md:w-full lg:w-full h-36 bg-secondary-red px-6 py-4 rounded-md flex flex-col justify-between mb-10'>
                                <div className='flex items-center justify-between'>
                                    <p className='text-xl'>Plagiarism</p>
                                    <img src='/icons/plagiarism.svg' alt='Plagiarism' className='w-6 h-6' />
                                </div>
                                <p className='text-5xl font-semibold'>25%</p>
                            </div>
                            <div className='text-primary-green two-card xs:w-full 2xs:w-full sm:w-full md:w-full lg:w-full h-36 bg-secondary-green px-6 py-4 rounded-md flex flex-col justify-between mb-10'>
                                <div className='flex items-center justify-between'>
                                    <p className='text-xl'>Grammar</p>
                                    <img src='/icons/grammar.svg' alt='Grammar' className='w-6 h-6' />
                                </div>
                                <p className='text-5xl font-semibold'>25%</p>
                            </div>
                            <div className='text-primary-blue two-card xs:w-full 2xs:w-full sm:w-full md:w-full lg:w-full h-36 bg-fainth-blue px-6 py-4 rounded-md flex flex-col justify-between xs:mb-10 2xs:mb-10 sm:mb-10 md:mb-10 lg:mb-10'>
                                <div className='flex items-center justify-between'>
                                    <p className='text-xl'>Expert</p>
                                    <img src='/icons/expert.svg' alt='Expert' className='w-6 h-6' />
                                </div>
                                <p className='text-5xl font-semibold'>25%</p>
                            </div>
                            <div className='text-primary-orange two-card xs:w-full 2xs:w-full sm:w-full md:w-full lg:w-full h-36 bg-secondary-orange px-6 py-4 rounded-md flex flex-col justify-between'>
                                <div className='flex items-center justify-between'>
                                    <p className='text-xl'>Votes</p>
                                    <img src='/icons/votes.svg' alt='Votes' className='w-6 h-6' />
                                </div>
                                <p className='text-5xl font-semibold'>25%</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-16 bg-primary-blue text-white px-6 text-xl font-semibold flex items-center justify-between mt-6'>
                        <p>Total</p>
                        <p>85%</p>
                    </div>
                    <button
                        className='w-full hidden mt-6  justify-center text-white bg-primary-blue py-2 rounded-md focus:outline-none xs:flex 2xs:flex sm:flex'
                        onClick={() => setShowScores(true)}>
                        View Scores
                    </button>
                </div>
            </div>
            <div
                className={`h-full w-scores z-50 px-4 py-4 text-white text-sm bg-primary-blue overflow-y-auto xs:absolute 2xs:absolute sm:absolute xs:w-full 2xs:w-full sm:w-full scores-top ${
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
                        <div className='w-full h-12 text-base flex items-center'>
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
        </UserLayout>
    );
}

export default UserSingleEvaluation;
