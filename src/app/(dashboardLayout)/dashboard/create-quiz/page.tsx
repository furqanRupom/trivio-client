"use client";
import { useCreateQuizzesMutation } from '@/redux/api/quizzesApi';
import * as React from 'react';
import { useForm, useFieldArray, Controller, SubmitHandler } from 'react-hook-form';
import { PlusCircle, Trash } from 'lucide-react';
import toast from 'react-hot-toast';

interface Answer {
    option: string;
    isCorrect: boolean;
}

interface Question {
    name: string;
    answer: Answer[];
}

interface FormData {
    subject: string;
    description:string;
    questions: Question[];
}

const CreateQuizzpage: React.FunctionComponent = () => {
    const { control, handleSubmit, register, watch, reset, formState: { errors } } = useForm<FormData>({
        defaultValues: {
            subject: '',
            description:'',
            questions: [{
                name: '',
                answer: [
                    { option: '', isCorrect: false },
                    { option: '', isCorrect: false },
                    { option: '', isCorrect: false },
                    { option: '', isCorrect: false }
                ]
            }]
        }
    });

    const { fields: questionFields, append: appendQuestion, remove: removeQuestion } = useFieldArray({
        control,
        name: 'questions',
    });

    const [createQuiz] = useCreateQuizzesMutation();

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        const hasCorrectAnswer = data.questions.every(question =>
            question.answer.some(answer => answer.isCorrect)
        );

        if (!hasCorrectAnswer) {
            toast.error('Each question must have at least one correct answer.');
            return;
        }

        try {
           const response =  await createQuiz(data).unwrap();
            if(response.success){
                toast.success('Quiz created successfully');
                reset();
            }
        } catch (error) {
            toast.error('Failed to create quiz: ');
            reset();

        }
    };

    return (
        <div className="mx-auto p-4 py-20 max-w-5xl mr-24">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-6 rounded-lg shadow-md mt-12 bg-white">
                <h3 className="text-2xl font-bold mb-6">Create Trivio Quizzes</h3>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Subject</label>
                    <input
                        {...register('subject', { required: 'Subject is required' })}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-trivio-400 focus:border-trivio-400 sm:text-sm"
                    />
                    {errors.subject && <span className="text-red-500 text-sm">{errors.subject.message}</span>}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700"> Short Description</label>
                    <input
                        {...register('description', { required: 'Description is required' })}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-trivio-400 focus:border-trivio-400 sm:text-sm"
                    />
                    {errors.description && <span className="text-red-500 text-sm">{errors.description.message}</span>}
                </div>

                {questionFields.map((question, qIndex) => (
                    <div key={question.id} className="space-y-4 border-t pt-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Question {qIndex + 1}</label>
                            <input
                                {...register(`questions.${qIndex}.name`, { required: 'Question is required' })}
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-trivio-400 focus:border-trivio-400 sm:text-sm"
                            />
                            {errors.questions?.[qIndex]?.name && <span className="text-red-500 text-sm">{errors.questions[qIndex]?.name?.message}</span>}
                        </div>

                        {question.answer.map((_, aIndex) => (
                            <div key={aIndex} className="flex items-center space-x-2">
                                <label className="block text-sm font-medium text-gray-700">Option {aIndex + 1}</label>
                                <input
                                    {...register(`questions.${qIndex}.answer.${aIndex}.option`, { required: 'Option is required' })}
                                    className="mt-1 block w-3/4 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-trivio-400 focus:border-trivio-400 sm:text-sm"
                                />
                                <Controller
                                    control={control}
                                    name={`questions.${qIndex}.answer.${aIndex}.isCorrect`}
                                    render={({ field }) => (
                                        <input
                                            type="checkbox"
                                            checked={field.value}
                                            onChange={e => field.onChange(e.target.checked)}
                                            className="h-4 w-4 text-trivio-400 border-gray-300 rounded focus:ring-trivio-400"
                                        />
                                    )}
                                />
                                {/* @ts-ignore */}
                                {errors.questions?.[qIndex]?.answer?.[aIndex]?.option && <span className="text-red-500 text-sm">{errors.questions[qIndex].answer[aIndex]?.option?.message}</span>}
                            </div>
                        ))}

                        {questionFields.length > 1 && (
                            <button
                                type="button"
                                onClick={() => removeQuestion(qIndex)}
                                className="mt-2 inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                            >
                                <Trash className="mr-1" /> Remove Question
                            </button>
                        )}
                    </div>
                ))}

              <div className='flex space-x-3'>
                    {questionFields.length < 10 && (
                        <button
                            type="button"
                            onClick={() => appendQuestion({
                                name: '',
                                answer: [
                                    { option: '', isCorrect: false },
                                    { option: '', isCorrect: false },
                                    { option: '', isCorrect: false },
                                    { option: '', isCorrect: false }
                                ]
                            })}
                            className="mt-4 inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-trivio-400 rounded-md hover:bg-trivio-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-trivio-400"
                        >
                            <PlusCircle className="mr-1" /> Add Question
                        </button>
                    )}

                    <button
                        type="submit"
                        className="mt-4 inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-trivio-400 rounded-md hover:bg-trivio-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-trivio-400"
                    >
                        Create Quiz
                    </button>
              </div>
            </form>
        </div>
    );
};

export default CreateQuizzpage;
