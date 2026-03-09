import React from 'react'
import Heading from './Heading'
import bgImage from "../assets/sectionBgImages/Cloudbg.png"
import hotAirBallon from "../assets/movingItems/hotballon-Left.png"
import hotAirBallon2 from "../assets/movingItems/hotballon-right.png"
import Carousel from './Carousel'

const PopularDestination = () => {
    return (
        /* FIX: Changed h-[100vh] to min-h-screen and added pb-32 to show the bg at the bottom */
        <div className="relative bg-cover bg-center bg-no-repeat w-full min-h-screen pb-32 overflow-hidden"
            style={{ backgroundImage: `url(${bgImage})` }}>

            {/* 1. TOP LEFT BALLOON */}
            <div className='absolute top-5 left-5 md:top-10 md:left-10 transform animate-slow-bounce z-10'>
                <img src={hotAirBallon} alt="hot air ballon" className="w-32 md:w-48" />
            </div>

            {/* HEADING  */}
            <Heading heading="Popular destination" subHeading="popular destination which user searched most" />

            {/* CAROUSEL*/}
            <div className='relative z-20'>
                <Carousel />
            </div>

            {/* 2. BOTTOM RIGHT BALLOON */}
            <div className='absolute bottom-0 right-5 md:right-10 transform animate-slow-bounce2 z-10'>
                <img src={hotAirBallon2} alt="hot air ballon" className="w-24 md:w-24" />
            </div>
        </div>
    )
}

export default PopularDestination