import circleBg from "../assets/movingItems/CircleShape.png"

const RotatingCircle = () => {
    return (
        <div
            className="absolute z-10 animate-[spin_20s_linear_infinite]"
            style={{
                backgroundImage: `url(${circleBg})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                width: '400px',
                height: '400px'
            }}
        ></div>
    )
}

export default RotatingCircle