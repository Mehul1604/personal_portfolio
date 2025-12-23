'use-client'
import React from "react";
import { SiPython, SiPytorch, SiScala, SiSpringboot } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { BsFiletypeSql } from "react-icons/bs";
import Tilt from "react-parallax-tilt";

const skills = [
    {
        name: "Python",
        icon: <SiPython />,
        percentage: 90
    },
    {
        name: "Scala",
        icon: <SiScala />,
        percentage: 75
    },
    {
        name: "Java",
        icon: <FaJava />,
        percentage: 80
    },
    {
        name: "SQL",
        icon: <BsFiletypeSql />,
        percentage: 85
    },
    {
        name: "Pytorch",
        icon: <SiPytorch />,
        percentage: 70
    },
    {
        name: "SpringBoot",
        icon: <SiSpringboot />,
        percentage: 65
    },
    
]

const Skills = () => {
    return (
        <div id='skills' className='text-white pt-16 pb-16'>
            <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
                My Technical <span className='text-cyan-200'>Skills</span>
            </h1>
            <div className='flex flex-wrap justify-center gap-6 mt-16'>
                {skills.map((skill, i) => (
                    <Tilt key={skill.name} scale={1.5} transitionSpeed={400}>
                        <div data-aos='flip-right' data-aos-anchor-placement='top-center' data-aos-delay={i*100} className='bg-[#14134145] text-center w-40 h-48 rounded-3xl flex flex-col items-center
                            justify-center shadow-lg transition hover:scale-105'>

                            <div className='text-5xl mb-4 text-gray-300'>
                                {skill.icon}
                            </div>
                            <p className='text-2xl font-semibold'>{skill.percentage}%</p>
                            <p className='text-purple-400 mt-1'>{skill.name}</p>
                        </div>
                    </Tilt>
                ))} 
            </div>
        </div>
    );
}

export default Skills;