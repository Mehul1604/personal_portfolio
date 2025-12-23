'use-client'
import React from "react"
import ResumeCard from "./ResumeCard";
import { FaCodepen } from "react-icons/fa6";
import { BsDatabaseFillGear } from "react-icons/bs";
import { LuBrainCircuit } from "react-icons/lu";
import { BiBadge } from "react-icons/bi";
import { MdCastForEducation } from "react-icons/md";

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
                        <ResumeCard Icon={FaCodepen} role="Software Intern"/>
                        <ResumeCard Icon={BsDatabaseFillGear} role="Backend Developer"/>
                        <ResumeCard Icon={LuBrainCircuit} role="Artificial Intelligence Intern"/>
                    </div>
                </div>
                {/* Education part */}
                <div>
                    <h1 className='text-3xl sm:text-4xl font-bold text-white'>My 
                        <span className='text-cyan-200'> Education</span>
                    </h1>
                    <div className='mt-10' data-aos='zoom-out' data-aos-anchor-placement='top-center' data-aos-delay='300'>
                        <ResumeCard Icon={BiBadge} role="M.S Computer Science, University of Illinois at Chicago" date="Aug 2024 - May 2026"/>
                        <ResumeCard Icon={MdCastForEducation} role="B.Tech Computer Science, IIIT-Hyderabad" date="Aug 2019 - May 2023"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;