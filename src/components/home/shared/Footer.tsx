import { Heart, Clock, Users, Award } from 'lucide-react'; // Import Lucide icons as needed

const Footer = () => {
    return (
        <footer className="py-10 bg-white sm:pt-16 lg:pt-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-y-12 gap-x-8 xl:gap-x-12">
                    <div className="col-span-2 md:col-span-4 xl:pr-8">
                        <h3 className='text-4xl font-bold text-trivio-400'>Trivio<span>.</span></h3>

                        <p className="text-base leading-relaxed text-gray-600 mt-7">
                            Trivio is your go-to platform for engaging quizzes on various topics. Join thousands of users in challenging your knowledge and learning new things every day.
                        </p>

                        <a href="#" className="inline-flex items-center justify-center px-6 py-4 font-semibold text-white transition-all duration-200 bg-trivio-400 rounded-md  mt-7">
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                            Start Live Chat
                        </a>
                    </div>

                    <div className="lg:col-span-2">
                        <p className="text-base font-semibold text-gray-900">Company</p>

                        <ul className="mt-6 space-y-5">
                            <li>
                                <a href="#" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-trivio-400 focus:text-trivio-400"> About </a>
                            </li>

                            <li>
                                <a href="#" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-trivio-400 focus:text-trivio-400"> Features </a>
                            </li>

                            <li>
                                <a href="#" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-trivio-400 focus:text-trivio-400"> Works </a>
                            </li>

                            <li>
                                <a href="#" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-trivio-400 focus:text-trivio-400"> Career </a>
                            </li>
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <p className="text-base font-semibold text-gray-900">Help</p>

                        <ul className="mt-6 space-y-4">
                            <li>
                                <a href="#" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-trivio-400 focus:text-trivio-400"> Customer Support </a>
                            </li>

                            <li>
                                <a href="#" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-trivio-400 focus:text-trivio-400"> Delivery Details </a>
                            </li>

                            <li>
                                <a href="#" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-trivio-400 focus:text-trivio-400"> Terms & Conditions </a>
                            </li>

                            <li>
                                <a href="#" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-trivio-400 focus:text-trivio-400"> Privacy Policy </a>
                            </li>
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <p className="text-base font-semibold text-gray-900">Resources</p>

                        <ul className="mt-6 space-y-5">
                            <li>
                                <a href="#" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-trivio-400 focus:text-trivio-400"> Free eBooks </a>
                            </li>

                            <li>
                                <a href="#" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-trivio-400 focus:text-trivio-400"> Development Tutorial </a>
                            </li>

                            <li>
                                <a href="#" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-trivio-400 focus:text-trivio-400"> How to - Blog </a>
                            </li>

                            <li>
                                <a href="#" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-trivio-400 focus:text-trivio-400"> YouTube Playlist </a>
                            </li>
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <p className="text-base font-semibold text-gray-900">Social</p>

                        <ul className="mt-6 space-y-5">
                            <li>
                                <a href="#" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-trivio-400 focus:text-trivio-400"> Facebook </a>
                            </li>

                            <li>
                                <a href="#" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-trivio-400 focus:text-trivio-400"> Twitter </a>
                            </li>

                            <li>
                                <a href="#" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-trivio-400 focus:text-trivio-400"> Instagram </a>
                            </li>

                            <li>
                                <a href="#" className="flex text-sm text-gray-800 transition-all duration-200 hover:text-trivio-400 focus:text-trivio-400"> LinkedIn </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <hr className="mt-16 mb-10 border-gray-200" />

                <div className="sm:flex sm:items-center sm:justify-between">
                    <p className="text-sm text-gray-600">© Copyright 2024, All Rights Reserved by Trivio</p>

                    <ul className="flex items-center mt-5 space-x-3 md:order-3 sm:mt-0">
                        <li>
                            <a
                                href="#"
                                className="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-trivio-400 hover:text-white focus:text-white hover:bg-trivio-400 hover:border-trivio-400 focus:border-trivio-400"
                            >
                                <Heart className="w-4 h-4" />
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                className="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-trivio-400 hover:text-white focus:text-white hover:bg-trivio-400 hover:border-trivio-400 focus:border-trivio-400"
                            >
                                <Clock className="w-4 h-4" />
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                className="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-trivio-400 hover:text-white focus:text-white hover:bg-trivio-400 hover:border-trivio-400 focus:border-trivio-400"
                            >
                                <Users className="w-4 h-4" />
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                className="flex items-center justify-center text-gray-800 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-trivio-400 hover:text-white focus:text-white hover:bg-trivio-400 hover:border-trivio-400 focus:border-trivio-400"
                            >
                                <Award className="w-4 h-4" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
