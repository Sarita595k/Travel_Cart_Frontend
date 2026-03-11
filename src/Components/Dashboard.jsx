import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import DashboardNavbar from './DashboardNavbar';
import ManRock from "../assets/movingItems/man-rock.png"

const Dashboard = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));

    const [trips, setTrips] = useState([]); // Currently displayed list
    const [stats, setStats] = useState({ total: 0, favorites: 0 });
    const [viewMode, setViewMode] = useState("all"); // "all" or "favorites"
    const [loading, setLoading] = useState(false);

    // Main fetch function that handles filters
    const fetchTrips = async (isFavorite = false) => {
        setLoading(true);
        try {
            const token = localStorage.getItem("token");
            // appends ?isFavorite=true if the favorites card was clicked
            const url = `${import.meta.env.VITE_BASE_URL}api/itinerary/my-trips${isFavorite ? '?isFavorite=true' : ''}`;

            const res = await axios.get(url, {
                headers: { Authorization: `Bearer ${token}` }
            });

            if (res.data.success) {
                setTrips(res.data.trips);

                // updating count 
                if (!isFavorite) {
                    const favCount = res.data.trips.filter(t => t.isFavorite).length;
                    setStats({ total: res.data.count, favorites: favCount });
                }
            }
        } catch (err) {
            console.error("Error fetching trips:", err);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchTrips(false);
    }, []);

    const handleViewAll = () => {
        setViewMode("all");
        fetchTrips(false);
    };

    const handleViewFavorites = () => {
        setViewMode("favorites");
        fetchTrips(true);
    };
    const handleDelete = async (event, tripId) => {
        event.stopPropagation(); // Prevents navigating to the trip details

        if (!window.confirm("Are you sure you want to delete this journey?")) return;

        try {
            const token = localStorage.getItem("token");
            const res = await axios.delete(`${import.meta.env.VITE_BASE_URL}api/itinerary/${tripId}`, {
                headers: { Authorization: `Bearer ${token}` }
            });

            if (res.data.success) {
                // Remove the trip from the local state
                setTrips(prev => prev.filter(trip => trip._id !== tripId));

                // Update count
                setStats(prev => ({
                    ...prev,
                    total: prev.total - 1,
                    // If it was a favorite, decrease favorite count too
                    favorites: trips.find(t => t._id === tripId)?.isFavorite ? prev.favorites - 1 : prev.favorites
                }));
            }
        } catch (err) {
            console.error("Delete failed:", err);
            alert("Could not delete the trip. Please try again.");
        }
    };
    const handleLogout = () => {
        localStorage.clear();
        navigate('/login');
    };

    return (
        <div className="min-h-screen flex">
            {/* Sidebar */}
            <aside
                className="w-70 text-white flex flex-col p-6 hidden md:flex min-h-screen"
                style={{
                    backgroundImage: `url(${ManRock}), linear-gradient(to bottom, #066168, #066168)`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'top center',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: '#346065'
                }}
            >
                <h1 className="text-2xl font-bold font-afacad mb-10">
                    Travel <span className="text-orange-500 italic">Cart</span>
                </h1>

                <nav className="flex-1 space-y-4 relative z-10">
                    <button
                        onClick={handleViewAll}
                        className={`w-full text-left p-3 rounded-xl transition-all ${viewMode === 'all' ? 'bg-white/20 font-bold' : 'hover:bg-white/10'}`}>🏠 My Itineraries
                    </button>
                    <button
                        onClick={handleViewFavorites}
                        className={`w-full text-left p-3 rounded-xl transition-all ${viewMode === 'favorites' ? 'bg-white/20 font-bold' : 'hover:bg-white/10'}`}>
                        ❤️ Favorites
                    </button>
                </nav>

                <button
                    onClick={handleLogout}
                    className="mt-auto p-3 bg-orange-500 rounded-xl font-bold hover:bg-orange-600 transition-all relative z-10">
                    Logout
                </button>
            </aside>

            <main className="flex-1 p-8 md:p-12 overflow-y-auto">
                <header className="flex justify-between items-center mb-10">
                    <div>
                        <h2 className="text-3xl font-bold text-[#346065] capitalize">welcome to Your AI Travel Command Center, {user?.name}!</h2>
                        <p className="text-gray-500 text-[1.2rem] mt-4">Turning your travel dreams into detailed plans with the power of {viewMode} AI.</p>
                        {/* <Heading heading={"Your AI Travel Command Center"} subHeading={"Turning your travel dreams into detailed plans with the power of artificial intelligence."} /> */}
                    </div>
                </header>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    {/* total history card */}
                    <div
                        onClick={handleViewAll}
                        className={`p-6 rounded-3xl shadow-sm border cursor-pointer transition-all hover:scale-105 ${viewMode === 'all' ? 'border-[#066168] bg-white ring-2 ring-[#066168]/10' : 'bg-white border-gray-100'}`}
                    >
                        <h3 className="text-gray-400 font-bold text-xs uppercase mb-2">Total History</h3>
                        <p className="text-4xl font-bold text-[#066168]">{stats.total}</p>
                        <p className="text-xs text-[#066168] mt-2 font-bold">View All →</p>
                    </div>

                    {/* Favorites Card */}
                    <div
                        onClick={handleViewFavorites}
                        className={`p-6 rounded-3xl shadow-sm border cursor-pointer transition-all hover:scale-105 ${viewMode === 'favorites' ? 'border-red-500 bg-white ring-2 ring-red-500/10' : 'bg-white border-gray-100'}`}
                    >
                        <h3 className="text-gray-400 font-bold text-xs uppercase mb-2">Favorites</h3>
                        <p className="text-4xl font-bold text-red-500">{stats.favorites}</p>
                        <p className="text-xs text-red-500 mt-2 font-bold">Filter Favorites →</p>
                    </div>

                    <div className="bg-[#066168] p-6 rounded-3xl shadow-xl transition-all hover:-translate-y-1">
                        <h3 className="text-white/60 font-bold text-xs uppercase mb-2">Plan New</h3>
                        <Link to="/aiPlanner" className="text-white font-bold text-xl hover:underline">Create Trip +</Link>
                    </div>
                </div>
                {/*list section */}
                <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-xl font-bold text-[#346065]">
                            {viewMode === "all" ? "Recent Activity" : "Your Favorite Trips"}
                        </h3>
                        {viewMode !== "all" && (
                            <button onClick={handleViewAll} className="text-sm text-[#066168] underline">Show All</button>
                        )}
                    </div>

                    {loading ? (
                        <div className="text-center py-10 animate-pulse text-gray-400">Loading your journeys...</div>
                    ) : trips.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {trips.map(trip => (
                                <div
                                    key={trip._id}
                                    onClick={() => navigate('/itinerary', { state: { data: trip } })}
                                    className="p-5 border rounded-2xl hover:border-orange-500 hover:shadow-md cursor-pointer flex justify-between items-center transition-all bg-gray-50/50"
                                >
                                    <div>
                                        <p className="font-bold text-[#066168] text-lg">{trip.destination}</p>
                                        <p className="text-xs text-gray-500">{trip.days} Days • {trip.budgetType} Budget</p>
                                        <p className="text-[10px] text-gray-400 mt-1">{new Date(trip.createdAt).toDateString()}</p>
                                    </div>
                                    <span className="text-2xl">{trip.isFavorite ? '❤️' : '📄'}</span>
                                    <button
                                        onClick={(e) => handleDelete(e, trip._id)}
                                        className="ml-2 p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-all font-bold text-xs"
                                    >
                                        DELETE 🗑️
                                    </button>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-10">
                            <p className="text-gray-400">No {viewMode === "favorites" ? "favorites" : "trips"} found.</p>
                            <Link className="mt-4 inline-block text-orange-500 font-bold" to="/aiPlanner">Plan a trip now →</Link>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default Dashboard;