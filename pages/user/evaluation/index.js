import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';

import UserLayout from 'layouts/UserLayout';
import { setTitle } from 'utils/setTitle';
import { EvaluationCard } from 'components';

const list = ['', '', '', '', '', '', '', '', '', '', ''];

function UserEvaluation() {
    const renderEvaluations = () => {
        if (!list.length) {
            return <div className='text-2xl justify-self-center'>No Evaluation Available</div>;
        }

        return list.map((article, index) => (
            <EvaluationCard
                id={index + 1}
                title='Rhoncus arcu massa.'
                excerpt='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae amet, enim consectetur sagittis
                        vitae. Amet nascetur eu, iaculis ullamcorper fermentum aliquam..'
                image={index % 2 !== 0 ? '/img/video-player.png' : false}
                key={index}
            />
        ));
    };

    return (
        <UserLayout>
            {setTitle('My Articles')}
            <div className='w-5/6 h-full flex flex-col xs:w-full 2xs:w-full sm:w-full md:w-full'>
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

                <div className='flex-1 h-full px-4 py-2 overflow-y-auto xs:p-0 2xs:p-0 sm:p-0'>
                    <div className='w-full min-h-full bg-white px-4 py-2 rounded-sm xs:p-2 2xs:p-2 sm:p-2'>
                        <div className='w-full h-full flex flex-wrap sm:justify-between md:justify-between lg:justify-between'>
                            {renderEvaluations()}
                        </div>
                    </div>
                </div>
            </div>
        </UserLayout>
    );
}

export default UserEvaluation;
