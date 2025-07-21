import React from 'react';

const HeroSlide = ({ slide }) => {
    return (
        <div className="relative min-w-full h-full">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col justify-center items-center text-center text-white p-8">
                <h2 className="text-5xl font-bold mb-2">{slide.title}</h2>
                <h3 className="text-2xl font-semibold mb-4">{slide.subtitle}</h3>
                <p className="max-w-2xl mb-8 text-lg">{slide.description}</p>
                <a
                    href={slide.ctaLink}
                    className="px-8 py-3 bg-red-600 text-white font-bold rounded-md hover:bg-red-700 transition-colors"
                >
                    {slide.cta}
                </a>
            </div>
        </div>
    );
};

export default HeroSlide;
