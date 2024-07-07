"use client";
import { Home, Archive, List, Tag, LogOut, Menu, X } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button
                type="button"
                className="fixed top-6 left-4 z-50 md:hidden inline-flex items-center justify-center h-6 w-6 rounded-full bg-trivio-400 text-white mt-1 ml-1"
                onClick={toggleSidebar}
            >
                <Menu className="text-lg" />
            </button>
            <aside className={`absolute z-50 lg:fixed inset-y-0 left-0 bg-white shadow-md max-h-screen w-60 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out`}>
                <div className="flex flex-col justify-between h-full">
                    <div className="flex-grow">
                        <div className="px-4 py-6 text-center border-b flex items-center space-x-8">
                            <Link href="/" className="text-lg md:text-xl font-bold leading-none">
                                <span className="text-trivio-400">Trivio</span> Dashboard
                            </Link>
                            <button
                                type="button"
                                className=" md:hidden ml-auto inline-flex items-center justify-center h-5 w-5 rounded-full bg-trivio-400 text-white"
                                onClick={toggleSidebar}
                            >
                                <X className="text-lg" />
                            </button>
                        </div>
                        <div className="p-4">
                            <ul className="space-y-1">
                                <li>
                                    <Link href="/dashboard" className="flex items-center bg-zinc-200 rounded-xl font-bold text-sm text-gray-900 py-3 px-4">
                                        <Home className="text-lg mr-4" />
                                        Dashboard
                                    </Link>
                                </li>
                           
                                <li>
                                    <Link href="/dashboard/quizzes-list" className="flex items-center bg-white hover:bg-trivio-50 rounded-xl font-bold text-sm text-gray-900 py-3 px-4">
                                        <List className="text-lg mr-4" />
                                        Quizzes List
                                    </Link>
                                </li>
                             
                            </ul>
                        </div>
                    </div>
                    <div className="p-4">
                        <button type="button" className="inline-flex items-center justify-center h-9 px-4 rounded-xl bg-trivio-400 text-gray-300 hover:text-white text-sm font-semibold transition">
                            <LogOut />
                        </button>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
