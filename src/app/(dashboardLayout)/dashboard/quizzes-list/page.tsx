"use client";
import { useFetchedQuizzesQuery } from '@/redux/api/quizzesApi';
import * as React from 'react';
import { Edit, Trash } from 'lucide-react';
import moment from 'moment';

interface IQuizzesListProps { }

const QuizzesList: React.FunctionComponent<IQuizzesListProps> = (props) => {
  const { data: allQuizzes } = useFetchedQuizzesQuery({});
  const quizzesData = allQuizzes?.result;

  const handleUpdate = (id: string) => {
    // Implement update logic here
    console.log(`Update quiz with id: ${id}`);
  };

  const handleDelete = (id: string) => {
    // Implement delete logic here
    console.log(`Delete quiz with id: ${id}`);
  };

  return (
    <div className="container mx-auto px-4 py-4 max-w-6xl mr-20 mt-40 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Quizzes List</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full  shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200 text-zinc-700 text-left">
            <tr>
              <th className="py-2 px-4 border-b border-gray-300">Subject</th>
              <th className="py-2 px-4 border-b border-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {quizzesData?.map((quiz: any) => (
              <tr key={quiz._id}>
                <td className="py-2 px-4 whitespace-nowrap">{quiz.subject || "No Subject"}</td>
                <td className="py-2 px-4 whitespace-nowrap">
                  <button
                    onClick={() => handleUpdate(quiz._id)}
                    className="text-trivio-400 hover:text-trivio-400 mr-2"
                  >
                    <Edit className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleDelete(quiz._id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default QuizzesList;
