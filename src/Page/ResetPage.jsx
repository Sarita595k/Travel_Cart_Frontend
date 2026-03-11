import React from 'react'
import HeroSection from '../Components/HeroSection'
import ResetPassword from '../Components/ResetPassword'
import Heading from '../Components/Heading'

const ResetPage = () => {
    return (
        <div><HeroSection />
            <Heading heading={"Update Credentials"}
                subHeading={"Your security is our priority. Please enter and confirm your new password below."} />
            <ResetPassword />
        </div>
    )
}

export default ResetPage