import { ChevronLeft, ChevronRight } from 'lucide-react';
import React from 'react';

const Header = () => {
    return (
        <header className="fixed right-0 top-0 left-0 lg:left-60 bg-trivio-40 py-5 px-4 h-16 bg-white">
            <div className="max-w-4xl mx-auto ">
                <div className="flex items-center justify-between">
                    <div>
                        <button type="button" className="flex items-center focus:outline-none rounded-lg text-gray-600 hover:text-trivio-400 focus:text-trivio-400 font-semibold p-2 border border-transparent hover:border-trivio-400 focus:border-trivio-400 transition">
                            <ChevronLeft className="text-xs mr-2" />
                            <span className="text-sm">Archive</span>
                        </button>
                    </div>
                    <div className="text-lg font-bold">Today's Plan</div>
                    <div>
                        <button type="button" className="flex items-center focus:outline-none rounded-lg text-gray-600 hover:text-trivio-400 focus:text-trivio-400 font-semibold p-2 border border-transparent hover:border-trivio-400 focus:border-trivio-400 transition">
                            <span className="text-sm">This week</span>
                            <ChevronRight className="text-xs ml-2" />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
