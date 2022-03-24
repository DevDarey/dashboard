import React, { useState } from 'react';
import Router from 'next/router';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string, array } from 'yup';

const initialValues = {
    sector: '',
};

const validationSchema = object().shape({
    sector: string().label('Sector').required(),
});

function SectorModal({ showModal, setShowModal, sectors, setSectors }) {
    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
            setSubmitting(false);
            setSectors([...sectors, values]);
            resetForm();
            setShowModal(false);
        }, 2000);
    };

    return (
        <div
            className={`fixed modal-top z-30 w-full h-screen ${
                showModal ? 'flex justify-center items-center top-0' : '-top-full'
            } py-4`}>
            <div className='w-1/4 mx-auto  bg-white rounded-md z-50 border-solid border-dark-gray border-2 xs:w-full 2xs:w-full sm:w-3/4 md:w-2/4 lg:w-2/4'>
                <div className='w-full h-12 flex justify-between items-center px-4 border-solid border-highlight border-b-2 bg-gray-50'>
                    <h2 className='text-lg'>Create Sector</h2>
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
                                <div className='w-full'>
                                    <Field
                                        type='text'
                                        as='textarea'
                                        name='sector'
                                        placeholder='Enter Sector.....'
                                        className='w-full h-32 rounded-md border-solid border-dashboard-main border-2 focus:outline-none p-2'
                                    />
                                    <ErrorMessage name='sector' component='p' className='text-error-red text-sm' />
                                </div>
                            </div>

                            <div className='w-full h-12 px-4 border-solid border-highlight border-t-2 bg-gray-50 flex items-center'>
                                <button
                                    type='submit'
                                    className={`${
                                        isSubmitting ? 'bg-dashboard-main text-dark-gray' : 'bg-primary-blue text-white'
                                    } text-sm text-center w-full py-2 rounded-md focus:outline-none`}>
                                    {isSubmitting ? 'Creating...' : 'Add Sector'}
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
            <button
                className=' absolute z-40 bg-gray-800 opacity-70 top-0 left-0 w-full h-full focus:outline-none'
                onClick={() => setShowModal(false)}
            />
        </div>
    );
}

export default SectorModal;
