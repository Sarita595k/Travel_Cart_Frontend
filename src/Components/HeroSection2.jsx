import bgImage from "../assets/Header/banner.jpg";
import balloonLeft from "../assets/movingItems/hotballon-Left.png";
import balloonRight from "../assets/movingItems/hotballon-right.png";
import airplaneImg from "../assets/movingItems/airplane.png";
import Cloud from "../assets/Header/CloudSubPages.png"
import Navbar from "./Navbar";
import GetInTouch from "./GetInTouch";
import HotAirBallon from "./HotAirBallon";

const HeroSection2 = () => {
    return (
        <section className="relative w-full h-screen overflow-hidden">
            <div className="absolute top-10 left-10 right-10 z-50">
                <Navbar /></div>
            <div className="absolute top-10 bottom-10 left-10 right-10 bg-black/20 z-20 rounded-2xl border border-white/10 overflow-hidden pointer-events-none"></div>

            {/*  Background Image */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-black/20"></div>
            </div>

            {/* Moving Airplane */}
            <div className="animate-airplane absolute top-[20%] z-10">
                <img src={airplaneImg} alt="airplane" className="w-32 md:w-56 object-contain" />
            </div>

            {/*  Hot Air Balloons */}
            <HotAirBallon />
            {/* cloud */}
            <div className="absolute top-[40vh] left-0 w-full h-[45vh] z-201 opacity-50 pointer-events-none animate-move-clouds">
                <img src={Cloud} alt="cloud" className="h-full object-contain" />
            </div>
            {/*  Hero Content */}
            <div className="relative z-30 flex flex-col items-center justify-center h-full text-white text-center px-6 pt-20 md:pt-0 pointer-events-none">
                <div className="pointer-events-auto max-w-full">
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-afacad drop-shadow-lg leading-tight">
                        Adventure <span className="text-orange-500">Awaits</span>
                    </h1>
                    <p className="mt-4 text-base sm:text-lg md:text-2xl font-afacad max-w-2xl mx-auto drop-shadow-md px-2">
                        Explore the hidden gems of India with our AI-powered travel Itineraries.
                    </p>
                    <GetInTouch value="Get In Touch" />
                </div>
            </div>

        </section>
    );
};
export default HeroSection2;