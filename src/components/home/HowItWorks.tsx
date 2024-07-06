// HowItWorksSection.tsx

import React from 'react';
import { ArrowRight } from 'lucide-react'; // Import Lucide React icon

const HowItWorksSection: React.FC = () => {
    return (
        <section className="bg-white py-16 max-w-7xl mx-auto">
            <div className="container mx-auto">
                <div className="flex flex-col items-center gap-16">
                    <div className="text-center">
                        <h3 className="text-3xl sm:text-4xl lg:text-5xl text-zinc-700  text-center font-bold">How<span className="text-trivio-400"> Trivio.</span> works</h3>
                        <p className="text-base font-medium leading-7 text-gray-600 mt-4">
                            Explore how to get started with Trivio and start creating quizzes in minutes.
                        </p>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8 xl:gap-10 w-full">
                        <StepCard
                            stepNumber={1}
                            title="Create Your Account"
                            description="Sign up for a Trivio account to gain access to our quiz creation tools."
                        />
                        <div className="hidden lg:block transform rotate-90">
                            <ArrowRight size={42} strokeWidth={1.5} color="#68769F" />
                        </div>
                        <StepCard
                            stepNumber={2}
                            title="Set Up Your Profile"
                            description="Personalize your profile settings and preferences to match your quiz creation style."
                        />
                        <div className="hidden lg:block transform rotate-90">
                            <ArrowRight size={42} strokeWidth={1.5} color="#68769F" />
                        </div>
                        <StepCard
                            stepNumber={3}
                            title="Start Creating Quizzes"
                            description="Begin crafting your first quiz by adding questions and answers  and customizing the quiz settings."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

interface StepCardProps {
    stepNumber: number;
    title: string;
    description: string;
}

const StepCard: React.FC<StepCardProps> = ({ stepNumber, title, description }) => {
    return (
        <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-blue-500 hover:bg-purple-blue-600 focus:bg-purple-blue-700 transition duration-300">
                <span className="text-base font-bold leading-7 text-white">{stepNumber}</span>
            </div>
            <div className="flex flex-col">
                <h3 className="text-base font-bold leading-tight text-gray-900 mb-2">{title}</h3>
                <p className="text-base font-medium leading-7 text-gray-600">{description}</p>
            </div>
        </div>
    );
};

export default HowItWorksSection;
