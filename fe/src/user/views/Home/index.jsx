
import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import ServiceSection from "./ServiceSection/ServiceSection";
import ProcessSection from "./ProcessSection/ProcessSection";
import TeamSection from "./TeamSection/TeamSection";
import ProductSection from "./ProductSection/ProductSection";
import BenefitsStrip from "./BenefitsStrip/BenefitsStrip";
import WhyChooseUsSection from "./WhyChooseUsSection/WhyChooseUsSection";
import NewsSection from "./NewsSection/NewsSection";
import ProjectSection from "./ProjectSection/ProjectSection";

const FullHome = () => {
    return (
        <div className="flex flex-col">
            <HeroSection />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col">
                <ServiceSection />
                <ProcessSection />
                <TeamSection />
                <ProductSection />
                <BenefitsStrip />
                <WhyChooseUsSection />
                <NewsSection />
                <ProjectSection />
            </div>
        </div>
    );
};

export default FullHome;
