import Link from 'next/link';
import { useState } from 'react';
import Router, { useRouter } from 'next/router';

import { guestRoutes } from 'utils/routes';

const activeLink = (href) => useRouter().pathname === href;

const Header = () => {
    const [show, setShow] = useState(false);
    const [isLogin, setLogin] = useState(false);

    const showMenu = () => {
        setShow(!show);
    };

    return (
        <>
            <nav className='  flex justify-between items-center  py-4 px-8  2xs:hidden xs:hidden   '>
                {/*<h1 className='font-bold text-4xl xs:absolute xs:top-2 xs:ml-12 xs:p-2 xs:text-white  '>Quartenion</h1>*/}
                <img src='/img/quartenion-logo.png' className='w-40 h-12 xs:absolute xs:top-2 xs:ml-12' />

                <div>
                    <div>
                        {guestRoutes.map((route, index) => (
                            <Link href={route.url} key={index}>
                                <a
                                    className={`mx-4 text-xl xs:text-2xl xs:m-4 ${
                                        activeLink(route.url) && 'border-b-2 border-solid border-line'
                                    }  `}>
                                    {route.title}
                                </a>
                            </Link>
                        ))}
                        {!isLogin ? (
                            <>
                                <button
                                    className='mx-2 w-28 py-2 border-2 border-solid border-gray-300 rounded-lg text-base xs:hidden focus:outline-none'
                                    onClick={() => Router.push('/signin')}>
                                    Sign in
                                </button>
                                <button
                                    className='mx-2 w-28 py-2 rounded-lg text-white bg-btn text-base xs:hidden focus:outline-none border-solid border-btn border-2'
                                    onClick={() => Router.push('/signup')}>
                                    Sign Up
                                </button>
                            </>
                        ) : (
                            <>
                                <button className='mx-2 px-8 py-2 rounded-lg text-white bg-btn text-base xs:hidden focus:outline-none border-solid border-btn border-2'>
                                    Dashboard
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </nav>

            <div
                className={`absolute w-screen h-screen bg-primary z-20 flex-col sm:hidden ${
                    show ? 'block' : 'hidden'
                }`}>
                <div className='flex justify-between items-center px-6 py-4'>
                    <h1 className='font-bold text-4xl text-white'>Quartenion</h1>
                    <button className='md:hidden' onClick={showMenu}>
                        <img className={`rounded-md outline-none `} src='/icons/close.svg' />
                    </button>
                </div>
                <hr className='bg-white w-screen' />

                <div className='flex flex-col mt-4 '>
                    {guestRoutes.map((route, index) => (
                        <Link href={route.url} key={index}>
                            <a
                                className={`mx-6 text-lg text-white mt-6 ${
                                    activeLink(route.url) && 'border-b-2 border-solid border-line'
                                }  `}>
                                {route.title}
                            </a>
                        </Link>
                    ))}
                </div>
                <div className='absolute bottom-2 '>
                    <hr className='bg-white w-screen' />
                    <div className='px-6 py-4'>
                        {!isLogin ? (
                            <div className='flex justify-between'>
                                <button
                                    className='bg-white w-28 py-2 border-2 border-solid border-gray-300 rounded-md text-base'
                                    onClick={() => Router.push('/signin')}>
                                    Sign in
                                </button>
                                <button
                                    className='w-28 py-2 rounded-md text-white bg-btn text-base focus:outline-none border-solid border-btn border-2'
                                    onClick={() => Router.push('/signup')}>
                                    Sign Up
                                </button>
                            </div>
                        ) : (
                            <>
                                <button className='px-8  py-2 rounded-lg text-white bg-btn text-lg'>Dashboard</button>
                            </>
                        )}
                    </div>
                </div>
            </div>

            <button
                className={`absolute right-4 top-4 z-10 hidden xs:inline-block 2xs:inline-block`}
                onClick={showMenu}>
                <img className='rounded-md outline-none -translate-x-52' src='/icons/hamburger.svg ' />
            </button>
        </>
    );
};

export default Header;
