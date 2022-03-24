import React, { useState } from 'react';
import Router from 'next/router';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string, ref } from 'yup';

import UserLayout from 'layouts/UserLayout';
import { setTitle } from 'utils/setTitle';

function Settings() {
    const [previewImage, setPreviewImage] = useState('');

    const handleSubmit = (values, { setSubmitting, setFieldError, resetForm }) => {
        setTimeout(() => {
            setSubmitting(false);
            console.log(values);
            resetForm();
        }, 2000);
    };

    const handlePasswordChange = (values, { setSubmitting, setFieldError, resetForm }) => {
        setTimeout(() => {
            setSubmitting(false);
            console.log(values);
            resetForm();
        }, 2000);
    };

    return (
        <UserLayout>
            {setTitle('Settings')}
            <div className='w-5/6 h-full flex flex-col xs:w-full 2xs:w-full sm:w-full md:w-full lg:w-3/4'>
                <div className='w-full h-16 px-8 flex items-center justify-between xs:pl-4 2xs:pl-4 sm:pl-4 xs:pr-16 2xs:pr-16 sm:pr-16 md:pr-16'>
                    <h2 className='text-xl text-primary-blue font-semibold'>Settings</h2>
                    <div className='flex items-center'>
                        <img src='/img/user.png' alt='User Logo' className='w-10 h-10 rounded-full mr-2' />
                        <div>
                            <p className='text-base font-semibold'>Ayodele Tunde</p>
                            <p className='text-xs'>ayodele@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div className='flex-1 h-full px-8 pb-6 pt-2 overflow-y-auto xs:p-0 2xs:p-0 sm:p-0'>
                    <div className='w-full min-h-full bg-white pt-12 pb-4 px-6 rounded-sm flex flex-col'>
                        <Formik
                            initialValues={{
                                photo: '',
                                firstName: '',
                                lastName: '',
                                phoneNumber: '',
                                accName: '',
                                accNumber: '',
                                accType: '',
                                cardType: '',
                                bvn: '',
                                dob: '',
                            }}
                            validationSchema={object().shape({
                                firstName: string().label('First name').required(),
                                lastName: string().label('Last name').required(),
                                phoneNumber: string().label('Phone number').required(),
                                accName: string().label('Account name').required(),
                                accNumber: string().label('Account number').required(),
                                accType: string().label('Account type').required(),
                                cardType: string().label('Card type').required(),
                                bvn: string().label('BVN').required(),
                                dob: string().label('Date of birth').required(),
                            })}
                            onSubmit={handleSubmit}>
                            {({ errors, touched, isSubmitting, setFieldValue }) => (
                                <Form>
                                    <label
                                        htmlFor='photo'
                                        className='w-40 h-40 block rounded-full relative cursor-pointer mx-auto mb-4'>
                                        <img
                                            src={previewImage || '/icons/user-blue.svg'}
                                            alt='User Blue'
                                            className='w-full h-full object-cover rounded-full'
                                        />
                                        <img
                                            src='/icons/camera.svg'
                                            alt='Camera'
                                            className='w-10 h-10 absolute left-0 bottom-0 ml-2 mb-2'
                                        />
                                        <input
                                            type='file'
                                            className='hidden'
                                            id='photo'
                                            name='photo'
                                            onChange={(e) => {
                                                setPreviewImage(URL.createObjectURL(e.target.files[0]));
                                                setFieldValue('photo', e.target.value);
                                            }}
                                        />
                                    </label>
                                    <p className='w-full text-center text-secondary-blue font-medium mb-10'>
                                        Change your profile picture
                                    </p>

                                    <h2 className='text-2xl font-medium text-primary-blue'>Personal Information</h2>
                                    {errors.general_error && (
                                        <div className='w-full h-10 mt-6 bg-error-red rounded-md flex justify-center items-center'>
                                            <img
                                                src='/icons/error-icon.svg'
                                                alt='Error Icon'
                                                className='w-4 h-4 mr-2'
                                            />
                                            <p className='text-sm text-white'>An error occur here</p>
                                        </div>
                                    )}

                                    <div className='flex flex-wrap justify-between'>
                                        <div className='two-card mt-6 xs:w-full 2xs:w-full sm:w-full'>
                                            <label>First Name</label>
                                            <Field
                                                type='text'
                                                name='firstName'
                                                className={`w-full h-10 text-sm px-2 border-solid ${
                                                    errors.firstName && touched.firstName
                                                        ? 'border-error-red'
                                                        : 'border-lihgt-gray'
                                                } border-2 rounded-md focus:outline-none`}
                                            />
                                            {errors.firstName && touched.firstName && (
                                                <div className='text-sm text-error-red flex items-center'>
                                                    <img src='/icons/error-icon-red.svg' className='w-3 h-3' />
                                                    <p className='ml-2'>{errors.firstName}</p>
                                                </div>
                                            )}
                                        </div>
                                        <div className='two-card mt-6 xs:w-full 2xs:w-full sm:w-full'>
                                            <label>Last Name</label>
                                            <Field
                                                type='text'
                                                name='lastName'
                                                className={`w-full h-10 text-sm px-2 border-solid ${
                                                    errors.lastName && touched.lastName
                                                        ? 'border-error-red'
                                                        : 'border-lihgt-gray'
                                                } border-2 rounded-md focus:outline-none`}
                                            />
                                            {errors.lastName && touched.lastName && (
                                                <div className='text-sm text-error-red flex items-center'>
                                                    <img src='/icons/error-icon-red.svg' className='w-3 h-3' />
                                                    <p className='ml-2'>{errors.lastName}</p>
                                                </div>
                                            )}
                                        </div>
                                        <div className='two-card mt-6 xs:w-full 2xs:w-full sm:w-full'>
                                            <label>Phone Number</label>
                                            <Field
                                                type='text'
                                                name='phoneNumber'
                                                className={`w-full h-10 text-sm px-2 border-solid ${
                                                    errors.phoneNumber && touched.phoneNumber
                                                        ? 'border-error-red'
                                                        : 'border-lihgt-gray'
                                                } border-2 rounded-md focus:outline-none`}
                                            />
                                            {errors.phoneNumber && touched.phoneNumber && (
                                                <div className='text-sm text-error-red flex items-center'>
                                                    <img src='/icons/error-icon-red.svg' className='w-3 h-3' />
                                                    <p className='ml-2'>{errors.phoneNumber}</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <h2 className='text-2xl font-medium text-primary-blue mt-6'>Bank Information</h2>
                                    <p className='text-base mb-2'>
                                        Please enter the correct bank information to be awarded with a prize.
                                    </p>

                                    <div className='flex flex-wrap justify-between'>
                                        <div className='two-card mt-6 xs:w-full 2xs:w-full sm:w-full'>
                                            <label>Account Name</label>
                                            <Field
                                                type='text'
                                                name='accName'
                                                className={`w-full h-10 text-sm px-2 border-solid ${
                                                    errors.accName && touched.accName
                                                        ? 'border-error-red'
                                                        : 'border-lihgt-gray'
                                                } border-2 rounded-md focus:outline-none`}
                                            />
                                            {errors.accName && touched.accName && (
                                                <div className='text-sm text-error-red flex items-center'>
                                                    <img src='/icons/error-icon-red.svg' className='w-3 h-3' />
                                                    <p className='ml-2'>{errors.accName}</p>
                                                </div>
                                            )}
                                        </div>
                                        <div className='two-card mt-6 xs:w-full 2xs:w-full sm:w-full'>
                                            <label>Account Number</label>
                                            <Field
                                                type='text'
                                                name='accNumber'
                                                className={`w-full h-10 text-sm px-2 border-solid ${
                                                    errors.accNumber && touched.accNumber
                                                        ? 'border-error-red'
                                                        : 'border-lihgt-gray'
                                                } border-2 rounded-md focus:outline-none`}
                                            />
                                            {errors.accNumber && touched.accNumber && (
                                                <div className='text-sm text-error-red flex items-center'>
                                                    <img src='/icons/error-icon-red.svg' className='w-3 h-3' />
                                                    <p className='ml-2'>{errors.accNumber}</p>
                                                </div>
                                            )}
                                        </div>
                                        <div className='two-card mt-6 xs:w-full 2xs:w-full sm:w-full'>
                                            <label>Account Type</label>
                                            <Field
                                                type='text'
                                                name='accType'
                                                className={`w-full h-10 text-sm px-2 border-solid ${
                                                    errors.accType && touched.accType
                                                        ? 'border-error-red'
                                                        : 'border-lihgt-gray'
                                                } border-2 rounded-md focus:outline-none`}
                                            />
                                            {errors.accType && touched.accType && (
                                                <div className='text-sm text-error-red flex items-center'>
                                                    <img src='/icons/error-icon-red.svg' className='w-3 h-3' />
                                                    <p className='ml-2'>{errors.accType}</p>
                                                </div>
                                            )}
                                        </div>
                                        <div className='two-card mt-6 xs:w-full 2xs:w-full sm:w-full'>
                                            <label>Card Type</label>
                                            <Field
                                                type='text'
                                                name='cardType'
                                                className={`w-full h-10 text-sm px-2 border-solid ${
                                                    errors.cardType && touched.cardType
                                                        ? 'border-error-red'
                                                        : 'border-lihgt-gray'
                                                } border-2 rounded-md focus:outline-none`}
                                            />
                                            {errors.cardType && touched.cardType && (
                                                <div className='text-sm text-error-red flex items-center'>
                                                    <img src='/icons/error-icon-red.svg' className='w-3 h-3' />
                                                    <p className='ml-2'>{errors.cardType}</p>
                                                </div>
                                            )}
                                        </div>
                                        <div className='two-card mt-6 xs:w-full 2xs:w-full sm:w-full'>
                                            <label>BVN</label>
                                            <Field
                                                type='text'
                                                name='bvn'
                                                className={`w-full h-10 text-sm px-2 border-solid ${
                                                    errors.bvn && touched.bvn ? 'border-error-red' : 'border-lihgt-gray'
                                                } border-2 rounded-md focus:outline-none`}
                                            />
                                            {errors.bvn && touched.bvn && (
                                                <div className='text-sm text-error-red flex items-center'>
                                                    <img src='/icons/error-icon-red.svg' className='w-3 h-3' />
                                                    <p className='ml-2'>{errors.bvn}</p>
                                                </div>
                                            )}
                                        </div>
                                        <div className='two-card mt-6 xs:w-full 2xs:w-full sm:w-full'>
                                            <label>Date of birth</label>
                                            <Field
                                                type='text'
                                                name='dob'
                                                className={`w-full h-10 text-sm px-2 border-solid ${
                                                    errors.dob && touched.dob ? 'border-error-red' : 'border-lihgt-gray'
                                                } border-2 rounded-md focus:outline-none`}
                                            />
                                            {errors.dob && touched.dob && (
                                                <div className='text-sm text-error-red flex items-center'>
                                                    <img src='/icons/error-icon-red.svg' className='w-3 h-3' />
                                                    <p className='ml-2'>{errors.dob}</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <button
                                        className={`${
                                            isSubmitting
                                                ? 'text-dark-gray bg-dashboard-main'
                                                : 'text-white bg-primary-blue'
                                        } rounded-md px-24 py-2 block focus:outline-none mx-auto my-6`}
                                        disabled={isSubmitting}>
                                        {isSubmitting ? 'Saving...' : 'Save'}
                                    </button>
                                </Form>
                            )}
                        </Formik>

                        <Formik
                            initialValues={{ password: '', confirmPassword: '' }}
                            validationSchema={object().shape({
                                password: string().label('Password').required().min(6),
                                confirmPassword: string()
                                    .label('Confirm password')
                                    .oneOf([ref('password')], 'Both passwords are not the same'),
                            })}
                            onSubmit={handlePasswordChange}>
                            {({ errors, touched, isSubmitting }) => (
                                <Form>
                                    <h2 className='text-2xl font-medium text-primary-blue mt-6'>Change Password</h2>

                                    {errors.general_error && (
                                        <div className='w-full h-10 mt-6 bg-error-red rounded-md flex justify-center items-center'>
                                            <img
                                                src='/icons/error-icon.svg'
                                                alt='Error Icon'
                                                className='w-4 h-4 mr-2'
                                            />
                                            <p className='text-sm text-white'>An error occur here</p>
                                        </div>
                                    )}

                                    <div className='flex flex-wrap justify-between'>
                                        <div className='two-card mt-6 xs:w-full 2xs:w-full sm:w-full'>
                                            <label>New Password</label>
                                            <Field
                                                type='text'
                                                name='password'
                                                className={`w-full h-10 text-sm px-2 border-solid ${
                                                    errors.password && touched.password
                                                        ? 'border-error-red'
                                                        : 'border-lihgt-gray'
                                                } border-2 rounded-md focus:outline-none`}
                                            />
                                            {errors.password && touched.password && (
                                                <div className='text-sm text-error-red flex items-center'>
                                                    <img src='/icons/error-icon-red.svg' className='w-3 h-3' />
                                                    <p className='ml-2'>{errors.password}</p>
                                                </div>
                                            )}
                                        </div>
                                        <div className='two-card mt-6 xs:w-full 2xs:w-full sm:w-full'>
                                            <label>Confirm Password</label>
                                            <Field
                                                type='text'
                                                name='confirmPassword'
                                                className={`w-full h-10 text-sm px-2 border-solid ${
                                                    errors.confirmPassword && touched.confirmPassword
                                                        ? 'border-error-red'
                                                        : 'border-lihgt-gray'
                                                } border-2 rounded-md focus:outline-none`}
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
                                                ? 'text-dark-gray bg-dashboard-main'
                                                : 'text-white bg-primary-blue'
                                        } rounded-md px-24 py-2 focus:outline-none mx-auto my-6 xs:px-10 2xs:px-10 sm:px-10`}
                                        disabled={isSubmitting}>
                                        {isSubmitting ? 'Updating...' : 'Update Password'}
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </UserLayout>
    );
}

export default Settings;
