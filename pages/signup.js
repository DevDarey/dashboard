import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string, ref } from 'yup';
import Link from 'next/link';
import Router from 'next/router';

import { setTitle } from 'utils/setTitle';

const initialValues = { firstName: '', lastName: '', email: '', phoneNumber: '', password: '', confirmPassword: '' };

const validationSchema = object().shape({
    firstName: string().label('First name').required(),
    lastName: string().label('Last name').required(),
    email: string().label('Email').required().email(),
    phoneNumber: string().label('Phone number').required(),
    password: string().label('Password').required().min(6),
    confirmPassword: string()
        .label('Confirm password')
        .required()
        .oneOf([ref('password')], 'Both passwords needs to be the same'),
});

function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
            setSubmitting(false);
            Router.push('/user/dashboard');
        }, 2000);
    };

    return (
        <div className='bg-light-gray py-4 w-full min-h-screen flex justify-center items-center'>
            {setTitle('Sign Up')}
            <div className='bg-white w-2/6 px-12 py-6 rounded-sm xs:w-full xs:px-2 2xs:w-full 2xs:px-6 md:w-4/6 md:px-8 lg:w-3/6'>
                <h2 className='text-center text-secondary-blue mb-4 text-2xl font-semibold'>Registration</h2>
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
                                name='firstName'
                                placeholder='Idris'
                                className={`w-full h-10 text-sm px-2 mt-6 border-solid ${
                                    errors.firstName && touched.firstName ? 'border-error-red' : 'border-lihgt-gray'
                                } border-2 rounded-md focus:outline-none`}
                            />
                            {errors.firstName && touched.firstName && (
                                <div className='text-sm text-error-red flex items-center'>
                                    <img src='/icons/error-icon-red.svg' className='w-3 h-3' />
                                    <p className='ml-2'>{errors.firstName}</p>
                                </div>
                            )}
                            <Field
                                type='text'
                                name='lastName'
                                placeholder='Mumeen'
                                className={`w-full h-10 text-sm px-2 mt-6 border-solid ${
                                    errors.lastName && touched.lastName ? 'border-error-red' : 'border-lihgt-gray'
                                } border-2 rounded-md focus:outline-none`}
                            />
                            {errors.lastName && touched.lastName && (
                                <div className='text-sm text-error-red flex items-center'>
                                    <img src='/icons/error-icon-red.svg' className='w-3 h-3' />
                                    <p className='ml-2'>{errors.lastName}</p>
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
                            <Field
                                type='text'
                                name='phoneNumber'
                                placeholder='081767457656'
                                className={`w-full h-10 text-sm px-2 mt-6 border-solid ${
                                    errors.phoneNumber && touched.phoneNumber ? 'border-error-red' : 'border-lihgt-gray'
                                } border-2 rounded-md focus:outline-none`}
                            />
                            {errors.phoneNumber && touched.phoneNumber && (
                                <div className='text-sm text-error-red flex items-center'>
                                    <img src='/icons/error-icon-red.svg' className='w-3 h-3' />
                                    <p className='ml-2'>{errors.phoneNumber}</p>
                                </div>
                            )}
                            <div
                                className={`w-full h-10 px-2 mt-6 border-solid ${
                                    errors.password && touched.password ? 'border-error-red' : 'border-lihgt-gray'
                                } border-2 rounded-md flex items-center`}>
                                <Field
                                    type={`${showPassword ? 'text' : 'password'}`}
                                    name='password'
                                    className='flex-1 text-sm focus:outline-none'
                                />
                                <img
                                    src='/icons/eye.svg'
                                    alt='Show password'
                                    className='w-8 h-8 ml-2 cursor-pointer'
                                    onClick={() => setShowPassword(!showPassword)}
                                />
                            </div>
                            {errors.password && touched.password && (
                                <div className='text-sm text-error-red flex items-center'>
                                    <img src='/icons/error-icon-red.svg' className='w-3 h-3' />
                                    <p className='ml-2'>{errors.password}</p>
                                </div>
                            )}
                            <div
                                className={`w-full h-10 px-2 mt-6 border-solid ${
                                    errors.confirmPassword && touched.confirmPassword
                                        ? 'border-error-red'
                                        : 'border-lihgt-gray'
                                } border-2 rounded-md flex items-center`}>
                                <Field
                                    type={`${showConfirmPassword ? 'text' : 'password'}`}
                                    name='confirmPassword'
                                    className='flex-1 text-sm focus:outline-none'
                                />
                                <img
                                    src='/icons/eye.svg'
                                    alt='Show password'
                                    className='w-8 h-8 ml-2 cursor-pointer'
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                />
                            </div>
                            {errors.confirmPassword && touched.confirmPassword && (
                                <div className='text-sm text-error-red flex items-center'>
                                    <img src='/icons/error-icon-red.svg' className='w-3 h-3' />
                                    <p className='ml-2'>{errors.confirmPassword}</p>
                                </div>
                            )}
                            <button
                                className={`w-full h-10 inline-block mt-6 ${
                                    isSubmitting ? 'bg-light-gray' : 'bg-primary-blue'
                                } text-sm ${
                                    isSubmitting ? 'text-dark-gray' : 'text-white'
                                } text-center rounded-md focus:outline-none`}
                                disabled={isSubmitting}>
                                {isSubmitting ? 'Signing Up...' : 'Sign Up'}
                            </button>
                            <p className='text-sm text-gray-600 mt-3'>
                                Do you have an account already?{' '}
                                <Link href='/signin'>
                                    <a className='text-primary-blue font-semibold text-base'>Sign in</a>
                                </Link>
                            </p>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default Signup;
