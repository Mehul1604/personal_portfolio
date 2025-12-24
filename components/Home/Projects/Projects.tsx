'use-client'
import Image from "next/image";
import React from "react"
import Tilt from 'react-parallax-tilt'
// boiler plate component

const Projects = () => {
    return (
        <div id='projects' className='pt-20 pb-16'>
            <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
                A small selection of <br/> <span className='text-cyan-200'>interesting projects I've worked on</span> 
            </h1>
            <div className='w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16'>
                {/* Project 1 */}
                <div data-aos='fade-up' data-aos-anchor-placement='top-center'>
                    <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} className="w-full">
                        <a href="https://github.com/Mehul1604/cs441-hw1-rag-builder" target="_blank" rel="noopener noreferrer" className='block'>
                            <Image src="/cloud_img.jpg" alt="img" width={800} height={650} className='rounded-lg object-cover transition-transform duration-300 group-hover:scale-105'/>
                            <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white hover:underline hover:text-cyan-200 cursor-pointer transition-all duration-200'>
                                Cloud-Native RAG Application with VectorDB and LLM Integration
                            </h1>
                            <h1 className='pt-2 font-medium text-white/80'>
                                Scala, Hadoop, AWS
                            </h1>
                        </a>
                    </Tilt>
                </div>
                {/* Project 2 */}
                <div data-aos='fade-up' data-aos-anchor-placement='top-center' data-aos-delay='100'>
                    <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} className="w-full">
                        <a href="https://github.com/asaras2/Dynamic-Query-Visualization" target="_blank" rel="noopener noreferrer" className='block'>
                            <Image src="/multiagent_img.jpg" alt="img" width={800} height={650} className='rounded-lg object-cover transition-transform duration-300 group-hover:scale-105'/>
                            <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white hover:underline hover:text-cyan-200 cursor-pointer transition-all duration-200'>
                                Multi-Agent AI System to generate SQL and Graphs from Natural Language
                            </h1>
                            <h1 className='pt-2 font-medium text-white/80'>
                                Python, Langgraph, LLMs
                            </h1>
                        </a>
                    </Tilt>
                </div>
                {/* Project 3 */}
                <div data-aos='fade-up' data-aos-anchor-placement='top-center' data-aos-delay='200'>
                    <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} className="w-full">
                        <a href="https://github.com/Mehul1604/Among_Us-2D" target="_blank" rel="noopener noreferrer" className='block'>
                            <Image src="/2d_maze_img.jpg" alt="img" width={800} height={650} className='rounded-lg object-cover transition-transform duration-300 group-hover:scale-105'/>
                            <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white hover:underline hover:text-cyan-200 cursor-pointer transition-all duration-200'>
                                2D Maze Game in C++ with BFS Pathfinding Algorithm
                            </h1>
                            <h1 className='pt-2 font-medium text-white/80'>
                                C++, BFS, OpenGL
                            </h1>
                        </a>
                    </Tilt>
                </div>
                {/* Project 4 */}
                <div data-aos='fade-up' data-aos-anchor-placement='top-center' data-aos-delay='300'>
                    <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} className="w-full">
                        <a href="https://github.com/Mehul1604/Whatsapp-Chat-Generator" target="_blank" rel="noopener noreferrer" className='block'>
                            <Image src="/whatsapp_chatbot_img.png" alt="img" width={800} height={650} className='rounded-lg object-cover transition-transform duration-300 group-hover:scale-105'/>
                            <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white hover:underline hover:text-cyan-200 cursor-pointer transition-all duration-200'>
                                Personalized WhatsApp Chatbot using LSTM 
                            </h1>
                            <h1 className='pt-2 font-medium text-white/80'>
                                Chatbots, Python, Deep Learning
                            </h1>
                        </a>
                    </Tilt>
                </div>
            </div>
        </div>
    );
}

export default Projects;