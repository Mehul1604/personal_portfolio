'use-client'
import Image from "next/image";
import React from "react";

type ClientReviewCardProps = {
    image: string;
    name: string;
    role: string;
}

const ClientReviewCard = ({image, name, role}: ClientReviewCardProps) => {
    return (
        <div className='m-2'>
            <Image src={image} alt="client_img" width={60} height={60} className='rounded-full' />
            <p className='mt-6 text-base text-gray-200 font-medium'>
                &quot; lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. &quot;
            </p>
            <h1 className='mt-6 text-xl font-bold text-cyan-200'>{name}</h1>
            <p className='mt-1 text-white'>{role}</p>
        </div>
    );
}

export default ClientReviewCard;