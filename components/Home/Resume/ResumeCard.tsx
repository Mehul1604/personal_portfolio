'use client'
import React from "react"
import Image from 'next/image'
import { IconType } from "react-icons";

type ResumeCardProps = {
    Icon?: IconType;
    logo?: string;
    role: string;
    date?: string;
    tags?: string[];
    resumePoints?: string[];
    company?: string;
    link?: string;
}

const ResumeCard = ({ Icon, logo, role, date, tags, resumePoints, company, link }: ResumeCardProps) => {
    return (
        <div className='mb-6'>
            <div className='flex items-start space-x-6 bg-blue-950/20 transition-all duration-300 p-4 sm:p-8 rounded-md'>
                <div className='sm:w-28 sm:h-28 w-24 h-24 rounded-2xl flex items-center justify-center flex-col overflow-hidden bg-blue-950'>
                    {logo ? (
                        link ? (
                            <a href={link} target="_blank" rel="noopener noreferrer" aria-label={`Open ${company} website`}>
                                <Image src={logo} alt={`${role} logo`} width={96} height={96} className='w-full h-full object-cover' />
                            </a>
                        ) : (
                            <Image src={logo} alt={`${role} logo`} width={96} height={96} className='w-full h-full object-cover' />
                        )
                    ) : Icon ? (
                        Icon && <Icon className='sm:w-12 sm:h-12 w-10 h-10 text-white'/>
                    ) : null}
                </div>
                <div className='flex-1'>
                    {date && (
                        <h1 className='mb-2 sm:px-4 sm:py-1 px-3 py-0.5 rounded-full bg-gray-200 text-gray-600 w-fit sm:text-sm text-xs font-semibold'>
                            {date}
                        </h1>
                    )}
                    <h1 className='text-gray-200 text-xl sm:text-2xl font-semibold'>
                        {role}
                    </h1>
                    {company && (
                        <div className='text-gray-400 text-sm mt-1'>
                            @{company}
                        </div>
                    )}
                    {
                        resumePoints && resumePoints.length > 0 ? (
                            <ul className='list-disc list-inside text-gray-300 text-xs sm:text-sm md:text-sm pt-3 space-y-2 max-w-prose'>
                                {resumePoints.map((p, idx) => (
                                    <li key={idx} className='leading-relaxed'>
                                        {p}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className='text-gray-300 text-xs sm:text-sm md:text-sm pt-3'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        )
                    }
                    {tags && tags.length > 0 && (
                        <div className='mt-3 flex flex-wrap gap-2'>
                            {tags.map((t) => (
                                <span key={t} className='text-xs bg-gray-700/40 text-gray-200 px-2 py-0.5 rounded-md'>
                                    {t}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
}

export default ResumeCard;