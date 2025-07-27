import React from 'react';
import ServiceTitle from './ServiceTitle';
import ServiceGrid from './ServiceGrid';
import { services } from '../data/services';

const ServiceSection = () => {
    return (
        <section className="py-16">
            <ServiceTitle
                title="Chúng tôi cung cấp dịch vụ tốt nhất"
                subtitle="Dịch vụ chăm sóc xe chuyên nghiệp"
            />
            <ServiceGrid services={services} />
        </section>
    );
};

export default ServiceSection;
