import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import Router from 'next/router';

import AdminLayout from 'layouts/AdminLayout';
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

function AdminArticles() {
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
                url='/admin/articles'
            />
        ));
    };

    const filterArticles = (values) => {
        console.log(values);
    };

    return (
        <AdminLayout>
            {setTitle('Admin Articles')}
            <div className='w-5/6 h-full flex flex-col xs:w-full 2xs:w-full sm:w-full md:w-full lg:w-3/4'>
                <div className='flex items-center ml-auto pr-10 pt-4 xs:pl-4 2xs:pl-4 sm:pl-4 xs:pr-16 2xs:pr-16 sm:pr-16 md:pr-16'>
                    <img src='/img/user.png' alt='User Logo' className='w-10 h-10 rounded-full mr-2' />
                    <div>
                        <p className='text-base font-semibold'>Ayodele Tunde</p>
                        <p className='text-xs'>ayodele@gmail.com</p>
                    </div>
                </div>
                <div className='w-full h-16 px-4 flex items-center justify-between'>
                    <h2 className='text-xl text-primary-blue font-semibold'>Articles</h2>
                    <button
                        className='text-white bg-primary-blue px-10 mr-2 py-2 rounded-md focus:outline-none xs:px-4 2xs:px-4 sm:px-5 xs:mr-12 2xs:mr-12 sm:mr-12 md:mr-12'
                        onClick={() => Router.push('/admin/articles/create')}>
                        CREATE POST
                    </button>
                </div>

                <div className='flex-1 h-full px-4 py-2 overflow-y-auto xs:p-0 2xs:p-0 sm:p-0'>
                    <div className='w-full min-h-full bg-white px-4 py-2 rounded-sm'>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={filterArticles}>
                            {() => (
                                <Form className='flex mb-10 xs:flex-col 2xs:flex-col sm:flex-col'>
                                    <div className='flex-1 flex items-center h-10 px-2 mr-12 rounded-md bg-dashboard-main border-solid border-dashboard-main border-2 text-sm xs:mx-0 2xs:mx-0 sm:mx-0 xs:mb-3 2xs:mb-3 sm:mb-3 xs:w-full 2xs:w-full sm:w-full md:mr-3 lg:mr-3'>
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
                                        as='select'
                                        className='h-10 w-40 px-2 rounded-md bg-dashboard-main border-solid border-dashboard-main border-2 text-sm mr-3 focus:outline-none xs:mx-0 2xs:mx-0 sm:mx-0 xs:mb-3 2xs:mb-3 sm:mb-3 xs:w-full 2xs:w-full sm:w-full'>
                                        <option value=''>Programming</option>
                                    </Field>
                                    <Field
                                        name='category'
                                        type='text'
                                        as='select'
                                        className='h-10 w-40 px-2 rounded-md bg-dashboard-main border-solid border-dashboard-main border-2 text-sm mr-3 focus:outline-none xs:mx-0 2xs:mx-0 sm:mx-0 xs:mb-3 2xs:mb-3 sm:mb-3 xs:w-full 2xs:w-full sm:w-full'>
                                        <option value=''>Textual</option>
                                    </Field>
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
        </AdminLayout>
    );
}

export default AdminArticles;
