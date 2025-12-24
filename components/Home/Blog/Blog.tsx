'use-client'
import React from "react";
import BlogCard from "./BlogCard";
import { PUBLICATIONS } from "@/app/data";
// boiler plate component

const Blog = () => {

    return (
        <div className='pt-16 pb-16'>
            <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>
                My <span className='text-cyan-200'>Publications</span>
            </h1>
            <div className='w-[80%] mx-auto mt-12 space-y-8'>
                {PUBLICATIONS.map((p, i) => (
                    <div key={i} data-aos='fade-up' data-aos-delay={i * 80}>
                        <BlogCard title={p.title} description={p.description} journal={p.journal} link={p.link} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;