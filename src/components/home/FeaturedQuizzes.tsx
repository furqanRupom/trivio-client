"use client";
import { FC } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Globe, Book, Film, Music, Trophy, CloudLightning, FlaskConical } from "lucide-react";

interface Quiz {
    icon: JSX.Element;
    title: string;
    description: string;
    buttonText: string;
}

const featuredQuizzes: Quiz[] = [
    {
        icon: <ShieldCheck size={36} className="text-trivio-400" />,
        title: "General Knowledge",
        description: "Test your general knowledge with this quiz!",
        buttonText: "Participate"
    },
    {
        icon: <CloudLightning size={36} className="text-trivio-400" />,
        title: "Science & Technology",
        description: "Challenge your understanding of science and technology.",
        buttonText: "Participate"
    },
    {
        icon: <Book size={36} className="text-trivio-400" />,
        title: "History",
        description: "How well do you know historical events? Find out!",
        buttonText: "Participate"
    },
    {
        icon: <Globe size={36} className="text-trivio-400" />,
        title: "Geography",
        description: "Explore the world through this geography quiz.",
        buttonText: "Participate"
    },
    {
        icon: <FlaskConical size={36} className="text-trivio-400" />,
        title: "Mathematics",
        description: "Test your mathematical skills and knowledge.",
        buttonText: "Participate"
    },
    {
        icon: <Book size={36} className="text-trivio-400" />,
        title: "Literature",
        description: "Dive into the world of books and authors.",
        buttonText: "Participate"
    },
    {
        icon: <Film size={36} className="text-trivio-400" />,
        title: "Movies & TV",
        description: "Are you a movie buff? Prove it with this quiz.",
        buttonText: "Participate"
    },
    {
        icon: <Music size={36} className="text-trivio-400" />,
        title: "Music",
        description: "How well do you know music? Take this quiz to find out.",
        buttonText: "Participate"
    },
    {
        icon: <Trophy size={36} className="text-trivio-400" />,
        title: "Sports",
        description: "Show your sports knowledge with this exciting quiz.",
        buttonText: "Participate"
    }
];

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.05 },
};

const FeaturedQuizzes: FC = () => {
    return (
        <section className="py-10 bg-white sm:py-16 lg:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl text-zinc-700  text-center pb-3 font-bold">Featured <span className="text-trivio-400">Quizzes</span></h3>
                <div className="grid grid-cols-1 gap-12 text-center sm:grid-cols-2 md:grid-cols-3 lg:gap-y-16 py-12">
                    {featuredQuizzes.map((quiz, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            whileHover="hover"
                            transition={{ duration: 0.3 }}
                            className="p-4 bg-white shadow rounded-lg"
                        >
                            <div className="relative flex items-center justify-center mx-auto">
                                <div className="relative flex items-center justify-center mx-auto w-16 h-16 rounded-full bg-gray-200">
                                    {quiz.icon}
                                </div>
                            </div>
                            <h3 className="mt-8 text-xl font-semibold text-zinc-700">{quiz.title}</h3>
                            <p className="mt-4 text-base text-zinc-600">{quiz.description}</p>
                            <button className="mt-4 px-4 py-2 bg-trivio-400 text-white rounded hover:bg-trivio-100 hover:text-trivio-400 hover:bg-opacity-20 transition">
                                {quiz.buttonText}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedQuizzes;
