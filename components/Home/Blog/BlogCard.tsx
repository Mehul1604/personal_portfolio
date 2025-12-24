'use-client'
import React from "react";

type PublicationCardProps = {
    title: string;
    description: string;
    journal?: string;
    link: string;
}

const BlogCard = ({ title, description, journal, link }: PublicationCardProps) => {
    return (
        <div className='w-full'>
            <h1 className='mt-2 text-lg sm:text-xl font-bold text-white hover:underline hover:text-cyan-200 cursor-pointer transition-all duration-300'>
                {title}
            </h1>
            <p className='mt-3 text-gray-300 text-sm sm:text-base leading-relaxed'>
                {description}
            </p>

            <div className='mt-4 flex items-center justify-between'>
                <div className='inline-flex items-center'>
                    <span className='px-3 py-1 bg-gray-800 text-gray-200 text-xs sm:text-sm rounded-md'>
                        {journal}
                    </span>
                </div>

                <div>
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View paper: ${title}`}
                        className='inline-block px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-3 bg-zinc-900 text-white text-xs sm:text-sm md:text-sm rounded-md transition-colors duration-200 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-cyan-500'
                    >
                        View Paper
                    </a>
                </div>
            </div>
        </div>
    )
}

export default BlogCard;