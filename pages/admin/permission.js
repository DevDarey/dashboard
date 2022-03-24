import React, { useState, Fragment } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import Router from 'next/router';

import AdminLayout from 'layouts/AdminLayout';
import { setTitle } from 'utils/setTitle';
import { RolesModal, DeleteRoleModal } from 'modals';

function AdminPermission() {
    const [roles, setRoles] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [showDeleteRoleModal, setShowDeleteRoleModal] = useState(false);
    const [selectedRole, setSelectedRole] = useState('');

    const handleSubmit = (values, { resetForm, setSubmitting }) => {
        setSubmitting(false);
        console.log(vaues);
        resetForm();
    };

    const deleteRole = (name) => {
        setSelectedRole(name);
        setShowDeleteRoleModal(true);
    };

    return (
        <Fragment>
            <AdminLayout>
                {setTitle('Admin Roles')}

                <div className='flex-1 h-full flex flex-col xs:w-full 2xs:w-full sm:w-full md:w-full'>
                    <div className='flex items-center ml-auto pr-10 pt-4 xs:pl-4 2xs:pl-4 sm:pl-4 xs:pr-16 2xs:pr-16 sm:pr-16 md:pr-16'>
                        <img src='/img/user.png' alt='User Logo' className='w-10 h-10 rounded-full mr-2' />
                        <div>
                            <p className='text-base font-semibold'>Ayodele Tunde</p>
                            <p className='text-xs'>ayodele@gmail.com</p>
                        </div>
                    </div>
                    <div className='w-full h-16 px-4 flex items-center justify-between'>
                        <h2 className='text-xl text-primary-blue font-semibold'>Roles</h2>
                        {!!roles.length && (
                            <button
                                className='border-solid border-primary-blue border-2 rounded-md px-6 py-1 mr-2 focus:outline-none xs:mr-12 2xs:mr-12 sm:mr-12 md:mr-12'
                                onClick={() => setShowModal(true)}>
                                Add Role
                            </button>
                        )}
                    </div>

                    <div className='flex-1 h-full px-4 py-2 overflow-y-auto xs:p-0 2xs:p-0'>
                        {roles.length ? (
                            <div className='mb-6 w-full min-h-full bg-white px-6 py-6 xs:px-2 2xs:px-2 sm:px-2 md:px-3 lg:px-3'>
                                <Formik
                                    initialValues={{ search: '' }}
                                    validationSchema={object().shape({
                                        search: string(),
                                        user: string(),
                                    })}
                                    onSubmit={handleSubmit}>
                                    {() => (
                                        <Form className='w-full flex py-3 xs:flex-col 2xs:flex-col sm:flex-col'>
                                            <div className='flex-1 flex items-center h-10 border-solid border-highlight border-2 rounded-md bg-dashboard-main mr-16 xs:w-full 2xs:w-full sm:w-full xs:mx-0 2xs:mx-0 sm:mx-0 xs:mb-2 2xs:mb-2 sm:mb-2 md:mr-6 lg:mr-6'>
                                                <Field
                                                    name='search'
                                                    type='text'
                                                    className=' px-2 flex-1 self-stretch py-1 mr-2 bg-transparent'
                                                />
                                                <img src='/icons/search.svg' alt='Search' className='w-4 h-4 mr-2' />
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                                <table className='w-full px-4'>
                                    <thead className='w-full'>
                                        <tr className='w-full text-left bg-dashboard-main'>
                                            <th className='w-5/6 h-10 pl-4 pr-2 border-solid border-highlight border-b-2 xs:pl-2 2xs:pl-2 sm:pl-2 xs:pr-1 2xs:pr-1 sm:pr-1'>
                                                Name
                                            </th>

                                            <th className='w-1/6 h-10 px-2 border-solid border-highlight border-b-2 xs:px-1 2xs:px-1 sm:px-1'>
                                                Actions
                                            </th>
                                            <th className='w-2/12 h-10 pl-2 pr-4 border-solid border-highlight border-b-2 xs:pl-1 2xs:pl-1 sm:pl-1 xs:pr-2 2xs:pr-2 sm:pr-2'></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {roles.map((role, index) => (
                                            <tr className='w-full text-left' key={role.role}>
                                                <td className='w-5/6 h-10 pl-4 capitalize pr-2 border-solid border-highlight border-b-2 xs:pl-2 2xs:pl-2 sm:pl-2 xs:pr-1 2xs:pr-1 sm:pr-1'>
                                                    {role.role}
                                                </td>

                                                <td className='w-1/6 h-10 px-2 border-solid border-highlight border-b-2 xs:px-1 2xs:px-1 sm:px-1'>
                                                    <img
                                                        src='/icons/pen.svg'
                                                        alt='Pen'
                                                        className='w-4 h-4 inline-block cursor-pointer mr-3'
                                                    />
                                                    <img
                                                        src='/icons/trash.svg'
                                                        alt='Pen'
                                                        className='w-4 h-4 inline-block cursor-pointer'
                                                        onClick={() => deleteRole(role.role)}
                                                    />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <div className='mb-6 w-full min-h-full bg-white flex flex-col justify-center items-center py-6'>
                                <img src='/img/empty-logo.png' alt='Empty Logo' className='w-24 h-24 mb-6' />
                                <p className='text-gray-400 text-xl mb-10'>EMPTY LIST</p>
                                <p className='text-gray-600 mb-10'>
                                    This table will be populated as soon as <br /> there’s user activity on the
                                    application.
                                </p>
                                <button
                                    className='bg-primary-blue text-white px-10 py-2 rounded-md focus:outline-none'
                                    onClick={() => setShowModal(true)}>
                                    Create Role
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </AdminLayout>
            <RolesModal showModal={showModal} setShowModal={setShowModal} roles={roles} setRoles={setRoles} />
            <DeleteRoleModal
                showModal={showDeleteRoleModal}
                setShowModal={setShowDeleteRoleModal}
                roles={roles}
                setRoles={setRoles}
                role={selectedRole}
                setRole={setSelectedRole}
            />
        </Fragment>
    );
}

export default AdminPermission;
