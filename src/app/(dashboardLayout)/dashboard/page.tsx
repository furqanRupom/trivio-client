import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import * as React from 'react';

interface IQuiz {
    id: number;
    title: string;
    createdBy: string;
    createdAt: string;
    status: string;
}

const mockQuizzes: IQuiz[] = [
    { id: 1, title: "JavaScript Basics", createdBy: "John Doe", createdAt: "2023-07-01", status: "Published" },
    { id: 2, title: "React Advanced", createdBy: "Jane Smith", createdAt: "2023-07-03", status: "Draft" },
    { id: 3, title: "CSS Tricks", createdBy: "Alice Johnson", createdAt: "2023-07-05", status: "Published" },
];

const DashboardPage: React.FunctionComponent = () => {
    return (
        <>
            <main className="lg:ml-60 pt-16 max-h-screen overflow-auto">
                <div className="px-6 py-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-3xl p-8 mb-5">
                            <h1 className="text-3xl font-bold mb-10">Admin Quizzes Dashboard</h1>
                            <div className="flex items-center justify-between mb-8">
                                <div className="text-gray-400 text-xs">Total Quizzes<br />{mockQuizzes.length}</div>
                                <div className="flex items-center gap-x-2">
                                    <button type="button" className="inline-flex items-center justify-center h-9 px-3 rounded-xl border hover:border-gray-400 text-gray-800 hover:text-gray-900 transition">
                                        <ChevronLeft />
                                    </button>
                                    <Link href="/dashboard/create-quiz" type="button" className="inline-flex items-center justify-center h-9 px-5 rounded-xl bg-trivio-400 text-gray-50  hover:text-white text-sm font-semibold transition">
                                        Create New Quiz
                                    </Link>
                                    <button type="button" className="inline-flex items-center justify-center h-9 px-3 rounded-xl border hover:border-gray-400 text-gray-800 hover:text-gray-900 transition">
                                        <ChevronRight />
                                    </button>
                                </div>
                            </div>
                            <hr className="my-10" />
                            <div className="grid lg:grid-cols-2 gap-x-20">
                                <div>
                                    <h2 className="text-2xl font-bold mb-4">Recent Quizzes</h2>
                                    <div className="space-y-4">
                                        {mockQuizzes.map((quiz) => (
                                            <div key={quiz.id} className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                                                <div className="flex justify-between">
                                                    <div className="text-gray-400 text-xs">{quiz.createdAt}</div>
                                                    <div className="text-gray-400 text-xs">{quiz.status}</div>
                                                </div>
                                                <a href="#" className="font-bold hover:text-yellow-800 hover:underline">{quiz.title}</a>
                                                <div className="text-sm text-gray-600">
                                                    Created by {quiz.createdBy}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold mb-4 pt-5 lg:pt-0">Quiz Statistics</h2>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-4 bg-green-100 rounded-xl text-gray-800">
                                            <div className="font-bold text-2xl leading-none">50</div>
                                            <div className="mt-2">Total Quizzes</div>
                                        </div>
                                        <div className="p-4 bg-yellow-100 rounded-xl text-gray-800">
                                            <div className="font-bold text-2xl leading-none">30</div>
                                            <div className="mt-2">Published</div>
                                        </div>
                                        <div className="p-4 bg-red-100 rounded-xl text-gray-800">
                                            <div className="font-bold text-2xl leading-none">20</div>
                                            <div className="mt-2">Drafts</div>
                                        </div>
                                        <div className="p-4 bg-blue-100 rounded-xl text-gray-800">
                                            <div className="font-bold text-2xl leading-none">150</div>
                                            <div className="mt-2">Total Questions</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="my-10" />
                            <div>
                                <h2 className="text-2xl font-bold mb-4">Recent Activities</h2>
                                <div className="space-y-4">
                                    <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                                        <div className="text-gray-400 text-xs">2 hours ago</div>
                                        <div className="font-bold">New quiz &quot;JavaScript Basics&quot; published</div>
                                        <div className="text-sm text-gray-600">
                                            <ChevronRight className="text-gray-800 inline align-middle mr-1" />
                                            By John Doe
                                        </div>
                                    </div>
                                    <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                                        <div className="text-gray-400 text-xs">1 day ago</div>
                                        <div className="font-bold">Quiz &quot;React Advanced&quot; saved as draft</div>
                                        <div className="text-sm text-gray-600">
                                            <ChevronRight className="text-gray-800 inline align-middle mr-1" />
                                            By Jane Smith
                                        </div>
                                    </div>
                                    <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                                        <div className="text-gray-400 text-xs">3 days ago</div>
                                        <div className="font-bold">New quiz &quot;CSS Tricks&quot; published</div>
                                        <div className="text-sm text-gray-600">
                                            <ChevronRight className="text-gray-800 inline align-middle mr-1" />
                                            By Alice Johnson
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default DashboardPage;
