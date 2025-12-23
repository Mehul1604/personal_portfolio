"use client"
import React from "react"
import ResumeCard from "./ResumeCard";
import { BiBadge } from "react-icons/bi";
import { MdCastForEducation } from "react-icons/md";
import { EDUCATION, WORK_EXPERIENCE } from '../../../app/data'

// boiler plate component
const Resume = () => {
    return (
        <div id='resume' className='pt-20 pb-16'>
            <div className='w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10'>
                {/* Work part */}
                <div>
                    <h1 className='text-3xl sm:text-4xl font-bold text-white'>My Work 
                        <span className='text-cyan-200'> Experience</span>
                    </h1>
                    <div className='mt-10' data-aos='zoom-in' data-aos-anchor-placement='top-center'>
                            {WORK_EXPERIENCE.map((w) => (
                                <ResumeCard
                                    key={w.id}
                                    logo={w.logo}
                                    role={w.title}
                                    date={`${w.start} - ${w.end}`}
                                    // @ts-ignore
                                    tags={w.tags}
                                    // @ts-ignore
                                    resumePoints={w.resumePoints}
                                    // @ts-ignore
                                    company={w.company}
                                    // @ts-ignore
                                    link={w.link}
                                />
                            ))}
                    </div>
                </div>
                {/* Education part */}
                <div>
                    <h1 className='text-3xl sm:text-4xl font-bold text-white'>My 
                        <span className='text-cyan-200'> Education</span>
                    </h1>
                    <div className='mt-10' data-aos='zoom-out' data-aos-anchor-placement='top-center' data-aos-delay='300'>
                        {EDUCATION.map((e) => (
                            <ResumeCard
                                key={e.id}
                                logo={e.logo}
                                role={e.university}
                                date={`${e.start} - ${e.end}`}
                                // @ts-ignore
                                tags={e.tags}
                                // @ts-ignore
                                resumePoints={e.resumePoints}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;