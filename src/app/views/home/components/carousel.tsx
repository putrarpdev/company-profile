"use client"
import React, { useState } from 'react';

interface Testimonial {
  id: number;
  quote: string;
  authorName: string;
  authorTitle: string;
  authorImage: string;
}

interface CarouselProps {
  testimonials: Testimonial[];
}

function Carousel(props: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function prevSlide() {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? props.testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  function nextSlide() {
    const isLastSlide = currentIndex === props.testimonials.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="overflow-hidden relative">
        <div
          className={`flex w-[${100 * props.testimonials.length}%] transition-transform duration-300`}
          style={{ transform: `translateX(-${currentIndex * 100 / props.testimonials.length}%)` }}
        >
          {props.testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full h-auto p-4">
              <figure className="md:max-w-screen-lg md:mx-auto">
                <div className="flex flex-auto items-start mb-4 text-yellow-300">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 me-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  ))}
                </div>
                <blockquote>
                  <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {testimonial.quote}
                  </p>
                </blockquote>
                <figcaption className="flex items-center mt-6 space-x-3 rtl:space-x-reverse">
                  <img
                    className="w-6 h-6 rounded-full"
                    src={testimonial.authorImage}
                    alt="profile picture"
                  />
                  <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-300 dark:divide-gray-700">
                    <cite className="pe-3 font-medium text-gray-900 dark:text-white">
                      {testimonial.authorName}
                    </cite>
                    <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.authorTitle}
                    </cite>
                  </div>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 pr transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-md focus:outline-none"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-md focus:outline-none"
      >
        &#10095;
      </button>
    </div>
  );
}

export default Carousel;
