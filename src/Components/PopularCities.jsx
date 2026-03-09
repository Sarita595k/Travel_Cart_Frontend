import React from 'react'
import Heading from './Heading'
import bgImage from "../assets/sectionBgImages/Cloudbg.png"
const PopularCities = () => {
    return (
        <div className="bg-cover bg-center bg-no-repeat brightness-125 w-full max-w-full h-[100vh]"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <Heading heading="Popular cities" subHeading="popular cities which user searched most" />
        </div>
    )
}

export default PopularCities