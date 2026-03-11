import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Heading from '../Components/Heading';

const Discover = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState([]);
    const [error, setError] = useState("");

    const [query, setQuery] = useState({
        month: 'October',
        budget: 'Medium',
        interests: []
    });

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const interestOptions = ["Beach", "Mountains", "Adventure", "Food", "History", "Nightlife", "Religious"];

    const handleInterestToggle = (interest) => {
        setQuery(prev => ({
            ...prev,
            interests: prev.interests.includes(interest)
                ? prev.interests.filter(i => i !== interest)
                : [...prev.interests, interest]
        }));
    };

    const handleDiscover = async () => {
        if (query.interests.length === 0) {
            setError("Please select at least one interest!");
            return;
        }

        setLoading(true);
        setError("");
        setResults([]); // Clear previous results

        try {
            const token = localStorage.getItem("token");
            const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/discover`, query, {
                headers: { Authorization: `Bearer ${token}` }
            });

            if (res.data.success) {
                // Check possible locations for recommendations
                const dataToSet = res.data.recommendations || res.data.data?.recommendations;
                if (dataToSet) {
                    setResults(dataToSet);
                } else {
                    setError("No recommendations found in response.");
                }
            }
        } catch (err) {
            console.error(err);
            // Provide  message if it's a rate limit exceed
            if (err.response?.status === 429) {
                setError("AI limit reached. Please wait a moment or try a different month/budget.");
            } else {
                setError(err.response?.data?.message || "Discover failed. Please check your connection.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen">
            <main className="max-w-6xl mx-auto p-8 md:p-12">
                <Heading
                    heading={`From "Stuck" to.`} colorHeading={`"Departing`}
                    subHeading="Tell us your vibe, and our AI will find your perfect match." />

                {/* FORM  */}
                <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 mb-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Month & Budget */}
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Travel Month</label>
                                <select
                                    value={query.month}
                                    onChange={(e) => setQuery({ ...query, month: e.target.value })}
                                    className="w-full p-4 bg-gray-50 border-none rounded-2xl outline-none focus:ring-2 focus:ring-orange-500 transition-all font-afacad text-lg"
                                >
                                    {months.map(m => <option key={m} value={m}>{m}</option>)}
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Budget Level</label>
                                <select
                                    value={query.budget}
                                    onChange={(e) => setQuery({ ...query, budget: e.target.value })}
                                    className="w-full p-4 bg-gray-50 border-none rounded-2xl outline-none focus:ring-2 focus:ring-orange-500 transition-all font-afacad text-lg"
                                >
                                    <option value="Low">Budget (Low)</option>
                                    <option value="Medium">Moderate (Mid)</option>
                                    <option value="High">Luxury (High)</option>
                                </select>
                            </div>
                        </div>

                        {/* Interests */}
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">What are you looking for?</label>
                            <div className="flex flex-wrap gap-3 pt-2">
                                {interestOptions.map(opt => (
                                    <button
                                        key={opt}
                                        onClick={() => handleInterestToggle(opt)}
                                        className={`px-5 py-2 rounded-full border-2 font-bold text-sm transition-all ${query.interests.includes(opt)
                                            ? 'bg-[#066168] border-[#066168] text-white'
                                            : 'bg-white border-gray-100 text-gray-400 hover:border-orange-500'
                                            }`}
                                    >
                                        {opt}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>


                    {/* to display proper error */}
                    {error && <p className="text-red-500 text-sm mt-4 font-bold">⚠️ {error}</p>}

                    <button
                        onClick={handleDiscover}
                        disabled={loading}
                        className="w-full mt-10 bg-[#066168] text-white py-4 rounded-2xl font-bold text-lg hover:bg-orange-500 transition-all shadow-lg active:scale-95 disabled:opacity-50"
                    >
                        {loading ? "AI is scouring the globe..." : "Discover Destinations →"}
                    </button>
                </div>

                {/* Only show this entire section if results exist */}
                {results.length > 0 && (
                    <>
                        <Heading
                            heading={"Found: Your Next Adventure."}
                            subHeading={"From local gems to global escapes, here are the best matches for your vibe."}
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {results.map((place, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white rounded-[1.5rem] p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all group flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="flex justify-between items-start">
                                            <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest ${place.type === 'Domestic' ? 'bg-blue-50 text-blue-600' : 'bg-purple-50 text-purple-600'
                                                }`}>
                                                {place.type}
                                            </span>
                                            <span className="text-orange-500 text-[10px] font-bold italic">{place.weather}</span>
                                        </div>
                                        <h3 className="text-lg font-bold text-[#346065] mt-3 font-afacad leading-tight">{place.name}</h3>
                                        <p className="text-gray-500 mt-3 text-xs leading-relaxed">{place.highlights}</p>
                                    </div>

                                    <div className="mt-6 pt-4 border-t border-gray-50 flex flex-col gap-3">
                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                                            Vibe: <span className="text-[#066168]">{place.budgetVibe}</span>
                                        </p>
                                        <button
                                            onClick={() => navigate('/aiPlanner', { state: { prefill: place.name } })}
                                            className="w-full bg-[#066168] text-white py-2 rounded-xl font-bold hover:bg-orange-500 transition-all text-xs"
                                        >
                                            Plan This Trip ✨
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </main>
        </div >
    );
};

export default Discover;