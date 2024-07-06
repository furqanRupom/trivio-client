"use client";
import * as React from 'react';
import { motion } from 'framer-motion';

interface IBannerProps { }

const Banner: React.FunctionComponent<IBannerProps> = (props) => {
    return (
        <div className="bg-white">
            <section className="bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-24">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
                        <div>
                            <motion.h1
                                className="mt-4 text-5xl font-bold text-zinc-700 lg:mt-8 sm:text-6xl xl:text-8xl"
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                Plan in seconds not <span className="text-trivio-400">weekends.</span>
                            </motion.h1>

                            <motion.a
                                href="#"
                                title=""
                                className="inline-flex items-center px-6 py-4 mt-5 lg:mt-8 font-semibold text-trivio-400 bg-opacity-20 transition-all duration-200 bg-trivio-50 rounded-full hover:bg-trivio-400 hover:text-white focus:bg-trivio-100"
                                role="button"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            >
                                Start Quizzes
                                <svg
                                    className="w-6 h-6 ml-8 -mr-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </motion.a>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <img
                                className="w-full"
                                src="https://i.ibb.co/4PkLNvR/man-video-call-education-smartphone-24640-34242.png"
                                alt=""
                            />
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;
