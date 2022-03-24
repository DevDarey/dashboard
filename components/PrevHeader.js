import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

import { guestRoutes } from 'utils/routes';

const activeLink = (href) => useRouter().pathname === href;

const Header = () => {
    const [show, setShow] = useState(true);
    const [isLogin, setLogin] = useState(false);
    const showMenu = () => {
        setShow(!show);
    };

    return (
        <div className='bg-white relative '>
            <nav className='flex justify-between items-center  py-4 px-8  xs:p-0  '>
                <h1 className='font-bold text-4xl xs:absolute xs:top-2 xs:ml-12 xs:p-2 xs:text-white  '>Quartenion</h1>

                <div>
                    <div
                        className={`xs:flex xs:w-screen xs:h-screen  xs:flex-col xs:bg-primary xs:uppercase xs:text-white xs:py-20 xs:px-10 ${
                            show ? 'xs:hidden' : 'xs:block'
                        }`}>
                        <hr className='lg:hidden xs:w-screen xs:px-0 xs:py-0' />
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
                                <button className='mx-2 px-8 py-2 border-2 border-solid border-gray-300 rounded-lg text-lg xs:hidden'>
                                    Sign in
                                </button>
                                <button className='mx-2 px-8 py-2 rounded-lg text-white bg-btn text-lg xs:hidden'>
                                    Sign out
                                </button>
                            </>
                        ) : (
                            <>
                                <button className='mx-2 px-8 py-2 rounded-lg text-white bg-btn text-lg xs:hidden'>
                                    Dashboard
                                </button>
                            </>
                        )}
                    </div>
                    <button className='hidden xs:block absolute top-2 right-8 z-10' onClick={showMenu}>
                        {show ? (
                            <img className='rounded-md outline-none' src='/icons/hamburger.svg ' />
                        ) : (
                            <img className={`rounded-md outline-none`} src='/icons/close.svg' />
                        )}
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default Header;
