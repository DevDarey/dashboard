import { useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';

import { Header } from 'components';

const ArticlePage = () => {
    const [islogin, setLogin] = useState('false');
    return (
        <>
            <img
                className=' hidden ml-auto mt-2 mr-2 bg-primary rounded-md outline-none xs:block 2xs:block'
                src='/icons/hamburger.svg'
            />
            <div className='mx-20  my-8 xs:my-4 2xs:my-4 sm:my-4 xs:mx-4 '>
                <h1 className=' font-bold text-4xl'>Quartenion</h1>
                <Link href='/edit-article'>
                    <img src='/icons/back.svg' className='mt-14 cursor-pointer' />
                </Link>
                <div className='ml-4 xs:ml-0'>
                    <div className='text-primary text-2xl font-bold  '>
                        Perform Graphql Mutation And Query On The Same Screen/Page
                    </div>
                    <div className='flex items-center xs:text-md  '>
                        <img className='mr-2' src='/icons/history.svg' />
                        <p className='mr-4 xs:text-md'>Posted on:Feb 2, 2021</p>
                        <img className='mr-2' src='/icons/history.svg' />
                        <p className='mr-4 xs:text-md'>Deadline:Feb 2, 2021</p>
                    </div>
                    <div>
                        <p className='text-base leading-8'>
                            GraqhQL has been an amazing technology provided by Facebook. It simplifies the client
                            consumption of information provided by the server in an incredible way. GraphQL gives
                            clients the power to ask for exactly what they need and nothing more, makes it easier to
                            evolve APIs over time, and enables powerful developer tools. We at Herlabytes has adopted
                            the cutting-edge technology and implementing it into all of our mobile application, web
                            application, personal website and also our server deployment. This has really enable us to
                            deliver our services on time and also satisfy our customers’ demand. Recently, we were
                            working on an enterprise mobile application for a client and there is need to perform a
                            query (fetch data from the server) on screen (mobile application screen) and also to perform
                            another mutation (modify information on the server) operation on the same screen. For
                            example, fetch all users form the server and update their registration/administration
                            status. I was confused on how to accomplish the feature with what I’ve known about GraphQL
                            and the information on their documentation. I’ve not seen anywhere in the documentation
                            where they combine mutation and query operation together. The only example I can find is
                            about multiple query operation which is not the operation I want to implement. I checked
                            everywhere on the internet for resource but can’t find much information about it. Finally, I
                            take up the challenge to combine the Apollo GraphQL Higher Order Component (HOC) and the new
                            Query Component provided by the Apollo GraphQL Version 2.1 release to implement that
                            feature. To my ultimate surprise. It works! :D Here are the steps I followed to make it work
                            perfectly as I wanted. Implement The Query Operation With The New Query Component From
                            Apollo Use the Query Component from Apollo GraphQL to create a query operation and display
                            the information on the page. This is similar to using the Higher Order Component. Just that
                            the Query Component make it easier to reason about. The code below shows how to go about it.
                        </p>
                        <p>
                            At mauris diam neque massa. Malesuada velit diam, aliquam amet, bibendum facilisis est nec.
                            Ac vestibulum, nulla gravida facilisi nunc urna rhoncus, quis sit. Nam commodo placerat
                            gravida lacus. Eget vel vitae urna gravida lorem malesuada cursus quam neque. Amet nulla sit
                            risus, tortor morbi vel, imperdiet. Dignissim tellus augue ultricies in ac tortor. Nec ac
                            velit, scelerisque elementum.
                        </p>
                    </div>
                    {!islogin ? (
                        <>
                            <div className='mt-10'>
                                <h1 className='font-bold text-4xl text-primary'>Summarise the article</h1>
                            </div>
                            <div className='text-2xl mt-2'>Give a summary of this article in the text area below</div>
                            <div>
                                <p className='text-sm'>
                                    Note: You are not eligible for any reward if you do not have active paid
                                    subscription
                                </p>
                            </div>
                            <div className='w-1/2 xs:w-full my-5'>
                                <div className=' '>
                                    <textarea
                                        className='  w-full h-40 px-4 py-2 round-md border-solid border-2 border-gray-300'
                                        placeholder='Enter  Summary here'></textarea>
                                </div>
                                <div className='flex justify-end xs:justify-center'>
                                    <button className='bg-primary text-white mt-10 py-2 px-20 rounded-md '>
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className='mt-40 '>
                            <div className='flex flex-col justify-center items-center'>
                                <div className='bg-gray-300 rounded-full h-24 w-24 flex items-center justify-center bg-opacity-25 '>
                                    <img
                                        src='/icons/warning.svg'
                                        className='h-14 w-14 p-2 border-2 border-solid border-gray-400 rounded-md '
                                        style={{ backgroundColor: '#FFE58A' }}
                                    />
                                </div>

                                <h1 className='mt-10 '>Login to summarize</h1>
                                <p className='mt-10 text-center'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
                                    <br /> vulputate bibendum in vel posuere. Facilisis bibendum lectus
                                    <br /> nunc est sed risus.
                                </p>
                                <button
                                    className='text-white bg-primary rounded-md text-center px-20 py-2 mt-10 focus:outline-none'
                                    onClick={() => Router.push('/signin')}>
                                    Login
                                </button>
                            </div>
                            <div></div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default ArticlePage;
