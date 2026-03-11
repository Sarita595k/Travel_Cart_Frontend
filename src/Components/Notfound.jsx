import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center px-6">
            {/* Visual Element */}
            <div className="text-[#346065] mb-8">
                <svg className="w-64 h-64 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>

            <h1 className="text-9xl font-extrabold text-[#346065] tracking-widest relative">
                404
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl bg-orange-500 text-white px-2 rounded rotate-12 shadow-lg">
                    Lost?
                </span>
            </h1>

            <div className="text-center mt-8">
                <h2 className="text-3xl font-bold text-slate-800 mb-4">
                    Looks like you've wandered off the map!
                </h2>
                <p className="text-slate-500 mb-8 max-w-md mx-auto">
                    The destination you're looking for doesn't exist or has been moved to another coordinate. Let's get you back on track.
                </p>

                <Link
                    to="/"
                    className="inline-block bg-[#346065] hover:bg-orange-500 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-indigo-200"
                >
                    Return to Base Camp
                </Link>
            </div>
        </div>
    );
};

export default NotFound;