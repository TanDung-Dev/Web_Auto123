import React from 'react';

const TeamInfo = ({ title, subtitle, description, features, ctaText, ctaLink }) => {
    return (
        <div className="w-full md:w-1/2">
            <h3 className="text-sm font-semibold text-red-600 uppercase tracking-wider mb-2">
                {subtitle}
            </h3>
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <p className="text-gray-600 mb-6">{description}</p>

            <ul className="space-y-3 mb-8">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                        <svg
                            className="h-6 w-6 text-green-500 mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>

            <a
                href={ctaLink}
                className="inline-block px-6 py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition-colors"
            >
                {ctaText}
            </a>
        </div>
    );
};

export default TeamInfo;
