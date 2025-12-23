'use client'
import Image from "next/image";
import React from "react";
// boiler plate component

type ServiceCardProps = {
    icon: string;
    name: string;
    description: string;
}

const ServiceCard = ({icon, name, description}: ServiceCardProps) => {
    return (
        <div className='pt-16 pb-16'>
            <Image src={icon} alt="img" width={60} height={60} />
            <h1 className='mt-6 text-xl md:text-2xl font-bold text-gray-200'>{name}</h1>
            <p className='mt-6 text-gray-300'>{description}</p>
        </div>
    );
};

export default ServiceCard;