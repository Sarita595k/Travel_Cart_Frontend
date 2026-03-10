import React, { useState, useEffect, useCallback } from 'react';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

import img10 from "../assets/Carousel/pic1.jpg";
import img2 from "../assets/Carousel/pic2.jpg";
import img3 from "../assets/Carousel/pic3.jpg";
import img4 from "../assets/Carousel/pic4.jpg";
import img5 from "../assets/Carousel/pic9.webp";
import img6 from "../assets/Carousel/pic6.jpg";
import img7 from "../assets/Carousel/pic7.png";
import img8 from "../assets/Carousel/pic8.jpg";
import img9 from "../assets/Carousel/pic5.jpg";
import img1 from "../assets/Carousel/pic10.jpg";

const sliderData = [
    {
        url: img1, title: "Punjab",
        tagline: "Heart of the Five Rivers and vibrant hospitality.",
        bestFor: "Culture & Food", interests: "History, Dhaba Food, Heritage"
    },
    {
        url: img2, title: "Tokyo",
        tagline: "Where neon lights meet ancient traditions.",
        bestFor: "Urban Adventure", interests: "Foodie, Tech, Culture, Anime"
    },
    {
        url: img3, title: "Vietnam",
        tagline: "Timeless landscapes and flavorsome street food.",
        bestFor: "Budget Adventure", interests: "Backpacking, Nature, Street Food"
    },
    {
        url: img4, title: "Bali",
        tagline: "The island of Gods and endless sunsets.",
        bestFor: "Relaxation & Soul", interests: "Wellness, Nature, Surfing, Temples"
    },
    {
        url: img5, title: "Rajasthan",
        tagline: "A majestic journey through the Land of Kings.",
        bestFor: "Heritage & Royalty", interests: "Palaces, Deserts, Folk Art, History"
    },
    {
        url: img6, title: "Spain",
        tagline: "Sun-drenched coasts and architectural wonders.",
        bestFor: "Art & Nightlife", interests: "Tapas, Architecture, Flamenco, Beaches"
    },
    {
        url: img7, title: "Kerala",
        tagline: "Serene backwaters in God’s Own Country.",
        bestFor: "Nature & Peace", interests: "Ayurveda, Houseboats, Spices, Greenery"
    },
    {
        url: img8, title: "Uttar Pradesh",
        tagline: "The cradle of Indian spirituality and the iconic Taj.",
        bestFor: "Spirituality & Icons", interests: "Monuments, Ghats, Architecture, Faith"
    },
    {
        url: img9, title: "Japan",
        tagline: "Breathtaking landscapes from Fuji to Kyoto.",
        bestFor: "Nature & Zen", interests: "Mountains, Gardens, Tea Ceremony, Skiing"
    },
    {
        url: img10, title: "Maldives",
        tagline: "Crystal clear waters and private island luxury.",
        bestFor: "Luxury & Romance", interests: "Diving, Snorkeling, Privacy, Beaches"
    },
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleItems, setVisibleItems] = useState(4);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) setVisibleItems(1);
            else if (window.innerWidth < 1024) setVisibleItems(2);
            else setVisibleItems(4);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const maxIndex = sliderData.length - visibleItems;

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, [maxIndex]);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    };
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            nextSlide();
        }, 3000);

        return () => clearInterval(interval);
    }, [nextSlide, currentIndex, isPaused]);
    return (
        <div className="w-full max-w-[1240px] mx-auto px-4 pt-10 md:pt-20 lg:pt-30 pb-2">
            <div
                className="overflow-hidden rounded-2xl"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}>
                <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }}>
                    {sliderData.map((item, index) => (
                        <div key={index} className="w-full sm:w-1/2 lg:w-1/4 flex-shrink-0 px-2">
                            <div className="relative h-72 md:h-100 rounded-2xl overflow-hidden shadow-lg border border-gray-100 group cursor-pointer">

                                {/* 1. Main Image */}
                                <img
                                    src={item.url}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4 md:p-6 transition-opacity duration-300 group-hover:opacity-0">
                                    <h3 className="text-white font-afacad text-lg md:text-2xl font-bold">{item.title}</h3>
                                </div>

                                {/* 3. hover details overlay */}
                                <div className="absolute inset-0 bg-[#346065]/90 flex flex-col justify-center items-center text-center p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                    <h3 className="text-white font-bold text-2xl mb-2 border-b border-white/30 pb-2 w-full">
                                        {item.title}
                                    </h3>
                                    <p className="text-orange-200 italic text-sm mb-4">
                                        "{item.tagline}"
                                    </p>

                                    <div className="text-white text-sm space-y-2">
                                        <p><span className="font-bold text-orange-300">Best For:</span> {item.bestFor}</p>
                                        <p><span className="font-bold text-orange-300">Interests:</span> {item.interests}</p>
                                    </div>

                                    <button className="mt-6 bg-white text-[#346065] px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-orange-400 hover:text-white transition-colors">
                                        Explore Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* BUTTONS */}
            <div className="flex justify-center items-center gap-6 mt-8">
                <button
                    onClick={prevSlide}
                    className="bg-white text-[#346065] p-2 md:p-3 rounded-full shadow-md hover:bg-[#346065] hover:text-white transition-all border border-gray-200"
                >
                    <HiOutlineChevronLeft className="text-xl md:text-2xl" />
                </button>

                <button
                    onClick={nextSlide}
                    className="bg-white text-[#346065] p-2 md:p-3 rounded-full shadow-md hover:bg-[#346065] hover:text-white transition-all border border-gray-200"
                >
                    <HiOutlineChevronRight className="text-xl md:text-2xl" />
                </button>
            </div>
        </div>
    );
};

export default Carousel;