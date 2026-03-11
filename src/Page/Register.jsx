import React from 'react'
import HeroSection2 from '../Components/HeroSection2'
import RegisterForm from '../Components/RegisterForm'
import Heading from '../Components/Heading'

const Register = () => {
    return (
        <>
            <HeroSection2 />
            <Heading heading={"Begin Your Adventure"}
                subHeading={"Create an account to unlock AI-powered itineraries and discover the hidden gems of Incredible India."} />
            <RegisterForm />
        </>
    )
}

export default Register