'use client'
import React from "react";
import ServiceCard from "./ServiceCard/ServiceCard";
// boiler plate component

const Services = () => {
    return (
        <div className='pt-16 pb-16'>
            <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
                Collaborate with brands <br/> and agencies to create <br/> impactful results
            </h1>
            <div className='w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20 items-center'>
                <div data-aos='fade-right' data-aos-anchor-placement='top-center'>
                    <ServiceCard 
                        icon="/ml_ai_icon.png"
                        name="ML/AI Solutions"
                        description="Develop and deploy machine learning and AI models to solve complex problems and drive innovation."
                    />
                </div>
                <div data-aos='fade-right' data-aos-anchor-placement='top-center' data-aos-delay='100'>
                    <ServiceCard 
                        icon="/backend_dev_icon.jpg"
                        name="Backend Development"
                        description="Build robust and scalable backend systems using modern technologies and best practices."
                    />
                </div>
                <div data-aos='fade-right' data-aos-anchor-placement='top-center' data-aos-delay='200'>
                    <ServiceCard 
                        icon="/data_science_icon.jpg"
                        name="Data Science"
                        description="Leverage data to extract insights, build predictive models, and inform strategic decisions."
                    />
                </div>
                <div data-aos='fade-right' data-aos-anchor-placement='top-center' data-aos-delay='300'>
                    <ServiceCard 
                        icon="/systems_icon.jpeg"
                        name="C/C++ Systems Programming"
                        description="Design and implement high-performance systems and applications using C and C++."
                    />
                </div>
            </div>
        </div>
    );
};

export default Services;