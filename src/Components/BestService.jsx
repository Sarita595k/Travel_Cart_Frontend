import React from 'react'
import girlBg from "../assets/movingItems/girlsImage.png"
import circleBg from "../assets/movingItems/CircleShape.png"
import bottomImg from "../assets/movingItems/travelImages.png"

const BestService = () => {
    return (
        <div className='flex flex-col lg:flex-row bg-[#066168] min-h-screen relative overflow-hidden px-4 py-10'>

            {/* Left side image */}
            <div className="relative flex justify-center items-center w-full lg:w-1/2 min-h-[500px]">

                {/* rotating Circle */}
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

                {/* girls Image */}
                <img
                    src={girlBg}
                    alt="girls image"
                    className="relative z-20 w-auto h-[450px] object-contain"
                />

                {/* 3. Bottom Sites Image */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-30 w-full max-w-[400px]">
                    <img
                        src={bottomImg}
                        alt="bottom sites image"
                        className="w-full object-contain"
                    />
                </div>
            </div>

            {/* right side Text Content */}
            <div className="flex flex-col justify-center text-white lg:w-1/2 p-8 lg:p-16 md:text-center">
                <h1 className="relative inline-block text-4xl md:text-6xl font-bold mb-8 font-afacad">
                    <span className="absolute -left-10 -top-6 text-orange-500 text-6xl md:text-8xl font-serif italic opacity-80 select-none animate-pulse">“</span>
                    Travel Planning, Reimagined by AI.
                    <span className="absolute -right-10 -bottom-10 text-orange-500 text-6xl md:text-8xl font-serif italic opacity-80 select-none animate-pulse">”</span>
                </h1>
                <h4 className="text-xl md:text-xl opacity-80 font-afacad capitalize">
                    Say goodbye to hours of research and endless tabs. Our advanced AI
                    engine crafts personalized, high-quality itineraries in seconds.
                    Whether you’re looking for a luxury getaway or a budget-friendly
                    adventure, we analyze millions of data points to deliver a seamless
                    travel experience tailored specifically to your interests.
                    Your dream trip is just one click away.
                </h4>
            </div>

        </div>
    )
}

export default BestService