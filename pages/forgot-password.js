import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import Router from 'next/router';

import { setTitle } from 'utils/setTitle';

const initialValues = { email: '' };

const validationSchema = object().shape({
    email: string().label('Email').required().email(),
});

function ForgotPassword() {
    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
            setSubmitting(false);
            Router.push('/reset-password');
        }, 2000);
    };

    return (
        <div className='bg-light-gray w-full h-screen flex justify-center items-center'>
            {setTitle('Forgot Password')}
            <div className='bg-white w-2/6 px-12 py-6 rounded-sm xs:w-full xs:px-2 2xs:w-full 2xs:px-6 md:w-4/6 md:px-8 lg:w-3/6'>
                <h2 className='text-center text-secondary-blue mb-4 text-2xl font-semibold'>Forgot Password</h2>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                    {({ isSubmitting, errors, touched }) => (
                        <Form>
                            {errors.general_error && (
                                <div className='w-full h-10 mt-6 bg-error-red rounded-md flex justify-center items-center'>
                                    <img src='/icons/error-icon.svg' alt='Error Icon' className='w-4 h-4 mr-2' />
                                    <p className='text-sm text-white'>An error occur here</p>
                                </div>
                            )}

                            <Field
                                type='text'
                                name='email'
                                placeholder='ayodeletunde04@gmail.com'
                                className={`w-full h-10 text-sm px-2 mt-6 border-solid ${
                                    errors.email && touched.email ? 'border-error-red' : 'border-lihgt-gray'
                                } border-2 rounded-md focus:outline-none`}
                            />
                            {errors.email && touched.email && (
                                <div className='text-sm text-error-red flex items-center'>
                                    <img src='/icons/error-icon-red.svg' className='w-3 h-3' />
                                    <p className='ml-2'>{errors.email}</p>
                                </div>
                            )}
                            <button
                                className={`w-full h-10 inline-block mt-6 ${
                                    isSubmitting ? 'bg-light-gray' : 'bg-primary-blue'
                                } text-sm ${
                                    isSubmitting ? 'text-dark-gray' : 'text-white'
                                } text-center rounded-md focus:outline-none`}
                                disabled={isSubmitting}>
                                {isSubmitting ? 'Sending...' : 'Send'}
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default ForgotPassword;
