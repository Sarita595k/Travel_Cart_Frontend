import React, { useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

import Heading from "./Heading"
import HotAirBallon from "./HotAirBallon"
import RotatingCircle from "./RotatingCircle"
import TravelImg from "../assets/movingItems/LeftGirlImage.png"
import formBg from "../assets/movingItems/form-bg.png"
import { useEffect } from 'react';

const AiForm = () => {
    const [formData, setFormData] = useState({
        destination: '',
        days: 3,
        budgetType: 'Moderate',
        interests: []
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(""); // Added error state
    const navigate = useNavigate();

    const interestOptions = ["Culture", "Adventure", "Food", "Nature", "Nightlife", "History", "snow"];
    const location = useLocation();

    useEffect(() => {
        if (location.state?.prefill) {
            setFormData(prev => ({ ...prev, destination: location.state.prefill }));
        }
    }, [location.state]);

    const handleInterestToggle = (interest) => {
        setError(""); // Clear error when user changes input
        setFormData(prev => ({
            ...prev,
            interests: prev.interests.includes(interest)
                ? prev.interests.filter(i => i !== interest)
                : [...prev.interests, interest]
        }));
    };

    const handleGenerate = async () => {
        setLoading(true);
        setError(""); // Reset error before new attempt

        try {
            const token = localStorage.getItem("token");
            const res = await axios.post(`${import.meta.env.VITE_BASE_URL}api/itinerary/generate-trip`, formData, {
                headers: { Authorization: `Bearer ${token}` }
            });

            if (res.data.success) {
                //  Navigate only if success is true
                navigate('/itinerary', { state: { data: res.data.itinerary } });
            }
        } catch (err) {
            // Handle Rate Limiter (429) 
            if (err.response?.status === 429) {
                setError(err.response.data.message || "Too many trips! Please wait 15 minutes.");
            } else {
                setError("AI is busy. Please try a different destination.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (<>
        <Heading heading={"AI-Powered Exploration"} subHeading={"From a single destination to a full itinerary in seconds. Get ready to explore the world."} />
        <div className="min-h-screen flex flex-col md:flex-row overflow-hidden">

            {/* --- LEFT SIDE: IMAGE --- */}
            <div className="hidden md:flex md:w-1/2 relative overflow-hidden">

                {/* background decoration */}
                <div className="absolute inset-0 z-10 pointer-events-none opacity-50">
                    <HotAirBallon />
                    <div className='ml-40 mt-10'><RotatingCircle /></div>
                </div>

                {/*  Main Girl Image */}
                <img
                    src={TravelImg}
                    alt="Travel Illustration"
                    className="absolute inset-0 w-full h-full object-contain z-20"
                />
            </div>

            {/* --- RIGHT SIDE: FORM --- */}
            <div
                className="w-full md:w-[45%] flex items-center justify-center p-6 md:p-12 lg:pr-24 relative overflow-hidden"
                style={{
                    backgroundColor: '#f8fafb', // Solid base color
                    backgroundImage: `url(${formBg})`,
                    backgroundPosition: 'bottom center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain' // Ensures the full image is visible at the bottom
                }}>
                <div className="w-full max-w-md space-y-6">

                    <div className="text-left">
                        <h2 className="text-3xl font-bold text-[#066168] font-afacad">
                            AI Travel <span className="text-orange-500 italic">Architect</span>
                        </h2>
                        <p className="text-gray-500 text-sm mt-1">Design your personalized journey in seconds.</p>
                    </div>

                    {error && (
                        <div className="p-3 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm font-bold rounded-r-xl animate-shake">
                            ⚠️ {error}
                        </div>
                    )}

                    <div className="space-y-5">
                        {/* Destination */}
                        <div className="space-y-1">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Destination</label>
                            <input
                                type="text"
                                placeholder="e.g. Kyoto, Japan"
                                className={`w-full px-5 py-3 rounded-xl bg-white border-2 outline-none font-afacad transition-all ${error ? 'border-red-200 focus:border-red-500' : 'border-gray-100 focus:border-orange-400 shadow-sm'}`}
                                onChange={(e) => {
                                    setError("");
                                    setFormData({ ...formData, destination: e.target.value });
                                }}
                            />
                        </div>

                        {/*  Days & Budget */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Duration (Days)</label>
                                <input
                                    type="number" min="1" max="10"
                                    value={formData.days}
                                    className="w-full px-5 py-3 rounded-xl bg-white border-2 border-gray-100 focus:border-orange-400 outline-none shadow-sm transition-all font-afacad"
                                    onChange={(e) => setFormData({ ...formData, days: e.target.value })}
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Budget Level</label>
                                <div className="relative">
                                    <select
                                        className="w-full px-5 py-3 rounded-xl bg-white border-2 border-gray-100 focus:border-orange-400 outline-none shadow-sm transition-all font-afacad appearance-none cursor-pointer"
                                        value={formData.budgetType}
                                        onChange={(e) => setFormData({ ...formData, budgetType: e.target.value })}
                                    >
                                        <option value="Low">Budget (Low)</option>
                                        <option value="Medium">Moderate (Mid)</option>
                                        <option value="High">Luxury (High)</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                                        ▼
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Interests */}
                        <div className="space-y-3">
                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Interests</label>
                            <div className="flex flex-wrap gap-2">
                                {interestOptions.map(opt => (
                                    <button
                                        key={opt}
                                        type="button"
                                        onClick={() => handleInterestToggle(opt)}
                                        className={`px-4 py-1.5 rounded-full border-2 text-xs transition-all font-bold ${formData.interests.includes(opt)
                                            ? 'bg-[#066168] border-[#066168] text-white shadow-md'
                                            : 'border-gray-100 bg-white text-gray-400 hover:border-orange-400 hover:text-orange-500'
                                            }`}
                                    >
                                        {opt}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <button
                            onClick={handleGenerate}
                            disabled={loading || !formData.destination}
                            className="w-full py-4 bg-[#066168] text-white rounded-xl text-lg font-bold transition-all active:scale-95 disabled:opacity-50 shadow-lg hover:bg-[#044a50] mt-4"
                        >
                            <span className="flex items-center justify-center gap-3">
                                {loading ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        Planning...
                                    </>
                                ) : (
                                    "Generate Trip →"
                                )}
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};


export default AiForm;