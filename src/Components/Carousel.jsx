import React, { useState, useEffect, useCallback } from 'react';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

import img1 from "../assets/Carousel/pic1.jpg";
import img2 from "../assets/Carousel/pic2.jpg";
import img3 from "../assets/Carousel/pic3.jpg";
import img4 from "../assets/Carousel/pic4.jpg";

const sliderData = [
    { url: img1, title: "Maldives" },
    { url: img2, title: "Switzerland" },
    { url: img3, title: "Bali" },
    { url: img4, title: "Paris" },
    { url: img1, title: "Iceland" },
    { url: img2, title: "Tokyo" },
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleItems = 4;
    const maxIndex = sliderData.length - visibleItems;

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }, [maxIndex]);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);
        return () => clearInterval(interval);
    }, [nextSlide, currentIndex]);

    return (
        <div className="w-full max-w-[1240px] mx-auto px-4 pt-30 pb-2">

            {/* SLIDER VIEWPORT */}
            <div className="overflow-hidden rounded-2xl">
                <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }}
                >
                    {sliderData.map((item, index) => (
                        <div key={index} className="w-1/4 flex-shrink-0 px-2">
                            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                                <img
                                    src={item.url}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-6">
                                    <h3 className="text-white font-afacad text-xl font-bold">{item.title}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* BUTTONS: */}
            <div className="flex justify-center items-center gap-6 mt-8">
                <button
                    onClick={prevSlide}
                    className="bg-white text-[#346065] p-3 rounded-full shadow-md hover:bg-[#346065] hover:text-white transition-all border border-gray-200"
                >
                    <HiOutlineChevronLeft size={28} />
                </button>

                <button
                    onClick={nextSlide}
                    className="bg-white text-[#346065] p-3 rounded-full shadow-md hover:bg-[#346065] hover:text-white transition-all border border-gray-200"
                >
                    <HiOutlineChevronRight size={28} />
                </button>
            </div>
        </div>
    );
};

export default Carousel;