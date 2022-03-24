import React, { useState } from 'react';
import Router from 'next/router';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string, array } from 'yup';

const initialValues = {
    role: '',
    permissions: [],
};

const validationSchema = object().shape({
    role: string().label('Role').required(),
    permissions: array(string()).label('Permissions').required().min(1),
});

const list = ['add article', 'add expert', 'delete article', 'remove user', 'remove expert', 'manage settings'];

function RolesModal({ showModal, setShowModal, roles, setRoles }) {
    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
            setSubmitting(false);
            setRoles([...roles, values]);
            resetForm();
            setShowModal(false);
        }, 2000);
    };

    return (
        <div
            className={`fixed modal-top w-full h-screen z-30 flex justify-center items-center ${
                showModal ? 'top-0' : '-top-full'
            } py-4`}>
            <div className='w-1/4 mx-auto  bg-white rounded-md z-20 border-solid border-dark-gray border-2 xs:w-full 2xs:w-full sm:w-3/4 md:w-2/4 lg:w-2/4'>
                <div className='w-full h-12 flex justify-between items-center px-4 border-solid border-highlight border-b-2 bg-gray-50'>
                    <h2 className='text-lg'>Add Role</h2>
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
                                    <label className='text-base'>Role Name</label>
                                    <Field
                                        type='text'
                                        name='role'
                                        className='w-full h-10 rounded-md border-solid border-dashboard-main border-2 focus:outline-none px-2 py-1'
                                    />
                                    <ErrorMessage name='role' component='p' className='text-error-red text-sm' />
                                </div>
                                <div className='w-full mb-6'>
                                    <label className='text-base mb-4 inline-block'>Role Permissions</label>
                                    <div className='w-full flex justify-between flex-wrap mb-2 text-sm'>
                                        {list.map((permission, index) => (
                                            <p className='two-card flex items-center mb-2 capitalize'>
                                                <Field
                                                    type='checkbox'
                                                    name='permissions'
                                                    value={permission}
                                                    className='rounded-md border-solid border-dashboard-main border-2 focus:outline-none mr-2'
                                                />
                                                {permission}
                                            </p>
                                        ))}
                                    </div>

                                    <ErrorMessage name='permissions' component='p' className='text-error-red text-sm' />
                                </div>
                            </div>

                            <div className='w-full h-12 px-4 border-solid border-highlight border-t-2 bg-gray-50 flex items-center'>
                                <button
                                    type='submit'
                                    className={`${
                                        isSubmitting ? 'bg-dashboard-main text-dark-gray' : 'bg-primary-blue text-white'
                                    } text-sm text-center w-full py-2 rounded-md focus:outline-none`}>
                                    {isSubmitting ? 'Creating...' : 'Create Role'}
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

export default RolesModal;
