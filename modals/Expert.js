import React, { useState } from 'react';
import Router from 'next/router';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';

const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    sector: '',
};

const validationSchema = object().shape({
    firstName: string().label('First name').required(),
    lastName: string().label('Last name').required(),
    email: string().label('Email').email().required(),
    password: string().label('Password').required().min(6),
    sector: string().label('Sector').required(),
});

function ExpertModal({ showModal, setShowModal, experts, setExpert }) {
    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
            setSubmitting(false);
            setExpert([...experts, values]);
            resetForm();
            setShowModal(false);
        }, 2000);
    };

    return (
        <div
            className={`fixed modal-top w-full h-screen z-30 flex justify-center items-center ${
                showModal ? 'top-0' : '-top-full'
            } py-4`}>
            <div className='w-1/4 max-h-full bg-white rounded-md z-20 border-solid border-dark-gray border-2  overflow-y-auto xs:w-full 2xs:w-full sm:w-3/4 md:w-2/4 lg:w-2/4'>
                <div className='w-full h-12 flex justify-between items-center px-4 border-solid border-highlight border-b-2 bg-gray-50'>
                    <h2 className='text-lg'>Add Expert</h2>
                    <div
                        className='w-6 h-6 text-lg rounded-full border-solid border-dashboard-main border-2 flex justify-center items-center cursor-pointer'
                        onClick={() => setShowModal(false)}>
                        x
                    </div>
                </div>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                    {({ isSubmitting }) => (
                        <Form className='w-full'>
                            <div className='w-full px-4 py-4'>
                                <div className='w-full mb-6'>
                                    <label className='text-sm'>First Name</label>
                                    <Field
                                        type='text'
                                        name='firstName'
                                        className='w-full h-10 rounded-md border-solid border-dashboard-main border-2 focus:outline-none px-2 py-1'
                                    />
                                    <ErrorMessage name='firstName' component='p' className='text-error-red text-sm' />
                                </div>
                                <div className='w-full mb-6'>
                                    <label className='text-sm'>Last Name</label>
                                    <Field
                                        type='text'
                                        name='lastName'
                                        className='w-full h-10 rounded-md border-solid border-dashboard-main border-2 focus:outline-none px-2 py-1'
                                    />
                                    <ErrorMessage name='lastName' component='p' className='text-error-red text-sm' />
                                </div>
                                <div className='w-full mb-6'>
                                    <label className='text-sm'>Email</label>
                                    <Field
                                        type='text'
                                        name='email'
                                        className='w-full h-10 rounded-md border-solid border-dashboard-main border-2 focus:outline-none px-2 py-1'
                                    />
                                    <ErrorMessage name='email' component='p' className='text-error-red text-sm' />
                                </div>
                                <div className='w-full mb-6'>
                                    <label className='text-sm'>Password</label>
                                    <Field
                                        type='password'
                                        name='password'
                                        className='w-full h-10 rounded-md border-solid border-dashboard-main border-2 focus:outline-none px-2 py-1'
                                    />
                                    <ErrorMessage name='password' component='p' className='text-error-red text-sm' />
                                </div>
                                <div className='w-full mb-6'>
                                    <label className='text-sm'>Sector</label>
                                    <Field
                                        type='text'
                                        name='sector'
                                        className='w-full h-10 rounded-md border-solid border-dashboard-main border-2 focus:outline-none px-2 py-1'
                                    />
                                    <ErrorMessage name='sector' component='p' className='text-error-red text-sm' />
                                </div>
                            </div>

                            <div className='w-full h-12 flex justify-between items-center px-4 border-solid border-highlight border-t-2 bg-gray-50'>
                                <button
                                    type='button'
                                    className='px-6 py-2 rounded-md text-sm focus:outline-none bg-white'
                                    onClick={() => setShowModal(false)}>
                                    Back
                                </button>
                                <button
                                    type='submit'
                                    className={`${
                                        isSubmitting ? 'bg-dashboard-main text-dark-gray' : 'bg-primary-blue text-white'
                                    } text-sm px-6 py-2 rounded-md focus:outline-none`}>
                                    {isSubmitting ? 'Creating...' : 'Create Expert'}
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
            <button
                className=' absolute z-10 bg-gray-800 opacity-70 top-0 left-0 w-full h-full focus:outline-none'
                onClick={() => setShowModal(false)}
            />
        </div>
    );
}

export default ExpertModal;
