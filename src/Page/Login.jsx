import React from 'react'
import HeroSection2 from '../Components/HeroSection2'
import LoginForm from '../Components/LoginForm'
import Heading from '../Components/Heading'

const Login = () => {
    return (
        <>
            <HeroSection2 />
            <Heading heading={"Welcome Back, "} colorHeading={"Traveler"} subHeading={"The world is waiting for you. Log in to Travel Cart to continue exploring the most vibrant corners of India."} />
            <LoginForm />
        </>
    )
}

export default Login
