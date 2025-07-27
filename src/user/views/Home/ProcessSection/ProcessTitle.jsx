import React from 'react';

const ProcessTitle = ({ title }) => {
    return (
        <div className="text-center mb-6">
            <h2 className="text-3xl font-bold">{title}</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mt-4"></div>
        </div>
    );
};

export default ProcessTitle;
