import React, { useState } from 'react';
import { useRouter } from 'next/router';

import UserLayout from 'layouts/UserLayout';
import { setTitle } from 'utils/setTitle';

function MySingleArticle() {
    const { type } = useRouter().query;
    const [summary, setSummary] = useState('');
    const [audioSummary, setAudioSummary] = useState('');
    const [showAudio, setShowAudio] = useState(true);

    const handleSummary = (e) => {
        e.preventDefault();
        console.log(summary);
        setSummary('');
    };

    const handleAudioSummary = (e) => {
        e.preventDefault();
        console.log(audioSummary);
        setAudioSummary('');
    };

    return (
        <UserLayout>
            {setTitle('My Article Page')}
            {type === 'text' ? (
                <div className='w-5/6 h-full flex flex-col xs:w-full 2xs:w-full sm:w-full md:w-full lg:w-3/4'>
                    <div className='w-full h-16 px-4 flex items-center justify-between xs:pl-4 2xs:pl-4 sm:pl-4 xs:pr-16 2xs:pr-16 sm:pr-16 md:pr-16'>
                        <h2 className='text-xl text-primary-blue font-semibold'>My Article / Text</h2>
                        <div className='flex items-center'>
                            <img src='/img/user.png' alt='User Logo' className='w-10 h-10 rounded-full mr-2' />
                            <div>
                                <p className='text-base font-semibold'>Ayodele Tunde</p>
                                <p className='text-xs'>ayodele@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex-1 h-full px-4 py-2 overflow-y-auto xs:p-0 2xs:p-0 sm:p-0 md:px-2'>
                        <div className='w-full min-h-full rounded-sm bg-white px-24 py-6 xs:px-4 2xs:px-4 sm:px-4 md:px-6 lg:px-6'>
                            <h2 className='text-3xl text-primary-blue font-semibold xs:text-lg 2xs:text-xl sm:text-xl'>
                                Perform Graphql Mutation And Query <br />
                                On The Same Screen/Page
                            </h2>
                            <div className='flex py-6 xs:flex-col 2xs:flex-col'>
                                <p className='text-base text-secondary-blue mr-10 flex'>
                                    <img
                                        src='/icons/history-secondary.svg'
                                        alt='History Icon'
                                        className='w-6 h-6 mr-2'
                                    />{' '}
                                    Posted on: Feb 2, 2021
                                </p>
                                <p className='text-base text-primary-blue flex'>
                                    <img src='/icons/history-primary.svg' alt='History Icon' className='w-6 h-6 mr-2' />{' '}
                                    Deadline: Feb 7, 2021
                                </p>
                            </div>
                            <div className='w-full text-base text-gray-800 leading-6'>
                                <p>
                                    GraqhQL has been an amazing technology provided by Facebook. It simplifies the
                                    client consumption of information provided by the server in an incredible way.
                                    GraphQL gives clients the power to ask for exactly what they need and nothing more,
                                    makes it easier to evolve APIs over time, and enables powerful developer tools.
                                </p>
                                <br />
                                <p>
                                    We at Herlabytes has adopted the cutting-edge technology and implementing it into
                                    all of our mobile application, web application, personal website and also our server
                                    deployment. This has really enable us to deliver our services on time and also
                                    satisfy our customers’ demand.
                                </p>
                                <br />
                                <p>
                                    Recently, we were working on an enterprise mobile application for a client and there
                                    is need to perform a query (fetch data from the server) on screen (mobile
                                    application screen) and also to perform another mutation (modify information on the
                                    server) operation on the same screen. For example, fetch all users form the server
                                    and update their registration/administration status.
                                </p>
                                <br />
                                <p>
                                    I was confused on how to accomplish the feature with what I’ve known about GraphQL
                                    and the information on their documentation. I’ve not seen anywhere in the
                                    documentation where they combine mutation and query operation together. The only
                                    example I can find is about multiple query operation which is not the operation I
                                    want to implement. I checked everywhere on the internet for resource but can’t find
                                    much information about it.
                                </p>
                                <br />
                                <p>
                                    Finally, I take up the challenge to combine the Apollo GraphQL Higher Order
                                    Component (HOC) and the new Query Component provided by the Apollo GraphQL Version
                                    2.1 release to implement that feature. To my ultimate surprise. It works! :D Here
                                    are the steps I followed to make it work perfectly as I wanted. Implement The Query
                                    Operation With The New Query Component From Apollo Use the Query Component from
                                    Apollo GraphQL to create a query operation and display the information on the page.
                                    This is similar to using the Higher Order Component. Just that the Query Component
                                    make it easier to reason about. The code below shows how to go about it.
                                </p>
                            </div>
                            <div className='w-full py-2 flex items-center mt-10 xs:flex-col 2xs:flex-col sm:flex-col xs:items-start 2xs:items-start sm:items-start'>
                                <img
                                    src='/icons/note-icon.svg'
                                    alt='Notice Icon'
                                    className='w-12 h-12 mr-3 xs:mb-3 2xs:mb-3 sm:mb-3'
                                />
                                <div className='flex-1 text-gray-800 text-base xs:mb-2 2xs:mb-2 sm:mb-2'>
                                    <p>Note:</p>
                                    <p>
                                        You are not eligible for any reward if you do not have active paid subscription
                                    </p>
                                </div>
                                <p className='text-base text-primary-blue ml-3 xs:ml-0 2xs:ml-0 sm:ml-0'>
                                    Summary words: 50/200
                                </p>
                            </div>
                            <form className='flex flex-col' onSubmit={handleSummary}>
                                <textarea
                                    className='w-full h-80 text-gray-800 rounded-sm focus:outline-none px-4 py-3 border-solid border-dashboard-main border-2 xs:h-48 2xs:h-48 sm:h-56 md:h-64 lg:h-64'
                                    placeholder='Enter summary here..'
                                    onChange={(e) => setSummary(e.target.value)}
                                    value={summary}
                                />
                                <button
                                    type='submit'
                                    className='text-white self-end bg-primary-blue text-base py-2 px-16 rounded-md mt-6 focus:outline-none xs:px-6 2xs:px-6 sm:px-8 md:px-8 lg:px-8 xs:mt-3 2xs:mt-3 sm:mt-3 md:mt-4 lg:mt-4'>
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='w-5/6 h-full flex flex-col xs:w-full 2xs:w-full sm:w-full md:w-full lg:w-3/4'>
                    <div className='w-full h-16 px-4 flex items-center justify-between'>
                        <h2 className='text-xl text-primary-blue font-semibold'>My Article / Video</h2>
                        <div className='flex items-center'>
                            <img src='/img/user.png' alt='User Logo' className='w-10 h-10 rounded-full mr-2' />
                            <div>
                                <p className='text-base font-semibold'>Ayodele Tunde</p>
                                <p className='text-xs'>ayodele@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex-1 h-full px-4 py-2 overflow-y-auto xs:p-0 2xs:p-0 sm:p-0'>
                        <div className='w-full min-h-full rounded-sm bg-white px-6 py-4 xs:p-2 2xs:p-2 sm:p-2 md:px-3 lg:px-3'>
                            <img src='/img/video-player-big.png' alt='Big Video Player' className='w-full h-2/4' />
                            <h2 className='text-primary-blue text-3xl font-medium mt-8 mb-4 xs:mt-4 2xs:mt-4 sm:mt-4 md:mt-5 xs:text-lg 2xs:text-xl sm:text-xl md:text-2xl lg:text-2xl xs:mb-2 2xs:mb-2 sm:mb-2 md:mb-2 lg:mb-3'>
                                AI is Only Going to Get Smarter
                            </h2>
                            <p className='text-lg xs:text-base 2xs:text-base sm:text-base text-gray-800 mb-10'>
                                AI as Augmentative Intelligence utilizing machine learning, algorithms, and rich data to
                                augment the capabilities of humans and businesses could be soon an illusion.
                            </p>
                            {showAudio ? (
                                <div className='w-full bg-dashboard-main flex flex-col rounded-sm'>
                                    <div className='w-1/2 h-12 bg-highlight flex text-lg cursor-pointer xs:w-full 2xs:w-full'>
                                        <p
                                            className='w-1/2 h-full bg-primary-blue flex items-center justify-center text-white'
                                            onClick={() => setShowAudio(true)}>
                                            Audio
                                        </p>
                                        <p
                                            className='w-1/2 h-full flex items-center justify-center text-primary-blue'
                                            onClick={() => setShowAudio(false)}>
                                            Textual
                                        </p>
                                    </div>
                                    <div className='w-full flex-1'>
                                        <div className='w-2/5 flex mx-auto flex-col items-center py-10 xs:w-full 2xs:w-full sm:w-3/5 xs:px-3 2xs:px-4 xs:py-4 2xs:py-4 sm:py-4 md:py-5 lg:py-6'>
                                            <img src='/icons/mic.svg' alt='Recorder' className='w-16 h-24' />
                                            <button className='w-full py-3 rounded-md text-white focus:outline-none text-center bg-primary-green my-8'>
                                                START
                                            </button>
                                            <p className='text-gray-400'>Accepted Format:Mp 3,Wav,AAC (up to 4mb)</p>
                                            <button className='w-full py-3 rounded-md text-white focus:outline-none text-center bg-primary-blue my-3'>
                                                UPLOAD
                                            </button>
                                            <h4 className='text-lg font-medium mb-2 mt-4 text-gray-700'>NOTE:</h4>
                                            <p className='text-base text-gray-400 text-center leading-6'>
                                                Summarize in audio by clicking the START button or UPLOAD button to
                                                upload from your device
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className='w-full bg-dashboard-main flex flex-col rounded-sm'>
                                    <div className='w-1/2 h-12 bg-highlight flex text-lg cursor-pointer'>
                                        <p
                                            className='w-1/2 h-full flex items-center justify-center text-primary-blue'
                                            onClick={() => setShowAudio(true)}>
                                            Audio
                                        </p>
                                        <p
                                            className='w-1/2 h-full flex items-center justify-center text-white  bg-primary-blue'
                                            onClick={() => setShowAudio(false)}>
                                            Textual
                                        </p>
                                    </div>
                                    <div className='w-full flex-1 px-16 py-8'>
                                        <form className='w-full flex flex-col' onSubmit={handleAudioSummary}>
                                            <textarea
                                                className='w-full h-96 px-6 py-4 rounded-md text-gray-800 bg-transparent border-solid border-gray-300 border-2 focus:outline-none mb-5'
                                                placeholder='Enter your summary here...'
                                                value={audioSummary}
                                                onChange={(e) => setAudioSummary(e.target.value)}
                                            />
                                            <button
                                                className='self-end px-12 py-2 rounded-md bg-primary-blue text-white focus:outline-none'
                                                type='submit'>
                                                Submit
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </UserLayout>
    );
}

export default MySingleArticle;
