import React from 'react';

import ExpertLayout from 'layouts/ExpertLayout';
import { setTitle } from 'utils/setTitle';
import { SummaryCard } from 'components';

const list = ['', '', '', ''];

function ExpertSingleArticle() {
    const renderSummary = () => {
        if (!list.length) {
            return <div></div>;
        }

        return list.map((data, index) => (
            <SummaryCard
                key={index}
                image='/icons/user-blue.svg'
                name='Ayodele Tunde'
                email='ayodeletunde04@gmail.com'
                status={index % 2 === 0 ? 'Reviewed' : 'Not-Reviewed'}
                id={index + 1}
            />
        ));
    };

    return (
        <ExpertLayout>
            {setTitle('Expert Article Page')}
            <div className='w-5/6 h-full flex flex-col xs:w-full 2xs:w-full sm:w-full md:w-full lg:w-3/4'>
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
                    <div className='w-full min-h-full rounded-sm bg-white px-24 py-6 xs:px-3 2xs:px-3 sm:px-4 md:px-4 lg:px-8'>
                        <h2 className='text-3xl text-primary-blue font-semibold xs:text-lg 2xs:text-xl sm:text-xl'>
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
                        <div className='w-full text-base text-gray-800 mb-5 leading-6'>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in egestas vel et. Enim sit
                                id id commodo maecenas massa. Tristique quam eu sit eu eget. Velit sed a facilisis
                                purus, cum leo pulvinar facilisi. Venenatis eget pellentesque rhoncus sed tempus
                                malesuada in at. Id fusce ut ligula pellentesque. Vitae vel odio viverra odio tempor
                                tristique ullamcorper pellentesque. Volutpat feugiat lectus ipsum odio suspendisse magna
                                tortor pulvinar. Lobortis massa ornare dignissim lorem a sit.
                            </p>
                        </div>
                        <div className='w-full text-base text-gray-800 px-10 mt-10 flex flex-wrap xs:px-1 2xs:px-2 sm:px-3 md:px-3 lg:px-3'>
                            {renderSummary()}
                        </div>
                    </div>
                </div>
            </div>
        </ExpertLayout>
    );
}

export default ExpertSingleArticle;
