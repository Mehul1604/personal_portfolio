'use client'
import Image from "next/image"
import { BsArrowRight } from "react-icons/bs"
import TypeWriter from "typewriter-effect"
import ParticlesHero from "./ParticleBackground"

const Hero = () => {
  return (
    <div className='relative h-screen flex items-center justify-center text-white overflow-hidden flex-col'>
        <ParticlesHero />
        <div className='relative z-10 flex flex-col items-center'>
            <Image src="/portfolio_pic.jpg" alt="Hero Image" width={150} height={150} 
                className='rounded-full border-8 border-[#0c0c48aa]' data-aos='fade-up'
            />
            <h1 data-aos='fade-up' data-aos-delay='200' className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-6 text-center tracking-wide'>
                Creating Backend and <br/>
                ML/AI Solutions <span className='text-cyan-200'>and brands.</span>
            </h1>
            <h2 data-aos='fade-up' data-aos-delay='400' className='mt-5 text-sm px-2 text-center sm:text-2xl font-medium flex items-center'>
                Hi! I'm Mehul - A Passionate 
                <span className='text-cyan-200 font-bold'>
                    <TypeWriter options={{
                        strings: [' Backend Developer', ' ML/AI Enthusiast', ' Data Scientist'],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 50,
                        delay: 75,
                        wrapperClassName: 'pl-2',
                    }} />
                </span>
            </h2>
            <button data-aos='fade-up' data-aos-delay='600' className='mt-6 px-10 py-4 bg-blue-800 hover:bg-white hover:text-black transition-all duration-300
                cursor-pointer rounded-full text-lg font-medium
            '>
                <span>See my work</span>
                <BsArrowRight className='w-5 h-5 ml-2 inline-block'/>
            </button>
        </div>
    </div>
  )
}

export default Hero