import React from 'react';
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

function UserMyArticles() {
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
                url='/user/my-articles'
            />
        ));
    };

    const filterArticles = (values) => {
        console.log(values);
    };

    return (
        <UserLayout>
            {setTitle('My Articles')}
            <div className='w-5/6 h-full flex flex-col xs:w-full 2xs:w-full sm:w-full md:w-full lg:w-3/4'>
                <div className='w-full h-16 px-4 flex items-center justify-between xs:pl-4 2xs:pl-4 sm:pl-4 xs:pr-16 2xs:pr-16 sm:pr-16 md:pr-16'>
                    <h2 className='text-xl text-primary-blue font-semibold'>My Articles</h2>
                    <div className='flex items-center'>
                        <img src='/img/user.png' alt='User Logo' className='w-10 h-10 rounded-full mr-2' />
                        <div>
                            <p className='text-base font-semibold'>Ayodele Tunde</p>
                            <p className='text-xs'>ayodele@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div className='flex-1 h-full px-4 py-2 overflow-y-auto xs:p-0 2xs:p-0 sm:p-0'>
                    <div className='w-full min-h-full bg-white px-4 py-2 rounded-sm'>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={filterArticles}>
                            {() => (
                                <Form className='flex mb-10 xs:flex-col 2xs:flex-col sm:flex-col'>
                                    <div className='flex-1 flex items-center h-10 px-2 mr-12 rounded-md bg-dashboard-main border-solid border-dashboard-main border-2 text-sm xs:w-full xs:mr-0 2xs:w-full 2xs:mr-0 sm:w-full sm:mr-0 xs:mb-2 2xs:mb-2 sm:mb-2 md:mr-3 lg:mr-3'>
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
                                        className='h-10 w-40 px-2 rounded-md bg-dashboard-main border-solid border-dashboard-main border-2 text-sm mr-3 focus:outline-none xs:w-full xs:mr-0 2xs:w-full 2xs:mr-0 sm:w-full sm:mr-0 xs:mb-2 2xs:mb-2 sm:mb-2'
                                    />
                                    <Field
                                        name='category'
                                        type='text'
                                        placeholder='Textual'
                                        className='h-10 w-40 px-2 rounded-md bg-dashboard-main border-solid border-dashboard-main border-2 text-sm mr-3 focus:outline-none xs:w-full xs:mr-0 2xs:w-full 2xs:mr-0 sm:w-full sm:mr-0 xs:mb-2 2xs:mb-2 sm:mb-2'
                                    />
                                    <button className='flex items-center justify-center text-white bg-primary-blue h-10 w-24 focus:outline-none rounded-md xs:w-full 2xs:w-full sm:w-full'>
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

export default UserMyArticles;
