"use client";
import { useGetSingleQuizzesQuery } from '@/redux/api/quizzesApi';
import { useParams, useRouter } from 'next/navigation';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { motion, AnimatePresence } from 'framer-motion';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface IParticipagePageProps { }

const ParticipagePage: React.FunctionComponent<IParticipagePageProps> = (props) => {
    const id = useParams();
    const router = useRouter();
    const { data: singleQuizzes, isLoading } = useGetSingleQuizzesQuery(id);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [timeLeft, setTimeLeft] = useState(30); // 30 seconds timer
    const [selectedAnswers, setSelectedAnswers] = useState<{ [key: string]: string }>({});
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime === 1) {
                    handleTimeout();
                }
                return prevTime > 0 ? prevTime - 1 : 0;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [currentQuestionIndex]);

    const handleTimeout = () => {
        toast.error('Time is up! Redirecting to home page...');
        setTimeout(() => {
            router.push('/');
        }, 2000);
    };

    const handleAnswerChange = (questionId: string, optionId: string) => {
        setSelectedAnswers((prevAnswers) => ({
            ...prevAnswers,
            [questionId]: optionId,
        }));
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < singleQuizzes?.result?.questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setTimeLeft(30); // Reset the timer for the next question
        } else {
            handleSubmit();
        }
    };

    const handleSubmit = () => {
        let correctAnswers = 0;
        singleQuizzes?.result?.questions.forEach((question: any) => {
            const selectedOption = question.answer.find((option: any) => option._id === selectedAnswers[question._id]);
            if (selectedOption && selectedOption.isCorrect) {
                correctAnswers++;
            }
        });
        setScore(correctAnswers);
        setShowResult(true);
    };

    const renderSkeleton = () => (
        <div className="p-4">
            <Skeleton height={40} className="mb-4" />
            <Skeleton count={4} height={30} className="mb-2" />
            <div className="flex justify-between mt-4">
                <Skeleton width={100} height={40} />
            </div>
        </div>
    );

    const renderContent = () => {
        if (!singleQuizzes) {
            return <div>Loading...</div>;
        }

        const currentQuestion = singleQuizzes?.result?.questions[currentQuestionIndex];
        const isLastQuestion = currentQuestionIndex === singleQuizzes?.result?.questions.length - 1;

        return (
            <>
                <div className="mb-4 text-center">
                    Time Left: <span className="text-2xl font-bold text-trivio-400">{timeLeft}</span> seconds
                </div>

                <div className="slider-container">
                    <div className="slider">
                        <h4 className="text-xl mb-5 font-semibold text-zinc-700">{currentQuestion?.name}</h4>
                        {currentQuestion?.answer.map((option: any) => (
                            <div key={option._id} className="mb-2">
                                <label className="block p-2 bg-gray-200 rounded">
                                    <input
                                        type="radio"
                                        name={currentQuestion?._id}
                                        value={option._id}
                                        checked={selectedAnswers[currentQuestion?._id] === option._id}
                                        onChange={() => handleAnswerChange(currentQuestion?._id, option._id)}
                                        className="mr-2"
                                    />
                                    {option.option}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-between mt-4">
                    {!isLastQuestion && (
                        <button onClick={handleNextQuestion} className="bg-trivio-400 text-white px-4 py-2 rounded">
                            Next
                        </button>
                    )}
                    {isLastQuestion && (
                        <button onClick={handleSubmit} className="bg-green-500 text-white px-4 py-2 rounded">
                            Submit
                        </button>
                    )}
                </div>
            </>
        );
    };

    return (
        <section className="bg-gradient-to-t from-trivio-50/5 to-trivio-200/5 min-h-screen p-4">
            <div className="max-w-4xl mx-auto py-20">
                {isLoading ? renderSkeleton() : renderContent()}
            </div>

            <AnimatePresence>
                {showResult && (
                    <motion.div
                        className="absolute z-50 inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-white p-8 rounded shadow-lg max-w-lg w-full"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                        >
                            <h3 className="text-2xl mb-4 font-bold">Quiz Results</h3>
                            <p>Subject: {singleQuizzes?.result?.subject}</p>
                            <p>Total Questions: {singleQuizzes?.result?.questions.length}</p>
                            <p>Correct Answers: {score}</p>
                            <p>Score: {((score / singleQuizzes?.result?.questions.length) * 100).toFixed(2)}%</p>
                            <button
                                onClick={() => router.push('/')}
                                className="bg-trivio-400 text-white px-4 py-2 rounded mt-4"
                            >
                                Go to Home
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default ParticipagePage;
