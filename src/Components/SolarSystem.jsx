const SolarSystem = () => {
    return (
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none overflow-hidden left-[30%] max-md:left-0 max-md:top-[10%] z-0">
            <div className="w-full h-full flex justify-center items-center">
                <svg viewBox="0 0 1000 1000" className="w-full h-full">
                    {/* Orbit 1 - Slowest */}
                    <g className="origin-[500px_500px] animate-[spin_20s_linear_infinite]">
                        <circle cx="500" cy="500" r="200" fill="none" stroke="#9f9b9b" strokeWidth="1" className="opacity-50" />
                        <circle cx="700" cy="500" r="16" className="fill-[#ffcc00]" />
                    </g>

                    {/* Orbit 2 - Medium */}
                    <g className="origin-[500px_500px] animate-[spin_14s_linear_infinite]">
                        <circle cx="500" cy="500" r="300" fill="none" stroke="#9f9b9b" strokeWidth="1" className="opacity-50" />
                        <circle cx="800" cy="500" r="20" className="fill-[#1ca9c2]" />
                    </g>

                    {/* Orbit 3 - Fastest */}
                    <g className="origin-[500px_500px] animate-[spin_10s_linear_infinite]">
                        <circle cx="500" cy="500" r="400" fill="none" stroke="#9f9b9b" strokeWidth="1" className="opacity-50" />
                        <circle cx="900" cy="500" r="24" className="fill-[#119f04]" />
                    </g>
                </svg>
            </div>
        </div>
    );
};

export default SolarSystem