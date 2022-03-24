import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { object, string, ref } from 'yup';

import ExpertLayout from 'layouts/ExpertLayout';
import { setTitle } from 'utils/setTitle';
import { SummaryCard } from 'components';

function ExpertProfile() {
    const handlePassword = (values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
            setSubmitting(false);
            console.log(values);
            resetForm();
        }, 2000);
    };

    return (
        <ExpertLayout>
            {setTitle('Expert Summary Page')}
            <div className='w-5/6 h-full flex flex-col xs:w-full 2xs:w-full sm:w-full md:w-full lg:w-3/4'>
                <div className='w-full h-16 px-4 flex items-center justify-between xs:pl-4 2xs:pl-4 sm:pl-4 xs:pr-16 2xs:pr-16 sm:pr-16 md:pr-16'>
                    <h2 className='text-xl text-primary-blue font-semibold'>Profile</h2>
                    <div className='flex items-center'>
                        <img src='/img/user.png' alt='User Logo' className='w-10 h-10 rounded-full mr-2' />
                        <div>
                            <p className='text-base font-semibold'>Ayodele Tunde</p>
                            <p className='text-xs'>ayodele@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div className='flex-1 h-full px-4 pb-2 overflow-y-auto xs:px-0 2xs:px-0 sm:px-0'>
                    <div className='w-full bg-highlight px-10 pt-10 pb-16 flex flex-col items-center xs:px-2 2xs:px-3 sm:px-4'>
                        <img src='/icons/user-blue.svg' alt='User' className='w-24 h-24 rounded-full mb-8' />
                        <div className='flex justify-center w-full xs:flex-col 2xs:flex-col sm:flex-col'>
                            <div className='text-primary-blue mb-4 px-4 w-1/3 xs:w-full 2xs:w-full sm:w-full md:w-2/3 lg:w-2/3 xs:px-2 2xs:px-3 sm:px-4'>
                                <p className='mb-2'>
                                    <span className='mr-3 text-lg font-semibold'>Name:</span>
                                    Emmanuel Obagunwa
                                </p>
                                <p className='mt-2'>
                                    <span className='mr-3 text-lg font-semibold'>Email:</span>
                                    accessemma12@gmail.com
                                </p>
                            </div>
                            <div className='text-primary-blue mb-4 px-4 w-1/3 xs:w-full 2xs:w-full sm:w-full md:w-2/3 lg:w-2/3 xs:px-2 2xs:px-3 sm:px-4'>
                                <p className='mb-2'>
                                    <span className='mr-3 text-lg font-semibold'>Phone No:</span>
                                    08140809078
                                </p>
                                <p className='mt-2'>
                                    <span className='mr-3 text-lg font-semibold'>Sector:</span>
                                    Mathematics
                                </p>
                            </div>
                        </div>
                        <button className='text-white bg-primary-blue px-12 py-2 rounded-md focus:outline-none block ml-auto mt-16'>
                            Edit
                        </button>
                    </div>
                    <div className='w-full rounded-sm bg-white pt-6'>
                        <Formik
                            initialValues={{ password: '', confirmPassword: '' }}
                            validationSchema={object().shape({
                                password: string().label('Password').required().min(6),
                                confirmPassword: string()
                                    .label('Confirm password')
                                    .oneOf([ref('password')], 'Both password are not the same')
                                    .required()
                                    .min(6),
                            })}
                            onSubmit={handlePassword}>
                            {({ errors, touched, isSubmitting }) => (
                                <Form className='w-full px-10 py-6 bg-highlight xs:px-2 2xs:px-3 sm:px-4'>
                                    <h2 className='text-2xl text-primary-blue mb-6'>Change Password</h2>

                                    <div className='w-full flex justify-between xs:flex-col 2xs:flex-col sm:flex-col'>
                                        <div className='two-card xs:w-full 2xs:w-full sm:w-full xs:mb-5 2xs:mb-5 sm:mb-6'>
                                            <label>New Password</label>
                                            <Field
                                                type='text'
                                                name='password'
                                                className={`w-full h-10 border-solid bg-transparent border-2 ${
                                                    errors.password && touched.password
                                                        ? 'border-error-red'
                                                        : 'border-gray-300'
                                                } rounded-sm focus:outline-none`}
                                            />
                                            {errors.password && touched.password && (
                                                <div className='text-sm text-error-red flex items-center'>
                                                    <img src='/icons/error-icon-red.svg' className='w-3 h-3' />
                                                    <p className='ml-2'>{errors.password}</p>
                                                </div>
                                            )}
                                        </div>
                                        <div className='two-card xs:w-full 2xs:w-full sm:w-full'>
                                            <label>Confirm Password</label>
                                            <Field
                                                type='text'
                                                name='confirmPassword'
                                                className={`w-full h-10 border-solid ${
                                                    errors.confirmPassword && touched.confirmPassword
                                                        ? 'border-error-red'
                                                        : 'border-gray-300'
                                                } bg-transparent border-2 rounded-sm focus:outline-none`}
                                            />
                                            {errors.confirmPassword && touched.confirmPassword && (
                                                <div className='text-sm text-error-red flex items-center'>
                                                    <img src='/icons/error-icon-red.svg' className='w-3 h-3' />
                                                    <p className='ml-2'>{errors.confirmPassword}</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <button
                                        className={`${
                                            isSubmitting
                                                ? 'bg-dashboard-main text-dark-gray'
                                                : 'bg-primary-blue text-white'
                                        } px-12 py-2 rounded-md focus:outline-none block ml-auto mt-12`}
                                        disabled={isSubmitting}>
                                        {isSubmitting ? 'Updating...' : 'Update Password'}
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </ExpertLayout>
    );
}

export default ExpertProfile;
