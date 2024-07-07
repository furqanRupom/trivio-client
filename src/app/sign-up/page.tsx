"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useSignInMutation, useSignUpMutation } from '@/redux/api/authApi';
import { useRouter } from 'next/navigation';
import { setLocalStorage } from '@/localStorage';
import { authKey } from '@/constants/constant';
import { setAccessToken } from '@/services/actions/setAccessToken';

interface ISignInPageProps {
}


interface ISignupPageProps {
    name: string;
    email: string;
    password: string
}

const SignUpPage: React.FunctionComponent<ISignInPageProps> = (props) => {
    const { register, handleSubmit } = useForm<ISignupPageProps>();
    const [getSignUp] = useSignUpMutation();
    const [getSignIn] = useSignInMutation();
    const router = useRouter();
    const handleSignUp = async (data: ISignupPageProps) => {
        try {

            const response = await getSignUp(data).unwrap();
            if (response.success) {
                const directSignIn = await getSignIn({
                    email: data.email,
                    password: data.password
                }).unwrap();

                if (directSignIn.success) {
                    toast.success('User created successfully !');
                    setLocalStorage(authKey, directSignIn.result.accessToken);
                    setAccessToken(directSignIn.result.accessToken, {
                        redirect: "/dashboard"
                    })

                }

            }



        } catch (error: any) {
            toast.error(error.message);
        }
    }
    return <>
        <section className="bg-white">
            <div className="grid grid-cols-1  lg:grid-cols-2 lg:max-w-5xl mx-auto min-h-screen">
                <div className="flex items-center w-full justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
                    <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Sign up to <span className='text-trivio-400'>Trivio.</span></h2>
                        <p className="mt-2 text-base text-gray-600">
                            Already have an account?{' '}
                            <Link href="/sign-in" title="" className="font-medium text-trivio-400 transition-all duration-200 hover:text-blue-700 hover:underline focus:text-blue-700">
                                Sign in
                            </Link>
                        </p>

                        <form onSubmit={handleSubmit(handleSignUp)} className="mt-8 w-full">
                            <div className="space-y-5 w-full">
                                <div>
                                    <label htmlFor="email" className="text-base font-medium text-gray-900">
                                        Name
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            {...register('name')}
                                            type="text"
                                            placeholder="Enter your Name"
                                            className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-trivio-400 focus:bg-white caret-trivio-400"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="text-base font-medium text-gray-900">
                                        Email address
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            {...register('email')}
                                            type="email"
                                            id="email"
                                            placeholder="Enter email to get started"
                                            className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-trivio-400 focus:bg-white caret-trivio-400"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="password" className="text-base font-medium text-gray-900">
                                            Password
                                        </label>

                                        <a href="#" title="" className="text-sm font-medium text-trivio-400 hover:underline hover:text-blue-700 focus:text-blue-700">
                                            Forgot password?
                                        </a>
                                    </div>
                                    <div className="mt-2.5">
                                        <input
                                            {...register('password')}
                                            type="password"
                                            id="password"
                                            placeholder="Enter your password"
                                            className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-trivio-400 focus:bg-white caret-trivio-400"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-trivio-400 border border-transparent rounded-md focus:outline-none hover:bg-trivio-50 focus:bg-trivio-50 hover:text-trivio-400"
                                    >
                                        Sign Up
                                    </button>
                                </div>
                            </div>
                        </form>


                    </div>
                </div>

                <div className=" items-center justify-center px-4 py-10 sm:py-16 lg:py-24  sm:px-6 lg:px-8 hidden lg:flex">
                    <div>
                        <Image
                            width={400} height={400}
                            className="w-full mx-auto"
                            src="https://i.ibb.co/yVT9P1L/7718875.png"
                            alt="Design your own card"
                        />


                    </div>
                </div>
            </div>
        </section>
    </>;
};

export default SignUpPage;
