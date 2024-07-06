"use client"
import { Mail, ArrowDownRight } from 'lucide-react'; // Import Lucide icons as needed

const QuizzesCallToAction = () => {
    return (
        <section className="py-10 bg-gray-100 bg-opacity-40 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-2xl mx-auto text-left sm:text-center">
                    <h2 className="text-3xl font-bold leading-tight text-zinc-700 sm:text-4xl lg:text-5xl">Get full access to Trivio</h2>
                    <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Trivio offers a wide range of quizzes and trivia challenges to keep you engaged and learning. Explore various categories and test your knowledge with our user-friendly interface.</p>
                </div>

                <div className="mt-8 space-y-8 sm:space-x-12 sm:mt-12 sm:flex sm:items-start sm:justify-center sm:space-y-0 md:space-x-20 lg:mt-20">
                    <div className="flex items-start">
                        <Mail className="flex-shrink-0 text-trivio-400 w-7 h-7" />
                        <div className="ml-4">
                            <h3 className="text-xl font-semibold text-zinc-700">130+ Quizzes</h3>
                            <p className="mt-1.5 text-base text-gray-600">Explore a variety of topics</p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <Mail className="flex-shrink-0 text-trivio-400 w-7 h-7" />
                        <div className="ml-4">
                            <h3 className="text-xl font-semibold text-zinc-700">14 Categories</h3>
                            <p className="mt-1.5 text-base text-gray-600">From history to science</p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <Mail className="flex-shrink-0 text-trivio-400 w-7 h-7" />
                        <div className="ml-4">
                            <h3 className="text-xl font-semibold text-zinc-700">Easy Access</h3>
                            <p className="mt-1.5 text-base text-gray-600">Join thousands of users</p>
                        </div>
                    </div>
                </div>

                <form action="#" method="POST" className="max-w-xl mx-auto mt-12">
                    <div className="sm:p-2 sm:bg-white sm:border-2 sm:border-transparent sm:rounded-full sm:focus-within:border-trivio-400 sm:focus-within:ring-1 sm:focus-within:ring-trivio-400">
                        <div className="flex flex-col items-start sm:flex-row sm:justify-center">
                            <div className="flex-1 w-full min-w-0">
                                <div className="relative text-gray-400 focus-within:text-gray-600">
                                    <label htmlFor="email" className="sr-only"></label>
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Enter email address"
                                        className="block w-full py-4 pl-10 pr-4 text-base text-black focus:outline-none outline-none placeholder-gray-500 transition-all duration-200 border-transparent rounded-full focus:border-transparent"
                                        required
                                    />
                                </div>
                            </div>

                            <button type="submit" className="inline-flex items-center justify-center w-auto px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-trivio-400 border border-transparent rounded-full sm:ml-4 sm:mt-0 sm:w-auto hover:bg-trivio-400 focus:bg-trivio-400">
                                Get instant access
                                <ArrowDownRight className="w-5 h-5 ml-3 -mr-1" />
                            </button>
                        </div>
                    </div>
                </form>

                <div className="flex items-center justify-start mt-8 sm:justify-center sm:px-0">
                    <svg className="flex-shrink-0 w-5 h-5 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span className="ml-2 text-sm text-gray-600"> Your data is completely secured with us. We don’t share with anyone. </span>
                </div>
            </div>
        </section>
    );
};

export default QuizzesCallToAction;
