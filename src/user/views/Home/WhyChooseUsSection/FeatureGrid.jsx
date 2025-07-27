import React from 'react';
import FeatureCard from './FeatureCard';

const FeatureGrid = ({ features }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
                <FeatureCard key={feature.id} feature={feature} />
            ))}
        </div>
    );
};

export default FeatureGrid;
