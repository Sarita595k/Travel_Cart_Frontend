import planeImg from "../assets/Header/Plane-With-Line.png";
import SolarSystem from "./SolarSystem";
import HeaderBg from "../assets/Header/bgVideo.webp";
import Cloud1 from "../assets/Header/Cloud1.png";
import Cloud2 from "../assets/Header/Cloud2.png";
import Lizard from "../assets/Header/lizard.png";

const HeroSection = () => {
    return (
        <section className="relative w-full h-screen overflow-hidden flex flex-row items-center justify-evenly max-md:flex-col">

            {/* 1. BACKGROUND IMAGE: Increased brightness using brightness-125 */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-125 z-0"
                style={{ backgroundImage: `url(${HeaderBg})` }}
            ></div>

            {/* 2. COLOR OVERLAY: Light tint (e.g., a soft blue or dark tint) */}
            <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply z-5"></div>

            {/* 3. LIGHT TOP OVERLAY: A very subtle dark gradient to help text pop */}
            <div className="absolute inset-0 bg-black/10 z-10"></div>

            {/* 4. SOLAR SYSTEM: Placed behind the clouds but above the background */}
            <div className="absolute inset-0 z-15 flex items-center justify-center transform scale-125 lg:scale-150">
                <SolarSystem />
            </div>

            {/* 5. LIZARD IMAGE: Now on top of the overlays with z-[40] */}
            <div className="absolute -bottom-10 -left-10 w-80 h-80 z-40 pointer-events-none opacity-100">
                <img
                    src={Lizard}
                    alt="Lizard Decor"
                    className="w-full h-full object-contain transform -rotate-12 drop-shadow-2xl"
                />
            </div>

            {/* 6. CLOUDS & PLANE: Keeping their relative positions */}
            <div className="absolute top-[4vh] left-0 w-full h-[45vh] z-201 opacity-50 pointer-events-none animate-[moveClouds_15s_linear_infinite]">
                <img src={Cloud1} alt="cloud" className="h-full object-contain" />
            </div>

            <div className="absolute top-[30vh] left-0 w-full h-[50vh] z-22 opacity-40 pointer-events-none animate-[moveClouds_12s_linear_infinite]">
                <img src={Cloud2} alt="cloud" className="h-full object-contain" />
            </div>

            {/* 7. MAIN CONTENT */}
            <div className="relative z-[210] container mx-auto px-10 text-white">
                <h1 className="text-6xl md:text-8xl font-bold drop-shadow-2xl">
                    TRAVLLA
                </h1>
                <p className="text-xl mt-4 max-w-md font-light tracking-widest uppercase">
                    AI-Powered Itineraries
                </p>
            </div>

            {/* 8. PLANE OVERLAY */}
            <div
                className="absolute w-full h-[50vh] top-[35%] left-[20%] z-[200] opacity-40 bg-no-repeat max-md:hidden pointer-events-none"
                style={{ backgroundImage: `url(${planeImg})`, backgroundSize: 'contain' }}
            ></div>
        </section>
    );
};

export default HeroSection;