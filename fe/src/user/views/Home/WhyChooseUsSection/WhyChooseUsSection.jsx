import React from 'react';
import WhyChooseUsHeader from './WhyChooseUsHeader';
import FeatureGrid from './FeatureGrid';
import { features } from '../data/features';

const WhyChooseUsSection = () => {
    return (
        <section className="py-16">
            <WhyChooseUsHeader
                title="Vì sao nên chọn chúng tôi"
                subtitle="Điều khiến chúng tôi khác biệt"
            />
            <FeatureGrid features={features} />
        </section>
    );
};

export default WhyChooseUsSection;
