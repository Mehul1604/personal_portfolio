'use client'
import Image from "next/image"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import TypeWriter from "typewriter-effect"
import ParticlesHero from "./ParticleBackground"
import { SOCIAL_LINKS } from '../../../app/data'

const Hero = () => {
  return (
    <div className='relative h-screen flex items-center justify-center text-white overflow-hidden flex-col'>
        <ParticlesHero />
        <div className='relative z-10 flex flex-col items-center'>
            <Image src="/portfolio_pic.jpg" alt="Hero Image" width={150} height={150} 
                className='rounded-full border-8 border-[#0c0c48aa]' data-aos='fade-up'
            />
            <h1 data-aos='fade-up' data-aos-delay='200' className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-6 text-center tracking-wide'>
                Hi, I&apos;m Mehul Mathur
            </h1>
            <p data-aos='fade-up' data-aos-delay='300' className='mt-2 text-md text-zinc-300'>
                Software Engineer, He/him
            </p>
            <h2 data-aos='fade-up' data-aos-delay='400' className='mt-5 text-sm px-2 text-center sm:text-2xl font-medium flex items-center'>
                A Passionate 
                <span className='text-cyan-200 font-bold'>
                    <TypeWriter options={{
                        strings: [' Backend Developer', ' Machine Learning Engineer', ' Data Scientist'],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 50,
                        delay: 75,
                        wrapperClassName: 'pl-2',
                    }} />
                </span>
            </h2>
                        {
                            (() => {
                                const githubUrl = SOCIAL_LINKS.find(s => s.label.toLowerCase().includes('github'))?.link ?? '#'
                                const linkedinUrl = SOCIAL_LINKS.find(s => s.label.toLowerCase().includes('linkedin'))?.link ?? '#'

                                return (
                                    <div className='mt-6 flex gap-4 sm:gap-6 md:gap-8'>
                                        <a
                                            href={githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="View my GitHub"
                                            data-aos='fade-up'
                                            data-aos-delay='600'
                                            className='flex items-center px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-zinc-900 hover:bg-white hover:text-black transition-all duration-200 rounded-full text-sm sm:text-base md:text-lg font-medium'
                                        >
                                            <FaGithub className='w-4 h-4 sm:w-5 sm:h-5 mr-2' />
                                            <span className='leading-none'>See my code</span>
                                        </a>

                                        <a
                                            href={linkedinUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Connect on LinkedIn"
                                            data-aos='fade-up'
                                            data-aos-delay='700'
                                            className='flex items-center px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-blue-700 hover:bg-white hover:text-black transition-all duration-200 rounded-full text-sm sm:text-base md:text-lg font-medium'
                                        >
                                            <FaLinkedin className='w-4 h-4 sm:w-5 sm:h-5 mr-2' />
                                            <span className='leading-none'>Connect on LinkedIn</span>
                                        </a>
                                    </div>
                                )
                            })()
                        }
        </div>
    </div>
  )
}

export default Hero