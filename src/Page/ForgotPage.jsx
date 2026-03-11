import HeroSection from '../Components/HeroSection'
import Footer from "../Components/Footer"
import ForgotPassword from '../Components/ForgotPassword'
import Heading from '../Components/Heading'
const ForgotPage = () => {
    return (
        <div>
            <HeroSection />
            <Heading heading={"Don't let a password stop the journey."} subHeading={"Enter your email and we'll get your travel plans back on track."} />
            <ForgotPassword />
        </div>
    )
}

export default ForgotPage