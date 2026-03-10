import bottomImg from "../assets/movingItems/travelImages.png"

const BottomTravelImage = () => {
    return (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-30 w-full max-w-[400px]">
            <img
                src={bottomImg}
                alt="bottom sites image"
                className="w-full object-contain"
            />
        </div>
    )
}

export default BottomTravelImage