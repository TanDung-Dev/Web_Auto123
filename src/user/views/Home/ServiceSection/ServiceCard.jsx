import React from 'react';

const ServiceCard = ({ service }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:transform hover:scale-105">
            <div className="h-48 overflow-hidden">
                <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a
                    href="/services"
                    className="inline-block text-red-600 font-semibold hover:text-red-700"
                >
                    Xem thêm &rarr;
                </a>
            </div>
        </div>
    );
};

export default ServiceCard;
