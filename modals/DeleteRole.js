import React, { useState } from 'react';

function DeleteRoleModal({ showModal, setShowModal, role, setRole, roles, setRoles }) {
    const [isSubmitting, setSubmitting] = useState(false);

    const deleteRole = () => {
        setSubmitting(true);
        setTimeout(() => {
            setSubmitting(false);
            setRoles(roles.filter((data) => data.role !== role));
            setRole('');
            setShowModal(false);
        }, 2000);
    };

    return (
        <div
            className={`fixed modal-top w-full z-30 h-screen flex justify-center items-center ${
                showModal ? 'top-0' : '-top-full'
            } py-4`}>
            <div className='w-1/4 mx-auto  bg-white rounded-md z-20 border-solid border-dark-gray border-2 xs:w-full 2xs:w-full sm:w-3/4 md:w-2/4 lg:w-2/4'>
                <div className='w-full h-12 flex justify-between items-center px-4 border-solid border-highlight border-b-2 bg-gray-50'>
                    <h2 className='text-lg'>Delete Role</h2>
                    <div
                        className='w-6 h-6 text-lg rounded-full border-solid border-dashboard-main border-2 flex justify-center items-center cursor-pointer'
                        onClick={() => setShowModal(false)}>
                        x
                    </div>
                </div>

                <div className='w-full'>
                    <div className='w-full px-4 py-4 text-lg text-center text-primary-blue'>
                        <p className='mt-4'>
                            Are you sure you want to delete the <br /> <span className='font-semibold'>{role}</span>{' '}
                            role?
                        </p>
                    </div>

                    <div className='w-full h-12 px-4 border-solid border-highlight border-t-2 bg-gray-50 flex items-center'>
                        <button
                            type='submit'
                            className={`${
                                isSubmitting ? 'bg-dashboard-main text-dark-gray' : 'bg-primary-blue text-white'
                            } text-sm text-center w-full py-2 rounded-md focus:outline-none`}
                            onClick={deleteRole}>
                            {isSubmitting ? 'Deleting...' : 'DELETE ROLE'}
                        </button>
                    </div>
                </div>
            </div>
            <button
                className=' absolute z-10 bg-gray-800 opacity-70 top-0 left-0 w-full h-full focus:outline-none'
                onClick={() => setShowModal(false)}
            />
        </div>
    );
}

export default DeleteRoleModal;
