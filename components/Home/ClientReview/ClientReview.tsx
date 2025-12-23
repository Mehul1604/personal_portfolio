'use-client'
import React from "react"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ClientReviewCard from "./ClientReviewCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 3,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

// boiler plate component
const ClientReview = () => {
    return (
        <div className='pt-20 pb-16'>
            <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
                Kind words from <br/> <span className='text-cyan-200'>my clients</span>
            </h1>
            <div className='mt-16 w-[70%] mx-auto'>
                <Carousel
                    showDots={false}
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                >
                    <ClientReviewCard image="/google_ceo_img.jpeg" name="Jane Doe" role="CEO, Google" />
                    <ClientReviewCard image="/meta_ceo_img.jpeg" name="John Doe" role="CEO, Meta" />
                    <ClientReviewCard image="/amazon_ceo_img.jpeg" name="Honey Doe" role="CEO, Amazon" />
                    <ClientReviewCard image="/openai_ceo_img.jpeg" name="Doe Doe" role="CEO, OpenAI" />
                    <ClientReviewCard image="/nvidia_ceo_img.jpeg" name="Row Doe" role="CEO, Nvidia" />
                </Carousel>
            </div>
        </div>
    );
};

export default ClientReview;