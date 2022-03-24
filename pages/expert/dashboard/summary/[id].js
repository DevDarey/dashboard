import React, { useState } from 'react';

import ExpertLayout from 'layouts/ExpertLayout';
import { setTitle } from 'utils/setTitle';
import { SummaryCard } from 'components';

function ExpertSummaryPage() {
    const [score, setScore] = useState('');

    const handleScore = (e) => {
        e.preventDefault();
        console.log(score);
        setScore('');
    };

    return (
        <ExpertLayout>
            {setTitle('Expert Summary Page')}
            <div className='w-5/6 h-full flex flex-col xs:w-full 2xs:w-full sm:w-full md:w-full lg:w-3/4'>
                <div className='w-full h-16 px-4 flex items-center justify-between xs:pl-4 2xs:pl-4 sm:pl-4 xs:pr-16 2xs:pr-16 sm:pr-16 md:pr-16'>
                    <h2 className='text-xl text-primary-blue font-semibold'>Article Summary</h2>
                    <div className='flex items-center'>
                        <img src='/img/user.png' alt='User Logo' className='w-10 h-10 rounded-full mr-2' />
                        <div>
                            <p className='text-base font-semibold'>Ayodele Tunde</p>
                            <p className='text-xs'>ayodele@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div className='flex-1 h-full px-4 pb-2 overflow-y-auto xs:p-0 2xs:p-0 sm:p-0'>
                    <div className='w-full bg-highlight px-10 pt-10 pb-24 flex items-center xs:flex-col 2xs:flex-col sm:flex-col'>
                        <img src='/icons/user-blue.svg' alt='User' className='w-16 h-16 rounded-full mb-4 mr-4' />
                        <div className='text-primary-blue mb-4'>
                            <p className='mb-2'>
                                <span className='mr-3 text-lg font-semibold'>Name:</span>
                                Emmanuel Obagunwa
                            </p>
                            <p className='mt-2'>
                                <span className='mr-3 text-lg font-semibold'>Email:</span>
                                accessemma12@gmail.com
                            </p>
                        </div>
                    </div>
                    <div className='w-full rounded-sm bg-white px-10 py-6 xs:px-2 2xs:px-2 sm:px-3 md:px-4 lg:px-4'>
                        <h2 className='text-2xl text-primary-blue my-6'>
                            Perform Graphql Mutation And Query On The Same Screen/Page
                        </h2>
                        <p className='text-gray-800 mb-8'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in egestas vel et. Enim sit id
                            id commodo maecenas massa. Tristique quam eu sit eu eget. Velit sed a facilisis purus, cum
                            leo pulvinar facilisi. Venenatis eget pellentesque rhoncus sed tempus malesuada in at. Id
                            fusce ut ligula pellentesque. Vitae vel odio viverra odio tempor tristique ullamcorper
                            pellentesque. Volutpat feugiat lectus ipsum odio suspendisse magna tortor pulvinar. Lobortis
                            massa ornare dignissim lorem a sit.
                        </p>
                        <div className='mb-2 w-80 h-12 text-gray-800 border-solid border-gray-400 rounded-sm border-2 flex items-center xs:w-full 2xs:w-full sm:w-full'>
                            <p className='px-2 text-lg font-semibold w-2/6 border-solid border-gray-400 border-r-2 h-full flex justify-center items-center'>
                                Score
                            </p>
                            <input
                                type='text'
                                value={score}
                                className='w-4/6 px-2 bg-transparent h-full flex items-center focus:outline-none'
                                placeholder='Enter score'
                                onChange={(e) => setScore(e.target.value)}
                            />
                        </div>
                        <p className='text-gray-800 text-sm mb-24'>Note: The score award shouldn’t be more than 35.</p>
                        <button
                            className='text-white bg-primary-blue px-12 py-2 rounded-md focus:outline-none block ml-auto mt-40'
                            onClick={handleScore}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </ExpertLayout>
    );
}

export default ExpertSummaryPage;
