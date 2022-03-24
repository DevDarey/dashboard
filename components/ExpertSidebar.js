import React, { Fragment, useState } from 'react';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';

import { expertRoutes } from 'utils/routes';

const activeLink = (url) => useRouter().pathname.startsWith(url);

function ExpertSidebar() {
    const [showMenus, setShowMenus] = useState(false);

    return (
        <Fragment>
            <div className='w-1/6 h-full bg-highlight flex flex-col xs:hidden 2xs:hidden sm:hidden md:hidden lg:w-1/4'>
                <div className='w-full h-16 bg-tertiary-blue mb-8 px-4 flex items-center'>
                    <img src='/img/quartenion-white-logo.png' alt='Logo' className='w-28 h-8' />
                </div>
                <div className='flex-1'>
                    {expertRoutes.map((route, index) => (
                        <Link href={route.url} key={index}>
                            <a
                                className={`nav-link ${
                                    activeLink(route.url) && 'border-primary-blue bg-dashboard-main font-semibold'
                                }`}>
                                <img src={route.image} alt={route.title} />
                                {route.title}
                            </a>
                        </Link>
                    ))}

                    <a className='nav-link cursor-pointer' onClick={() => Router.push('/signin')}>
                        <img src='/icons/logout.svg' alt='Logout' />
                        Logout
                    </a>
                </div>
            </div>
            {!showMenus && (
                <img
                    src='/icons/menu.svg'
                    alt='Menu'
                    className='w-12 h-12 absolute z-10 top-2 right-2 lg:hidden xl:hidden cursor-pointer'
                    onClick={() => setShowMenus(true)}
                />
            )}
            <div className={`modal-left ${showMenus ? 'left-0' : '-left-full'}`}>
                <div className='absolute top-0 left-0 w-full h-full bg-primary-blue  flex flex-col z-30 md:w-2/3 lg:w-1/2'>
                    <div className='w-full h-24 px-5 flex justify-between items-center border-solid border-white border-b-2'>
                        <img src='/img/quartenion-white-logo.png' alt='Logo' className='w-28 h-8' />
                        <img
                            src='/icons/close.svg'
                            alt='Close Icon'
                            className='w-6 h-6 cursor-pointer'
                            onClick={() => setShowMenus(false)}
                        />
                    </div>
                    <div className='flex-1 py-4'>
                        {expertRoutes.map((route, index) => (
                            <Link href={route.url} key={index}>
                                <a
                                    className={`w-full h-16 text-white tex-lg flex items-center px-5 ${
                                        activeLink(route.url) && 'bg-white text-primary-blue font-semibold'
                                    }`}>
                                    {route.title}
                                </a>
                            </Link>
                        ))}

                        <a
                            className='w-full h-16 text-white tex-lg  flex items-center pl-6 pr-4 cursor-pointer'
                            onClick={() => Router.push('/signin')}>
                            Logout
                        </a>
                    </div>
                </div>
                <div
                    className='absolute top-0 left-0 w-full h-full z-20 bg-transparent'
                    onClick={() => setShowMenus(false)}
                />
            </div>
        </Fragment>
    );
}

export default ExpertSidebar;
