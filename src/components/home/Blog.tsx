import React from 'react';
import { ArrowRight } from 'lucide-react'; // Import Lucide React icon
import Image from 'next/image';

const BlogSection: React.FC = () => {
    return (
        <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="flex items-end justify-between">
                    <div className="flex-1 text-center">
                        <h2 className="text-3xl font-bold leading-tight text-zinc-700 sm:text-4xl lg:text-5xl">Latest from <span className='text-trivio-400'>Trivio Blog</span></h2>
                        <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 ">Explore insights, tips, and news about Trivio quizzes.</p>
                    </div>

                    <div className="hidden lg:flex lg:items-center lg:space-x-3">
                        <button type="button" className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-trivio-400 hover:text-white focus:bg-trivio-400 focus:text-white">
                            <ArrowRight size={24} strokeWidth={1.5} color="#68769F" />
                        </button>

                        <button type="button" className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-trivio-400 hover:text-white focus:bg-trivio-400 focus:text-white">
                            <ArrowRight size={24} strokeWidth={1.5} color="#68769F" />
                        </button>
                    </div>
                </div>

                <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">
                    <BlogCard
                        category="Lifestyle"
                        date="March 21, 2020"
                        title="How to Build Coffee Inside Your Home in 5 Minutes"
                        image="https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-1.jpg"
                        description="Learn quick and easy steps to brew coffee at home with Trivio's guide."
                    />

                    <BlogCard
                        category="Marketing"
                        date="April 04, 2020"
                        title="7 Tips to Run Your Remote Team Faster and Better"
                        image="https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-2.jpg"
                        description="Discover strategies to enhance remote team productivity using Trivio's tools."
                    />

                    <BlogCard
                        category="Productivity"
                        date="May 12, 2020"
                        title="5 Productivity Tips to Write Faster in the Morning"
                        image="https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-3.jpg"
                        description="Boost your morning productivity with Trivio's effective writing tips."
                    />
                </div>

                <div className="flex items-center justify-center mt-8 space-x-3 lg:hidden">
                    <button type="button" className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-trivio-400 hover:text-white focus:bg-trivio-400 focus:text-white">
                        <ArrowRight size={24} strokeWidth={1.5} color="#68769F" />
                    </button>

                    <button type="button" className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-trivio-400 hover:text-white focus:bg-trivio-400 focus:text-white">
                        <ArrowRight size={24} strokeWidth={1.5} color="#68769F" />
                    </button>
                </div>
            </div>
        </section>
    );
};

interface BlogCardProps {
    category: string;
    date: string;
    title: string;
    image: string;
    description: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ category, date, title, image, description }) => {
    return (
        <div className="overflow-hidden bg-white rounded shadow">
            <div className="p-5">
                <div className="relative">
                    <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                        <Image width={400} height={400} className="object-cover w-full h-full" src={image} alt="" />
                    </a>

                    <div className="absolute top-4 left-4">
                        <span className="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full">{category}</span>
                    </div>
                </div>
                <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase">{date}</span>
                <p className="mt-5 text-2xl font-semibold">
                    <a href="#" title="" className="text-black">{title}</a>
                </p>
                <p className="mt-4 text-base text-gray-600">{description}</p>
                <a href="#" title="" className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-trivio-400 transition-all duration-200 border-b-2 border-transparent hover:border-trivio-400 focus:border-trivio-400">
                    Continue Reading
                    <ArrowRight size={20} strokeWidth={1.5} color="#68769F" />
                </a>
            </div>
        </div>
    );
};

export default BlogSection;
