import LeftMan from "../assets/movingItems/LeftManImage.png"
import BottomTravelImage from "../Components/BottomTravelImage";
import RotatingCircle from "../Components/RotatingCircle";

const LeftSideMan = () => {
    return (
        <div className="hidden lg:flex w-1/2 relative items-center justify-center overflow-hidden">
            <div className="relative w-[400px] h-[400px] flex items-center justify-center">
                <div className="absolute z-0 scale-75 opacity-100 left-10">
                    <RotatingCircle />
                </div>
                <img
                    src={LeftMan}
                    className="relative z-10 w-64 h-auto object-contain animate-float"
                    alt="Travel Illustration"
                />
            </div>
            <div className="absolute bottom-0 w-full z-20 scale-105 pointer-events-none">
                <BottomTravelImage />
            </div>
        </div>
    )
}

export default LeftSideMan