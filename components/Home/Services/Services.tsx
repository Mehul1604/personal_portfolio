'use client'
import React from "react";
import ServiceCard from "./ServiceCard/ServiceCard";

const Services = () => {
    return (
        <div id='services' className='pt-16 pb-16' data-aos='fade-right' data-aos-anchor-placement='top-center'>
            <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
                About Me — Areas of Expertise
            </h1>
            <p className='text-center text-base sm:text-lg md:text-lg lg:text-lg leading-relaxed text-zinc-300 mt-6 w-[90%] sm:w-[70%] mx-auto'>
                I am an AI and backend-focused software engineer with ~2 years of hands-on experience building scalable systems where intelligent models meet reliable infrastructure. Currently pursuing an M.S. in Computer Science at the University of Illinois Chicago, I’m deeply curious about distributed systems, cloud platforms, and production-ready AI.
            </p>
            <div className='w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20 items-center'>
                <div data-aos='fade-right' data-aos-anchor-placement='top-center'>
                    <ServiceCard 
                        icon="/ml_ai_icon.png"
                        name="AI & ML Engineering"
                        description="Design and productionize machine learning models and pipelines, focusing on reliable inference, model integration with backend services, and maintainable model ops."
                    />
                </div>
                <div data-aos='fade-right' data-aos-anchor-placement='top-center' data-aos-delay='100'>
                    <ServiceCard 
                        icon="/backend_dev_icon.jpg"
                        name="Backend & Distributed Systems"
                        description="Build APIs and microservices with attention to scalability, fault tolerance, and performance; design systems for observability and operational robustness."
                    />
                </div>
                <div data-aos='fade-right' data-aos-anchor-placement='top-center' data-aos-delay='200'>
                    <ServiceCard 
                        icon="/data_science_icon.jpg"
                        name="Cloud Platforms & Data"
                        description="Architect and operate data workflows and cloud deployments, focusing on reliable orchestration, storage strategies, and production-ready ML infrastructure."
                    />
                </div>
                <div data-aos='fade-right' data-aos-anchor-placement='top-center' data-aos-delay='300'>
                    <ServiceCard 
                        icon="/systems_icon.jpeg"
                        name="Systems Programming"
                        description="Develop performance-sensitive components with an emphasis on low-level efficiency, resource management, and correctness in systems-level code."
                    />
                </div>
            </div>
        </div>
    );
};

export default Services;