import balloonLeft from "../assets/movingItems/hotballon-Left.png";
import balloonRight from "../assets/movingItems/hotballon-right.png";

const HotAirBallon = () => {
    return (
        <div> <div className='absolute top-24 left-14 md:top-32 md:left-20 transform animate-slow-bounce z-10'>
            <img src={balloonLeft} alt="hot air balloon" className="w-20 md:w-48 object-contain" />
        </div>

            <div className='absolute bottom-16 right-14 md:right-20 transform animate-slow-bounce2 z-10'>
                <img src={balloonRight} alt="hot air balloon" className="w-20 md:w-32 object-contain" />
            </div></div>
    )
}

export default HotAirBallon