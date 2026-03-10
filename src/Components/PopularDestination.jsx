import React from 'react'
import Heading from './Heading'
import bgImage from "../assets/sectionBgImages/Cloudbg.png"
import hotAirBallon from "../assets/movingItems/hotballon-Left.png"
import hotAirBallon2 from "../assets/movingItems/hotballon-right.png"
import Carousel from './Carousel'

const PopularDestination = () => {
    return (
        <div className="relative bg-cover bg-center bg-no-repeat w-full min-h-screen pb-32 overflow-hidden flex flex-col"
            style={{ backgroundImage: `url(${bgImage})` }}>

            {/* 1. TOP LEFT BALLOON */}
            <div className='absolute top-10 left-2 md:top-10 md:left-10 transform animate-slow-bounce z-10'>
                <img src={hotAirBallon} alt="hot air ballon" className="w-20 md:w-48 object-contain" />
            </div>

            {/* HEADING */}
            <div className="pt-10 md:pt-16 px-4 relative z-20 text-center">
                <div className="max-w-3xl mx-auto font-afacad">
                    <Heading
                        heading="Popular destination"
                        subHeading={`Explore the world’s most trending spots. 
                        From the serene backwaters of Kerala to the futuristic 
                        streets of Tokyo, we’ve analyzed thousands of user journeys 
                        to bring you the destinations everyone is dreaming about. 
                        Click any destination to generate your own personalized 
                        AI itinerary instantly.`}
                    />
                </div>
            </div>

            {/* CAROUSEL */}
            <div className='relative z-30 mt-0 md:mt-10'>
                <Carousel />
            </div>

            {/* 2. BOTTOM RIGHT BALLOON */}
            <div className='absolute bottom-5 right-2 md:right-10 transform animate-slow-bounce2 z-10'>
                <img src={hotAirBallon2} alt="hot air ballon" className="w-20 md:w-32 object-contain" />
            </div>

        </div>
    )
}

export default PopularDestination