import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';

import AdminLayout from 'layouts/AdminLayout';
import { setTitle } from 'utils/setTitle';

const list = ['', '', '', '', '', '', '', '', ''];

function AdminActivityLog() {
    const handleSubmit = (values, { resetForm, setSubmitting }) => {
        setSubmitting(false);
        console.log(vaues);
        resetForm();
    };

    return (
        <AdminLayout>
            {setTitle('Admin Activity Log')}

            <div className='flex-1 h-full flex flex-col xs:w-full 2xs:w-full sm:w-full md:w-full'>
                <div className='w-full h-16 px-4 flex items-center justify-between xs:pl-4 2xs:pl-4 sm:pl-4 xs:pr-16 2xs:pr-16 sm:pr-16 md:pr-16'>
                    <h2 className='text-xl text-primary-blue font-semibold'>Activity Log</h2>
                    <div className='flex items-center'>
                        <img src='/img/user.png' alt='User Logo' className='w-10 h-10 rounded-full mr-2' />
                        <div>
                            <p className='text-base font-semibold'>Ayodele Tunde</p>
                            <p className='text-xs'>ayodele@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div className='flex-1 h-full px-4 py-2 overflow-y-auto xs:p-0 2xs:p-0'>
                    {list.length ? (
                        <div className='mb-6 w-full min-h-full bg-white px-6 py-6 xs:px-0 2xs:px-0 sm:px-2'>
                            <Formik
                                initialValues={{ search: '', activity: '' }}
                                validationSchema={object().shape({
                                    search: string(),
                                    activity: string(),
                                })}
                                onSubmit={handleSubmit}>
                                {() => (
                                    <Form className='w-full flex py-3 xs:px-2 2xs:px-2 sm:px-2 xs:flex-col 2xs:flex-col sm:flex-col'>
                                        <div className='flex-1 flex items-center h-10 border-solid border-highlight border-2 rounded-md bg-dashboard-main mr-16 xs:w-full 2xs:w-full sm:w-full xs:mx-0 2xs:mx-0 sm:mx-0 xs:mb-2 2xs:mb-2 sm:mb-2 md:mr-6 lg:mr-6'>
                                            <Field
                                                name='search'
                                                type='text'
                                                className=' px-2 flex-1 self-stretch focus:outline-none py-1 mr-2 bg-transparent'
                                            />
                                            <img src='/icons/search.svg' alt='Search' className='w-4 h-4 mr-2' />
                                        </div>

                                        <Field
                                            name='user'
                                            type='text'
                                            as='select'
                                            className='w-56 mr-6 h-10 border-solid border-highlight border-2 rounded-md px-2 bg-dashboard-main focus:outline-none xs:w-full 2xs:w-full sm:w-full xs:mx-0 2xs:mx-0 sm:mx-0 xs:mb-2 2xs:mb-2 sm:mb-2'>
                                            <option value=''>All Activities</option>
                                        </Field>
                                        <button className='px-6 h-10 flex items-center bg-primary-blue text-white rounded-md focus:outline-none xs:w-full 2xs:w-full sm:w-full'>
                                            FILTER
                                        </button>
                                    </Form>
                                )}
                            </Formik>
                            <table className='w-full px-4'>
                                <thead className='w-full'>
                                    <tr className='w-full text-left uppercase bg-dashboard-main'>
                                        <th className='w-1/5 h-10 pl-4 pr-2 border-solid border-highlight border-b-2 xs:hidden 2xs:hidden sm:hidden'>
                                            Date/Time
                                        </th>
                                        <th className='w-1/5 h-10 px-2 border-solid border-highlight border-b-2 xs:pl-2 2xs:pl-2 sm:pl-2 xs:pr-1 2xs:pr-1 sm:pr-1 xs:w-2/5 2xs:w-2/5 sm:w-2/5'>
                                            Action
                                        </th>
                                        <th className='w-3/5 h-10 pl-2 pr-4 border-solid border-highlight border-b-2'>
                                            Description
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {list.map((summary, index) => (
                                        <tr className='w-full text-left' key={index}>
                                            <td className='w-1/5 h-10 pl-4 pr-2 border-solid border-highlight border-b-2 xs:hidden 2xs:hidden sm:hidden'>
                                                Dec 17, 2021 10am
                                            </td>
                                            <td className='w-1/5 h-10 px-2 border-solid border-highlight border-b-2 xs:pl-2 2xs:pl-2 sm:pl-2 xs:pr-1 2xs:pr-1 sm:pr-1 xs:w-2/5 2xs:w-2/5 sm:w-2/5'>
                                                {index % 2 === 0
                                                    ? 'Article Publish'
                                                    : index % 3 === 0
                                                    ? 'New User'
                                                    : 'Article Editing'}
                                            </td>
                                            <td className='w-3/5 h-10 pl-2 pr-4 border-solid border-highlight border-b-2 leading-4 xs:pl-1 2xs:pl-1 sm:pl-1 xs:pr-2 2xs:pr-2 sm:pr-2'>
                                                Perform Graphql Mutation And Query On The Same Screen/Page
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className='mb-6 w-full min-h-full bg-white flex flex-col justify-center items-center py-6'>
                            <img src='/img/empty-logo.png' alt='Empty Logo' className='w-24 h-24 mb-6' />
                            <p className='text-gray-400 text-xl mb-10'>NO ACTIVITY</p>
                        </div>
                    )}
                </div>
            </div>
        </AdminLayout>
    );
}

export default AdminActivityLog;
