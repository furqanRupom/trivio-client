"use client";
import * as React from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { decodeToken } from '@/utils/auth/jwtDecode';
import { logoutUser } from '@/utils/auth/logoutUser';
import { useRouter } from 'next/navigation';
import { isLoggedIn } from '@/utils/auth/isLoggedIn';

interface IHeaderProps { }

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const router = useRouter();

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };


    const user = decodeToken();



    return (
        <motion.header initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}  className="bg-white max-w-7xl mx-auto py-3 sticky z-30 top-0 w-full ">
            <div className="px-4 mx-auto sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    <div className="flex-shrink-0 flex space-x-3 items-center">
                        <h3 className='text-4xl font-bold text-trivio-400'>Trivio<span>.</span></h3>
                       
                        <div className="hidden pl-12 lg:flex lg:items-center lg:justify-center lg:space-x-10">
                            <Link
                                href="/"
                                title=""
                                className="text-lg  text-zinc-700 hover:text-trivio-400 hover:bg-trivio-50  p-2 hover:bg-opacity-10 rounded-xl transition-all duration-200 hover:text-opacity-80"
                            >
                                Home
                            </Link>
                            {
                                // @ts-ignore
                                user?.role === 'admin' && <Link
                                    href="/dashboard"
                                    title=""
                                    className="text-lg  text-zinc-700 hover:text-trivio-400 hover:bg-trivio-50  p-2 hover:bg-opacity-10 rounded-xl transition-all duration-200 hover:text-opacity-80"
                                >
                                    dashboard
                                </Link>
                            }
                            <Link
                                href="/about"
                                title=""
                                className="text-lg  text-zinc-700 hover:text-trivio-400 hover:bg-trivio-50  p-2 hover:bg-opacity-10 rounded-xl transition-all duration-200 hover:text-opacity-80"
                            >
                                About
                            </Link>
                            <Link
                                href="/contact"
                                title=""
                                className="text-lg  text-zinc-700 hover:text-trivio-400 hover:bg-trivio-50  p-2 hover:bg-opacity-10 rounded-xl transition-all duration-200 hover:text-opacity-80"
                            >
                                Contact
                            </Link>
                            <Link
                                href="/help"
                                title=""
                                className="text-lg  text-zinc-700 hover:text-trivio-400 hover:bg-trivio-50  p-2 hover:bg-opacity-10 rounded-xl transition-all duration-200 hover:text-opacity-80"
                            >
                                Help
                            </Link>
                        </div>
                    </div>
                    <button
                        type="button"
                        className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                 
                    {
                        !user && <Link href="/sign-up"
                            className="hidden lg:inline-block items-center justify-center px-7 py-2 text-lg transition-all duration-200 hover:bg-trivio-50 hover:text-trivio-400 focus:text-black focus:bg-trivio-400 font-bold  text-white  bg-trivio-400 rounded-xl"
                            role="button"
                        >
                            Sign Up
                        </Link>
                    }

                    {
                        user && <button onClick={()=> logoutUser(router)}
                            className="hidden lg:inline-block items-center justify-center px-7 py-2 text-lg transition-all duration-200 hover:bg-trivio-50 hover:text-trivio-400 focus:text-black focus:bg-trivio-400 font-bold  text-white  bg-trivio-400 rounded-xl"
                            role="button"
                        >
                            Logout
                        </button>
                    }
                </div>
            </div>
            {isMenuOpen && (
                <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className="lg:hidden"
                >
                    <div className="flex flex-col items-center space-y-4 py-4">
                        <Link
                            href="/home"
                            title=""
                            className="text-lg  text-zinc-700 hover:text-trivio-400 hover:bg-trivio-50  p-2 hover:bg-opacity-10 rounded-xl transition-all duration-200 hover:text-opacity-80"
                        >
                            Home
                        </Link>
                        {
                            // @ts-ignore
                            user?.role === 'admin' && <Link
                                href="/dashboard"
                                title=""
                                className="text-lg  text-zinc-700 hover:text-trivio-400 hover:bg-trivio-50  p-2 hover:bg-opacity-10 rounded-xl transition-all duration-200 hover:text-opacity-80"
                            >
                                dashboard
                            </Link>
                        }
                        <Link
                            href="/about"
                            title=""
                            className="text-lg  text-zinc-700 hover:text-trivio-400 hover:bg-trivio-50  p-2 hover:bg-opacity-10 rounded-xl transition-all duration-200 hover:text-opacity-80"
                        >
                            About
                        </Link>
                        <Link
                            href="/contact"
                            title=""
                            className="text-lg  text-zinc-700 hover:text-trivio-400 hover:bg-trivio-50  p-2 hover:bg-opacity-10 rounded-xl transition-all duration-200 hover:text-opacity-80"
                        >
                            Contact
                        </Link>
                        <Link
                            href="/help"
                            title=""
                            className="text-lg  text-zinc-700 hover:text-trivio-400 hover:bg-trivio-50  p-2 hover:bg-opacity-10 rounded-xl transition-all duration-200 hover:text-opacity-80"
                        >
                            Help
                        </Link>
                        {
                            // @ts-ignore
                            !user?.email && <Link href="/sign-up"
                                className="hidden lg:inline-block items-center justify-center px-7 py-2 text-lg transition-all duration-200 hover:bg-trivio-50 hover:text-trivio-400 focus:text-black focus:bg-trivio-400 font-bold  text-white  bg-trivio-400 rounded-xl"
                                role="button"
                            >
                                Sign Up
                            </Link>
                        }

                        {
                            user && <button onClick={() => logoutUser(router)}
                                className="hidden lg:inline-block items-center justify-center px-7 py-2 text-lg transition-all duration-200 hover:bg-trivio-50 hover:text-trivio-400 focus:text-black focus:bg-trivio-400 font-bold  text-white  bg-trivio-400 rounded-xl"
                                role="button"
                            >
                                Logout
                            </button>
                        }
                    </div>
                </motion.div>
            )}
        </motion.header>
    );
};

export default Header;
