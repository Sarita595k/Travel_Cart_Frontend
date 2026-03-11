import car from "../assets/movingItems/Left-Car.png";
import tree from "../assets/movingItems/Righttreepic.png";

const MovingCar = () => {
    return (
        <section className="relative w-full h-40 md:h-[250px] overflow-hidden flex items-end bg-transparent">

            {/* Tree Section */}
            <div className="absolute right-6 md:right-10 bottom-0 z-10">
                <img src={tree} alt="tree" className="w-45 md:w-80 object-contain" />
            </div>

            {/* The Moving Car Container */}
            <div className="animate-car">
                <img src={car} alt="moving car" className="w-36 md:w-64 object-contain" />
            </div>
        </section>
    );
};

export default MovingCar;