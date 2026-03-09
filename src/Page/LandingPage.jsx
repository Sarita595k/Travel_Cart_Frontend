import React from 'react'
import HeroSection from '../Components/HeroSection'
import Heading from '../Components/Heading'
import Card from '../Components/Card'

const LandingPage = () => {
    return (
        <div>
            <HeroSection />
            <Heading heading="Easy steps for finding itinerary" subHeading="find itinerary for any destination in the world" />
            <Card />
        </div>
    )
}

export default LandingPage