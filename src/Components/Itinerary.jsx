import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useReactToPrint } from 'react-to-print';

const Itinerary = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [itinerary, setItinerary] = useState(location.state?.data);
    const [regeneratingDay, setRegeneratingDay] = useState(null);

    const [isFav, setIsFav] = useState(location.state?.data?.isFavorite || false);

    const pdfRef = useRef();

    useEffect(() => {
        if (!itinerary) { navigate('/aiPlanner'); }
    }, [itinerary, navigate]);

    // TOGGLE FAVORITE FUNCTION
    const handleFavorite = async () => {
        try {
            const token = localStorage.getItem("token");
            const res = await axios.put(`http://localhost:2100/api/itinerary/favorite/${itinerary._id}`, {}, {
                headers: { Authorization: `Bearer ${token}` }
            });

            if (res.data.success) {
                setIsFav(res.data.isFavorite);
                setItinerary({ ...itinerary, isFavorite: res.data.isFavorite });
            }
        } catch (err) {
            console.error("Favorite Error:", err.response?.data || err.message);
            alert("Login session expired. Please log in again.");
        }
    };

    const handleRegenerate = async (dayNum) => {
        setRegeneratingDay(dayNum);
        try {
            const token = localStorage.getItem("token");
            const res = await axios.post('http://localhost:2100/api/itinerary/updateDay', {
                tripId: itinerary._id,
                dayToChange: dayNum
            }, { headers: { Authorization: `Bearer ${token}` } });

            setItinerary(res.data.itinerary);
        } catch (err) {
            alert("Could not update day. Please try again.");
        } finally {
            setRegeneratingDay(null);
        }
    };

    const handlePrint = useReactToPrint({
        contentRef: pdfRef,
        documentTitle: `${itinerary?.destination}-Travel-Plan`,
    });

    if (!itinerary) return null;

    return (<>
        <div className="min-h-screen  py-16 px-6">
            <div className="max-w-6xl mx-auto space-y-8">
                <div className="flex justify-between items-center">
                    <button onClick={() => navigate(-1)} className="text-[#066168] font-bold hover:underline">← Back to Planner</button>
                    <div className="flex gap-4">
                        <button
                            onClick={handleFavorite}
                            className={`p-3 rounded-full shadow-md transition-all ${isFav ? 'bg-red-50 text-red-500' : 'bg-[#346065] text-gray-400'}`}
                        >
                            <span className="text-2xl">{isFav ? "❤️" : "🤍"}</span>
                        </button>
                        <button
                            onClick={handlePrint}
                            className="bg-[#066168] text-white px-6 py-2 rounded-full font-bold shadow-md hover:bg-orange-500 transition-all"
                        >
                            📥 Save as PDF
                        </button>
                    </div>
                </div>

                <div ref={pdfRef} id="pdf-wrapper" className="space-y-12 p-4">
                    <div className="bg-[#066168] text-white p-10 rounded-[3rem] shadow-2xl flex flex-col md:flex-row justify-between items-center">
                        <div className="text-left">
                            <h1 className="text-6xl font-bold font-afacad leading-tight capitalize">{itinerary.destination}</h1>
                            <p className="text-orange-400 font-bold text-2xl mt-2">
                                {itinerary.days} Days Journey • {itinerary.budgetType} Budget
                            </p>
                            <div className="mt-6 flex items-center gap-4">
                                <span className="bg-white/10 px-4 py-2 rounded-lg text-sm border border-white/20">
                                    Est. Budget: ${itinerary.totalEstimatedBudget}
                                </span>
                            </div>
                        </div>
                        <div className="mt-6 md:mt-0 bg-white/10 p-6 rounded-2xl backdrop-blur-md border border-white/20">
                            <h4 className="font-bold mb-2 text-orange-400 uppercase text-xs">Suggested Stays:</h4>
                            <ul className="space-y-3">
                                {itinerary.suggestedHotels.map((hotel, i) => (
                                    <li key={i} className="text-sm border-b border-white/10 pb-2 last:border-0">
                                        <p className="font-bold">{hotel.name}</p>
                                        <p className="text-xs text-white/60 italic">{hotel.priceRange}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="space-y-8">
                        {itinerary.plan.map((day, idx) => (
                            <div key={idx} className="bg-white rounded-[2rem] p-8 shadow-lg border-l-8 border-orange-500 relative transition-all">
                                <div className="flex justify-between items-start mb-6">
                                    <h3 className="text-3xl font-bold text-[#346065]">Day {day.day}</h3>
                                    <button
                                        onClick={() => handleRegenerate(day.day)}
                                        disabled={regeneratingDay === day.day}
                                        className="text-xs font-bold uppercase text-orange-500 hover:text-[#066168]"
                                    >
                                        {regeneratingDay === day.day ? "⏳ Refreshing..." : "🔄 Change Day"}
                                    </button>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="p-5 bg-orange-50 rounded-3xl">
                                        <span className="text-orange-600 font-bold text-xs uppercase">Morning</span>
                                        <p className="text-gray-700 mt-2 text-sm">{day.morning}</p>
                                    </div>
                                    <div className="p-5 bg-blue-50 rounded-3xl">
                                        <span className="text-blue-600 font-bold text-xs uppercase">Afternoon</span>
                                        <p className="text-gray-700 mt-2 text-sm">{day.afternoon}</p>
                                    </div>
                                    <div className="p-5 bg-purple-50 rounded-3xl">
                                        <span className="text-purple-600 font-bold text-xs uppercase">Evening</span>
                                        <p className="text-gray-700 mt-2 text-sm">{day.evening}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};

export default Itinerary;