import planeImg from "../assets/Header/Plane-With-Line.png";
import SolarSystem from "./SolarSystem";
import HeaderBg from "../assets/Header/bgVideo.webp";
import Cloud1 from "../assets/Header/Cloud1.png";
import Cloud2 from "../assets/Header/Cloud2.png";
import Lizard from "../assets/Header/lizard.png";
// import GetInTouch from "./GetInTouch";
import Navbar from "./Navbar";

const HeroSection = () => {
    return (
        <section className="relative w-full h-screen overflow-hidden flex flex-row items-center justify-evenly max-md:flex-col">

            {/*  BACKGROUND IMAGE */}
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-125 z-0"
                style={{ backgroundImage: `url(${HeaderBg})` }}
            ></div>

            {/*  COLOR OVERLAY */}
            <div className="absolute inset-0 bg-blue-900/50 mix-blend-multiply z-5"></div>

            {/* Navbar */}
            <div className="absolute top-10 bottom-10 left-10 right-10 bg-black/20 z-20 rounded-2xl border border-white/10 overflow-hidden flex flex-col pointer-events-none">

                {/* Navbar */}
                <div className="pointer-events-auto">
                    <Navbar />
                </div>

                {/* Main Content */}
                <div className="flex-1 flex flex-col justify-center items-center text-center text-white">
                    <h1 className="font-kaushan text-6xl md:text-8xl font-bold drop-shadow-2xl tracking-tighter">
                        TRAVEL CART
                    </h1>
                    <p className="font-afacad text-lg md:text-xl max-w-md font-light tracking-[0.3em] uppercase opacity-90">
                        AI-Powered Itineraries
                    </p>
                </div>
            </div>

            {/*  SOLAR SYSTEM */}
            <div className="absolute inset-0 z-15 flex items-center justify-center transform scale-125 lg:scale-150 pointer-events-none">
                <SolarSystem />
            </div>

            {/*  LIZARD IMAGE */}
            <div className="absolute -bottom-10 -left-10 w-80 h-80 z-40 pointer-events-none">
                <img src={Lizard} alt="Lizard" className="w-full h-full object-contain transform -rotate-12 drop-shadow-2xl animate-pulse" />
            </div>

            {/*  CLOUDS*/}
            <div className="absolute top-[-4vh] left-0 w-full h-[45vh] z-201 opacity-50 pointer-events-none animate-move-clouds">
                <img src={Cloud1} alt="cloud" className="h-full object-contain" />
            </div>
            <div className="absolute top-[30vh] left-0 w-full h-[45vh] z-201 opacity-50 pointer-events-none animate-[moveClouds_11s_linear_infinite]">
                <img src={Cloud2} alt="cloud" className="h-full object-contain" />
            </div>

            {/*  PLANE OVERLAY  */}
            <div className="absolute w-full h-[50vh] top-[25%] left-[40%] z-200 opacity-40 bg-no-repeat max-md:hidden pointer-events-none"
                style={{ backgroundImage: `url(${planeImg})`, backgroundSize: 'contain' }}
            ></div>
        </section>
    );
};

export default HeroSection;