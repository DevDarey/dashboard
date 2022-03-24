import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';

import UserLayout from 'layouts/UserLayout';
import { setTitle } from 'utils/setTitle';
import { ArticleCard } from 'components';

const list = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];

const initialValues = {
    search: '',
    type: '',
    category: '',
};

const validationSchema = object().shape({
    search: string(),
    type: string(),
    category: string(),
});

function UserDashboard() {
    const [notice, setNotice] = useState(true);

    const renderArticles = () => {
        if (!list.length) {
            return <div className='text-2xl justify-self-center'>No Article Available</div>;
        }

        return list.map((article, index) => (
            <ArticleCard
                id={index + 1}
                title='Rhoncus arcu massa.'
                excerpt='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae amet, enim consectetur sagittis
                        vitae. Amet nascetur eu, iaculis ullamcorper fermentum aliquam..'
                video={index % 2 !== 0 ? '/img/video-player.png' : false}
                key={index}
                url='/user/dashboard'
            />
        ));
    };

    const filterArticles = (values) => {
        console.log(values);
    };

    return (
        <UserLayout>
            {setTitle('All Articles')}
            <div className='w-5/6 h-full flex flex-col xs:w-full 2xs:w-full md:w-full lg:w-3/4'>
                {notice ? (
                    <div className='w-full h-16 bg-primary-blue sticky top-0 left-0 flex items-center text-white text-sm px-4 xs:flex-col xs:justify-between 2xs:flex-col 2xs:justify-between md:flex-col sm:justify-between xs:h-36 2xs:h-36 sm:h-36 md:h-36 xs:py-2 2xs:py-2 sm:py-2'>
                        <p className='w-3/4 mr-2 xs:mr-0 2xs:mr-0 sm:mr-0 xs:pr-12 2xs:pr-12 sm:pr-12 md:pr-12 md:pt-3 xs:w-full 2xs:w-full sm:w-full md:w-full'>
                            Finish your account set up in order to to select a paid plan and unlock the full potential
                            of the full articles
                        </p>
                        <div className='flex-1 h-full flex items-center xs:justify-center 2xs:items-center sm:justify-center md:justify-center'>
                            <button className='bg-white rounded-sm px-8 py-2 lg:px-2 text-primary-blue font-semibold focus:outline-none'>
                                Let's Go
                            </button>
                            <a
                                className='cursor-pointer border-solid border-white border-b-2 ml-2'
                                onClick={() => setNotice(false)}>
                                Remind me later
                            </a>
                        </div>
                    </div>
                ) : (
                    <div className='w-full h-16 px-4 flex items-center justify-between xs:pl-4 2xs:pl-4 sm:pl-4 xs:pr-16 2xs:pr-16 sm:pr-16 md:pr-16'>
                        <h2 className='text-xl text-primary-blue font-semibold'>All Articles</h2>
                        <div className='flex items-center'>
                            <img src='/img/user.png' alt='User Logo' className='w-10 h-10 rounded-full mr-2' />
                            <div>
                                <p className='text-base font-semibold'>Ayodele Tunde</p>
                                <p className='text-xs'>ayodele@gmail.com</p>
                            </div>
                        </div>
                    </div>
                )}

                <div className='flex-1 h-full px-4 py-2 overflow-y-auto xs:px-0 xs:py-0 2xs:px-0 2xs:py-0 sm:px-0 sm:py-0'>
                    <div className='w-full min-h-full bg-white px-4 py-2 rounded-sm'>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={filterArticles}>
                            {() => (
                                <Form className='flex xs:flex-col 2xs:flex-col mb-10'>
                                    <div className='flex-1 flex items-center h-10 px-2 mr-12 xs:mr-0 2xs:mr-0 sm:mr-3 lg:mr-3 xs:w-full 2xs:w-full xs:mb-2 2xs:mb-2 rounded-md bg-dashboard-main border-solid border-dashboard-main border-2 text-sm'>
                                        <Field
                                            name='search'
                                            className='flex-1 bg-transparent self-stretch focus:outline-none'
                                            type='text'
                                            placeholder='Search'
                                        />
                                        <img src='/icons/search.svg' alt='Search' className='w-4 h-4' />
                                    </div>
                                    <Field
                                        name='type'
                                        type='text'
                                        placeholder='Programming'
                                        className='h-10 w-40 px-2 rounded-md bg-dashboard-main border-solid border-dashboard-main border-2 text-sm mr-3 xs:mr-0 2xs:mr-0 xs:w-full 2xs:w-full xs:mb-2 2xs:mb-2 focus:outline-none'
                                    />
                                    <Field
                                        name='category'
                                        type='text'
                                        placeholder='Textual'
                                        className='h-10 w-40 px-2 rounded-md bg-dashboard-main border-solid border-dashboard-main border-2 text-sm mr-3 xs:mr-0 2xs:mr-0 xs:w-full 2xs:w-full xs:mb-2 2xs:mb-2 focus:outline-none'
                                    />
                                    <button className='flex items-center justify-center text-white bg-primary-blue h-10 w-24 xs:w-full 2xs:w-full focus:outline-none rounded-md'>
                                        FILTER
                                    </button>
                                </Form>
                            )}
                        </Formik>

                        <div className='w-full h-full flex flex-wrap sm:justify-between md:justify-between lg:justify-between'>
                            {renderArticles()}
                        </div>
                    </div>
                </div>
            </div>
        </UserLayout>
    );
}

export default UserDashboard;
