import React from 'react';

const ProcessSteps = ({ steps }) => {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="relative">
                {/* Progress line */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300 z-0"></div>

                <div className="space-y-12 md:space-y-0">
                    {steps.map((step, index) => (
                        <div key={step.id} className="flex flex-col md:flex-row items-center">
                            <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:order-2 md:pl-12'}`}>
                                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                                <p className="text-gray-600">{step.description}</p>
                            </div>

                            <div className="my-4 md:my-0 md:w-14 flex justify-center items-center z-10">
                                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-red-600 text-white font-bold text-xl">
                                    {step.id}
                                </div>
                            </div>

                            {index % 2 !== 0 && <div className="md:w-1/2"></div>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProcessSteps;
