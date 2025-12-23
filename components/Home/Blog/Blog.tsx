'use-client'
import React from "react";
import BlogCard from "./BlogCard";
// boiler plate component

const Blog = () => {
    return (
        <div className='pt-16 pb-16'>
            <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>
                My <span className='text-cyan-200'>Blogs</span>
            </h1>
            <div className='w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-3 xl:gap-4 gap-10 
               items-center mt-16'>
                <div data-aos='fade-right' data-aos-anchor-placement='top-center'>
                    <BlogCard image="/ai_blog_img.jpeg" title="How to learn AI in 2026"/>
                </div>
                <div data-aos='fade-right' data-aos-anchor-placement='top-center' data-aos-delay='100'>
                    <BlogCard image="/cloud_blog_img.jpeg" title="Getting a Cloud Engineer job - what to expect"/>
                </div>
                <div data-aos='fade-right' data-aos-anchor-placement='top-center' data-aos-delay='200'>
                    <BlogCard image="/data_science_blog_img.jpeg" title="Ultimate Guide to Data Science"/>
                </div>
            </div>
        </div>
    );
};

export default Blog;