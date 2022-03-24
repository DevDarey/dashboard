import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';

import AdminLayout from 'layouts/AdminLayout';
import { setTitle } from 'utils/setTitle';

function AdminSettings() {
    return (
        <AdminLayout>
            {setTitle('Admin Settings')}

            <div className='flex-1 h-full flex flex-col xs:w-full 2xs:w-full sm:w-full md:w-full'>
                <div className='w-full h-16 px-4 flex items-center justify-between xs:pl-4 2xs:pl-4 sm:pl-4 xs:pr-16 2xs:pr-16 sm:pr-16 md:pr-16'>
                    <h2 className='text-xl text-primary-blue font-semibold'>Settings</h2>
                    <div className='flex items-center'>
                        <img src='/img/user.png' alt='User Logo' className='w-10 h-10 rounded-full mr-2' />
                        <div>
                            <p className='text-base font-semibold'>Ayodele Tunde</p>
                            <p className='text-xs'>ayodele@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div className='flex-1 w-full flex justify-between overflow-y-auto mb-6 xs:flex-col 2xs:flex-col sm:flex-col'>
                    <div className='w-two-card h-full pl-8 py-2 xs:mb-6 2xs:mb-6 sm:mb-6 xs:w-full 2xs:w-full sm:w-full xs:p-2 2xs:p-2 sm:p-2 md:p-2 lg:p-2'>
                        <Formik
                            initialValues={{ monthly: '', yearly: '', lifeTime: '' }}
                            validationSchema={object().shape({
                                monthly: string().required('Monthly price is required'),
                                yearly: string().required('Yearly price is required'),
                                lifeTime: string().required('Life time price is required'),
                            })}
                            onSubmit={(values, { setSubmitting }) => {
                                setTimeout(() => {
                                    setSubmitting(false);
                                    console.log(values);
                                }, 2000);
                            }}>
                            {({ isSubmitting }) => (
                                <Form className='mb-6 w-full rounded-md'>
                                    <div className='w-full h-12 flex items-center px-4 bg-highlight border-solid border-highlight border-b-2'>
                                        <h2 className='text-primary-blue text-xl'>Price Setting</h2>
                                    </div>
                                    <div className='w-full px-4 py-6 bg-white xs:px-2 2xs:px-2 sm:px-2'>
                                        <div className='flex items-center justify-between xs:flex-col 2xs:flex-col sm:flex-col md:flex-col lg:flex-col xs:items-start 2xs:items-start sm:items-start md:items-start lg:items-start'>
                                            <p className='text-primary-blue text-lg mr-3'>Monthly</p>
                                            <div className='bg-dashboard-main w-72 h-10 border-solid border-dashboard-main border-2 flex rounded-sm xs:w-full 2xs:w-full sm:w-full md:w-full lg:w-full'>
                                                <img
                                                    src='/icons/naira.svg'
                                                    alt='Naira'
                                                    className='w-4 h-4 self-center mx-4'
                                                />

                                                <Field
                                                    type='text'
                                                    name='monthly'
                                                    className='flex-1 bg-white rounded-sm px-2 focus:outline-none'
                                                />
                                            </div>
                                        </div>
                                        <ErrorMessage name='monthly' component='p' className='text-error-red text-sm' />
                                        <div className='flex items-center justify-between mt-8 xs:flex-col 2xs:flex-col sm:flex-col md:flex-col lg:flex-col xs:items-start 2xs:items-start sm:items-start md:items-start lg:items-start'>
                                            <p className='text-primary-blue text-lg mr-3'>Yearly</p>
                                            <div className='bg-dashboard-main w-72 h-10 border-solid border-dashboard-main border-2 flex rounded-sm xs:w-full 2xs:w-full sm:w-full md:w-full lg:w-full'>
                                                <img
                                                    src='/icons/naira.svg'
                                                    alt='Naira'
                                                    className='w-4 h-4 self-center mx-4'
                                                />

                                                <Field
                                                    type='text'
                                                    name='yearly'
                                                    className='flex-1 bg-white rounded-sm px-2 focus:outline-none'
                                                />
                                            </div>
                                        </div>
                                        <ErrorMessage name='yearly' component='p' className='text-error-red text-sm' />
                                        <div className='flex items-center justify-between mt-8 xs:flex-col 2xs:flex-col sm:flex-col md:flex-col lg:flex-col xs:items-start 2xs:items-start sm:items-start md:items-start lg:items-start'>
                                            <p className='text-primary-blue text-lg mr-3'>Life Time</p>
                                            <div className='bg-dashboard-main w-72 h-10 border-solid border-dashboard-main border-2 flex rounded-sm xs:w-full 2xs:w-full sm:w-full md:w-full lg:w-full'>
                                                <img
                                                    src='/icons/naira.svg'
                                                    alt='Naira'
                                                    className='w-4 h-4 self-center mx-4'
                                                />

                                                <Field
                                                    type='text'
                                                    name='lifeTime'
                                                    className='flex-1 bg-white rounded-sm px-2 focus:outline-none'
                                                />
                                            </div>
                                        </div>
                                        <ErrorMessage
                                            name='lifeTime'
                                            component='p'
                                            className='text-error-red text-sm'
                                        />
                                    </div>
                                    <div className='w-full h-12 flex items-center bg-highlight justify-end px-4 border-solid border-highlight border-t-2'>
                                        <button
                                            className='rounded-md bg-white text-primary-blue px-6 py-2 text-sm focus:outline-none'
                                            disabled={isSubmitting}>
                                            {isSubmitting ? 'Saving...' : 'Save'}
                                        </button>
                                    </div>
                                </Form>
                            )}
                        </Formik>

                        <Formik
                            initialValues={{ price: '', instruction: '' }}
                            validationSchema={object().shape({
                                price: string().required('Price is required'),
                                instruction: string().required('Instruction is required'),
                            })}
                            onSubmit={(values, { setSubmitting }) => {
                                setTimeout(() => {
                                    setSubmitting(false);
                                    console.log(values);
                                }, 2000);
                            }}>
                            {({ isSubmitting }) => (
                                <Form className='mb-6 w-full rounded-md'>
                                    <div className='w-full h-12 flex items-center px-4 bg-highlight border-solid border-highlight border-b-2'>
                                        <h2 className='text-primary-blue text-xl'>Article Setting</h2>
                                    </div>
                                    <div className='w-full px-4 py-6 bg-white xs:px-2 2xs:px-2 sm:px-2'>
                                        <div className='w-full mb-6'>
                                            <h2 className='text-lg text-primary-blue mb-2'>Article Prize</h2>
                                            <Field
                                                type='text'
                                                as='textarea'
                                                placeholder='Enter Article prize message....'
                                                name='price'
                                                className='w-full h-40 border-solid border-dashboard-main border-2 rounded-md text-gray-800 p-2 focus:outline-none'
                                            />
                                            <ErrorMessage
                                                name='price'
                                                component='p'
                                                className='text-error-red text-sm'
                                            />
                                        </div>
                                        <div className='w-full mb-6'>
                                            <h2 className='text-lg text-primary-blue mb-2'>Article Instruction</h2>
                                            <Field
                                                type='text'
                                                as='textarea'
                                                placeholder='Enter article instruction message....'
                                                name='instruction'
                                                className='w-full h-40 border-solid border-dashboard-main border-2 rounded-md p-2 text-gray-800 focus:outline-none'
                                            />
                                            <ErrorMessage
                                                name='instruction'
                                                component='p'
                                                className='text-error-red text-sm'
                                            />
                                        </div>
                                    </div>
                                    <div className='w-full h-12 flex items-center bg-highlight justify-end px-4 border-solid border-highlight border-t-2'>
                                        <button
                                            className='rounded-md bg-white text-primary-blue px-6 py-2 text-sm focus:outline-none'
                                            disabled={isSubmitting}>
                                            {isSubmitting ? 'Saving...' : 'Save'}
                                        </button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                    <div className='w-two-card h-full pr-8 py-2 xs:w-full 2xs:w-full sm:w-full xs:p-2 2xs:p-2 sm:p-2 md:p-2 lg:p-2'>
                        <Formik
                            initialValues={{ plagiarism: '', grammaticalCheck: '', expertCheck: '' }}
                            validationSchema={object().shape({
                                plagiarism: string().required('Plagiarism is required'),
                                grammaticalCheck: string().required('Grammatical check is required'),
                                expertCheck: string().required('Expert check is required'),
                            })}
                            onSubmit={(values, { setSubmitting }) => {
                                setTimeout(() => {
                                    setSubmitting(false);
                                    console.log(values);
                                }, 2000);
                            }}>
                            {({ isSubmitting }) => (
                                <Form className='mb-6 w-full rounded-md'>
                                    <div className='w-full h-12 flex items-center px-4 bg-highlight border-solid border-highlight border-b-2'>
                                        <h2 className='text-primary-blue text-xl'>Email Messages</h2>
                                    </div>
                                    <div className='w-full px-4 py-6 bg-white xs:px-2 2xs:px-2 sm:px-2'>
                                        <div className='w-full mb-6'>
                                            <h2 className='text-lg text-primary-blue mb-2'>Plagiarism</h2>
                                            <Field
                                                type='text'
                                                as='textarea'
                                                placeholder='Enter plagiarism message....'
                                                name='plagiarism'
                                                className='w-full h-40 border-solid border-dashboard-main border-2 rounded-md text-gray-800 p-2 focus:outline-none'
                                            />
                                            <ErrorMessage
                                                name='plagiarism'
                                                component='p'
                                                className='text-error-red text-sm'
                                            />
                                        </div>
                                        <div className='w-full mb-6'>
                                            <h2 className='text-lg text-primary-blue mb-2'>Grammatical Check</h2>
                                            <Field
                                                type='text'
                                                as='textarea'
                                                placeholder='Enter gramatical check message....'
                                                name='grammaticalCheck'
                                                className='w-full h-40 border-solid border-dashboard-main border-2 rounded-md p-2 text-gray-800 focus:outline-none'
                                            />
                                            <ErrorMessage
                                                name='grammaticalCheck'
                                                component='p'
                                                className='text-error-red text-sm'
                                            />
                                        </div>
                                        <div className='w-full mb-6'>
                                            <h2 className='text-lg text-primary-blue mb-2'>Expert Check</h2>
                                            <Field
                                                type='text'
                                                as='textarea'
                                                placeholder='Enter expert check message....'
                                                name='expertCheck'
                                                className='w-full h-40 border-solid border-dashboard-main border-2 rounded-md p-2 text-gray-800 focus:outline-none'
                                            />
                                            <ErrorMessage
                                                name='expertCheck'
                                                component='p'
                                                className='text-error-red text-sm'
                                            />
                                        </div>
                                    </div>
                                    <div className='w-full h-12 flex items-center bg-highlight justify-end px-4 border-solid border-highlight border-t-2'>
                                        <button
                                            className='rounded-md bg-white text-primary-blue px-6 py-2 text-sm focus:outline-none'
                                            disabled={isSubmitting}>
                                            {isSubmitting ? 'Saving...' : 'Save'}
                                        </button>
                                    </div>
                                </Form>
                            )}
                        </Formik>

                        <Formik
                            initialValues={{ plagiarism: '', grammaticalCheck: '', expertCheck: '', voting: '' }}
                            validationSchema={object().shape({
                                plagiarism: string().required('Plagiarism is required'),
                                grammaticalCheck: string().required('Grammatical check is required'),
                                expertCheck: string().required('Expert check is required'),
                                voting: string().required('Voting is required'),
                            })}
                            onSubmit={(values, { setSubmitting }) => {
                                setTimeout(() => {
                                    setSubmitting(false);
                                    console.log(values);
                                }, 2000);
                            }}>
                            {({ isSubmitting }) => (
                                <Form className='mb-6 w-full rounded-md'>
                                    <div className='w-full h-12 flex items-center px-4 bg-highlight border-solid border-highlight border-b-2'>
                                        <h2 className='text-primary-blue text-xl'>Scores</h2>
                                    </div>
                                    <div className='w-full px-4 py-6 bg-white xs:px-2 2xs:px-2 sm:px-2'>
                                        <div className='flex items-center justify-between xs:flex-col 2xs:flex-col sm:flex-col md:flex-col lg:flex-col xs:items-start 2xs:items-start sm:items-start md:items-start lg:items-start'>
                                            <p className='text-primary-blue text-lg mr-3'>Plagiarism</p>
                                            <div className='bg-dashboard-main w-72 h-10 border-solid border-dashboard-main border-2 flex rounded-sm xs:w-full 2xs:w-full sm:w-full md:w-full lg:w-full'>
                                                <Field
                                                    type='text'
                                                    name='plagiarism'
                                                    className='flex-1 bg-white rounded-sm px-2 focus:outline-none'
                                                />
                                                <p className='inline-block mx-5 text-xl font-semibold self-center'>%</p>
                                            </div>
                                        </div>
                                        <ErrorMessage
                                            name='plagiarism'
                                            component='p'
                                            className='text-error-red text-sm'
                                        />
                                        <div className='flex items-center justify-between mt-8 xs:flex-col 2xs:flex-col sm:flex-col md:flex-col lg:flex-col xs:items-start 2xs:items-start sm:items-start md:items-start lg:items-start'>
                                            <p className='text-primary-blue text-lg mr-3'>Gramatical Check</p>
                                            <div className='bg-dashboard-main w-72 h-10 border-solid border-dashboard-main border-2 flex rounded-sm xs:w-full 2xs:w-full sm:w-full md:w-full lg:w-full'>
                                                <Field
                                                    type='text'
                                                    name='grammaticalCheck'
                                                    className='flex-1 bg-white rounded-sm px-2 focus:outline-none'
                                                />
                                                <p className='inline-block mx-5 text-xl font-semibold self-center'>%</p>
                                            </div>
                                        </div>
                                        <ErrorMessage
                                            name='grammaticalCheck'
                                            component='p'
                                            className='text-error-red text-sm'
                                        />
                                        <div className='flex items-center justify-between mt-8 xs:flex-col 2xs:flex-col sm:flex-col md:flex-col lg:flex-col xs:items-start 2xs:items-start sm:items-start md:items-start lg:items-start'>
                                            <p className='text-primary-blue text-lg mr-3'>Expert Check</p>
                                            <div className='bg-dashboard-main w-72 h-10 border-solid border-dashboard-main border-2 flex rounded-sm xs:w-full 2xs:w-full sm:w-full md:w-full lg:w-full'>
                                                <Field
                                                    type='text'
                                                    name='expertCheck'
                                                    className='flex-1 bg-white rounded-sm px-2 focus:outline-none'
                                                />
                                                <p className='inline-block mx-5 text-xl font-semibold self-center'>%</p>
                                            </div>
                                        </div>
                                        <ErrorMessage
                                            name='expertCheck'
                                            component='p'
                                            className='text-error-red text-sm'
                                        />
                                        <div className='flex items-center justify-between mt-8 xs:flex-col 2xs:flex-col sm:flex-col md:flex-col lg:flex-col xs:items-start 2xs:items-start sm:items-start md:items-start lg:items-start'>
                                            <p className='text-primary-blue text-lg mr-3'>Voting</p>
                                            <div className='bg-dashboard-main w-72 h-10 border-solid border-dashboard-main border-2 flex rounded-sm xs:w-full 2xs:w-full sm:w-full md:w-full lg:w-full'>
                                                <Field
                                                    type='text'
                                                    name='voting'
                                                    className='flex-1 bg-white rounded-sm px-2 focus:outline-none'
                                                />
                                                <p className='inline-block mx-5 text-xl font-semibold self-center'>%</p>
                                            </div>
                                        </div>
                                        <ErrorMessage name='voting' component='p' className='text-error-red text-sm' />
                                        <div className='flex items-center justify-between mt-8'>
                                            <p className='text-primary-blue text-lg font-semibold mr-3'>Pass Mark</p>
                                            <div className='bg-fainth-blue text-new-blue w-24 h-10 border-solid border-fainth-blue border-2 flex justify-center items-center rounded-md text-xl font-bold'>
                                                75
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-full h-12 flex items-center bg-highlight justify-end px-4 border-solid border-highlight border-t-2'>
                                        <button
                                            className='rounded-md bg-white text-primary-blue px-6 py-2 text-sm focus:outline-none'
                                            disabled={isSubmitting}>
                                            {isSubmitting ? 'Saving...' : 'Save'}
                                        </button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}

export default AdminSettings;
